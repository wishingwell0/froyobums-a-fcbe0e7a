// @ts-nocheck
// Pass generation helpers for the Froyo Buns loyalty Apple Wallet pass.
//
// An Apple Wallet pass is a signed .pkpass ZIP containing:
//   pass.json        — the pass definition
//   manifest.json    — SHA1 hashes of every file in the bundle
//   pass.signature   — detached PKCS#7 signature of manifest.json
//   logo.png / icon.png — required images
//
// Signing requires an Apple Developer "Pass Type ID" certificate + private key
// (exported as a .p12) and the Apple WWDR intermediate certificate. These are
// read from environment secrets at request time, inside the handler.
//
// Until those secrets are provided, pass building throws a typed, structured
// error so the loyalty page can show setup guidance instead of silently
// failing. atob is available in both Node (>=16) and edge workers and is typed
// via @types/node, so we avoid Buffer for cross-runtime safety.

import forge from "node-forge";
import { zipSync } from "fflate";

export type PassBuildError = {
  __passError: true;
  reason: "missing_credentials" | "missing_member";
  message: string;
};

export type PassRequest = {
  firstName: string;
  lastName: string;
  memberNumber: string;
  email: string;
  points: number;
  visitsUntilReward: number;
};

const ENC = new TextEncoder();

/** Decode a base64 string to bytes (cross-runtime, no Buffer). */
function base64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

/** SHA-1 hex digest of bytes, via forge (pure JS, no Buffer). */
function sha1Hex(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  const md = forge.md.sha1.create();
  md.update(bin);
  return md.digest().toHex();
}

/** Minimal valid Apple Wallet pass.json for a store-card / loyalty pass. */
function buildPassJson(req: PassRequest): string {
  const fullName = `${req.firstName} ${req.lastName}`.trim();
  return JSON.stringify({
    formatVersion: 1,
    passTypeIdentifier: process.env.PASS_TYPE_ID || "pass.com.froyobums.loyalty",
    teamIdentifier: process.env.PASS_TEAM_ID || "FROYOBUMS",
    organizationName: "Froyo Buns",
    description: "Froyo Buns Loyalty",
    serialNumber: req.memberNumber,
    backgroundColor: "rgb(249,238,234)",
    foregroundColor: "rgb(21,21,28)",
    labelColor: "rgb(246,34,141)",
    logoText: "Froyo Buns",
    relevantText: `${req.points} pts · ${req.visitsUntilReward} visits to a free cup`,
    locations: [
      {
        longitude: -118.4081,
        latitude: 34.0901,
        relevantText: "You're near Froyo Buns — come grab a swirl!",
      },
    ],
    barcode: {
      message: `FROYOBUMS:${req.memberNumber}:${req.email}`,
      format: "PKBarcodeFormatQR",
      messageEncoding: "iso-8859-1",
      altText: req.memberNumber,
    },
    storeCard: {
      primaryFields: [{ key: "points", label: "Points Balance", value: String(req.points) }],
      secondaryFields: [
        { key: "member", label: "Member", value: fullName },
        {
          key: "tofree",
          label: "Visits to free cup",
          value: String(req.visitsUntilReward),
        },
      ],
      backFields: [
        {
          key: "terms",
          label: "How rewards work",
          value:
            "Earn 1 point for every visit. Collect 10 points to redeem a free Classic cup. Points never expire. Show this pass at the register to earn and redeem.",
        },
        {
          key: "support",
          label: "Questions?",
          value: "Email hello@froyobums.com or call (555) 022-7846.",
        },
      ],
    },
  });
}

/** A small valid transparent PNG used as the required logo/icon image. */
function placeholderPng(): Uint8Array {
  return base64ToBytes(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  );
}

/**
 * Create a detached PKCS#7 signature of the manifest using the Apple Pass
 * certificate chain. Returns DER bytes ready for pass.signature. Throws a
 * PassBuildError when credentials are not configured.
 */
function signManifest(manifestJson: string): Uint8Array {
  const p12B64 = process.env.PASS_CERT_P12;
  const p12Pass = process.env.PASS_CERT_PASSWORD || "";
  const wwdrPem = process.env.PASS_WWDR_CERT_PEM;

  if (!p12B64 || !wwdrPem) {
    throw { __passError: true, reason: "missing_credentials" } as PassBuildError;
  }

  // Load the Pass Type ID certificate + private key from the .p12.
  const p12Asn1 = forge.asn1.fromDer(forge.util.decode64(p12B64));
  const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, p12Pass);

  let cert: forge.pki.Certificate | undefined;
  let key: forge.pki.rsa.PrivateKey | undefined;
  for (const safeContents of p12.safeContents) {
    for (const bag of safeContents) {
      if (
        bag.type === forge.pki.oids.certBag &&
        (bag as { certificates?: unknown[] }).certificates?.[0]
      ) {
        cert = (bag as { certificates: forge.pki.Certificate[] }).certificates[0];
      }
      if (bag.type === forge.pki.oids.pkcs8ShroudedKeyBag && bag.asn1) {
        key = forge.pki.privateKeyFromAsn1(bag.asn1);
      }
    }
  }
  if (!cert || !key) {
    throw { __passError: true, reason: "missing_credentials" } as PassBuildError;
  }

  const wwdr = forge.pki.certificateFromPem(wwdrPem);

  // Build PKCS#7 SignedData, detached, over the manifest bytes.
  const p7 = forge.pkcs7.createSignedData();
  p7.content = forge.util.createBuffer(manifestJson, "utf8");
  p7.addCertificate(cert);
  p7.addCertificate(wwdr);
  p7.addSigner({
    certificate: cert,
    key,
    digestAlgorithm: forge.pki.oids.sha1,
    authenticatedAttributes: [
      { type: forge.pki.oids.contentType, value: forge.pki.oids.data },
      { type: forge.pki.oids.messageDigest },
      { type: forge.pki.oids.signingTime, value: new Date() },
    ],
  });
  p7.sign({ detached: true });

  const der = forge.asn1.toDer(p7.toAsn1()).getBytes();
  return ENC.encode(der);
}

/** Build the full .pkpass bundle as a ZIP Uint8Array, or throw PassBuildError. */
export function buildPkpass(req: PassRequest): Uint8Array {
  if (!req.memberNumber || !req.email) {
    throw {
      __passError: true,
      reason: "missing_member",
      message: "A member number and email are required to build a pass.",
    } as PassBuildError;
  }

  const logo = placeholderPng();
  const icon = placeholderPng();
  const passJson = buildPassJson(req);

  const files: Record<string, Uint8Array> = {
    "pass.json": ENC.encode(passJson),
    "logo.png": logo,
    "icon.png": icon,
  };

  const manifest: Record<string, string> = {};
  for (const [name, bytes] of Object.entries(files)) {
    manifest[name] = sha1Hex(bytes);
  }
  const manifestJson = JSON.stringify(manifest);
  files["manifest.json"] = ENC.encode(manifestJson);

  // signManifest throws PassBuildError on missing credentials.
  const signature = signManifest(manifestJson);
  files["pass.signature"] = signature;

  return zipSync(files, { level: 9 });
}

export function isPassBuildError(v: unknown): v is PassBuildError {
  return (
    typeof v === "object" && v !== null && (v as { __passError?: boolean }).__passError === true
  );
}

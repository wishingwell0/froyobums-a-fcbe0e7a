// Apple Wallet pass server route.
//
// POST /api/pass  { firstName, lastName, email, memberNumber, points, stamps? }
//   → 200  application/vnd.apple.pkpass   (signed .pkpass bundle, binary)
//   → 503  application/json               (cert-gated: signing creds not configured)
//   → 400/500 application/json            (invalid input / build failure)
//
// The edge-safe pass signer (node-forge PKCS#7 + fflate ZIP) is dynamically
// imported inside the handler so it stays server-only and lazy. passkit-generator
// was avoided because it reads its pass "model" from the filesystem (fs.readdir),
// which is unavailable in the Cloudflare Worker edge runtime and would break the
// build. Apple Developer pass credentials are read from process.env at call time.

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const inputSchema = z.object({
  firstName: z.string().min(1).max(60),
  lastName: z.string().min(1).max(60),
  email: z.string().email().max(120),
  memberNumber: z
    .string()
    .min(4)
    .max(24)
    .regex(/^[A-Z0-9-]+$/, "Invalid member number"),
  points: z.number().int().min(0).max(999999),
  stamps: z.number().int().min(0).max(99).optional().default(0),
  visitsUntilReward: z.number().int().min(0).max(99).optional(),
});

export const Route = createFileRoute("/api/pass")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let data;
        try {
          data = inputSchema.parse(await request.json());
        } catch {
          return Response.json(
            { ok: false, message: "Invalid pass request input." },
            { status: 400 },
          );
        }

        const stamps = data.stamps ?? 0;
        const visitsUntilReward = data.visitsUntilReward ?? Math.max(0, 10 - stamps);

        try {
          const { buildPkpass, isPassBuildError } = await import("../../lib/pass.server");
          const bytes = buildPkpass({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            memberNumber: data.memberNumber,
            points: data.points,
            visitsUntilReward,
          });
          const responseBytes = new Uint8Array(bytes);
          return new Response(responseBytes, {
            status: 200,
            headers: {
              "Content-Type": "application/vnd.apple.pkpass",
              "Content-Disposition": 'attachment; filename="froyo-bums-loyalty.pkpass"',
              "Cache-Control": "no-store",
            },
          });
        } catch (err: unknown) {
          if (err && typeof err === "object" && "__passError" in err) {
            const passErr = err as unknown as { reason: string; message: string };
            return Response.json(
              { ok: false, reason: passErr.reason, message: passErr.message },
              { status: 503 },
            );
          }
          console.error("pkpass route failed", err);
          return Response.json(
            { ok: false, message: "Pass generation failed. Please try again later." },
            { status: 500 },
          );
        }
      },
    },
  },
});

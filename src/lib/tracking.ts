// Canonical CRM tracking helper for Froyo Buns lead/marketing forms.
// IDs come from the resolved form-tracking integration + registered custom fields.

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const TRACKING_ID = "tk_b1fd1386cac44188af61e1dc1e5bb3fd";
const LOCATION_ID = "twp6nyqYXqMjriSQ7hzj";
const PROJECT_ID = "1790640811168876865";
const ENDPOINT = "https://backend.leadconnectorhq.com/external-tracking/events";

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch(ENDPOINT, {
    method: "POST",
    headers: { version: "2021-07-28" },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

export type TrackingResult = { ok: true; submittedAt: number };

/**
 * Submit a contact form lead to the CRM.
 * Standard fields only: first_name, last_name, email, calendar_notes.
 */
export function trackContactSubmission(input: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  inquiryType: string;
}): TrackingResult {
  const trackingPayload = {
    type: "external form_submission",
    timestamp: Date.now(),
    formId: "froyo-bums-contact",
    formData: {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      calendar_notes: input.message,
    },
    formLabels: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      calendar_notes: "Message",
    },
    url: typeof window !== "undefined" ? window.location.href : "",
    title: typeof document !== "undefined" ? document.title : "",
    path: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "server",
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    projectId: PROJECT_ID,
    sessionId:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2),
    properties: {
      deviceType:
        typeof navigator !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
      source: "ai_studio",
      projectId: PROJECT_ID,
      formName: "Contact Form",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: {
      CvrZItcS9njzHICZq4e2: { value: input.inquiryType, label: "Inquiry Type" },
    },
  });

  return { ok: true, submittedAt: Date.now() };
}

/**
 * Submit a loyalty club signup to the CRM.
 * Standard fields: first_name, last_name, email, phone, date_of_birth.
 * Custom: favorite flavor, loyalty member number.
 */
export function trackLoyaltySubmission(input: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  favoriteFlavor: string;
  memberNumber: string;
}): TrackingResult {
  const trackingPayload = {
    type: "external form_submission",
    timestamp: Date.now(),
    formId: "froyo-bums-loyalty-signup",
    formData: {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      phone: input.phone,
      date_of_birth: input.birthday,
    },
    formLabels: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone: "Phone",
      date_of_birth: "Birthday",
    },
    url: typeof window !== "undefined" ? window.location.href : "",
    title: typeof document !== "undefined" ? document.title : "",
    path: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "server",
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    projectId: PROJECT_ID,
    sessionId:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2),
    properties: {
      deviceType:
        typeof navigator !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
      source: "ai_studio",
      projectId: PROJECT_ID,
      formName: "Loyalty Club Signup",
    },
  };

  postTrackingEvent(trackingPayload, {
    customFields: {
      tbFARkPPXzFaYS2yYn8m: {
        value: input.favoriteFlavor,
        label: "Favourite Flavour",
      },
      cNtNOpmAKvWIodWcTSgf: {
        value: input.memberNumber,
        label: "Loyalty Member Number",
      },
    },
  });

  return { ok: true, submittedAt: Date.now() };
}

// Custom field IDs (for reference; used above)
// Inquiry Type:        CvrZItcS9njzHICZq4e2
// Favorite Flavor:      tbFARkPPXzFaYS2yYn8m
// Loyalty Member Number: cNtNOpmAKvWIodWcTSgf

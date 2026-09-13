"use server";

import {
  validateEnquiry,
  type EnquiryField,
  type EnquiryState,
} from "@/lib/enquiry";

const FIELDS: EnquiryField[] = [
  "name",
  "email",
  "phone",
  "company",
  "location",
  "eventType",
  "message",
];

/**
 * Handles a home-page enquiry.
 *
 * Validation runs here rather than only in the browser so the form still works
 * when the client bundle has not loaded. Where the enquiry goes afterwards is
 * deployment config: set TOPAZ_ENQUIRY_WEBHOOK to the CRM or email endpoint
 * that should receive it. Without it the enquiry is logged and the sender is
 * told to reach us directly, instead of being shown a success screen for a
 * message that went nowhere.
 */
export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = Object.fromEntries(
    FIELDS.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  ) as Record<EnquiryField, string>;

  const errors = validateEnquiry(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const endpoint = process.env.TOPAZ_ENQUIRY_WEBHOOK;
  if (!endpoint) {
    console.warn("[enquiry] TOPAZ_ENQUIRY_WEBHOOK is not set", values);
    return {
      status: "error",
      message:
        "We could not send that from here. Please email marketing@topazevent.net or WhatsApp us and we will pick it up right away.",
      errors: {},
      values,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, source: "home-page" }),
    });
    if (!response.ok) throw new Error(`Endpoint returned ${response.status}`);
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return {
      status: "error",
      message:
        "Something broke on our side. Please try again, or WhatsApp us and we will take the brief there.",
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message: "Thank you — your brief is with our team.",
    errors: {},
  };
}

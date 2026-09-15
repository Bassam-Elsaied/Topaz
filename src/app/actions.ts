"use server";

import { Resend } from "resend";
import { CONTACT, OTHER_EVENT_TYPE } from "@/data/company";
import {
  enquiryHtml,
  enquirySubject,
  enquiryText,
} from "@/lib/enquiry-email";
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
  "eventTypeOther",
  "message",
];

/**
 * Handles an enquiry from the form, wherever on the site it was submitted.
 *
 * Validation runs here rather than only in the browser so the form still works
 * when the client bundle has not loaded. Delivery is Resend: set RESEND_API_KEY,
 * and optionally RESEND_FROM / RESEND_TO once the sending domain is verified.
 * Without a key the enquiry is logged and the sender is told to reach us
 * directly, instead of being shown a success screen for a message that went
 * nowhere.
 */
export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values = Object.fromEntries(
    FIELDS.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  ) as Record<EnquiryField, string>;

  // The detail field stays in the DOM when another chip is picked, so whatever
  // was typed into it before would otherwise ride along as stale context.
  if (values.eventType !== OTHER_EVENT_TYPE) values.eventTypeOther = "";

  const errors = validateEnquiry(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[enquiry] RESEND_API_KEY is not set", values);
    return {
      status: "error",
      message:
        "We could not send that from here. Please email Info@topazuae.com or WhatsApp us and we will pick it up right away.",
      errors: {},
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Topaz Events <beth.t@example.com>",
      to: process.env.RESEND_TO ?? CONTACT.email,
      replyTo: values.email,
      subject: enquirySubject(values),
      text: enquiryText(values),
      html: enquiryHtml(values),
    });
    if (error) throw new Error(error.message);
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

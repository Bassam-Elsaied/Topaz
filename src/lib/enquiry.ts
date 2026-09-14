/**
 * Shared shape for the enquiry form. Kept out of the `"use server"` module
 * because every export of one of those has to be an async function.
 */
export type EnquiryField =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "location"
  | "eventType"
  /** Free text behind the "Something else" option. */
  | "eventTypeOther"
  | "message";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<EnquiryField, string>>;
  /**
   * Echoed back on a failed submit. React resets an uncontrolled form once its
   * action settles, so the fields need their previous contents handed back as
   * defaults or the sender loses the brief they just typed.
   */
  values?: Partial<Record<EnquiryField, string>>;
};

export const EMPTY_ENQUIRY: EnquiryState = {
  status: "idle",
  message: "",
  errors: {},
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Digits, spaces and the usual separators; 7+ digits once stripped. */
const PHONE = /^[+()\d\s-]{7,}$/;

export function validateEnquiry(values: Record<EnquiryField, string>) {
  const errors: EnquiryState["errors"] = {};

  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL.test(values.email)) errors.email = "Enter a valid email address.";
  if (!PHONE.test(values.phone) || values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone number we can reach you on.";
  }
  if (values.message.length > 4000) {
    errors.message = "Please keep the brief under 4000 characters.";
  }

  return errors;
}

import { OTHER_EVENT_TYPE } from "@/data/company";
import type { EnquiryField } from "@/lib/enquiry";

/** Event type as it should appear in the inbox — the free-text detail when they picked "Something else". */
function eventLabel(values: Record<EnquiryField, string>) {
  if (values.eventType === OTHER_EVENT_TYPE && values.eventTypeOther) {
    return `${values.eventType} — ${values.eventTypeOther}`;
  }
  return values.eventType || "Not specified";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function enquirySubject(values: Record<EnquiryField, string>) {
  const kind = eventLabel(values);
  return values.eventType
    ? `New enquiry from ${values.name} · ${kind}`
    : `New enquiry from ${values.name}`;
}

export function enquiryText(values: Record<EnquiryField, string>) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Company: ${values.company || "—"}`,
    `Location: ${values.location || "—"}`,
    `Event type: ${eventLabel(values)}`,
    "",
    values.message || "(no brief)",
  ].join("\n");
}

const ROWS: { key: EnquiryField | "event"; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "company", label: "Company" },
  { key: "location", label: "Location" },
  { key: "event", label: "Event type" },
];

export function enquiryHtml(values: Record<EnquiryField, string>) {
  const cells = ROWS.map(({ key, label }) => {
    const raw = key === "event" ? eventLabel(values) : values[key] || "—";
    return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #2a2a2a;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#e0c26e;width:140px;vertical-align:top;">
          ${label}
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #2a2a2a;font-family:Georgia,serif;font-size:15px;color:#f5f0e6;vertical-align:top;">
          ${escapeHtml(raw)}
        </td>
      </tr>`;
  }).join("");

  const brief = values.message
    ? escapeHtml(values.message).replaceAll("\n", "<br />")
    : "—";

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#070707;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#070707;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#191919;border:1px solid #2a2a2a;">
            <tr>
              <td style="padding:28px 32px 20px;border-bottom:1px solid #e0c26e;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#e0c26e;">
                  Topaz Events
                </p>
                <h1 style="margin:10px 0 0;font-family:Georgia,serif;font-size:24px;font-weight:700;line-height:1.15;color:#ffffff;">
                  New event enquiry
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 12px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${cells}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 32px;">
                <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#e0c26e;">
                  Brief
                </p>
                <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#f5f0e6;">
                  ${brief}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

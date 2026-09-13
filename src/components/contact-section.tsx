"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { submitEnquiry } from "@/app/actions";
import { CONTACT, EVENT_TYPES, OFFICES } from "@/data/company";
import { EMPTY_ENQUIRY, type EnquiryField } from "@/lib/enquiry";

const FIELD =
  "w-full rounded-xs border bg-bg/70 px-4 py-3.5 font-sans text-[14px] text-text outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-gold/60";
const LABEL =
  "mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted";

export function ContactSection() {
  const [state, action, pending] = useActionState(
    submitEnquiry,
    EMPTY_ENQUIRY,
  );
  const formId = useId();

  // React resets the form as soon as its action settles, and a native reset
  // writes straight to the DOM behind React's back — so neither the echoed
  // defaults nor a controlled value would survive on their own. Remounting the
  // form for each result is what makes the values below stick.
  const [attempt, setAttempt] = useState(0);
  const settled = useRef(state);
  useEffect(() => {
    if (settled.current === state) return;
    settled.current = state;
    setAttempt((count) => count + 1);
  }, [state]);

  const fieldId = (name: EnquiryField) => `${formId}-${name}`;
  const errorFor = (name: EnquiryField) => state.errors[name];
  const valueFor = (name: EnquiryField) => state.values?.[name] ?? "";
  const borderFor = (name: EnquiryField) =>
    errorFor(name) ? "border-red-400/70" : "border-white/12";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-125 w-125"
        style={{
          background:
            "radial-gradient(circle at center, rgba(224,194,110,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-(--container-max) grid-cols-1 gap-14 px-6 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <SectionLabel>Start a conversation</SectionLabel>
          <h2
            id="contact-heading"
            className="reveal mt-6 max-w-[18ch] font-display text-[clamp(30px,4.2vw,54px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Tell us about
            <span className="block text-gold">your event</span>
          </h2>
          <p
            className="reveal mt-6 max-w-[44ch] font-sans text-[15px] leading-[1.75] text-text-muted"
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            Share the date, the venue and roughly how many guests. You will get
            a proposal built around your brief — not a template.
          </p>

          <div
            className="reveal mt-10 space-y-6"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className={LABEL}>Call or WhatsApp</p>
                <Link
                  href={CONTACT.phoneHref}
                  className="font-display text-[19px] font-bold text-gold transition-colors duration-300 hover:text-gold-deep"
                >
                  {CONTACT.phone}
                </Link>
              </div>
              <div>
                <p className={LABEL}>Email</p>
                <Link
                  href={CONTACT.emailHref}
                  className="font-sans text-[15px] text-text transition-colors duration-300 hover:text-gold"
                >
                  {CONTACT.email}
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className={LABEL}>Our offices</p>
              <ul className="mt-3 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {OFFICES.map((office) => (
                  <li key={office.city}>
                    <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.06em]">
                      <span
                        aria-hidden="true"
                        className="size-1 rotate-45 bg-gold"
                      />
                      {office.city}
                    </p>
                    <p className="mt-1.5 font-sans text-[13px] leading-[1.6] text-text-muted">
                      {office.lines.join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="reveal relative overflow-hidden rounded-lg border border-white/10 bg-surface/70 p-6 backdrop-blur-sm md:p-9">
            {state.status === "success" ? (
              <div
                role="status"
                className="flex min-h-100 flex-col items-start justify-center"
              >
                <span
                  aria-hidden="true"
                  className="mb-6 block size-3 rotate-45 bg-gold"
                />
                <h3 className="font-display text-[26px] font-bold uppercase leading-[1.05] md:text-[32px]">
                  Brief received
                </h3>
                <p className="mt-4 max-w-[38ch] font-sans text-[15px] leading-[1.75] text-text-muted">
                  {state.message} We usually come back within one working day —
                  sooner if your date is close.
                </p>
                <Link
                  href="/portfolio"
                  className="mt-8 inline-flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.06em] text-gold"
                >
                  See what we have delivered
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ) : (
              <form
                key={attempt}
                action={action}
                className="grid grid-cols-1 gap-5"
              >
                <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-text-accent">
                  Event enquiry
                </h3>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={LABEL} htmlFor={fieldId("name")}>
                      Name *
                    </label>
                    <input
                      id={fieldId("name")}
                      name="name"
                      required
                      defaultValue={valueFor("name")}
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={Boolean(errorFor("name"))}
                      aria-describedby={
                        errorFor("name") ? `${fieldId("name")}-error` : undefined
                      }
                      className={`${FIELD} ${borderFor("name")}`}
                    />
                    {errorFor("name") && (
                      <p
                        id={`${fieldId("name")}-error`}
                        className="mt-1.5 font-sans text-[12px] text-red-300"
                      >
                        {errorFor("name")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={LABEL} htmlFor={fieldId("email")}>
                      Email *
                    </label>
                    <input
                      id={fieldId("email")}
                      name="email"
                      type="email"
                      required
                      defaultValue={valueFor("email")}
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errorFor("email"))}
                      aria-describedby={
                        errorFor("email")
                          ? `${fieldId("email")}-error`
                          : undefined
                      }
                      className={`${FIELD} ${borderFor("email")}`}
                    />
                    {errorFor("email") && (
                      <p
                        id={`${fieldId("email")}-error`}
                        className="mt-1.5 font-sans text-[12px] text-red-300"
                      >
                        {errorFor("email")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={LABEL} htmlFor={fieldId("phone")}>
                      Phone *
                    </label>
                    <input
                      id={fieldId("phone")}
                      name="phone"
                      type="tel"
                      required
                      defaultValue={valueFor("phone")}
                      autoComplete="tel"
                      placeholder="+971 50 000 0000"
                      aria-invalid={Boolean(errorFor("phone"))}
                      aria-describedby={
                        errorFor("phone")
                          ? `${fieldId("phone")}-error`
                          : undefined
                      }
                      className={`${FIELD} ${borderFor("phone")}`}
                    />
                    {errorFor("phone") && (
                      <p
                        id={`${fieldId("phone")}-error`}
                        className="mt-1.5 font-sans text-[12px] text-red-300"
                      >
                        {errorFor("phone")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={LABEL} htmlFor={fieldId("company")}>
                      Company
                    </label>
                    <input
                      id={fieldId("company")}
                      name="company"
                      defaultValue={valueFor("company")}
                      autoComplete="organization"
                      placeholder="Organisation"
                      className={`${FIELD} border-white/12`}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor={fieldId("location")}>
                      Location
                    </label>
                    <input
                      id={fieldId("location")}
                      name="location"
                      defaultValue={valueFor("location")}
                      placeholder="Dubai, Sharjah, Abu Dhabi…"
                      className={`${FIELD} border-white/12`}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor={fieldId("eventType")}>
                      Event type
                    </label>
                    <div className="relative">
                      <select
                        id={fieldId("eventType")}
                        name="eventType"
                        defaultValue={valueFor("eventType")}
                        className={`${FIELD} appearance-none border-white/12 pr-10`}
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        {EVENT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-gold"
                      >
                        ▾
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor={fieldId("message")}>
                    Your brief
                  </label>
                  <textarea
                    id={fieldId("message")}
                    name="message"
                    rows={4}
                    defaultValue={valueFor("message")}
                    placeholder="Event date, venue, guest numbers, what you need from us…"
                    className={`${FIELD} resize-y border-white/12`}
                  />
                </div>

                {state.status === "error" && state.message && (
                  <p
                    role="alert"
                    className="rounded-xs border border-red-400/30 bg-red-400/8 px-4 py-3 font-sans text-[13px] leading-[1.6] text-red-200"
                  >
                    {state.message}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button
                    type="submit"
                    disabled={pending}
                    className="cursor-pointer rounded-xs bg-gold px-8 py-4 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep disabled:cursor-wait disabled:opacity-60"
                  >
                    {pending ? "Sending…" : "Submit request"}
                  </button>
                  <p className="font-sans text-[12px] leading-[1.6] text-text-muted">
                    Or WhatsApp us on{" "}
                    <Link
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gold underline-offset-4 hover:underline"
                    >
                      {CONTACT.phone}
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

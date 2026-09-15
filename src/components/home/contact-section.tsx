"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { submitEnquiry } from "@/app/actions";
import {
  CONTACT,
  EVENT_TYPES,
  OFFICES,
  OTHER_EVENT_TYPE,
} from "@/data/company";
import {
  EMPTY_ENQUIRY,
  validateEnquiry,
  type EnquiryField,
} from "@/lib/enquiry";

const FIELD =
  "w-full rounded-xs border bg-bg/70 px-4 py-3.5 font-sans text-[14px] text-text outline-none transition-colors duration-300 placeholder:text-white/30 focus:border-gold/60";
const LABEL =
  "mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted";

const ALL_FIELDS: EnquiryField[] = [
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
 * The brief is asked for in three passes rather than one long column. The first
 * step costs a single tap, which is what gets a sender started; the fields that
 * actually have to be right come second; the writing comes last.
 */
const STEPS = [
  {
    key: "event",
    label: "Event",
    title: "What are we planning?",
    hint: "Pick the closest match — we will refine it with you.",
    fields: [
      "eventType",
      "eventTypeOther",
      "location",
      "company",
    ] as EnquiryField[],
  },
  {
    key: "details",
    label: "Details",
    title: "Where do we reply?",
    hint: "Used to send your proposal, nothing else.",
    fields: ["name", "email", "phone"] as EnquiryField[],
  },
  {
    key: "brief",
    label: "Brief",
    title: "Anything else we should know?",
    hint: "Optional — a date and a guest count is plenty to start.",
    fields: ["message"] as EnquiryField[],
  },
];

/** Which step owns each field, so a server error can pull the sender back to it. */
const STEP_OF: Record<EnquiryField, number> = {
  eventType: 0,
  eventTypeOther: 0,
  location: 0,
  company: 0,
  name: 1,
  email: 1,
  phone: 1,
  message: 2,
};

const ASSURANCES = [
  "Costed proposal back within one working day",
  "Your brief stays confidential — NDA on request",
  "No obligation, and no sales calls you did not ask for",
];

const MESSAGE_LIMIT = 4000;

export function ContactSection() {
  const [state, action, pending] = useActionState(submitEnquiry, EMPTY_ENQUIRY);
  const formId = useId();

  // React resets the form as soon as its action settles, and a native reset
  // writes straight to the DOM behind React's back — so neither the echoed
  // defaults nor a controlled value would survive on their own. Remounting the
  // form for each result is what makes the values below stick.
  const [attempt, setAttempt] = useState(0);
  const settled = useRef(state);

  const [step, setStep] = useState(0);
  // Client-side copies of the same rules the action runs, so a sender is told
  // about a bad email before the round trip rather than after it.
  const [localErrors, setLocalErrors] = useState<
    Partial<Record<EnquiryField, string>>
  >({});
  const [count, setCount] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (settled.current === state) return;
    settled.current = state;
    setAttempt((n) => n + 1);
    setLocalErrors({});
    // The form remounts with the echoed brief, so the counter has to follow it
    // rather than sit at zero until the next keystroke.
    setCount((state.values?.message ?? "").length);

    // The action validates everything at once, so an error may belong to a step
    // the sender has already left. Take them back to the earliest one.
    if (state.status === "error") {
      const errored = Object.keys(state.errors) as EnquiryField[];
      if (errored.length > 0) {
        setStep(Math.min(...errored.map((field) => STEP_OF[field])));
      }
    }
  }, [state]);

  const fieldId = (name: EnquiryField) => `${formId}-${name}`;
  const errorFor = (name: EnquiryField) =>
    localErrors[name] ?? state.errors[name];
  const valueFor = (name: EnquiryField) => state.values?.[name] ?? "";
  const borderFor = (name: EnquiryField) =>
    errorFor(name) ? "border-red-400/70" : "border-white/12";

  const readValues = () => {
    const data = new FormData(formRef.current ?? undefined);
    return Object.fromEntries(
      ALL_FIELDS.map((field) => [field, String(data.get(field) ?? "").trim()]),
    ) as Record<EnquiryField, string>;
  };

  const goNext = () => {
    const found = validateEnquiry(readValues());
    const blocking = STEPS[step].fields.filter((field) => found[field]);

    if (blocking.length > 0) {
      setLocalErrors(
        Object.fromEntries(blocking.map((field) => [field, found[field]])),
      );
      document.getElementById(fieldId(blocking[0]))?.focus();
      return;
    }

    setLocalErrors({});
    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setLocalErrors({});
    setStep((current) => Math.max(current - 1, 0));
  };

  // Cursor-lit card. Purely decorative, so it only ever writes CSS variables.
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  const last = step === STEPS.length - 1;
  const progress = ((step + 1) / STEPS.length) * 100;

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
            Three short steps, about a minute. You will get a proposal built
            around your brief — not a template.
          </p>

          <ul
            className="reveal mt-8 space-y-3.5"
            style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
          >
            {ASSURANCES.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 font-sans text-[14px] leading-[1.7] text-text-accent"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold"
                />
                {line}
              </li>
            ))}
          </ul>

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
          {/* Gold hairline frame: one gradient pixel around the card, so it
              reads as a lit panel rather than another bordered box. */}
          <div
            className="reveal rounded-xl bg-linear-to-br from-gold/35 via-white/10 to-transparent p-px"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div
              ref={cardRef}
              onPointerMove={onPointerMove}
              className="group relative overflow-hidden rounded-[calc(0.75rem-1px)] bg-surface/80 p-6 backdrop-blur-sm md:p-9"
            >
              {/* Follows the cursor across the card. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 0px), rgba(224,194,110,0.10), transparent 70%)",
                }}
              />

              {state.status === "success" ? (
                <div
                  role="status"
                  className="relative flex min-h-100 flex-col items-start justify-center"
                >
                  <span
                    aria-hidden="true"
                    className="mb-6 block size-3 rotate-45 bg-gold"
                  />
                  <h3 className="font-display text-[26px] font-bold uppercase leading-[1.05] md:text-[32px]">
                    Brief received
                  </h3>
                  <p className="mt-4 max-w-[38ch] font-sans text-[15px] leading-[1.75] text-text-muted">
                    {state.message} We usually come back within one working day
                    — sooner if your date is close.
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
                  ref={formRef}
                  action={action}
                  className="relative grid grid-cols-1 gap-6"
                >
                  {/* Step rail */}
                  <div data-step-nav>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-text-accent">
                        Event enquiry
                      </h3>
                      <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-gold tabular-nums">
                        Step {step + 1} / {STEPS.length}
                      </p>
                    </div>

                    <div
                      className="mt-4 h-px w-full bg-white/12"
                      role="presentation"
                    >
                      <div
                        className="h-px bg-gold transition-[width] duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <ol className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {STEPS.map((entry, index) => {
                        const done = index < step;
                        const current = index === step;
                        return (
                          <li key={entry.key}>
                            <button
                              type="button"
                              // Only steps already cleared are navigable; jumping
                              // forward would skip the validation gate.
                              disabled={index > step}
                              onClick={() => {
                                setLocalErrors({});
                                setStep(index);
                              }}
                              aria-current={current ? "step" : undefined}
                              className={`flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                                current
                                  ? "text-gold"
                                  : done
                                    ? "cursor-pointer text-text-muted hover:text-text"
                                    : "text-white/25"
                              }`}
                            >
                              <span
                                aria-hidden="true"
                                className={`size-1.5 rotate-45 ${
                                  current || done ? "bg-gold" : "bg-white/25"
                                }`}
                              />
                              {entry.label}
                            </button>
                          </li>
                        );
                      })}
                    </ol>
                  </div>

                  {/* Step 1 — the event */}
                  <div data-step-panel data-active={step === 0} className="grid gap-5">
                    <StepHead
                      title={STEPS[0].title}
                      hint={STEPS[0].hint}
                    />

                    <fieldset data-event-types>
                      <legend className={LABEL}>Event type</legend>
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                        {EVENT_TYPES.map((type) => (
                          <label
                            key={type}
                            className="group/chip relative flex cursor-pointer items-center gap-2 rounded-xs border border-white/12 bg-bg/60 px-3 py-3 font-sans text-[12.5px] leading-[1.3] text-text-muted transition-colors duration-300 hover:border-gold/40 hover:text-text has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-gold has-[:focus-visible]:border-gold"
                          >
                            <input
                              type="radio"
                              name="eventType"
                              value={type}
                              defaultChecked={valueFor("eventType") === type}
                              data-other-option={
                                type === OTHER_EVENT_TYPE || undefined
                              }
                              className="sr-only"
                            />
                            <span
                              aria-hidden="true"
                              className="size-1 shrink-0 rotate-45 bg-white/25 transition-colors duration-300 group-has-[:checked]/chip:bg-gold"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Sibling of the chips, revealed by CSS when the catch-all
                        chip is the one checked. */}
                    <div data-other-detail>
                      <label
                        className={LABEL}
                        htmlFor={fieldId("eventTypeOther")}
                      >
                        Tell us what you have in mind
                      </label>
                      <input
                        id={fieldId("eventTypeOther")}
                        name="eventTypeOther"
                        defaultValue={valueFor("eventTypeOther")}
                        placeholder="Product reveal, roadshow, private celebration…"
                        className={`${FIELD} border-gold/40`}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                    </div>
                  </div>

                  {/* Step 2 — how to reply */}
                  <div data-step-panel data-active={step === 1} className="grid gap-5">
                    <StepHead title={STEPS[1].title} hint={STEPS[1].hint} />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        id={fieldId("name")}
                        name="name"
                        label="Name *"
                        placeholder="Your full name"
                        autoComplete="name"
                        defaultValue={valueFor("name")}
                        error={errorFor("name")}
                        className={`${FIELD} ${borderFor("name")}`}
                      />
                      <Field
                        id={fieldId("email")}
                        name="email"
                        type="email"
                        label="Email *"
                        placeholder="you@company.com"
                        autoComplete="email"
                        defaultValue={valueFor("email")}
                        error={errorFor("email")}
                        className={`${FIELD} ${borderFor("email")}`}
                      />
                      <Field
                        id={fieldId("phone")}
                        name="phone"
                        type="tel"
                        label="Phone *"
                        placeholder="+971 50 000 0000"
                        autoComplete="tel"
                        defaultValue={valueFor("phone")}
                        error={errorFor("phone")}
                        className={`${FIELD} ${borderFor("phone")}`}
                      />
                    </div>
                  </div>

                  {/* Step 3 — the brief */}
                  <div data-step-panel data-active={step === 2} className="grid gap-5">
                    <StepHead title={STEPS[2].title} hint={STEPS[2].hint} />

                    <div>
                      <div className="flex items-end justify-between">
                        <label className={LABEL} htmlFor={fieldId("message")}>
                          Your brief
                        </label>
                        <p
                          className={`mb-2 font-sans text-[11px] tabular-nums ${
                            count > MESSAGE_LIMIT
                              ? "text-red-300"
                              : "text-white/35"
                          }`}
                        >
                          {count} / {MESSAGE_LIMIT}
                        </p>
                      </div>
                      <textarea
                        id={fieldId("message")}
                        name="message"
                        rows={5}
                        defaultValue={valueFor("message")}
                        onChange={(event) => setCount(event.target.value.length)}
                        placeholder="Event date, venue, guest numbers, what you need from us…"
                        aria-invalid={Boolean(errorFor("message"))}
                        className={`${FIELD} resize-y ${borderFor("message")}`}
                      />
                      {errorFor("message") && (
                        <p className="mt-1.5 font-sans text-[12px] text-red-300">
                          {errorFor("message")}
                        </p>
                      )}
                    </div>

                    <button
                      data-step-submit
                      type="submit"
                      disabled={pending}
                      className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-xs bg-gold px-8 py-4 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep disabled:cursor-wait disabled:opacity-60"
                    >
                      {pending ? "Sending…" : "Send my brief"}
                      {!pending && <span aria-hidden="true">→</span>}
                    </button>
                  </div>

                  {state.status === "error" && state.message && (
                    <p
                      role="alert"
                      className="rounded-xs border border-red-400/30 bg-red-400/8 px-4 py-3 font-sans text-[13px] leading-[1.6] text-red-200"
                    >
                      {state.message}
                    </p>
                  )}

                  {/* Step controls. Hidden without JS, where the form is one page. */}
                  <div
                    data-step-actions
                    className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-6"
                  >
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="cursor-pointer rounded-xs border border-white/25 px-6 py-3.5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-text transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                      >
                        Back
                      </button>
                    )}

                    {!last && (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex cursor-pointer items-center gap-3 rounded-xs bg-gold px-8 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
                      >
                        Continue
                        <span aria-hidden="true">→</span>
                      </button>
                    )}

                    <p className="font-sans text-[12px] leading-[1.6] text-text-muted">
                      Prefer email?{" "}
                      <Link
                        href={CONTACT.emailHref}
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        {CONTACT.email}
                      </Link>{" "}
                      · WhatsApp{" "}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Heading pair at the top of each step. */
function StepHead({ title, hint }: { title: string; hint: string }) {
  return (
    <div>
      <p className="font-display text-[19px] font-bold uppercase leading-[1.15] tracking-[0.01em] md:text-[22px]">
        {title}
      </p>
      <p className="mt-2 font-sans text-[13px] leading-[1.6] text-text-muted">
        {hint}
      </p>
    </div>
  );
}

/** Labelled input with its error message, since the trio in step two repeats. */
function Field({
  id,
  name,
  label,
  error,
  className,
  ...rest
}: {
  id: string;
  name: EnquiryField;
  label: string;
  error?: string;
  className: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={className}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-sans text-[12px] text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

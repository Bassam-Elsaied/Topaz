"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONTACT } from "@/data/company";
import type { Faq } from "@/data/faqs";

/**
 * The question list used on the home page and on every service page. The panel
 * heights animate from `0fr` to `1fr` so nothing has to be measured in JS, and
 * the closed panels are `inert` rather than hidden — the answers stay in the
 * markup for crawlers while staying out of the tab order.
 */
export function FaqBlock({
  label = "Good to know",
  title,
  accent,
  intro,
  faqs,
  id = "faq",
}: {
  label?: string;
  title: string;
  accent?: string;
  intro: string;
  faqs: Faq[];
  id?: string;
}) {
  // The first answer starts open so the section never reads as a wall of
  // closed bars.
  const [open, setOpen] = useState(0);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-(--container-max) grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{label}</SectionLabel>
            <h2
              id={`${id}-heading`}
              className="reveal mt-6 font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
              {accent && <span className="block text-gold">{accent}</span>}
            </h2>
            <p
              className="reveal mt-6 max-w-[38ch] font-sans text-[15px] leading-[1.75] text-text-muted"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              {intro}
            </p>
            <div
              className="reveal mt-8 rounded-lg border border-white/10 bg-surface/60 p-6"
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <p className="font-display text-[16px] font-bold uppercase tracking-[0.02em]">
                Prefer to just ask?
              </p>
              <Link
                href={CONTACT.phoneHref}
                className="mt-3 block font-sans text-[17px] font-semibold text-gold transition-colors duration-300 hover:text-gold-deep"
              >
                {CONTACT.phone}
              </Link>
              <Link
                href={CONTACT.emailHref}
                className="mt-1 block font-sans text-[14px] text-text-muted transition-colors duration-300 hover:text-text"
              >
                {CONTACT.email}
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ul>
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <li
                  key={faq.question}
                  className="reveal border-b border-white/10 first:border-t"
                  style={
                    {
                      "--reveal-delay": `${Math.min(index, 5) * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  <h3>
                    <button
                      type="button"
                      id={`${id}-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel-${index}`}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-[16px] font-bold uppercase leading-[1.3] tracking-[0.01em] transition-colors duration-300 group-hover:text-gold md:text-[19px] ${
                          isOpen ? "text-gold" : "text-text"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Plus that loses its upright stroke when open. */}
                      <span
                        aria-hidden="true"
                        className="relative mt-1.5 size-4 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold" />
                        <span
                          className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold transition-transform duration-400 ease-out ${
                            isOpen ? "rotate-90 scale-y-0" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`${id}-panel-${index}`}
                    role="region"
                    aria-labelledby={`${id}-trigger-${index}`}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-7 pr-10 font-sans text-[14px] leading-[1.8] text-text-muted md:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONTACT } from "@/data/company";

/**
 * Closing call to action. Every inner page ends on one so the route always has
 * somewhere to go next that is not the footer.
 */
export function CtaBand({
  label = "Next step",
  title,
  accent,
  body,
  action = { label: "Request a proposal", href: "/contact-us" },
}: {
  label?: string;
  title: string;
  accent?: string;
  body: string;
  action?: { label: string; href: string };
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative w-full overflow-hidden border-t border-white/5 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-125 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse 55% 100% at center, rgba(224,194,110,0.10) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-start gap-10 rounded-lg border border-white/10 bg-surface/50 p-8 backdrop-blur-sm md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="reveal">
              <SectionLabel>{label}</SectionLabel>
              <h2
                id="cta-heading"
                className="mt-5 max-w-[20ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
              >
                {title}
                {accent && <span className="block text-gold">{accent}</span>}
              </h2>
              <p className="mt-5 max-w-[52ch] font-sans text-[15px] leading-[1.75] text-text-muted">
                {body}
              </p>
            </div>

            <div
              className="reveal flex shrink-0 flex-col items-start gap-4"
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <Link
                href={action.href}
                className="rounded-xs bg-gold px-8 py-4 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
              >
                {action.label}
              </Link>
              <Link
                href={CONTACT.phoneHref}
                className="font-display text-[19px] font-bold text-gold transition-colors duration-300 hover:text-gold-deep"
              >
                {CONTACT.phone}
              </Link>
              <Link
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[13px] text-text-muted underline-offset-4 transition-colors duration-300 hover:text-gold hover:underline"
              >
                Or start a WhatsApp chat
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

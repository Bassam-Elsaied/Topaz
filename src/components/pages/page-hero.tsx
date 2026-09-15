import Link from "next/link";
import Image from "@/components/ui/image-load";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { Crumb } from "@/lib/schema";
import type { HeroAction } from "@/types";

/**
 * Masthead for every inner page: one full-bleed still, the trail, and an H1
 * sized off the viewport. The image is the page's LCP element, so it is marked
 * `priority` and sized to the full width rather than left to lazy-load.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  tagline,
  lede,
  image,
  imageAlt,
  crumbs,
  actions,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  /** Trailing half of the heading, dropped onto its own line in gold. */
  accent?: string;
  tagline?: string;
  lede?: string;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  actions?: HeroAction[];
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <section className="relative isolate w-full overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {/* Two washes rather than one: the vertical fade seats the type on the
          picture, the horizontal one keeps the left column readable when the
          photograph happens to be bright on that side. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-bg via-bg/70 to-bg/30"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          centered
            ? "bg-radial-[at_50%_60%] from-transparent to-bg/70"
            : "bg-linear-to-r from-bg/90 via-bg/45 to-transparent"
        }`}
      />

      <div
        className={`mx-auto flex w-full max-w-(--container-max) flex-col px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48 lg:min-h-[76svh] lg:justify-end lg:pb-28 lg:pt-56 ${
          centered ? "items-center text-center" : ""
        }`}
      >
        <Reveal>
          <div className={centered ? "flex flex-col items-center" : ""}>
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8">
              <SectionLabel className={centered ? "justify-center" : ""}>
                {eyebrow}
              </SectionLabel>
            </div>

            <h1
              className={`reveal mt-6 font-display text-[clamp(34px,6.4vw,70px)] font-bold uppercase leading-[0.92] tracking-[-0.025em] ${
                centered ? "max-w-[20ch]" : "max-w-[17ch]"
              }`}
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
              {accent && <span className="block text-gold">{accent}</span>}
            </h1>

            {tagline && (
              <p
                className="reveal mt-6 max-w-[40ch] font-script text-[clamp(19px,2.2vw,28px)] italic leading-[1.3] text-text-accent"
                style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              >
                {tagline}
              </p>
            )}

            {lede && (
              <p
                className="reveal mt-6 max-w-[62ch] font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]"
                style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
              >
                {lede}
              </p>
            )}

            {actions && actions.length > 0 && (
              <div
                className={`reveal mt-10 flex flex-wrap items-center gap-4 ${
                  centered ? "justify-center" : ""
                }`}
                style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
              >
                {actions.map((action, index) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={
                      index === 0
                        ? "rounded-xs bg-gold px-7 py-3.5 font-sans text-[13px] font-bold uppercase leading-none tracking-[0.06em] text-bg transition-colors duration-300 hover:bg-gold-deep"
                        : "rounded-xs border border-white/25 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-text transition-colors duration-300 hover:border-gold/60 hover:text-gold"
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

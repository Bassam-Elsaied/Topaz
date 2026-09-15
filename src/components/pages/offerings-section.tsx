import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { Offering } from "@/types";

/**
 * The "what this service covers" grid. Two columns of hairline-ruled cards
 * rather than boxes, so a page with nine offerings still reads as a list.
 */
export function OfferingsSection({
  label,
  title,
  accent,
  intro,
  items,
  id = "services",
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  items: Offering[];
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2
                id={`${id}-heading`}
                className="reveal mt-6 max-w-[20ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                {title}
                {accent && <span className="block text-gold">{accent}</span>}
              </h2>
            </div>
            {intro && (
              <p
                className="reveal max-w-[44ch] font-sans text-[15px] leading-[1.75] text-text-muted"
                style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              >
                {intro}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2">
            {items.map((item, index) => (
              <li
                key={item.title}
                className="reveal group relative bg-bg p-7 transition-colors duration-500 hover:bg-surface/70 md:p-9"
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 6) * 70}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="font-sans text-[11px] font-bold tabular-nums tracking-[0.14em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 font-display text-[19px] font-bold uppercase leading-[1.15] tracking-[-0.005em] transition-colors duration-300 group-hover:text-gold md:text-[23px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[52ch] font-sans text-[14px] leading-[1.75] text-text-muted md:text-[15px]">
                  {item.body}
                </p>

                {item.points && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-xs border border-white/10 px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-text-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

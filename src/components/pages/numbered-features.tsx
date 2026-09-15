import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { Feature } from "@/types";

/**
 * The "why choose Topaz" block. The index is set oversized and nearly
 * transparent behind each card so the grid has a rhythm without another rule.
 */
export function NumberedFeatures({
  label = "Why Topaz",
  title,
  accent,
  intro,
  items,
  id = "why-topaz",
}: {
  label?: string;
  title: string;
  accent?: string;
  intro?: string;
  items: Feature[];
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative w-full overflow-hidden border-t border-white/5 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-125 w-125"
        style={{
          background:
            "radial-gradient(circle at center, rgba(224,194,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h2
            id={`${id}-heading`}
            className="reveal mt-6 max-w-[22ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {title}
            {accent && <span className="block text-gold">{accent}</span>}
          </h2>
          {intro && (
            <p
              className="reveal mt-6 max-w-[58ch] font-sans text-[15px] leading-[1.75] text-text-muted"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              {intro}
            </p>
          )}
        </Reveal>

        <Reveal>
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li
                key={item.title}
                className="reveal group relative overflow-hidden rounded-lg border border-white/10 bg-surface/40 p-7 transition-colors duration-500 hover:border-gold/40 md:p-8"
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 6) * 70}ms`,
                  } as React.CSSProperties
                }
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 font-display text-[86px] font-bold leading-none tabular-nums text-white/4 transition-colors duration-500 group-hover:text-gold/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="block size-1.5 rotate-45 bg-gold"
                  />
                  <h3 className="mt-6 font-display text-[17px] font-bold uppercase leading-[1.2] tracking-[0.01em] transition-colors duration-300 group-hover:text-gold md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 font-sans text-[14px] leading-[1.75] text-text-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

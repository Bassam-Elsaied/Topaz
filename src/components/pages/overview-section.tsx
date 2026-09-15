import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

/**
 * The statement block under an inner-page hero: a heading held on the left
 * while the argument runs down the right. Pure type, no photography — it is
 * the beat between two image-heavy sections.
 */
export function OverviewSection({
  label,
  title,
  accent,
  body,
}: {
  label: string;
  title: string;
  accent?: string;
  body: string[];
}) {
  return (
    <section
      aria-labelledby="overview-heading"
      className="relative  w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto h-full grid w-full max-w-(--container-max) grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{label}</SectionLabel>
            <h2
              id="overview-heading"
              className="reveal mt-6 max-w-[14ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {title}
              {accent && <span className="block text-gold">{accent}</span>}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6 border-l border-white/10 pl-7 md:pl-10">
            {body.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className="reveal max-w-[62ch] font-sans text-[15px] leading-[1.85] text-text-muted md:text-[17px]"
                style={
                  {
                    "--reveal-delay": `${index * 120}ms`,
                  } as React.CSSProperties
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

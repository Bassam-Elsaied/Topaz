import Image from "@/components/ui/image-load";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { relatedCards } from "@/data/site-pages";

/**
 * Three cards out to adjacent services. Every inner page carries one, so no
 * route is a dead end and the internal link graph stays connected for crawlers.
 */
export function RelatedPages({
  slugs,
  label = "Keep reading",
  title = "Related services",
}: {
  slugs: string[];
  label?: string;
  title?: string;
}) {
  const cards = relatedCards(slugs);
  if (cards.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h2
            id="related-heading"
            className="reveal mt-6 font-display text-[clamp(26px,3.2vw,40px)] font-bold uppercase leading-none tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            {title}
          </h2>
        </Reveal>

        <Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <li
                key={card.href}
                className="reveal"
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <Link
                  href={card.href}
                  className="group relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-7 transition-colors duration-500 hover:border-gold/40"
                >
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/95 via-black/65 to-black/20"
                  />

                  <div className="relative">
                    <h3 className="font-display text-[19px] font-bold uppercase leading-[1.1] tracking-[-0.01em] transition-colors duration-300 group-hover:text-gold md:text-[22px]">
                      {card.label}
                    </h3>
                    <p className="mt-3 max-w-[34ch] font-sans text-[13.5px] leading-[1.65] text-text-muted">
                      {card.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                      View
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

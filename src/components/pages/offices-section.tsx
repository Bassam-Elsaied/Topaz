import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { CONTACT, OFFICES } from "@/data/company";

const mapsHref = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

/** The three UAE offices, with the channels that reach a person fastest. */
export function OfficesSection() {
  return (
    <section
      id="offices"
      aria-labelledby="offices-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Find us</SectionLabel>
              <h2
                id="offices-heading"
                className="reveal mt-6 max-w-[16ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                Three offices,
                <span className="block text-gold">one standard</span>
              </h2>
            </div>
            <dl
              className="reveal font-sans text-[14px] leading-[1.7] text-text-muted"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                Office hours
              </dt>
              <dd className="mt-2 text-text">{CONTACT.hours}</dd>
            </dl>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {OFFICES.map((office, index) => (
              <li
                key={office.city}
                className="reveal group flex flex-col rounded-lg border border-white/10 bg-surface/40 p-7 transition-colors duration-500 hover:border-gold/40 md:p-8"
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <span
                  aria-hidden="true"
                  className="block size-1.5 rotate-45 bg-gold"
                />
                <h3 className="mt-6 font-display text-[22px] font-bold uppercase leading-[1.05] tracking-[-0.01em] md:text-[26px]">
                  {office.city}
                </h3>
                <address className="mt-4 grow font-sans text-[14px] not-italic leading-[1.75] text-text-muted">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <Link
                  href={mapsHref(`Topaz Events ${office.lines[0]} ${office.city}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-gold"
                >
                  Open in maps
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

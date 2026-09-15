import Link from "next/link";
import Image from "@/components/ui/image-load";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { IndexEntry } from "@/types";

/**
 * The linked grid on the hub pages. Each tile is a photograph with the copy
 * seated on a gradient, which is the only treatment that survives being shown
 * against eight different stills without one of them washing the text out.
 */
export function ServiceIndex({
  label,
  title,
  accent,
  intro,
  entries,
  id = "services",
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  entries: IndexEntry[];
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
                className="reveal mt-6 max-w-[18ch] font-display text-[clamp(30px,4.2vw,54px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
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
          <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {entries.map((entry, index) => (
              <li
                key={entry.href}
                className={`reveal ${entry.wide ? "md:col-span-2" : ""}`}
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 6) * 70}ms`,
                  } as React.CSSProperties
                }
              >
                <Link
                  href={entry.href}
                  className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-7 transition-colors duration-500 hover:border-gold/40 md:p-9 ${
                    entry.wide ? "min-h-96" : "min-h-88"
                  }`}
                >
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    sizes={
                      entry.wide
                        ? "(max-width: 768px) 92vw, 1200px"
                        : "(max-width: 768px) 92vw, 600px"
                    }
                    className="scale-105 object-cover transition-transform duration-700 group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/20"
                  />

                  <div className="relative">
                    <h3 className="max-w-[20ch] font-display text-[23px] font-bold uppercase leading-[1.05] tracking-[-0.015em] transition-colors duration-300 group-hover:text-gold md:text-[30px]">
                      {entry.title}
                    </h3>
                    <p className="mt-4 max-w-[54ch] font-sans text-[14px] leading-[1.7] text-text-muted md:text-[15px]">
                      {entry.body}
                    </p>

                    {entry.points && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {entry.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-xs border border-white/15 bg-black/30 px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-text-accent backdrop-blur-[2px]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-6 inline-flex items-center gap-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                      Explore service
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
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

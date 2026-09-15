import Image from "@/components/ui/image-load";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { SpecItem } from "@/data/service-pages";

/**
 * The rental and technology catalogues. Cards are typographic by default, but
 * an item may carry its own product still — when it does, the image sits at the
 * head of the card so a kit list reads as an inventory rather than a wall of
 * text.
 */
export function SpecGrid({
  label,
  title,
  accent,
  intro,
  items,
  id = "inventory",
  imageFit = "contain",
  imageAspect = "4/3",
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  items: SpecItem[];
  id?: string;
  /**
   * `contain` (default) suits product stills shot on white — the frame stays
   * white and nothing is cropped. `cover` suits photographic stills, which
   * fill the frame edge to edge.
   */
  imageFit?: "contain" | "cover";
  /**
   * Shape of the image frame. Match it to the stills so the card fits the
   * picture rather than cropping it — e.g. `16/9` for wide photographic shots.
   */
  imageAspect?: "4/3" | "16/9";
}) {
  const cover = imageFit === "cover";
  const aspectClass = imageAspect === "16/9" ? "aspect-video" : "aspect-4/3";
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
                className="reveal mt-6 max-w-[18ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
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
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li
                key={item.name}
                className="reveal group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-surface/40 transition-colors duration-500 hover:border-gold/40 hover:bg-surface/70"
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 8) * 50}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Gold hairline that draws in across the top on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                {item.image && (
                  <div
                    className={`relative ${aspectClass} w-full overflow-hidden ${
                      cover ? "bg-black/40" : "bg-white"
                    }`}
                  >
                    {/* Product stills come on white, so the frame stays white and
                        the shot is contained rather than cropped — a tall mic
                        reads whole. Photographic stills fill the frame instead. */}
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                        cover ? "object-cover" : "object-contain p-4"
                      }`}
                    />
                    {cover && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-surface/80 to-transparent"
                      />
                    )}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-[15px] font-bold uppercase leading-[1.25] tracking-[0.02em] transition-colors duration-300 group-hover:text-gold md:text-[17px]">
                    {item.name}
                  </h3>
                  <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-text-muted">
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

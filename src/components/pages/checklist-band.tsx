import { Reveal } from "@/components/ui/reveal";

/**
 * Flat list of inclusions — what a booking covers, or which institutions we
 * work with. A band rather than a section: it belongs to the block above it.
 */
export function ChecklistBand({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section
      aria-labelledby="checklist-heading"
      className="relative w-full border-t border-white/5 py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="reveal grid grid-cols-1 gap-8 rounded-lg border border-white/10 bg-surface/40 p-8 md:p-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
            <h2
              id="checklist-heading"
              className="max-w-[16ch] font-display text-[20px] font-bold uppercase leading-[1.15] tracking-[-0.005em] md:text-[26px]"
            >
              {title}
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-[14px] leading-[1.6] text-text-accent md:text-[15px]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-gold"
                  >
                    <path d="m4 12.5 5 5 11-11" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

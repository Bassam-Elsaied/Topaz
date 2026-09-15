import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import type { Project } from "@/data/projects";

/** A "Label: detail" line from the write-up, split so the label can be bold. */
function StoryLine({ text }: { text: string }) {
  const split = text.indexOf(":");
  // Only treat it as a label when the prefix is short enough to be one.
  if (split < 0 || split > 44) return <>{text}</>;

  return (
    <>
      <strong className="font-semibold text-text">{text.slice(0, split)}</strong>
      {text.slice(split + 1)}
    </>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-7 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item.slice(0, 40)}
          className="reveal flex gap-4"
          style={{ "--reveal-delay": `${Math.min(index, 5) * 70}ms` } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="font-display text-[15px] font-bold leading-[1.7] text-gold/70 tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="font-sans text-[15px] leading-[1.75] text-text-muted md:text-[16px]">
            <StoryLine text={item} />
          </p>
        </li>
      ))}
    </ol>
  );
}

/**
 * The case study itself. Each block is optional because the older entries in
 * the portfolio were only ever written up as a paragraph, and a heading with
 * nothing under it reads worse than no heading at all.
 */
export function ProjectStory({ project }: { project: Project }) {
  const { overview, requirements, solutions, solutionsLead, conclusion } = project;

  return (
    <section
      aria-labelledby="story-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-(--container-max) grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionLabel>The brief</SectionLabel>
            <h2
              id="story-heading"
              className="reveal mt-6 max-w-[12ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              Project
              <span className="block text-gold">overview</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-l border-white/10 pl-7 md:pl-10">
            <div className="space-y-6">
              {overview.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="reveal max-w-[64ch] font-sans text-[15px] leading-[1.85] text-text-muted md:text-[17px]"
                  style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {requirements && requirements.length > 0 && (
              <div className="mt-14">
                <h3 className="reveal font-display text-[18px] font-bold uppercase tracking-[0.01em] md:text-[22px]">
                  What the client needed
                </h3>
                <NumberedList items={requirements} />
              </div>
            )}

            {solutions && solutions.length > 0 && (
              <div className="mt-14">
                <h3 className="reveal font-display text-[18px] font-bold uppercase tracking-[0.01em] md:text-[22px]">
                  What we delivered
                </h3>
                {solutionsLead && (
                  <p className="reveal mt-4 max-w-[64ch] font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]">
                    {solutionsLead}
                  </p>
                )}
                <NumberedList items={solutions} />
              </div>
            )}

            {conclusion && conclusion.length > 0 && (
              <div className="mt-14 rounded-lg border border-white/10 bg-surface/40 p-7 md:p-9">
                <h3 className="reveal font-display text-[18px] font-bold uppercase tracking-[0.01em] md:text-[20px]">
                  The outcome
                </h3>
                <div className="mt-4 space-y-4">
                  {conclusion.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="reveal max-w-[64ch] font-sans text-[15px] leading-[1.8] text-text-muted md:text-[16px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

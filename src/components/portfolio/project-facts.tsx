import { Reveal } from "@/components/ui/reveal";
import type { ProjectFact } from "@/data/projects";

/**
 * The brief in numbers: who it was for, what it was and where it ran. Sits
 * directly under the hero so the answers are above the write-up, for the
 * reader who came to check whether we have done their kind of event before.
 */
export function ProjectFacts({ facts }: { facts: ProjectFact[] }) {
  if (facts.length === 0) return null;

  return (
    <section
      aria-label="Project details"
      className="relative w-full border-t border-white/5 py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <dl className="reveal grid grid-cols-1 gap-x-10 gap-y-7 rounded-lg border border-white/10 bg-surface/40 p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label + fact.value}>
                <dt className="flex items-center gap-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                  <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold/70" />
                  {fact.label}
                </dt>
                <dd className="mt-2.5 font-sans text-[15px] leading-[1.6] text-text-accent md:text-[16px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

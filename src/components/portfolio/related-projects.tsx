import Link from "next/link";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { projectCard } from "@/data/cards";
import type { Project } from "@/data/projects";

/**
 * Three more events at the foot of a case study. Picked in the data layer so
 * the choice is deterministic and the page stays static.
 *
 * The tiles are client components, so each project is projected down to what a
 * card paints before it crosses the boundary — otherwise every case study page
 * would serialise three more full records, galleries and all.
 */
export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section
      aria-labelledby="related-projects-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>More of our work</SectionLabel>
              <h2
                id="related-projects-heading"
                className="reveal mt-6 max-w-[18ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
                style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              >
                Related <span className="text-gold">events</span>
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-gold transition-colors duration-300 hover:text-text"
            >
              View all projects
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="reveal"
                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
              >
                <ProjectCard project={projectCard(project)} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

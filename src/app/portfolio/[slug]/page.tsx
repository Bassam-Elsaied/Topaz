import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ProjectFacts } from "@/components/portfolio/project-facts";
import { ProjectFilm } from "@/components/portfolio/project-film";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { ProjectStory } from "@/components/portfolio/project-story";
import { RelatedProjects } from "@/components/portfolio/related-projects";
import { PROJECTS, PROJECT_MAP, relatedProjects } from "@/data/projects";
import {
  breadcrumbSchema,
  graph,
  projectSchema,
  videoObject,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

/**
 * Longest brand suffix that still leaves the title readable in a result page.
 * Several event names already run to sixty characters on their own, so the
 * suffix gives way rather than pushing the name itself out of the snippet.
 */
const SUFFIXES = [" | Topaz Event Management UAE", " | Topaz Events", " | Topaz", ""];

function titleFor(title: string, year: number) {
  const base = title.includes(String(year)) ? title : `${title} ${year}`;
  return base + (SUFFIXES.find((suffix) => (base + suffix).length <= 60) ?? "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_MAP.get(slug);
  if (!project) return {};

  return pageMetadata({
    title: titleFor(project.title, project.year),
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECT_MAP.get(slug);
  if (!project) notFound();

  const path = `/portfolio/${project.slug}`;
  const crumbs = [
    { label: "Our Portfolio", href: "/portfolio" },
    { label: project.title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            name: titleFor(project.title, project.year),
            description: project.summary,
            path,
          }),
          breadcrumbSchema(crumbs),
          projectSchema({
            name: project.title,
            description: project.summary,
            path,
            image: project.image,
            year: project.year,
            city: project.city,
            eventType: project.eventType,
          }),
          ...(project.video ? [videoObject(project.video, project.image)] : []),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow={`${project.year} — ${project.city}`}
          title={project.title}
          tagline={project.eventType}
          lede={project.summary}
          image={project.image}
          imageAlt={project.imageAlt}
          crumbs={crumbs}
          actions={[
            { label: "Plan a similar event", href: "/contact-us" },
            { label: "Back to portfolio", href: "/portfolio" },
          ]}
        />

        <ProjectFacts facts={project.facts} />

        <ProjectStory project={project} />

        <ProjectFilm project={project} />

        <ProjectGallery shots={project.gallery} title={project.title} />

        <RelatedProjects projects={relatedProjects(project.slug)} />

        <CtaBand
          title="Planning something"
          accent="like this?"
          body="Send us the brief. We will come back with a concept direction, a production scope and a cost — usually within one working day."
        />
      </PageShell>
    </>
  );
}

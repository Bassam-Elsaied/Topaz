import { ClientLogos } from "@/components/home/client-logos";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { RelatedPages } from "@/components/pages/related-pages";
import { projectCard } from "@/data/cards";
import { PROJECTS, PROJECT_YEARS } from "@/data/projects";
import {
  breadcrumbSchema,
  graph,
  videoObject,
  webPageSchema,
} from "@/lib/schema";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

const PATH = "/portfolio";
const TITLE = "Our Portfolio | Topaz Event Management Company UAE";
const DESCRIPTION = `${PROJECTS.length} events delivered across Sharjah, Dubai and Abu Dhabi — government forums, property launches, championships, festivals and award ceremonies.`;

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/district-11-launch.webp",
});

const CRUMBS = [{ label: "Our Portfolio", href: PATH }];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
          // The portfolio is where every clip is playable, so this page carries
          // the full set rather than the six the home page reel holds.
          ...PROJECTS.filter((project) => project.video).map((project) =>
            videoObject(project.video!, project.image),
          ),
          {
            "@type": "ItemList",
            name: "Topaz Events project portfolio",
            numberOfItems: PROJECTS.length,
            itemListElement: PROJECTS.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.title,
              url: absoluteUrl(`/portfolio/${project.slug}`),
            })),
          },
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Our portfolio"
          title="Events we have"
          accent="put our name on"
          tagline="Government forums, property launches and championships."
          lede={`Every event we have published, from ${PROJECT_YEARS.at(-1)} to today. Corporate galas, government ceremonies, drone shows and international championships — each one with the brief, the build and the photography attached.`}
          image="/projects/district-11-launch.webp"
          imageAlt="Guests at the District 11 property launch produced by Topaz Events"
          crumbs={CRUMBS}
          actions={[
            { label: "Start your project", href: "/contact-us" },
            { label: "Browse our services", href: "/event-management" },
          ]}
        />

        <ProjectGrid
          projects={PROJECTS.map(projectCard)}
          years={PROJECT_YEARS}
        />

        <ClientLogos />

        <RelatedPages
          slugs={[
            "corporate-event-management",
            "sporting-outdoor-events",
            "award-functions-event-management",
          ]}
          label="What we do"
          title="Services behind this work"
        />

        <CtaBand
          title="Want your event"
          accent="on this page?"
          body="Send us the brief. We will come back with a concept direction, a production scope and a cost — usually within one working day."
        />
      </PageShell>
    </>
  );
}

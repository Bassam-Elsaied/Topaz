import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { NumberedFeatures } from "@/components/pages/numbered-features";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";

import { TeamGrid } from "@/components/portfolio/team-grid";
import { DEPARTMENTS } from "@/data/team";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/team";
const TITLE = "Our Team | Topaz Event Management Company, Sharjah UAE";
const DESCRIPTION =
  "Meet the Topaz Events team — planners, AV specialists, designers and technicians delivering events across Sharjah, Dubai and Abu Dhabi.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/aus-alumni-reunion.webp",
});

const CRUMBS = [
  { label: "About Us", href: "/about-page-topaz-event-management" },
  { label: "Our Team", href: PATH },
];

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Our team"
          title="The people behind"
          accent="every event"
          tagline="Planners, AV specialists, designers and technicians."
          lede="Our team is the driving force behind every successful event. Event planners, AV specialists, designers and technicians work as one unit — backed by years of expertise and our own in-house equipment — to deliver everything from corporate gatherings to large-scale sports events across the UAE."
          image="/projects/aus-alumni-reunion.webp"
          imageAlt="The Topaz Events crew running the AUS alumni reunion in Sharjah"
          crumbs={CRUMBS}
          actions={[
            { label: "Work with us", href: "/contact-us" },
            { label: "See our awards", href: "/awards" },
          ]}
        />

        <OverviewSection
          label="How we work"
          title="Commitment is"
          accent="the differentiator"
          body={[
            "Creativity and precision are not opposites here. The planners who shape the concept sit with the technicians who will rig it, which means an idea gets a reality check the same week it is proposed rather than the week before load-in.",
            "That commitment to innovation, professionalism and client satisfaction is what makes Topaz the trusted choice for unforgettable events in the UAE — and it is why clients who book us once tend to book us again.",
          ]}
        />

        <TeamGrid />

        <NumberedFeatures
          label="How we execute"
          title="Three teams,"
          accent="one event"
          intro="An event passes through all three, and each one owns its stretch of the work end to end."
          items={DEPARTMENTS}
          id="departments"
        />

        <RelatedPages
          slugs={["about-page-topaz-event-management", "awards", "portfolio"]}
          label="More about Topaz"
          title="Get to know us"
        />

        <CtaBand
          title="Want this team"
          accent="on your event?"
          body="Tell us what you are planning. You will be speaking to the people who would actually run it, not to an account handler who passes it on."
        />
      </PageShell>
    </>
  );
}

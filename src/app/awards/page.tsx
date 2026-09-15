import { AwardsGallery } from "@/components/portfolio/awards-gallery";
import { ClientLogos } from "@/components/home/client-logos";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { ALL_AWARDS } from "@/data/awards";
import { absoluteUrl } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/awards";
const TITLE = "Awards & Recognition | Topaz Events Sharjah, Dubai, Abu Dhabi";
const DESCRIPTION =
  "Awards and certificates received by Topaz Events from government and private organisations across the UAE, including MOI and the University of Sharjah.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/sheikh-sultan-awards.webp",
});

const CRUMBS = [
  { label: "About Us", href: "/about-page-topaz-event-management" },
  { label: "Our Awards", href: PATH },
];

export default function AwardsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
          {
            "@type": "ItemList",
            name: "Topaz Events awards and recognitions",
            numberOfItems: ALL_AWARDS.length,
            itemListElement: ALL_AWARDS.map((award, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: award.title,
              image: absoluteUrl(award.image),
            })),
          },
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Our awards"
          title="Awards &"
          accent="recognition"
          tagline="Handed to us by the organisations we delivered for."
          lede="We take pride in the awards and certifications received from government and private organisations across the UAE. Each one reflects a commitment to delivering exceptional experiences, flawless execution and service quality that stands up after the event is over."
          image="/projects/sheikh-sultan-awards.webp"
          imageAlt="Award ceremony stage produced by Topaz Events in Sharjah"
          crumbs={CRUMBS}
          actions={[
            { label: "Start a conversation", href: "/contact-us" },
            { label: "Meet the team", href: "/team" },
          ]}
        />

        <OverviewSection
          label="What it means"
          title="Benchmarks,"
          accent="not trophies"
          body={[
            "Recognition from a government department or a university is not a marketing asset so much as a reference. It means a body with a reputation of its own was willing to put its name next to how the event went.",
            "That is why these matter to us more than any self-declared ranking: they came from the client side of the table, after the event, from people who had to live with the result.",
          ]}
        />

        <AwardsGallery />

        <ClientLogos />

        <RelatedPages
          slugs={["about-page-topaz-event-management", "team", "portfolio"]}
          label="More about Topaz"
          title="Get to know us"
        />

        <CtaBand
          title="Let's add yours"
          accent="to the list"
          body="Tell us what you are planning and what success looks like. We will come back with a plan built to earn the same response."
        />
      </PageShell>
    </>
  );
}

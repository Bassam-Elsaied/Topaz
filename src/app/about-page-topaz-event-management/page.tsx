import { ClientLogos } from "@/components/home/client-logos";
import { CtaBand } from "@/components/pages/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { NumberedFeatures } from "@/components/pages/numbered-features";
import { OfferingsSection } from "@/components/pages/offerings-section";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { StatsSection } from "@/components/home/stats-section";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/about-page-topaz-event-management";
const TITLE = "About Us | Topaz Event Management Company, Sharjah UAE";
const DESCRIPTION =
  "Topaz is a 360-degree event management company with over 10 years in Sharjah, Dubai and Abu Dhabi — concept, branding, production, rental and entertainment.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/aus-alumni-reunion.webp",
});

const CRUMBS = [{ label: "About Us", href: PATH }];

const PILLARS = [
  {
    title: "Our Vision",
    body: "To be the leading event management and planning company in the Middle East, recognised for creativity, cultural sensitivity and flawless execution — delivering events that celebrate the region's heritage and set new benchmarks for the industry.",
  },
  {
    title: "Our Mission",
    body: "To design and execute exceptional events that inspire, engage and leave a lasting impact. Seamless, unforgettable experiences that go beyond what our clients expected, meticulously planned and flawlessly executed.",
  },
  {
    title: "Our Methodology",
    body: "Taking smart ideas somewhere unexpected is the thing we do best. Creativity, passion and technical expertise brought together — with a sense of humour and a great deal of strong black coffee — to turn a vision into something real.",
  },
];

const VALUES = [
  {
    title: "Passion In Action",
    body: "Our planners bring passion, creativity and meticulous attention to detail to every project, and our on-site team manages the logistics so all the elements harmonise on the day.",
  },
  {
    title: "Customised Excellence",
    body: "Every event is different. We go deep on your goals, budget and preferences, then collaborate at each step so the result echoes your brand identity rather than our house style.",
  },
  {
    title: "Exceeding Expectations",
    body: "Client satisfaction is what pushes us past the brief. Transparent communication keeps you engaged throughout, and our responsiveness handles whatever the week of the event throws up.",
  },
  {
    title: "Cultural Fluency",
    body: "Operating across the Emirates means understanding protocol, tradition and audience. We design events that honour local culture while using contemporary production.",
  },
  {
    title: "One Roof",
    body: "Concept making, branding, production, rental and entertainment are all Topaz capabilities, so nothing critical depends on a supplier we met last month.",
  },
  {
    title: "Built To Last",
    body: "Ten years and hundreds of events in, the relationships that matter most to us are the ones where we are now on the fifth or sixth edition of the same annual event.",
  },
];

export default function AboutPage() {
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
          eyebrow="About us"
          title="A 360° event"
          accent="company in the UAE"
          tagline="Creating seamless and unforgettable experiences."
          lede="Topaz is a 360-degree event management and planning company excelling in end-to-end event ideation, strategy, planning and execution. With more than ten years of experience, we work across Sharjah, Dubai, Abu Dhabi and the wider UAE for government entities, universities and brands."
          image="/projects/aus-alumni-reunion.webp"
          imageAlt="Guests at the AUS alumni reunion organised by Topaz Events in Sharjah"
          crumbs={CRUMBS}
          actions={[
            { label: "Talk to our team", href: "/contact-us" },
            { label: "See our work", href: "/portfolio" },
          ]}
        />

        <OverviewSection
          label="Why choose Topaz"
          title="Your leading"
          accent="event partner"
          body={[
            "With over a decade of experience, Topaz has become a trailblazer in crafting extraordinary event experiences. We specialise in event concept making, event branding, event production, and event rental and entertainment services, working with respected institutions across the Middle East.",
            "As a premier event management company based in Sharjah, Topaz Event Organizers is set up to deliver events that go past the ordinary. Years of expertise, creative range and a steady commitment to getting the detail right are what make us a reliable partner for bringing a vision into a room.",
          ]}
        />

        <StatsSection />

        <OfferingsSection
          label="What drives us"
          title="Vision, mission"
          accent="and method"
          intro="Three statements that decide how a Topaz event is planned, long before anything is booked."
          items={PILLARS}
          id="pillars"
        />

        <NumberedFeatures
          label="How we operate"
          title="The way we"
          accent="run an event"
          intro="Six things that stay constant whether the event is a board dinner or a national day festival."
          items={VALUES}
        />

        <ClientLogos />

        <RelatedPages
          slugs={["team", "awards", "portfolio"]}
          label="More about Topaz"
          title="Get to know us"
        />

        <CtaBand
          title="Your key to"
          accent="remarkable events"
          body="We are more than an event organiser; we are partners in creating moments that captivate and last. Tell us what you are planning and we will show you how it could run."
        />
      </PageShell>
    </>
  );
}

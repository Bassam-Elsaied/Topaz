import { ClientLogos } from "@/components/home/client-logos";
import { CtaBand } from "@/components/pages/cta-band";
import { FaqBlock } from "@/components/pages/faq-block";
import { JsonLd } from "@/components/seo/json-ld";
import { NumberedFeatures } from "@/components/pages/numbered-features";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ServiceIndex } from "@/components/pages/service-index";
import { StatsSection } from "@/components/home/stats-section";
import type { Faq } from "@/data/faqs";
import type { IndexEntry } from "@/types";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/event-management";
const TITLE = "Event Management Company in the UAE | Topaz Events";
const DESCRIPTION =
  "A leading event management company in the UAE. Corporate events, graduation ceremonies, gala dinners, sports events, exhibitions and festivals by Topaz.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/sharjah-judicial-forum.webp",
});

const CRUMBS = [{ label: "Event Management", href: PATH }];

const SERVICES: IndexEntry[] = [
  {
    href: "/corporate-event-management",
    title: "Corporate Event Management",
    body: "We partner with your company to craft corporate events from concept to execution — designing, planning and delivering experiences that align with your business objectives.",
    image: "/services/Topaz-District11.webp",
    points: ["Government seminars", "Conferences & summits", "Property launches"],
    wide: true,
  },
  {
    href: "/graduation-ceremony-event-management-company",
    title: "Graduation Ceremonies",
    body: "Seamless, large-scale graduation ceremonies and alumni galas for leading institutions, from the University of Sharjah to AUS, with protocol handled as routine.",
    image: "/services/AUS_Graduation_Alumni.webp",
    points: ["Convocations", "Alumni galas", "KG graduations"],
  },
  {
    href: "/gala-dinner-organizer-dubai",
    title: "Gala Dinner Management",
    body: "Memorable evenings that guests talk about long after the night ends — elegant concepts, immersive staging and flawless execution from arrival to last transfer.",
    image: "/services/8-F1H2O-Gala-Dinner.webp",
    points: ["Corporate dinners", "Alumni galas", "Sports gala dinners"],
  },
  {
    href: "/sporting-outdoor-events",
    title: "Sports Event Management",
    body: "Sports events of every scale and complexity, from local tournaments to international championships — planning, logistics, on-ground coordination and post-event analysis.",
    image: "/services/IFBB-Asia-2025-5.webp",
    points: ["Car race events", "Horse riding events", "Bodybuilding events"],
  },
  {
    href: "/exhibitions",
    title: "Exhibition Stand Design",
    body: "Custom, visually striking stands that attract attention and communicate your brand story — including premium double-decker concepts for Shams Media, SPEA and Abu Dhabi Media.",
    image: "/services/Shams-Stand-1.webp",
    points: ["3D design", "In-house build", "LED integration"],
  },
  {
    href: "/award-functions-event-management",
    title: "Award Function Services",
    body: "Prestigious ceremonies across industries and sectors, from private celebrations to large-scale industry awards, handled with the precision the occasion deserves.",
    image: "/projects/sheikh-sultan-awards.webp",
    points: ["Government awards", "Excellence awards", "School awards"],
  },
  {
    href: "/festivals",
    title: "Festivals Event Management",
    body: "Cultural festivals across the UAE, from vibrant city celebrations to large-scale public gatherings, with the logistics, fireworks and immersive experiences handled as one piece.",
    image: "/services/Topaz-SCC-Kalba-10.webp",
    points: ["City celebrations", "Cultural festivals", "Fireworks"],
  },
  {
    href: "/interactive-event-technology",
    title: "Operetta, Opera & Projection",
    body: "Unforgettable musical experiences with world-class performers, international acts, stunning projection mapping and spectacular fireworks.",
    image: "/projects/binghatti-mercedes.webp",
    points: ["Entertainment acts", "Projection mapping", "Laser mapping"],
    wide: true,
  },
];

const FAQS: Faq[] = [
  {
    question: "What event management services does Topaz offer in the UAE?",
    answer:
      "End-to-end management for corporate events, government seminars, product launches, award functions, conferences, festivals, sports events, graduation ceremonies and cultural gatherings — all tailored to the brief rather than fitted to a package.",
  },
  {
    question:
      "Do you offer event planning for corporate and government functions?",
    answer:
      "Yes. We work closely with businesses and government entities to design, plan and execute corporate gatherings, summits, forums, press conferences and annual ceremonies, with every detail aligned to your strategic goals.",
  },
  {
    question: "How do you customise your services for different event types?",
    answer:
      "Every event starts from its own brief. From award functions and gala dinners to themed conferences and exhibitions, we develop bespoke plans covering creative design, logistics and staging built around your vision.",
  },
  {
    question: "Can Topaz manage both small and large-scale events?",
    answer:
      "Yes. We have the expertise and the inventory for both — an intimate corporate dinner and a large-scale public festival are planned the same way, with the crew scaled to match.",
  },
  {
    question: "What rental equipment do you provide?",
    answer:
      "LED screens, sound and lighting systems, dome tents, portable facilities and high-quality furniture, all from our own inventory and included in the same proposal as the management.",
  },
  {
    question: "How do you enhance an event's visual impact?",
    answer:
      "Through advanced audiovisual solutions — indoor, outdoor, curved and video-wall LED rentals plus projection mapping — specified around the venue so presentations and live segments land with impact.",
  },
  {
    question: "What options do you offer for staging and exhibition stands?",
    answer:
      "Our team designs and builds custom stages and exhibition stands in-house, combining creativity with the practical constraints of the venue and the build-up window.",
  },
  {
    question: "How does Topaz incorporate entertainment into its events?",
    answer:
      "International acts, DJ performances, operatic shows and innovative projection and floor mapping, programmed to fit the audience and the moment in the run sheet.",
  },
  {
    question: "What sports and outdoor event services do you offer?",
    answer:
      "Indoor and outdoor sports events including race events, drive fests, karate, youth events and camping experiences — with the logistical burden taken off your team.",
  },
  {
    question: "How do I start with Topaz Event Management?",
    answer:
      "Request a quote or a consultation through our contact page. We will discuss your requirements, propose tailored solutions and guide you through every step of the planning process.",
  },
];

const REASONS = [
  {
    title: "360-Degree Delivery",
    body: "Ideation, strategy, planning and execution handled as one piece of work rather than passed between a creative agency, a production house and a rental supplier.",
  },
  {
    title: "Everything In-House",
    body: "Creative team, 3D artists, graphic designers, event managers and technical engineers all sit in the same building, with the AV inventory in our own warehouses.",
  },
  {
    title: "Government Track Record",
    body: "Delivery for government departments, chambers of commerce and universities, where protocol, security clearance and ceremonial sequencing are routine requirements.",
  },
  {
    title: "Three Emirates Covered",
    body: "Offices in Sharjah, Dubai and Abu Dhabi mean local crews and short transfers, whichever emirate your venue sits in.",
  },
  {
    title: "Transparent Costing",
    body: "Proposals itemise management, production, crew and rental so you can see what drives the number and adjust before anything is committed.",
  },
  {
    title: "Rehearsed, Not Improvised",
    body: "Run sheets are written, rehearsed and show-called by the same team that pitched the event, which is why the day behaves like the plan.",
  },
];

export default function EventManagementPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
          serviceSchema({
            name: "Event Management",
            description: DESCRIPTION,
            path: PATH,
            serviceType: "Event Management",
          }),
          faqSchema(FAQS),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="Event services"
          title="Event management"
          accent="across the UAE"
          tagline="One team for the idea, the production and the day itself."
          lede="Partner with a leading event management company in the UAE and turn your event into something people remember. Topaz combines innovative creativity with flawless execution — corporate events, graduation ceremonies, gala dinners, sports events, exhibitions, award functions and festivals, all delivered by the same team."
          image="/projects/sharjah-judicial-forum.webp"
          imageAlt="The Sharjah Judicial Department forum staged by Topaz Events"
          crumbs={CRUMBS}
          actions={[
            { label: "Request a proposal", href: "/contact-us" },
            { label: "View our portfolio", href: "/portfolio" },
          ]}
        />

        <ClientLogos />

        <OverviewSection
          label="The approach"
          title="Smart ideas taken"
          accent="somewhere unexpected"
          body={[
            "Topaz is a 360-degree event management company: we handle ideation, strategy, planning and execution as a single engagement. Ten years and hundreds of events in, that covers government departments, universities and brands across Sharjah, Dubai and Abu Dhabi.",
            "What makes it work is that nothing critical is outsourced. The creative team and the technical crew sit in the same building, and the AV inventory belongs to us. The room you were shown in the pitch is the room your guests walk into.",
          ]}
        />

        <ServiceIndex
          label="What we do"
          title="Our event"
          accent="management services"
          intro="Eight service lines, each with its own team lead, and all of them drawing on the same production crew and the same inventory."
          entries={SERVICES}
        />

        <NumberedFeatures
          title="Why clients stay"
          accent="with Topaz"
          intro="The reasons government entities, universities and brands come back for the next one."
          items={REASONS}
        />

        <StatsSection />

        <FaqBlock
          title="About our event"
          accent="management services"
          intro="The questions we field most often before an event goes into planning."
          faqs={FAQS}
        />

        <CtaBand
          title="Tell us about"
          accent="your event"
          body="Share the date, the venue and roughly how many guests you are expecting. You will get a proposal built around your brief — not a template."
        />
      </PageShell>
    </>
  );
}

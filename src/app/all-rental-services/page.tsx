import { CtaBand } from "@/components/pages/cta-band";
import { FaqBlock } from "@/components/pages/faq-block";
import { JsonLd } from "@/components/seo/json-ld";
import { NumberedFeatures } from "@/components/pages/numbered-features";
import { OverviewSection } from "@/components/pages/overview-section";
import { PageHero } from "@/components/pages/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { RelatedPages } from "@/components/pages/related-pages";
import { SpecGrid } from "@/components/pages/spec-grid";
import type { Faq } from "@/data/faqs";
import type { SpecItem } from "@/data/service-pages";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const PATH = "/all-rental-services";
const TITLE = "AV & Event Rental Services in Sharjah, Dubai & Abu Dhabi | Topaz";
const DESCRIPTION =
  "LED screens, sound systems, lighting rigs and dome tents for rent across the UAE. In-house inventory operated by Topaz engineers, quoted all-inclusive.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: "/projects/district-11-launch.webp",
});

const CRUMBS = [{ label: "AV & Rentals", href: PATH }];

const SCREENS: SpecItem[] = [
  {
    name: "P3.9 Outdoor LED Screen",
    body: "4K resolution with the brightness for clear daytime visibility and a weather-resistant build. Ideal for concerts, sports and outdoor marketing.",
    image: "/rentals/screens/p3-9-outdoor.webp",
    imageAlt: "P3.9 outdoor LED screen panel available for rent from Topaz Events",
  },
  {
    name: "P1.9 Indoor Screen (Cube)",
    body: "High-resolution close-viewing visuals for retail spaces, lobbies and immersive indoor installations.",
    image: "/rentals/screens/p1-9-indoor-cube.webp",
    imageAlt: "P1.9 indoor cube LED screen for rent from Topaz Events",
  },
  {
    name: "P2.6 & P2.9 Indoor Screen",
    body: "4K resolution with high brightness for corporate events, gala dinners and award functions, sized to the stage width.",
    image: "/rentals/screens/p2-6-p2-9-indoor.webp",
    imageAlt: "P2.6 and P2.9 indoor LED screen for rent from Topaz Events",
  },
  {
    name: "P3.9 Flexible Module",
    body: "Versatile indoor panels for curved and custom-shaped displays at events, retail and exhibitions.",
    image: "/rentals/screens/p3-9-flexible.webp",
    imageAlt: "P3.9 flexible LED module for curved displays from Topaz Events",
  },
  {
    name: "P2.6 Flexible Module",
    body: "High-resolution adaptable panels for custom-shaped installations where a flat wall will not do.",
    image: "/rentals/screens/p2-6-flexible.webp",
    imageAlt: "P2.6 flexible LED module for custom-shaped displays from Topaz Events",
  },
  {
    name: "P2.9 Flexible Module",
    body: "Flexible high-resolution displays for bespoke setups across retail, events and exhibition stands.",
    image: "/rentals/screens/p2-9-flexible.webp",
    imageAlt: "P2.9 flexible LED module for bespoke displays from Topaz Events",
  },
];

const SOUND: SpecItem[] = [
  {
    name: "HDL 20-A Line Array",
    body: "Active line array module for main hangs, giving even coverage across a wide or deep room.",
    image: "/rentals/sound/hdl-20-a.webp",
    imageAlt: "HDL 20-A active line array module for rent from Topaz Events",
  },
  {
    name: "EVOX 12 Array System",
    body: "Active two-way array speaker with a compact footprint, suited to conferences and smaller stages.",
    image: "/rentals/sound/evox-12.webp",
    imageAlt: "EVOX 12 active two-way array speaker for rent from Topaz Events",
  },
  {
    name: "ART 945-A Speaker",
    body: "Professional active speaker for main, fill and delay positions across mid-size venues.",
    image: "/rentals/sound/art-945-a.webp",
    imageAlt: "ART 945-A professional active speaker for rent from Topaz Events",
  },
  {
    name: "HD 15-A Speaker",
    body: "Active two-way cabinet used for front-fill, stage monitoring and breakout rooms.",
    image: "/rentals/sound/hd-15-a.webp",
    imageAlt: "HD 15-A active two-way speaker for rent from Topaz Events",
  },
  {
    name: "NX 985-A Speaker",
    body: "Three-way active speaker delivering full-range reproduction for music-led programmes.",
    image: "/rentals/sound/nx-985-a.webp",
    imageAlt: "NX 985-A three-way active speaker for rent from Topaz Events",
  },
  {
    name: "SUB 9007 Subwoofer",
    body: "High-power subwoofer for large-format low end at concerts and outdoor events.",
    image: "/rentals/sound/sub-9007.webp",
    imageAlt: "SUB 9007 high-power subwoofer for rent from Topaz Events",
  },
  {
    name: "SUB 9006 Subwoofer",
    body: "High-power subwoofer that pairs with the main hangs for extended low-frequency reach.",
    image: "/rentals/sound/sub-9006.webp",
    imageAlt: "SUB 9006 high-power subwoofer for rent from Topaz Events",
  },
  {
    name: "SUB 8003-AS II Subwoofer",
    body: "Active subwoofer for indoor systems where headroom matters more than raw output.",
    image: "/rentals/sound/sub-8003-as-ii.webp",
    imageAlt: "SUB 8003-AS II active subwoofer for rent from Topaz Events",
  },
  {
    name: "ULXD2/B58 Handheld",
    body: "Digital wireless handheld microphone for presenters, emcees and vocal performance.",
    image: "/rentals/sound/ulxd2-b58.webp",
    imageAlt: "ULXD2/B58 digital wireless handheld microphone for rent from Topaz Events",
  },
  {
    name: "ULXD4 Receiver",
    body: "Digital wireless receiver providing encrypted, interference-resistant channels.",
    image: "/rentals/sound/ulxd4.webp",
    imageAlt: "ULXD4 digital wireless receiver for rent from Topaz Events",
  },
  {
    name: "MX418 Gooseneck",
    body: "Microflex gooseneck microphone for lecterns, panels and top-table positions.",
    image: "/rentals/sound/mx418.webp",
    imageAlt: "MX418 Microflex gooseneck microphone for rent from Topaz Events",
  },
  {
    name: "CVG18D Gooseneck",
    body: "Gooseneck microphone for conference tables and delegate positions.",
    image: "/rentals/sound/cvg18d.webp",
    imageAlt: "CVG18D gooseneck microphone for rent from Topaz Events",
  },
];

const LIGHTING: SpecItem[] = [
  {
    name: "Head Beam F400BSW",
    body: "Moving head combining beam, spot and wash in one fixture for flexible stage looks.",
    image: "/rentals/lighting/head-beam-f400bsw.webp",
    imageAlt: "F400BSW moving head beam fixture for rent from Topaz Events",
  },
  {
    name: "Head Beam F230III",
    body: "Compact moving beam for tight aerial effects and fast position changes.",
    image: "/rentals/lighting/head-beam-f230iii.webp",
    imageAlt: "F230III compact moving beam fixture for rent from Topaz Events",
  },
  {
    name: "Head Beam 400",
    body: "High-output moving head for key stage lighting and audience sweeps.",
    image: "/rentals/lighting/head-beam-400.webp",
    imageAlt: "Moving head beam 400 fixture for rent from Topaz Events",
  },
  {
    name: "Head Beam TX 1940",
    body: "Moving head built for long throws across large halls and outdoor arenas.",
    image: "/rentals/lighting/head-beam-tx-1940.webp",
    imageAlt: "TX 1940 wash-zoom moving head for rent from Topaz Events",
  },
  {
    name: "Head Beam 9800 T48",
    body: "High-power beam fixture for headline positions and aerial architecture.",
    image: "/rentals/lighting/head-beam-9800-t48.webp",
    imageAlt: "Moving head beam 9800 T48 fixture for rent from Topaz Events",
  },
  {
    name: "Head Beam 8800 C42",
    body: "Beam fixture for dense, layered looks across a full lighting rig.",
    image: "/rentals/lighting/head-beam-8800-c42.webp",
    imageAlt: "Moving head beam 8800 C42 fixture for rent from Topaz Events",
  },
  {
    name: "LED PSD418L",
    body: "LED par-style fixture for stage washes, uplighting and colour states.",
    image: "/rentals/lighting/led-psd418l.webp",
    imageAlt: "LED PSD418L par fixture for rent from Topaz Events",
  },
  {
    name: "LED City Color 1000",
    body: "Architectural wash unit for façades, structures and large exterior surfaces.",
    image: "/rentals/lighting/led-city-color-1000.webp",
    imageAlt: "LED City Color 1000 architectural wash unit for rent from Topaz Events",
  },
  {
    name: "LED MAGIC T12 Bar",
    body: "Pixel-mapped moving bar for kinetic effects and set integration.",
    image: "/rentals/lighting/led-magic-t12.webp",
    imageAlt: "LED Magic T12 pixel-mapped moving bar for rent from Topaz Events",
  },
  {
    name: "LED Classic Bar 1815",
    body: "Linear LED bar for set decoration, truss toning and stage edging.",
    image: "/rentals/lighting/led-classic-bar-1815.webp",
    imageAlt: "LED Classic Bar 1815 linear fixture for rent from Topaz Events",
  },
  {
    name: "RGB Laser (10W & 30W)",
    body: "Full-colour laser systems for aerial effects, logo projection and show finales.",
    image: "/rentals/lighting/rgb-laser.webp",
    imageAlt: "RGB laser device 10W and 30W for rent from Topaz Events",
  },
  {
    name: "LED Blinder 400",
    body: "High-output audience blinder for punch, strobe hits and warm wash accents.",
    image: "/rentals/lighting/led-blinder-400.webp",
    imageAlt: "LED Blinder 400 audience blinder for rent from Topaz Events",
  },
  {
    name: "LED Video Bars",
    body: "Low-voltage SMD bars with independent control and full-colour conversion for stage décor and launches.",
    image: "/rentals/lighting/led-video-bars.webp",
    imageAlt: "LED video bars for stage decoration for rent from Topaz Events",
  },
];

const TENTS: SpecItem[] = [
  {
    name: "30M Dome Tent",
    body: "Our largest clear-span dome, for major launches, exhibitions and high-capacity gatherings.",
    image: "/rentals/tents/dome-30m.webp",
    imageAlt: "30M dome tent for rent from Topaz Events",
  },
  {
    name: "10M Dome Tent",
    body: "A mid-size dome suited to hospitality areas, VIP lounges and brand activations.",
    image: "/rentals/tents/dome-10m.webp",
    imageAlt: "10M dome tent for rent from Topaz Events",
  },
  {
    name: "6M Dome Tent",
    body: "A compact dome for registration points, satellite zones and intimate installations.",
    image: "/rentals/tents/dome-6m.webp",
    imageAlt: "6M dome tent for rent from Topaz Events",
  },
  {
    name: "Arabian Tent",
    body: "Traditional majlis-style structures for cultural events and national day celebrations.",
    image: "/rentals/tents/arabian-tent.webp",
    imageAlt: "Arabian majlis-style tent for rent from Topaz Events",
  },
  {
    name: "Type Tent (10m × 30m)",
    body: "A long-span rectangular marquee for banqueting, exhibitions and covered walkways.",
    image: "/rentals/tents/type-tent-10x30.webp",
    imageAlt: "10m by 30m type tent marquee for rent from Topaz Events",
  },
  {
    name: "Canopy Tent Rental",
    body: "Versatile open-sided canopy structures for outdoor hospitality, brand zones and shaded guest areas.",
    image: "/rentals/tents/canopy-tent-rental.webp",
    imageAlt: "Canopy tent structure for rent from Topaz Events",
  },
  {
    name: "Canopy Tent (5m × 5m)",
    body: "Open-sided shade cover for hospitality, catering points and outdoor sports events.",
    image: "/rentals/tents/canopy-tent-5x5.webp",
    imageAlt: "5m by 5m canopy tent for rent from Topaz Events",
  },
  {
    name: "Canopy Tent (3m × 3m)",
    body: "A compact branded canopy for activations, marshalling points and vendor positions.",
    image: "/rentals/tents/canopy-tent-3x3.webp",
    imageAlt: "3m by 3m canopy tent for rent from Topaz Events",
  },
  {
    name: "Foldable Tent (3m × 3m)",
    body: "Rapid-deploy cover for stalls, registration desks and race-day support points.",
    image: "/rentals/tents/foldable-tent-3x3.webp",
    imageAlt: "3m by 3m foldable tent for rent from Topaz Events",
  },
];

const REASONS = [
  {
    title: "A Decade Of Rentals",
    body: "Over ten years as a trusted leader in event management and AV rentals across the UAE for corporate, government and private clients.",
  },
  {
    title: "Our Own Inventory",
    body: "Screens, sound, lighting and tents sit in our warehouses, so availability is something we confirm rather than chase from a third party.",
  },
  {
    title: "Engineer-Led Installs",
    body: "Technical engineers for LED, sound and lighting handle the rig and the calibration, not a general labour crew.",
  },
  {
    title: "Fifty-Plus Specialists",
    body: "Three UAE offices, a modern production facility and a team of more than fifty skilled members behind every booking.",
  },
  {
    title: "In-House Content",
    body: "Graphic designers and 3D artists who can produce the content the screens will actually show, matched to the rig geometry.",
  },
  {
    title: "All-Inclusive Quotes",
    body: "Delivery, installation, operation and dismantling are in the price, with no surprise line items for transport or operators.",
  },
];

const FAQS: Faq[] = [
  {
    question: "What is included in a rental quote?",
    answer:
      "Delivery, installation, operation and dismantling by our own team. Transportation, operators and technical assistance are covered unless you add scope after the quote is issued.",
  },
  {
    question: "Can I rent equipment without booking event management?",
    answer:
      "Yes. AV, lighting and tent rentals are available as standalone bookings, with our crew on site for the install and the show.",
  },
  {
    question: "Do you supply crew and operators with the equipment?",
    answer:
      "We do. Our engineers stay on site for the duration of the event to keep the system performing and respond to changes during the run.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Two to three weeks is comfortable for most events, and longer for peak season or large-format LED and tent structures where the install window matters.",
  },
  {
    question: "Which emirates do you deliver to?",
    answer:
      "Dubai, Sharjah, Abu Dhabi, Ajman and Ras Al Khaimah, served from our own warehouses. Delivery within Dubai is free and charges elsewhere in the UAE are kept low.",
  },
];

export default function RentalServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema(CRUMBS),
          serviceSchema({
            name: "AV & Event Equipment Rental",
            description: DESCRIPTION,
            path: PATH,
            serviceType: "AV Equipment Rental",
          }),
          faqSchema(FAQS),
        )}
      />

      <PageShell>
        <PageHero
          eyebrow="AV solutions & rentals"
          title="Event rental"
          accent="services"
          tagline="The kit is ours. So is the crew that runs it."
          lede="Topaz is a technical event production company and audio-visual equipment supplier operating across the UAE. LED screens, sound systems, lighting rigs and dome tents come out of our own warehouses and are installed and operated by our own engineers — from large-scale conferences to gala dinners."
          image="/projects/district-11-launch.webp"
          imageAlt="Stage, screens and lighting rig supplied by Topaz Events for the District 11 launch"
          crumbs={CRUMBS}
          actions={[
            { label: "Get a rental quote", href: "/contact-us" },
            { label: "Interactive technology", href: "/interactive-event-technology" },
          ]}
        />

        <OverviewSection
          label="Why in-house matters"
          title="No handover on"
          accent="show day"
          body={[
            "Most AV problems at events are handover problems: a supplier specifies a system, a second company rigs it, and a freelance operator meets both for the first time on the morning of the show. Every gap between those three is where a cue gets lost.",
            "We closed the gaps by owning the chain. With three offices in the UAE, more than fifty skilled team members, a modern production facility, in-house graphic designers and 3D artists, and dedicated engineers for LED, sound and lighting, the people who quoted your system are the people standing behind it.",
          ]}
        />

        <SpecGrid
          id="led-screens"
          label="LED screens"
          title="Screens for"
          accent="indoor & outdoor"
          intro="All-inclusive prices cover delivery, installation, operation and dismantling. For the full range and use-case guidance, see our LED screen rental page."
          items={SCREENS}
        />

        <SpecGrid
          id="sound"
          label="Sound systems"
          title="Audio &"
          accent="microphones"
          intro="Line arrays, point source cabinets, subwoofers and wireless microphone systems, specified around the room rather than the truck."
          items={SOUND}
        />

        <SpecGrid
          id="lighting"
          label="Lighting systems"
          title="Lighting &"
          accent="laser"
          intro="Moving heads, washes, architectural colour, pixel bars and full-colour lasers for stage, façade and show-finale work."
          items={LIGHTING}
        />

        <SpecGrid
          id="tents"
          label="Durable tents"
          title="Dome tents"
          accent="& structures"
          intro="CE-certified structures from 6m to 30m, customisable in size, colour and fit-out. Full detail on the tent rental page."
          items={TENTS}
          imageFit="cover"
          imageAspect="16/9"
        />

        <NumberedFeatures
          title="Why rent from"
          accent="Topaz"
          intro="A leading-edge technical production and AV supplier, with the infrastructure to back a quote."
          items={REASONS}
        />

        <FaqBlock
          title="Rental"
          accent="questions"
          intro="What clients ask before putting an equipment booking through."
          faqs={FAQS}
        />

        <RelatedPages
          slugs={[
            "led-screen-rental",
            "interactive-event-technology",
            "tent-rental",
          ]}
          title="Rental services in detail"
        />

        <CtaBand
          title="Need a quote"
          accent="for your kit list?"
          body="Send the venue, the dates and what the event has to do. You will get a detailed, all-inclusive quote back — usually within the hour."
          action={{ label: "Request a rental quote", href: "/contact-us" }}
        />
      </PageShell>
    </>
  );
}

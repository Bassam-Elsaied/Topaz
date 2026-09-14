export type Service = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  /** Still shown in the hover preview; reused from the project photography. */
  image: string;
};

/** The six headline event services, in the order the reference site lists them. */
export const EVENT_SERVICES: Service[] = [
  {
    slug: "corporate-events",
    title: "Corporate Events",
    summary:
      "Conferences, seminars and company gatherings planned and run end to end, with every detail tied back to your business objectives.",
    href: "/corporate-event-management",
    image: "/services/Topaz-District11.webp",
  },
  {
    slug: "university-alumni",
    title: "University Alumni",
    summary:
      "Reunions that bring graduates back together — celebrating achievements and building alumni communities for universities across the UAE.",
    href: "/graduation-ceremony-event-management-company",
    image: "/services/AUS_Graduation_Alumni.webp",
  },
  {
    slug: "exhibition-stands",
    title: "Exhibition Stands",
    summary:
      "Stand design and in-house fabrication that turns floor space into a brand showcase, from concept drawings to on-site handover.",
    href: "/exhibitions",
    image: "/services/Shams-Stand-1.webp",
  },
  {
    slug: "festivals",
    title: "Festivals & Activations",
    summary:
      "Multi-day festivals with the logistics, entertainment programming and crowd experience handled as one moving piece.",
    href: "/festivals",
    image: "/services/Topaz-SCC-Kalba-10.webp",
  },
  {
    slug: "sports-events",
    title: "Sports Events",
    summary:
      "Races, championships, youth and college tournaments — timing, staging and broadcast built around the athletes and the crowd.",
    href: "/sporting-outdoor-events",
    image: "/services/IFBB-Asia-2025-5.webp",
  },
  {
    slug: "gala-dinners",
    title: "Gala Dinners & Awards",
    summary:
      "Award ceremonies and themed gala evenings staged with the pacing, lighting and hospitality of a broadcast production.",
    href: "/gala-dinner-organizer-dubai",
    image: "/services/8-F1H2O-Gala-Dinner.webp",
  },
];

export type ProductionService = {
  title: string;
  summary: string;
  href: string;
  /** Line-art glyph drawn in `production-section.tsx`. */
  icon: "av" | "interactive" | "projection" | "dome";
};

/** In-house production capabilities, shown as the bento grid under the services. */
export const PRODUCTION_SERVICES: ProductionService[] = [
  {
    title: "AV Solutions",
    summary:
      "Screens, sound, lighting and rigging specified, integrated and operated by our own technical crew.",
    href: "/all-rental-services",
    icon: "av",
  },
  {
    title: "Interactive Technology",
    summary:
      "Installations your guests can touch, move and play with — real-time interaction that earns its own share of the room.",
    href: "/interactive-event-technology",
    icon: "interactive",
  },
  {
    title: "Projection Mapping",
    summary:
      "Buildings, stages and objects turned into projection surfaces with content cut to the millimetre.",
    href: "/all-rental-services",
    icon: "projection",
  },
  {
    title: "Dome Tent Rentals",
    summary:
      "Structures that hold up to UAE weather while looking like part of the design, not a shelter bolted on.",
    href: "/tent-rental",
    icon: "dome",
  },
];

/** Inventory strip that scrolls between the production and stats sections. */
export const CAPABILITIES = [
  "LED Screens",
  "Sound Systems",
  "Stage & Rigging",
  "Lighting Design",
  "Laser Shows",
  "Drone Shows",
  "Live Camera Feed",
  "Projection Mapping",
  "Durable Tents",
  "Luxury Furniture",
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  /** Renders 3 as "03", matching the reference site's branch counter. */
  pad?: boolean;
};

export const STATS: Stat[] = [
  { label: "Years of experience", value: 10, suffix: "+" },
  { label: "Events delivered", value: 400, suffix: "+" },
  { label: "Technical experts", value: 100, suffix: "+" },
  { label: "Branches in the UAE", value: 3, pad: true },
];

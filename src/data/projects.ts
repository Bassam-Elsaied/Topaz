export type Project = {
  slug: string;
  title: string;
  /** Poster still. Also the only picture bytes a card costs until it is played. */
  image: string;
  width: number;
  height: number;
  /** Streamed from YouTube on demand, where footage exists. */
  video?: ProjectVideo;
};

export type ProjectVideo = {
  youtubeId: string;
  /** The title as published on YouTube, so the two records agree. */
  title: string;
  description: string;
  /** ISO 8601 date and `PT#M#S` runtime, both required for video rich results. */
  uploadDate: string;
  duration: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sharjah-judicial-forum",
    title: "Sharjah Judicial Department Forum",
    image: "/projects/sharjah-judicial-forum.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "AHGc5j-RMnc",
      title: "Sharjah Judicial Department Forum | Topaz Events",
      description:
        "The Partners of Excellence Forum for the Sharjah Judicial Department, held in the presence of His Highness Sheikh Sultan bin Ahmed bin Sultan Al Qasimi.",
      uploadDate: "2026-05-06",
      duration: "PT1M21S",
    },
  },
  {
    slug: "aus-alumni-reunion",
    title: "AUS Alumni Reunion 2026",
    image: "/projects/aus-alumni-reunion.webp",
    width: 900,
    height: 506,
    video: {
      youtubeId: "WFwyl90xO-I",
      title:
        "AUS Alumni Event 2026 | Full Event Setup with Distinguished Guests | Topaz Events",
      description:
        "The American University of Sharjah alumni reunion, held in the presence of Her Highness Sheikha Bodour bint Sultan bin Mohammed Al Qasimi.",
      uploadDate: "2026-02-06",
      duration: "PT1M38S",
    },
  },
  {
    slug: "sheikh-sultan-awards",
    title: "Sheikh Sultan Award Ceremony",
    image: "/projects/sheikh-sultan-awards.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "fAX2cs6isPU",
      title:
        "Sheikh Sultan Awards | Celebrating The Spirit of Youth | Topaz Events",
      description:
        "Full event management and stage build for the Sheikh Sultan Award for Celebrating the Spirit of Youth.",
      uploadDate: "2026-01-26",
      duration: "PT56S",
    },
  },
  {
    slug: "district-11-launch",
    title: "District 11 Property Launch",
    image: "/projects/district-11-launch.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "0OdGlI-bVI4",
      title: "District 11 Grand Launch by Al Marwan Development | Topaz Events",
      description:
        "The District 11 property reveal for Al Marwan Development, delivered end to end by Topaz Events.",
      uploadDate: "2025-11-12",
      duration: "PT1M6S",
    },
  },
  {
    slug: "binghatti-mercedes",
    title: "Binghatti x Mercedes Drone Show",
    image: "/projects/binghatti-mercedes.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "wCdgguL3n4k",
      title: "Binghatti X Mercedes with TOPAZ",
      description:
        "A drone display staged over Dubai for the Binghatti and Mercedes-Benz partnership reveal.",
      uploadDate: "2024-02-22",
      duration: "PT39S",
    },
  },
  {
    slug: "ifbb-asia",
    title: "IFBB Asian Bodybuilding Championships",
    image: "/projects/ifbb-asia.webp",
    width: 900,
    height: 506,
    video: {
      youtubeId: "__QNWHkjL94",
      title: "IFBB Asia 2025 Highlights | Powered by Topaz Events",
      description:
        "Highlights from the IFBB Asian Bodybuilding Championships 2025 in Ajman, from stage build to show calling.",
      uploadDate: "2025-07-01",
      duration: "PT1M40S",
    },
  },
  {
    slug: "li-auto-launch",
    title: "Li Auto Car Launch",
    image: "/projects/li-auto-launch.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "6BCfXJn61Vs",
      title:
        "Li Auto L9 Car Reveal Event | Event Management & Production | Topaz Events",
      description:
        "The Li Auto L9 reveal, produced by Topaz Events with Newness Events Management — stage, lighting and reveal mechanics.",
      uploadDate: "2026-09-09",
      duration: "PT2M34S",
    },
  },
  {
    slug: "shjseen-2026",
    title: "Shjseen 2026",
    image: "/projects/shjseen-2026.webp",
    width: 900,
    height: 600,
    video: {
      youtubeId: "OOz3TaUsV8A",
      title: "Shjseen | Sharjah Excellence Award | Topaz Events",
      description:
        "The Shjseen ceremony for the Sharjah Chamber of Commerce & Industry, celebrating the Sharjah Excellence Award.",
      uploadDate: "2026-07-01",
      duration: "PT1M11S",
    },
  },
];

/**
 * The reel, in the order it is read: one card flips in from the collage and the
 * rest wait to its right. Kept to the six events the reel was cut for rather
 * than every project that happens to have footage, so the track stays a
 * viewing length rather than a scroll the reader has to sit through.
 */
const REEL_SLUGS = [
  "sharjah-judicial-forum",
  "aus-alumni-reunion",
  "sheikh-sultan-awards",
  "district-11-launch",
  "binghatti-mercedes",
  "ifbb-asia",
];

/** The projects whose footage is actually reachable from the page. */
export const REEL_PROJECTS = REEL_SLUGS.map(
  (slug) => PROJECTS.find((project) => project.slug === slug)!,
);

/** Rides the flip from the diamond collage down into the events track. */
export const LEAD_PROJECT = REEL_PROJECTS[0];

/** The cards waiting to the right of the one that flies in. */
export const TRACK_PROJECTS = REEL_PROJECTS.slice(1);

/** Collage stills, minus the project that is already there as the flying card. */
export const COLLAGE_PROJECTS = PROJECTS.filter(
  (project) => project.slug !== LEAD_PROJECT.slug,
);

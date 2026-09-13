export type Project = {
  slug: string;
  title: string;
  /** Also used as the poster frame wherever `video` is played. */
  image: string;
  width: number;
  height: number;
  /** Web-sized loop from scripts/encode-project-videos.mjs, where footage exists. */
  video?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sharjah-judicial-forum",
    title: "Sharjah Judicial Department Forum",
    image: "/projects/sharjah-judicial-forum.webp",
    width: 900,
    height: 600,
    video: "/projects/sharjah-judicial-forum.mp4",
  },
  {
    slug: "aus-alumni-reunion",
    title: "AUS Alumni Reunion 2026",
    image: "/projects/aus-alumni-reunion.webp",
    width: 900,
    height: 506,
    video: "/projects/aus-alumni-reunion.mp4",
  },
  {
    slug: "sheikh-sultan-awards",
    title: "Sheikh Sultan Award Ceremony",
    image: "/projects/sheikh-sultan-awards.webp",
    width: 900,
    height: 600,
    video: "/projects/sheikh-sultan-awards.mp4",
  },
  {
    slug: "district-11-launch",
    title: "District 11 Property Launch",
    image: "/projects/district-11-launch.webp",
    width: 900,
    height: 600,
    video: "/projects/district-11-launch.mp4",
  },
  {
    slug: "binghatti-mercedes",
    title: "Binghatti x Mercedes Drone Show",
    image: "/projects/binghatti-mercedes.webp",
    width: 900,
    height: 600,
    video: "/projects/binghatti-mercedes.mp4",
  },
  {
    slug: "ifbb-asia",
    title: "IFBB Asian Bodybuilding Championships",
    image: "/projects/ifbb-asia.webp",
    width: 900,
    height: 506,
    video: "/projects/ifbb-asia.mp4",
  },
  {
    slug: "li-auto-launch",
    title: "Li Auto Car Launch",
    image: "/projects/li-auto-launch.webp",
    width: 900,
    height: 600,
  },
  {
    slug: "shjseen-2026",
    title: "Shjseen 2026",
    image: "/projects/shjseen-2026.webp",
    width: 900,
    height: 600,
  },
];

const FILMED_PROJECTS = PROJECTS.filter((project) => project.video);

/** Rides the flip from the diamond collage down into the events track. */
export const LEAD_PROJECT = FILMED_PROJECTS[0];

/** The cards waiting to the right of the one that flies in. */
export const TRACK_PROJECTS = FILMED_PROJECTS.slice(1);

/** Collage stills, minus the project that is already there as the flying card. */
export const COLLAGE_PROJECTS = PROJECTS.filter(
  (project) => project.slug !== LEAD_PROJECT.slug,
);

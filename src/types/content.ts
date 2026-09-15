export type HeroAction = { label: string; href: string };

export type Feature = { title: string; body: string };

export type Offering = {
  title: string;
  body: string;
  /** Short tags under the copy — the sub-services a line covers. */
  points?: string[];
};

export type Film = {
  youtubeId: string;
  title: string;
  /** Poster still shown before the player mounts, and behind it while it loads. */
  poster: string;
  posterAlt?: string;
  /** Seconds into the clip the loop should begin. */
  start?: number;
  label?: string;
  heading: string;
  accent?: string;
  description?: string;
};

export type IndexEntry = {
  href: string;
  title: string;
  body: string;
  image: string;
  points?: string[];
  /** Gives the entry the full row on desktop — used for the lead service. */
  wide?: boolean;
};

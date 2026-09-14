export type Award = {
  title: string;
  /** The awarding body, where it differs from the certificate title. */
  org?: string;
  /** Optimized WebP of the certificate in /public/awards. */
  image: string;
};

/**
 * The headline recognition, pulled out of the list to lead the page.
 */
export const FEATURED_AWARD: Award = {
  title: "Sharjah Excellence Award 2024",
  org: "Sharjah Chamber of Commerce & Industry",
  image: "/awards/sharjah-excellence-award-2024.webp",
};

/**
 * Awards and certificates of appreciation received from government and private
 * organisations across the UAE, in the order the reference site lists them.
 * Keyed on `image` in the UI, so the two federation and self-defence entries —
 * genuinely separate certificates from the same body — sit side by side without
 * clashing.
 */
export const AWARDS: Award[] = [
  {
    title: "Future Innovation Summit",
    image: "/awards/future-innovation-summit.webp",
  },
  {
    title: "Dubai Quality Group",
    image: "/awards/dubai-quality-group.webp",
  },
  {
    title: "Al Ruwais Industrial City",
    image: "/awards/al-ruwais-industrial-city.webp",
  },
  {
    title: "Shurooq Sharjah Food Festival",
    image: "/awards/shurooq-sharjah-food-festival.webp",
  },
  {
    title: "Rashid Centre — Zayed's 100th Birthday",
    image: "/awards/rashid-centre-zayed-100.webp",
  },
  {
    title: "Emirati Women's Day",
    image: "/awards/emirati-womens-day.webp",
  },
  {
    title: "UAE Cycling Federation",
    image: "/awards/uae-cycling-federation.webp",
  },
  {
    title: "University of Sharjah",
    image: "/awards/university-of-sharjah.webp",
  },
  {
    title: "Hamdan Bin Mohammed Smart University",
    image: "/awards/hamdan-smart-university.webp",
  },
  {
    title: "Sharjah Sports Council, Kalba",
    image: "/awards/sharjah-sports-council-kalba.webp",
  },
  {
    title: "Ministry of Interior (MOI)",
    image: "/awards/ministry-of-interior.webp",
  },
  {
    title: "UAE Cycling Federation",
    image: "/awards/uae-cycling-federation-2.webp",
  },
  {
    title: "Sharjah FDI Forum",
    image: "/awards/sharjah-fdi-forum.webp",
  },
  {
    title: "Sharjah National Day Celebration Committee",
    image: "/awards/sharjah-national-day-committee.webp",
  },
  {
    title: "Sharjah Self-Defence Sport Club",
    image: "/awards/sharjah-self-defense-sport-club.webp",
  },
  {
    title: "Margins Development",
    image: "/awards/margins-development.webp",
  },
  {
    title: "47th UAE National Day",
    image: "/awards/47th-uae-national-day.webp",
  },
  {
    title: "Sharjah Self-Defence Sports Club",
    image: "/awards/sharjah-self-defence-sports-club.webp",
  },
  {
    title: "47th Spirit of the Union National Day",
    image: "/awards/47th-spirit-of-the-union.webp",
  },
];

/** Every recognition, featured first — handy for counts and structured data. */
export const ALL_AWARDS: Award[] = [FEATURED_AWARD, ...AWARDS];

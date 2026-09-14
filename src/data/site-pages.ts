import { BLOG_POSTS, FEATURED_POST } from "@/data/blog";
import { PROJECTS } from "@/data/projects";
import { SERVICE_PAGES } from "@/data/service-pages";

export type PageCard = {
  href: string;
  label: string;
  summary: string;
  image: string;
};

/**
 * The hub and content routes that are not generated from `SERVICE_PAGES`.
 * Keeping them here means the related-services row and the sitemap can both
 * link to any page on the site without either one holding its own list.
 */
const STANDALONE_PAGES: PageCard[] = [
  {
    href: "/event-management",
    label: "Event Management",
    summary:
      "The full event offer — corporate, academic, gala, sports, festival and exhibition work under one team.",
    image: "/projects/sharjah-judicial-forum.webp",
  },
  {
    href: "/all-rental-services",
    label: "AV & Rental Services",
    summary:
      "LED screens, sound, lighting and tents from our own warehouses, operated by our own engineers.",
    image: "/projects/district-11-launch.webp",
  },
  {
    href: "/portfolio",
    label: "Our Portfolio",
    summary:
      "Forums, launches, championships and ceremonies Topaz has delivered across the Emirates.",
    image: "/projects/district-11-launch.webp",
  },
  {
    href: "/about-page-topaz-event-management",
    label: "About Topaz",
    summary:
      "A 360-degree event company with creative, production and technical teams in the same building.",
    image: "/projects/aus-alumni-reunion.webp",
  },
  {
    href: "/team",
    label: "Our Team",
    summary:
      "The planners, designers and technicians behind every event we deliver.",
    image: "/projects/aus-alumni-reunion.webp",
  },
  {
    href: "/awards",
    label: "Our Awards",
    summary:
      "Recognition from government and private organisations across the UAE.",
    image: "/projects/sheikh-sultan-awards.webp",
  },
  {
    href: "/blog",
    label: "Topaz Blog",
    summary:
      "Event planning tips, AV and technology guides and UAE industry insight from our team.",
    image: FEATURED_POST.image,
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    summary:
      "Three offices across the Emirates and a proposal back within one working day.",
    image: "/projects/sharjah-judicial-forum.webp",
  },
];

const SERVICE_CARDS: PageCard[] = SERVICE_PAGES.map((page) => ({
  href: `/${page.slug}`,
  label: page.nav,
  summary: page.tagline,
  image: page.image,
}));

const PAGE_CARDS: PageCard[] = [...SERVICE_CARDS, ...STANDALONE_PAGES];

const CARD_MAP = new Map(
  PAGE_CARDS.map((card) => [card.href.replace(/^\//, ""), card]),
);

/** Resolves the slugs listed in a page's `related` array into link cards. */
export const relatedCards = (slugs: string[]) =>
  slugs
    .map((slug) => CARD_MAP.get(slug))
    .filter((card): card is PageCard => Boolean(card));

/** Every route the sitemap should list, home excluded — it is added there. */
export const ALL_ROUTES = [
  ...SERVICE_PAGES.map((page) => `/${page.slug}`),
  "/event-management",
  "/all-rental-services",
  "/portfolio",
  ...PROJECTS.map((project) => `/portfolio/${project.slug}`),
  "/about-page-topaz-event-management",
  "/team",
  "/awards",
  "/blog",
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
  "/contact-us",
  "/privacy-policy",
];

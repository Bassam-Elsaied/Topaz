import type { BlogPost } from "@/data/blog";
import type { Project } from "@/data/projects";

/**
 * Card-sized views of the two big records.
 *
 * `projects.ts` and `blog.ts` carry every gallery, fact, paragraph and article
 * body on the site — a couple of hundred kilobytes each. The grids that show
 * them are client components (the year filter, the category rail and the
 * infinite scroll all need state), and anything a client component imports is
 * bundled for the browser, so importing the records there shipped both files
 * as JavaScript on top of the markup already rendered from them.
 *
 * Server pages project down to these instead and hand them in as props, so the
 * browser only ever receives the fields a card paints. `Pick` keeps each view a
 * genuine subset, which means a full record is still assignable wherever one of
 * these is asked for.
 *
 * These are type-only imports, so this module pulls no data of its own.
 */

/** What a portfolio tile and the grid's lead panel read. */
export type ProjectCardData = Pick<
  Project,
  | "slug"
  | "title"
  | "year"
  | "city"
  | "eventType"
  | "summary"
  | "image"
  | "imageAlt"
  | "video"
>;

export const projectCard = (project: Project): ProjectCardData => ({
  slug: project.slug,
  title: project.title,
  year: project.year,
  city: project.city,
  eventType: project.eventType,
  summary: project.summary,
  image: project.image,
  imageAlt: project.imageAlt,
  video: project.video,
});

/** What the home page reel reads — a still, a heading and the footage. */
export type ReelCardData = Pick<Project, "slug" | "title" | "image" | "video">;

export const reelCard = (project: Project): ReelCardData => ({
  slug: project.slug,
  title: project.title,
  image: project.image,
  video: project.video,
});

/** What an article tile reads. Notably not `body`, which is the bulk of a post. */
export type BlogCardData = Pick<
  BlogPost,
  | "slug"
  | "title"
  | "category"
  | "excerpt"
  | "image"
  | "dateLabel"
  | "readingMinutes"
>;

export const blogCard = (post: BlogPost): BlogCardData => ({
  slug: post.slug,
  title: post.title,
  category: post.category,
  excerpt: post.excerpt,
  image: post.image,
  dateLabel: post.dateLabel,
  readingMinutes: post.readingMinutes,
});

/**
 * Shared contract between the flying lead video and the two empty boxes it flies
 * between. Kept free of "use client" so the server-rendered collage can mark
 * its slot with the same attribute name the client component queries for.
 */
export const FLIP_SOURCE_ATTR = "data-flip-source";
export const FLIP_TARGET_ATTR = "data-flip-target";

/**
 * Scroll distance, in viewport heights, that the pinned events section spends
 * landing the flip before its track starts travelling sideways.
 *
 * The flip itself is done by FLIP_TRAIL_VH, so anything much beyond that is
 * scroll the reader spends on an image that has already settled.
 */
export const FLIP_REVEAL_VH = 0.6;

/**
 * Flip window, in viewport heights, relative to the events section reaching the
 * top of the viewport. It starts while the collage is still on screen and lands
 * shortly after the pin engages, which keeps the card fully in view the whole
 * way instead of being dragged off the top edge by the scrolling collage.
 */
export const FLIP_LEAD_VH = 0.7;
export const FLIP_TRAIL_VH = 0.2;

/**
 * Width at which the collage, the flying card and the sideways track all exist.
 * Below it the reel is a stacked column and none of the flip JS should run.
 */
export const FLIP_DESKTOP_MQ = "(min-width: 1024px)";

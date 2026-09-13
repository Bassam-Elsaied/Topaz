/**
 * One animation frame for every scroll-driven effect on the page.
 *
 * Lenis eases `window.scrollY` towards the real scroll position inside its own
 * rAF callback. Anything that reads the scroll position from a *separate* rAF
 * is therefore a coin flip: register before Lenis and you animate against last
 * frame's value, which reads as judder against the rest of the page. Running
 * the scroller first and then every subscriber, in one loop, makes each frame
 * internally consistent.
 *
 * Subscribers run in `ScrollOrder`, because one effect can position an element
 * that the next one measures.
 */

type Scroller = {
  raf: (time: number) => void;
  stop?: () => void;
  start?: () => void;
};
type ScrollFrameCallback = (scroll: number) => void;
type Subscriber = { order: number; callback: ScrollFrameCallback };

export const ScrollOrder = {
  /** Moves elements that later subscribers measure. */
  Layout: 0,
  /** Measures layout written above, then positions itself against it. */
  Follower: 10,
  /** Self-contained; reads nothing from the DOM. */
  Effect: 20,
} as const;

let subscribers: Subscriber[] = [];
let scroller: Scroller | null = null;
let frame = 0;

function loop(time: number) {
  scroller?.raf(time);

  const scroll = window.scrollY;
  for (const { callback } of subscribers) callback(scroll);

  frame = window.requestAnimationFrame(loop);
}

function sync() {
  const wanted = scroller !== null || subscribers.length > 0;
  if (wanted && !frame) {
    frame = window.requestAnimationFrame(loop);
  } else if (!wanted && frame) {
    window.cancelAnimationFrame(frame);
    frame = 0;
  }
}

/** Hands the smooth-scroll instance the first slot in every frame. */
export function registerScroller(instance: Scroller) {
  scroller = instance;
  sync();
  return () => {
    scroller = null;
    sync();
  };
}

/**
 * Freezes the page behind a full-screen overlay. `overflow: hidden` alone is
 * not enough while a smooth scroller is running: it keeps easing towards its
 * own target and the page crawls along underneath. The reserved scrollbar
 * gutter in globals.css is what keeps this from shifting the layout.
 */
export function setScrollLocked(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (locked) scroller?.stop?.();
  else scroller?.start?.();
}

/**
 * Runs `callback` with the eased scroll position once per frame. Unsubscribing
 * the last callback while no scroller is registered stops the loop entirely.
 */
export function onScrollFrame(
  callback: ScrollFrameCallback,
  order: number = ScrollOrder.Effect,
) {
  const subscriber = { order, callback };
  subscribers = [...subscribers, subscriber].sort((a, b) => a.order - b.order);
  sync();
  return () => {
    subscribers = subscribers.filter((entry) => entry !== subscriber);
    sync();
  };
}

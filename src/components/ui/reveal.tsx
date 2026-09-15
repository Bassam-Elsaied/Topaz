"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Entrance group. Anything inside carrying the `reveal` class starts offset and
 * transparent, then settles once the group first enters the viewport — one
 * observer for the whole group rather than one per element, and it disconnects
 * as soon as it has fired so scrolling back up never replays it.
 *
 * Stagger children with `style={{ "--reveal-delay": "120ms" }}`.
 */
export function Reveal({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A group already on screen at mount should not wait for a scroll event.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-root=""
      className={`${className} ${revealed ? "is--revealed" : ""}`}
    >
      {children}
    </div>
  );
}

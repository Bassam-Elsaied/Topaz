"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds `is--visible` while the wrapped content is on screen, so purely
 * decorative animations can be parked when nobody can see them.
 */
export function InView({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "10%" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? "is--visible" : ""}`}>
      {children}
    </div>
  );
}

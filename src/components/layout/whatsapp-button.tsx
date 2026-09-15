"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/ui/social-icons";
import { CONTACT } from "@/data/company";

/**
 * Sits out of the way until the hero has been scrolled past, so the showreel is
 * never the first thing interrupted by a chat button.
 *
 * Collapsed it is a plain circle; the label is a zero-width box that grows on
 * hover. All of the horizontal spacing therefore has to live *inside* that box,
 * otherwise it still takes up room while the label is hidden and the circle
 * renders as a lopsided oval with the icon pushed off-centre.
 */
export function WhatsappButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let lastShown: boolean | null = null;
    const onScroll = () => {
      const isShown = window.scrollY > window.innerHeight * 0.8;
      if (isShown !== lastShown) {
        lastShown = isShown;
        setShown(isShown);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Topaz Events on WhatsApp"
      // Keeps it out of the tab order and the accessibility tree while faded
      // out, without the aria-hidden-on-a-link problem.
      inert={!shown}
      className={`group fixed bottom-6 right-5 z-40 flex h-14 items-center rounded-full bg-gold text-bg shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-[opacity,transform,background-color] duration-400 hover:bg-gold-deep md:bottom-8 md:right-8 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Square equal to the button height, so the collapsed pill is a circle. */}
      <span className="grid size-14 shrink-0 place-items-center">
        <SocialIcon name="whatsapp" className="size-7" />
      </span>

      <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 font-sans text-[13px] font-bold uppercase tracking-[0.06em] opacity-0 transition-[max-width,opacity,padding] duration-400 group-hover:max-w-40 group-hover:pr-6 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pr-6 group-focus-visible:opacity-100">
        WhatsApp us
      </span>
    </Link>
  );
}

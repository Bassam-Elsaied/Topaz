"use client";

import { useState } from "react";

/**
 * Share row for a post. The network links are plain hrefs (they work without
 * JS); only "copy link" needs the clipboard, and it falls back silently if the
 * API is unavailable.
 */
export function BlogShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the network buttons still work */
    }
  };

  const enc = encodeURIComponent;
  const links = [
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
      path: "M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5.05-1.32A9.9 9.9 0 1 0 12.04 2m0 1.8a8.1 8.1 0 0 1 5.73 13.84 8.1 8.1 0 0 1-9.9 1.2l-.36-.22-3 .78.8-2.92-.24-.38A8.1 8.1 0 0 1 12.04 3.8m4.42 10.2c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94-.28.18-.52.06a6.6 6.6 0 0 1-3.28-2.86c-.24-.42.24-.4.7-1.3a.44.44 0 0 0-.02-.42c-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46a.9.9 0 0 0-.64.3 2.7 2.7 0 0 0-.84 2c0 1.18.86 2.32.98 2.48s1.68 2.56 4.06 3.6c1.5.66 2.1.7 2.86.6.46-.08 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14z",
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      path: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.3 8.5h3.3V21H3.3zM9.4 8.5h3.16v1.7h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.02V21h-3.3v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H9.4z",
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`,
      path: "M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.47l7.06-8.07L2.2 3h6.22l4.29 5.67zm-1.06 16.2h1.67L7.6 4.7H5.8z",
    },
  ];

  return (
    <div className="flex items-center gap-2.5">
      <span className="hidden font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted sm:inline">
        Share
      </span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex size-9 items-center justify-center rounded-full border border-white/15 text-text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d={link.path} />
          </svg>
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="flex size-9 items-center justify-center rounded-full border border-white/15 text-text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
      >
        {copied ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 text-gold"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
            <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
          </svg>
        )}
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "@/components/ui/image-load";
import { NavIcon } from "@/components/ui/nav-icons";
import type { NavGroup, NavItem } from "@/types";

const isGroup = (item: NavItem): item is NavGroup => "children" in item;

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  {
    label: "About Us",
    icon: "about",
    children: [
      { label: "Our Portfolio", href: "/portfolio", icon: "portfolio" },
      { label: "Our Team", href: "/team", icon: "team" },
      { label: "Our Awards", href: "/awards", icon: "awards" },
      { label: "Topaz Blog", href: "/blog", icon: "blog" },
    ],
  },
  { label: "Event Services", href: "/event-management", icon: "services" },
  { label: "AV Solutions", href: "/all-rental-services", icon: "av" },
  {
    label: "Interactive Technology",
    href: "/interactive-event-technology",
    icon: "interactive",
  },
];

/** Contact is reached through the Get a Quote button, not a duplicate nav link. */
const QUOTE_HREF = "/contact-us";

const TOP_LINK =
  "group flex items-center gap-2 whitespace-nowrap text-[13px] font-medium uppercase leading-none tracking-[0.04em] text-text-muted transition-colors duration-300 hover:text-gold min-[1400px]:text-[14px]";

const TOP_LINK_ICON =
  "size-4 shrink-0 text-gold transition-colors duration-300 group-hover:text-white";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`size-3 shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`${TOP_LINK} ${open ? "text-gold" : ""}`}
      >
        <NavIcon name={group.icon} className={TOP_LINK_ICON} />
        {group.label}
        <Chevron open={open} />
      </button>

      {/* Padding rather than margin: a gap here would be a dead zone that
          closes the menu as the pointer travels down to it. */}
      <div
        inert={!open}
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="min-w-56 rounded-xl border border-white/12 bg-bg/90 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {group.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xs px-3 py-2.5 text-[13px] font-medium uppercase whitespace-nowrap tracking-[0.04em] text-text-muted transition-colors duration-200 hover:bg-white/5 hover:text-gold"
              >
                <NavIcon
                  name={child.icon}
                  className="size-4 shrink-0 text-gold/70"
                />
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileGroup({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="group flex w-full items-center gap-3.5 py-3 text-[15px] font-medium uppercase tracking-[0.04em] text-text-muted transition-colors hover:text-gold"
      >
        <NavIcon
          name={group.icon}
          className="size-5 shrink-0 text-gold/70 transition-colors group-hover:text-gold"
        />
        {group.label}
        <span className="ml-auto">
          <Chevron open={open} />
        </span>
      </button>

      {/* 0fr to 1fr animates the height without hard-coding one. */}
      <div
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="overflow-hidden">
          {group.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="group flex items-center gap-3.5 py-3 pl-8 text-[14px] font-medium uppercase tracking-[0.04em] text-text-muted transition-colors hover:text-gold"
              >
                <NavIcon
                  name={child.icon}
                  className="size-4.5 shrink-0 text-gold/70 transition-colors group-hover:text-gold"
                />
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrolled: boolean | null = null;
    const onScroll = () => {
      const isScrolled = window.scrollY > 24;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Over the hero the bar is barely-there frosted glass; once it is sitting on
  // page content — or holding an open menu — it deepens so the labels stay
  // legible against whatever is behind it.
  const solid = scrolled || menuOpen;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`pointer-events-auto mx-auto max-w-[1800px] rounded-3xl border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          solid
            ? "border-white/10 bg-bg/80 shadow-[0_14px_40px_rgba(0,0,0,0.55)]"
            : "border-white/15 bg-white/8 shadow-[0_10px_34px_rgba(0,0,0,0.35)]"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between gap-8 px-4 transition-[padding] duration-300 md:px-6 ${
            scrolled ? "py-1.25" : "py-2.5"
          }`}
        >
          <Link
            href="/"
            aria-label="Topaz Events — back to home"
            className="shrink-0"
          >
            <Image
              src="/Topaz_logo.webp"
              alt="Topaz Events"
              width={300}
              height={131}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 min-[1400px]:gap-6 xl:flex"
          >
            <ul className="flex items-center gap-4 min-[1400px]:gap-5">
              {NAV_LINKS.map((item) =>
                isGroup(item) ? (
                  <DesktopDropdown key={item.label} group={item} />
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className={TOP_LINK}>
                      <NavIcon name={item.icon} className={TOP_LINK_ICON} />
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link
              href={QUOTE_HREF}
              className="whitespace-nowrap rounded-xs border border-gold/40 px-5 py-2.5 text-[13px] font-semibold uppercase leading-none tracking-[0.04em] text-gold transition-colors duration-300 hover:bg-gold hover:text-bg min-[1400px]:text-[14px]"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 shrink-0 items-center justify-center rounded-xs border border-white/15 bg-white/10 transition-colors duration-300 hover:bg-white/15 xl:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-full bg-text transition-transform duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-text transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-text transition-transform duration-300 ${
                  menuOpen
                    ? "bottom-1/2 translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="border-t border-white/10 xl:hidden"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-5 md:px-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) =>
                isGroup(item) ? (
                  <MobileGroup
                    key={item.label}
                    group={item}
                    onNavigate={() => setMenuOpen(false)}
                  />
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-3.5 py-3 text-[15px] font-medium uppercase tracking-[0.04em] text-text-muted transition-colors hover:text-gold"
                    >
                      <NavIcon
                        name={item.icon}
                        className="size-5 shrink-0 text-gold/70 transition-colors group-hover:text-gold"
                      />
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <Link
              href={QUOTE_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-xs border border-gold/40 px-5 py-3 text-center text-[14px] font-semibold uppercase tracking-[0.04em] text-gold"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

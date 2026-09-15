import Image from "@/components/ui/image-load";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icons";
import { CONTACT, FOOTER_COLUMNS, OFFICES, SOCIAL_LINKS } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-bg-page">
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
            <div className="reveal">
              <Link href="/" aria-label="Topaz Events — back to home">
                <Image
                  src="/Topaz_logo.webp"
                  alt="Topaz Events"
                  width={300}
                  height={131}
                  sizes="180px"
                  className="h-11 w-auto"
                />
              </Link>
              <p className="mt-6 max-w-[34ch] font-sans text-[14px] leading-[1.75] text-text-muted">
                A 360-degree event management company delivering corporate
                events, gala dinners, exhibitions and full AV production across
                the UAE.
              </p>

              <div className="mt-7 space-y-2">
                <Link
                  href={CONTACT.phoneHref}
                  className="block font-display text-[18px] font-bold text-gold transition-colors duration-300 hover:text-gold-deep"
                >
                  {CONTACT.phone}
                </Link>
                <Link
                  href={CONTACT.emailHref}
                  className="block font-sans text-[14px] text-text-muted transition-colors duration-300 hover:text-text"
                >
                  {CONTACT.email}
                </Link>
              </div>

              <ul className="mt-7 flex flex-wrap items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-xs border border-white/10 text-text-muted transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                    >
                      <SocialIcon name={social.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {FOOTER_COLUMNS.map((column, index) => (
                <nav
                  key={column.title}
                  aria-label={column.title}
                  className="reveal"
                  style={
                    {
                      "--reveal-delay": `${(index + 1) * 80}ms`,
                    } as React.CSSProperties
                  }
                >
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                    {column.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        <Link
                          href={link.href}
                          className="font-sans text-[14px] text-text-muted transition-colors duration-300 hover:text-gold"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-1 gap-8 border-t border-white/10 py-12 sm:grid-cols-3">
            {OFFICES.map((office, index) => (
              <li
                key={office.city}
                className="reveal"
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
              >
                <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em]">
                  <span
                    aria-hidden="true"
                    className="size-1 rotate-45 bg-gold"
                  />
                  {office.city}
                </p>
                {office.lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1.5 font-sans text-[13px] leading-[1.6] text-text-muted"
                  >
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="select-none overflow-hidden px-6 md:px-12"
      >
        <p className="mb-[-0.18em] whitespace-nowrap font-display text-[clamp(64px,15.5vw,240px)] font-bold uppercase leading-[0.8] tracking-[-0.04em] text-white/4">
          Topaz Events
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-(--container-max) flex-col gap-3 px-6 py-7 font-sans text-[12px] text-text-muted md:flex-row md:items-center md:justify-between md:px-12">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-text">Topaz Event Organizers LLC</span> — All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="transition-colors duration-300 hover:text-gold"
            >
              Contact Us
            </Link>
            <p>
              Made by{" "}
              <Link
                href="https://ens.eg"
                target="_blank"
                rel="noreferrer"
                className="text-text transition-colors duration-300 hover:text-gold"
              >
                ens.eg
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

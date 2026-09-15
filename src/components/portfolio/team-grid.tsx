import Image from "@/components/ui/image-load";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { TEAM } from "@/data/team";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

/**
 * Leadership and account team. Each card leads with the person's portrait,
 * cropped to a uniform 4:5 so the row reads as one set rather than a mix; a
 * monogram stands in for anyone without a photo on file.
 */
export function TeamGrid() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <SectionLabel>The people</SectionLabel>
          <h2
            id="leadership-heading"
            className="reveal mt-6 max-w-[18ch] font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[0.95] tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            Leadership &
            <span className="block text-gold">account team</span>
          </h2>
        </Reveal>

        <Reveal>
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TEAM.map((member, index) => (
              <li
                key={member.name}
                className="reveal group relative overflow-hidden rounded-lg border border-white/10 bg-surface/40 transition-colors duration-500 hover:border-gold/40"
                style={
                  {
                    "--reveal-delay": `${Math.min(index, 9) * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-surface">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Topaz Events`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 46vw, 260px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-full items-center justify-center font-display text-[40px] font-bold uppercase tracking-[0.04em] text-gold/70"
                    >
                      {initials(member.name)}
                    </span>
                  )}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-[14px] font-bold uppercase leading-[1.15] tracking-[0.01em] transition-colors duration-300 group-hover:text-gold md:text-[15px]">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 font-sans text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-gold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

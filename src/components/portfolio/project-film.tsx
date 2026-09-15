import Image from "@/components/ui/image-load";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { VideoLightbox } from "@/components/ui/video-lightbox";
import type { Project } from "@/data/projects";

/**
 * The footage, where there is any. Still plus a play button rather than an
 * embed, so the YouTube player is only built for the reader who asks for it.
 */
export function ProjectFilm({ project }: { project: Project }) {
  if (!project.video) return null;

  return (
    <section
      aria-labelledby="film-heading"
      className="relative w-full border-t border-white/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-6 md:px-12">
        <Reveal>
          <SectionLabel>Watch it back</SectionLabel>
          <h2
            id="film-heading"
            className="reveal mt-6 max-w-[18ch] font-display text-[clamp(28px,3.8vw,48px)] font-bold uppercase leading-[0.98] tracking-[-0.015em]"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            The event <span className="text-gold">on film</span>
          </h2>
        </Reveal>

        <Reveal>
          <figure
            className="reveal mt-10 overflow-hidden rounded-xl border border-white/10"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 94vw, 1200px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/35"
              />
              <VideoLightbox video={project.video} />
            </div>

            <figcaption className="bg-surface/50 px-6 py-5 font-sans text-[14px] leading-[1.7] text-text-muted md:px-8">
              {project.video.description}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

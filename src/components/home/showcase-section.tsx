import Image from "@/components/ui/image-load";
import { Diamond } from "@/components/ui/diamond";
import { COLLAGE_PROJECTS } from "@/data/projects";

/**
 * Desktop scatter positions for the project photos. They ring the viewport so
 * the centred heading and diamond stay clear, matching the reference layout.
 *
 * The scatter is desktop-only. On a narrow screen it used to collapse into a
 * grid of the same stills, which put every project on the page as a picture
 * immediately before the events track put them there again as playable cards.
 * The diamond now hands straight over to the track.
 */
const SCATTER = [
  "left-[5vw] top-[16vh] w-[13vw]",
  "left-[23vw] top-[4vh] w-[12vw]",
  "right-[33vw] top-[2vh] w-[14vw]",
  "left-[28vw] bottom-[3vh] w-[13vw]",
  "right-[6vw] top-[27vh] w-[12vw]",
  "left-[6vw] bottom-[10vh] w-[16vw]",
  "right-[10vw] bottom-[12vh] w-[15vw]",
];

// The eighth slot holds no image: it is the empty box the lead event video
// flies out of on its way to the events section.
const LEAD_SLOT = "right-[30vw] bottom-[2vh] w-[17vw] aspect-[4/3]";

const SCATTER_PROJECTS = COLLAGE_PROJECTS.slice(0, SCATTER.length);

export function ShowcaseSection() {
  return (
    <section
      id="projects"
      aria-labelledby="showcase-heading"
      className="relative isolate w-full overflow-hidden"
    >
      <div className="relative flex min-h-[560px] flex-col items-center justify-center px-6 py-10 lg:min-h-screen lg:py-0">
        {/* Scattered project photography, tucked behind the diamond and title. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        >
          {SCATTER_PROJECTS.map((project, index) => (
            <figure
              key={project.slug}
              className={`absolute overflow-hidden rounded-lg ${SCATTER[index]}`}
            >
              <Image
                src={project.image}
                alt=""
                width={project.width}
                height={project.height}
                sizes="16vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          ))}
          <div data-flip-source="" className={`absolute ${LEAD_SLOT}`} />
        </div>

        <div className="relative z-10 flex w-full items-center justify-center">
          <div className="pointer-events-none relative aspect-square w-[min(94vw,84vh)]">
            <div
              aria-hidden="true"
              className="absolute inset-[-15%]"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(224,194,110,0.10) 0%, transparent 62%)",
              }}
            />
            <Diamond />
          </div>

          <h2
            id="showcase-heading"
            className="absolute left-1/2 top-1/2 w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(26px,3.2vw,44px)] font-bold uppercase leading-[0.95] tracking-[-0.01em]"
          >
            We create events{" "}
            <span className="text-gold">you remember</span> for years.
          </h2>
        </div>
      </div>
    </section>
  );
}

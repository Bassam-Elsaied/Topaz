import { InView } from "@/components/ui/in-view";
import logos from "@/data/client-logos.json";

const GAP = 64;

function labelFor(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ClientLogos() {
  // The track is duplicated so the -50% keyframe loops seamlessly.
  const marquee = [...logos, ...logos];

  return (
    <section
      aria-label="Topaz clients and partners"
      className="relative w-full overflow-x-clip border-t border-white/5 py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-2"
        style={{
          width: "1530px",
          height: "760px",
          top: "-550px",
          right: "-386px",
          background:
            "radial-gradient(ellipse farthest-side at center, rgba(224,194,110,0.08) 0%, transparent 100%)",
        }}
      />

      <h2 className="sr-only">Topaz clients &amp; partners</h2>

      <InView className="logos-marquee">
        <div
          className="logos-track relative z-5 flex items-center"
          style={{ width: "max-content" }}
        >
          {marquee.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-13 shrink-0 items-center justify-center md:h-16"
              style={{ marginLeft: GAP }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={index < logos.length ? labelFor(logo.alt) : ""}
                aria-hidden={index >= logos.length}
                width={logo.width}
                height={logo.height}
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
                className="block max-h-full w-auto max-w-50 object-contain opacity-70 transition-opacity duration-300 md:max-w-65"
              />
            </div>
          ))}
        </div>
      </InView>
    </section>
  );
}

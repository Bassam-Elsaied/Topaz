import type { SocialIconName } from "@/types";

/**
 * Social glyphs drawn on the same 1.4-weight stroke as the production icons,
 * so the footer set matches the rest of the page instead of importing five
 * different brand marks at five different weights. WhatsApp is the exception:
 * it is the official filled mark, because it doubles as the floating chat
 * button where people expect to recognise the real logo.
 */
export function SocialIcon({
  name,
  className = "size-4.5",
}: {
  name: SocialIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {name === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "youtube" && (
        <>
          <rect x="2" y="5" width="20" height="14" rx="4.5" />
          <path d="M10.8 9.3l4.4 2.7-4.4 2.7z" />
        </>
      )}
      {name === "linkedin" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3.5" />
          <path d="M7.6 10.6v6" />
          <circle cx="7.6" cy="7.7" r="0.95" fill="currentColor" stroke="none" />
          <path d="M11.6 16.6v-6M11.6 13.2c0-1.45 1.05-2.6 2.45-2.6s2.45 1.15 2.45 2.6v3.4" />
        </>
      )}
      {name === "facebook" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3.5" />
          <path d="M15.1 7.8h-1.6a2.1 2.1 0 0 0-2.1 2.1v10.9M9.3 12.6h4.6" />
        </>
      )}
      {name === "whatsapp" && (
        // The real brand mark rather than a stroked approximation. It is drawn
        // edge to edge in its own viewBox, so it is scaled into the 3-21 box
        // the stroked glyphs occupy and kept a touch larger to carry the same
        // optical weight as an outline.
        <g transform="translate(2.4 2.4) scale(0.8)" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </g>
      )}
    </svg>
  );
}

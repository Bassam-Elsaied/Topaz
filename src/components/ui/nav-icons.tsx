import type { NavIconName } from "@/types";

/**
 * Glyphs for the main navigation, drawn on the same 1.4-weight stroke and
 * 3-21 bounding box as the social icons so the two sets sit together.
 */
export function NavIcon({
  name,
  className = "size-4.5",
}: {
  name: NavIconName;
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
      {name === "home" && (
        <path d="M3.8 10.4 12 4l8.2 6.4V19a2 2 0 0 1-2 2h-3.4v-5.6H9.2V21H5.8a2 2 0 0 1-2-2z" />
      )}
      {name === "services" && (
        <>
          <rect x="3.5" y="5" width="17" height="16" rx="3" />
          <path d="M8 3v4M16 3v4M3.5 10h17" />
        </>
      )}
      {name === "av" && (
        <>
          <path d="M4 9.6h3L11 6.4v11.2L7 14.4H4z" />
          <path d="M14.8 9.4a3.8 3.8 0 0 1 0 5.2M17.6 7a7.4 7.4 0 0 1 0 10" />
        </>
      )}
      {name === "interactive" && (
        <>
          <rect x="7.5" y="7.5" width="9" height="9" rx="2" />
          <path d="M10 3.5v4M14 3.5v4M10 16.5v4M14 16.5v4M3.5 10h4M3.5 14h4M16.5 10h4M16.5 14h4" />
        </>
      )}
      {name === "about" && (
        <>
          <circle cx="12" cy="12" r="8.8" />
          <path d="M12 16.6v-4.9" />
          <circle cx="12" cy="8.2" r="0.95" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "portfolio" && (
        <>
          <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
          <circle cx="8.6" cy="9.6" r="1.4" />
          <path d="M3.4 16.2 8 12l3.4 3 3.4-3.4 5.8 5.4" />
        </>
      )}
      {name === "team" && (
        <>
          <circle cx="9.2" cy="8.6" r="3.3" />
          <path d="M3.6 19.6a5.6 5.6 0 0 1 11.2 0" />
          <path d="M16.2 6.3a3.3 3.3 0 0 1 0 6.1M17.4 14.8a5.6 5.6 0 0 1 3 4.8" />
        </>
      )}
      {name === "awards" && (
        <>
          <path d="M7.6 4h8.8v4.6a4.4 4.4 0 0 1-8.8 0z" />
          <path d="M7.6 5.6H5.2a2.4 2.4 0 0 0 2.4 4.4M16.4 5.6h2.4a2.4 2.4 0 0 1-2.4 4.4" />
          <path d="M12 13v3.2M9 20.4h6l-.8-4.2H9.8z" />
        </>
      )}
      {name === "blog" && (
        <>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="M7 9h6M7 12.5h10M7 16h7" />
        </>
      )}
    </svg>
  );
}

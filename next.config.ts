import type { NextConfig } from "next";

/**
 * Sent on every response. None of these change how a page renders — they only
 * tell the browser what the site is allowed to do, which is the part a static
 * marketing site can get wrong silently.
 */
const SECURITY_HEADERS = [
  // Stop the browser second-guessing a declared Content-Type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // The site is never meant to be framed, so clickjacking has nothing to sit on.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Send the origin to third parties, the full path only to ourselves.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing here asks for hardware; say so rather than leaving it open.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Pin the site to HTTPS once a browser has seen it there.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  // No point advertising the framework and version to a scanner.
  poweredByHeader: false,
  headers: async () => [{ source: "/:path*", headers: SECURITY_HEADERS }],
};

export default nextConfig;

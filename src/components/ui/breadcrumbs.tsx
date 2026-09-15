import Link from "next/link";
import type { Crumb } from "@/lib/schema";

/**
 * Visible trail for the inner pages. The matching `BreadcrumbList` is emitted
 * alongside it by each page, so the markup a reader sees and the one a crawler
 * reads always describe the same path.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted md:text-[12px]">
        {trail.map((crumb, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2.5">
              {last ? (
                <span aria-current="page" className="text-gold">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="transition-colors duration-300 hover:text-gold"
                  >
                    {crumb.label}
                  </Link>
                  <span
                    aria-hidden="true"
                    className="size-1 rotate-45 bg-white/25"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

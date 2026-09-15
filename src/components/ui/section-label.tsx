/**
 * Eyebrow above every section heading. The tilted square is the diamond motif
 * from the collage section, shrunk down to punctuation.
 */
export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-gold md:text-[12px] ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold/70" />
      {children}
    </p>
  );
}

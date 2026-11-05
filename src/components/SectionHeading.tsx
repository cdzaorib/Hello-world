type Props = { eyebrow: string; title: string; id: string; align?: "left" | "center"; tone?: "dark" | "light" };

export function SectionHeading({ eyebrow, title, id, align = "left", tone = "dark" }: Props) {
  const light = tone === "light";
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className={`mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.28em] uppercase ${light ? "text-gold-light" : "text-gold-dark"}`}>
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </p>
      <h2 id={id} className={`font-display text-[2.35rem] leading-[1.04] font-medium text-balance sm:text-5xl lg:text-[3.5rem] ${light ? "text-cream" : "text-forest"}`}>
        {title}
      </h2>
    </div>
  );
}

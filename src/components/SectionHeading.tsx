export function SectionHeading({ eyebrow, title, id, align = "left", tone = "dark" }: { eyebrow: string; title: string; id: string; align?: "left" | "center"; tone?: "dark" | "light" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className={`mb-3 text-xs font-medium tracking-[0.25em] uppercase ${tone === "light" ? "text-gold" : "text-gold-dark"}`}>{eyebrow}</p>
      <h2 id={id} className="font-display text-4xl leading-[1.05] font-medium text-balance md:text-5xl">{title}</h2>
    </div>
  );
}

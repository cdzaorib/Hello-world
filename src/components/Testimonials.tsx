import { testimonials } from "@/content/testimonials";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Só aparece quando houver depoimentos reais e autorizados em content/testimonials.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="dep-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="dep-title" eyebrow="Depoimentos" title="Quem já viveu a experiência" />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Reveal>
                <figure className="h-full rounded-[1.25rem] border border-forest/[.07] bg-ivory p-7">
                  <blockquote className="font-display text-xl leading-snug text-forest">“{t.text}”</blockquote>
                  <figcaption className="mt-5 text-sm text-gold-dark">{t.name}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { testimonials } from "@/content/testimonials";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Não renderiza nada enquanto não houver depoimentos reais autorizados. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="dep-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="dep-title" eyebrow="Depoimentos" title="Quem já viveu a experiência" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Reveal>
                <figure className="rounded-2xl bg-white p-7">
                  <blockquote className="font-display text-xl leading-snug">“{t.text}”</blockquote>
                  <figcaption className="mt-4 text-sm text-taupe-dark">{t.name}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

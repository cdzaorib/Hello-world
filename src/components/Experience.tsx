import { gallery } from "@/content/gallery";
import { testimonials } from "@/content/testimonials";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Galeria de fotos oficiais + depoimentos (só aparecem os autorizados). */
export function Experience() {
  return (
    <section aria-labelledby="exp-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="exp-title" eyebrow="Experiência e confiança" title="Cuidado em cada detalhe" />
        <ul className="mt-12 grid gap-3 md:grid-cols-5 md:gap-5">
          {gallery.map((g, i) => (
            <li key={g.label} className={i === 0 ? "md:col-span-3" : "md:col-span-2"}>
              <Reveal delay={i * 0.06} className="h-full">
                <ImageSlot
                  {...g}
                  sizes={i === 0 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                  className={`h-full rounded-xl ${i === 0 ? "aspect-[3/2]" : "aspect-square md:aspect-auto"}`}
                />
              </Reveal>
            </li>
          ))}
        </ul>
        {testimonials.length > 0 && (
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name}>
                <Reveal>
                  <figure className="rounded-2xl bg-sage-soft p-7">
                    <blockquote className="font-display text-xl leading-snug">“{t.text}”</blockquote>
                    <figcaption className="mt-4 text-sm text-gold-dark">{t.name}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

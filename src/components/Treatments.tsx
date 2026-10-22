import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/content/treatments";
import { bookingUrl } from "@/lib/whatsapp";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="trat-title" className="bg-nude/30 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="trat-title" eyebrow="Tratamentos" title="Cuidados pensados para você" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <li key={t.slug}>
              <Reveal delay={i * 0.08} className="group h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white transition duration-500 hover:-translate-y-1">
                  <ImageSlot src={t.image.src} alt={t.image.alt} label="Imagem do tratamento" sizes="(min-width: 1024px) 33vw, 100vw" className="aspect-[4/3]" />
                  <div className="flex flex-1 flex-col p-6">
                    {t.placeholder && <span className="mb-2 text-xs tracking-widest text-taupe-dark uppercase">A confirmar</span>}
                    <h3 className="font-display text-2xl font-medium">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-cafe/75">{t.summary}</p>
                    <a
                      href={t.detail && !t.placeholder ? `/tratamentos/${t.slug}` : bookingUrl(`Olá! Gostaria de saber mais sobre: ${t.title}.`)}
                      {...(t.detail && !t.placeholder ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Saiba mais <ArrowUpRight aria-hidden className="size-4" />
                      <span className="sr-only"> sobre {t.title}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

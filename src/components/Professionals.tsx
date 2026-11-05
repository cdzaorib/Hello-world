import { ArrowUpRight } from "lucide-react";
import { procedures } from "@/content/procedures";
import { professionals } from "@/content/professionals";
import { professionalsIntro } from "@/content/site";
import { professionalBookingUrl } from "@/lib/whatsapp";
import { buttonClass } from "./Button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Professionals() {
  return (
    <section id="profissionais" aria-labelledby="prof-title" className="relative overflow-hidden bg-forest py-24 text-cream md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <SectionHeading id="prof-title" eyebrow={professionalsIntro.eyebrow} title={professionalsIntro.title} tone="light" />
          <p className="mt-6 text-[1.02rem] leading-relaxed text-cream/75">{professionalsIntro.text}</p>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {Object.values(professionals).map((p, i) => {
            const areas = procedures.filter((proc) => proc.professional === p.id).map((proc) => proc.title);
            return (
              <Reveal key={p.id}>
                <article className={`flex flex-col gap-10 md:items-center md:gap-14 lg:gap-20 ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="relative mx-auto w-full max-w-[22rem] md:mx-0 md:w-5/12 md:max-w-none">
                    <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.25rem] border border-gold/40" />
                    <ImageSlot
                      src={p.photo}
                      alt={`Foto de ${p.name}`}
                      label={`Foto de ${p.name}`}
                      position="object-top"
                      sizes="(min-width: 768px) 30vw, 22rem"
                      className="relative aspect-[4/5] rounded-[1.25rem]"
                    />
                  </div>

                  <div className="md:w-7/12">
                    <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold-light uppercase">{p.area}</p>
                    <h3 className="mt-4 font-display text-[2.8rem] leading-none font-medium sm:text-6xl">{p.name}</h3>
                    {p.registration && <p className="mt-4 text-sm text-cream/70">{p.registration}</p>}
                    {p.bio && <p className="mt-6 max-w-xl leading-relaxed text-cream/85">{p.bio}</p>}

                    <p className="mt-9 text-[0.7rem] font-semibold tracking-[0.24em] text-cream/55 uppercase">Atua em</p>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {areas.map((t) => (
                        <li key={t} className="flex gap-3 text-[0.95rem] leading-snug text-cream/85">
                          <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-gold" />
                          {t}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={professionalBookingUrl(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track="whatsapp_click"
                      data-track-location="profissionais"
                      data-track-professional={p.id}
                      className={`${buttonClass("light")} mt-10 w-full sm:w-auto`}
                    >
                      Agendar com {p.shortName}
                      <ArrowUpRight aria-hidden className="size-4" />
                      <span className="sr-only">(abre o WhatsApp)</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

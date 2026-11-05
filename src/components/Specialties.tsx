import { ArrowUpRight } from "lucide-react";
import { procedures } from "@/content/procedures";
import { procedureBooking } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Specialties() {
  return (
    <section id="especialidades" aria-labelledby="esp-title" className="bg-sage-soft/60 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-gold/50 pb-6">
          <SectionHeading id="esp-title" eyebrow="Especialidades" title="Cuidado completo, em um só lugar" />
          <p className="max-w-sm text-sm leading-relaxed text-graphite/75">
            Escolha o procedimento e fale diretamente com a profissional responsável pelo WhatsApp.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => {
            const { url, viaWhatsapp, professional } = procedureBooking(p);
            const Icon = p.icon;
            return (
              <li key={p.slug}>
                <Reveal delay={(i % 3) * 0.07} className="h-full">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="procedure_click"
                    data-track-procedure={p.slug}
                    data-track-professional={professional.id}
                    data-track-channel={viaWhatsapp ? "whatsapp" : "instagram"}
                    className="group flex h-full items-center gap-4 rounded-2xl bg-cream p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(23,59,42,.25)]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-forest">
                      <Icon aria-hidden className="size-5" strokeWidth={1.3} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl leading-tight text-forest">{p.title}</span>
                      <span className="mt-1 block text-xs text-graphite/65">com {professional.name}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-gold-dark">
                      <span className="hidden sm:inline">Agendar</span>
                      <ArrowUpRight aria-hidden className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span className="sr-only">
                        {" "}avaliação de {p.title} com {professional.name}, {viaWhatsapp ? "pelo WhatsApp" : "pelo Instagram"}
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-xs text-graphite/60">Procedimentos e condutas são definidos individualmente, após avaliação profissional.</p>
      </div>
    </section>
  );
}

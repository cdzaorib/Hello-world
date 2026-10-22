import { ArrowUpRight } from "lucide-react";
import { specialtyGroups } from "@/content/specialties";
import { specialtyUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Specialties() {
  return (
    <section id="especialidades" aria-labelledby="esp-title" className="bg-sage-soft/60 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="esp-title" eyebrow="Especialidades" title="Dois caminhos, um mesmo cuidado" />
        <div className="mt-14 space-y-16">
          {specialtyGroups.map((g) => (
            <div key={g.id} role="group" aria-labelledby={`g-${g.id}`}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-gold/50 pb-3">
                <h3 id={`g-${g.id}`} className="font-display text-3xl font-medium text-forest">{g.title}</h3>
                <p className="text-sm text-graphite/70">{g.intro}</p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map(({ slug, title, icon: Icon }, i) => (
                  <li key={slug}>
                    <Reveal delay={(i % 3) * 0.07} className="h-full">
                      <a
                        href={specialtyUrl(title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-track="specialty_click"
                        data-track-specialty={slug}
                        className="group flex h-full items-center gap-4 rounded-2xl bg-cream p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(23,59,42,.25)]"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/60 text-forest">
                          <Icon aria-hidden className="size-5" strokeWidth={1.3} />
                        </span>
                        <span className="flex-1 font-display text-xl leading-tight text-forest">{title}</span>
                        <span className="flex items-center gap-1 text-xs font-medium text-gold-dark">
                          <span className="hidden sm:inline">Agendar</span>
                          <ArrowUpRight aria-hidden className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span className="sr-only"> avaliação: {title}</span>
                        </span>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-graphite/60">Procedimentos e condutas são definidos individualmente, após avaliação profissional.</p>
      </div>
    </section>
  );
}

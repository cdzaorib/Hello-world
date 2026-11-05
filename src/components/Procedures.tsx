"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { type CategoryId, type Procedure, categories, procedures } from "@/content/procedures";
import { procedureBooking } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Filter = CategoryId | "todos";

const filters: { id: Filter; label: string; short: string; count: number }[] = [
  { id: "todos", label: "Todos", short: "Todos", count: procedures.length },
  ...categories.map((c) => ({ ...c, count: procedures.filter((p) => p.category === c.id).length })),
];

const categoryLabel = Object.fromEntries(categories.map((c) => [c.id, c.label])) as Record<CategoryId, string>;
const ease = [0.22, 1, 0.36, 1] as const;

export function Procedures() {
  const [filter, setFilter] = useState<Filter>("todos");
  const reduce = useReducedMotion();
  const visible = filter === "todos" ? procedures : procedures.filter((p) => p.category === filter);

  return (
    <section id="procedimentos" aria-labelledby="proc-title" className="bg-sage-soft/60 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading id="proc-title" eyebrow="Procedimentos" title="Cuidado completo, em um só lugar" />
          </div>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-graphite/75 lg:col-span-5 lg:justify-self-end">
            Escolha o procedimento e fale diretamente com a profissional responsável pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10">
          <div role="group" aria-label="Filtrar procedimentos" className="inline-flex max-w-full gap-1 rounded-full border border-forest/10 bg-ivory/70 p-1">
            {filters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={`relative min-h-10 shrink-0 cursor-pointer rounded-full px-4 text-[0.82rem] font-medium whitespace-nowrap transition-colors duration-300 sm:px-5 ${
                    active ? "text-cream" : "text-graphite/70 hover:text-forest"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="procedure-filter"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ duration: reduce ? 0 : 0.35, ease }}
                    />
                  )}
                  <span className="relative">
                    <span className="sm:hidden">{f.short}</span>
                    <span className="hidden sm:inline">{f.label}</span>
                    <span className={`ml-1.5 hidden text-[0.7rem] sm:inline ${active ? "text-cream/70" : "text-graphite/45"}`}>{f.count}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <p aria-live="polite" className="sr-only">
          {visible.length} procedimentos exibidos
        </p>

        <motion.ul layout={!reduce} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease }}
                className="h-full"
              >
                <ProcedureCard procedure={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-10 text-xs text-graphite/60">Procedimentos e condutas são definidos individualmente, após avaliação profissional.</p>
      </div>
    </section>
  );
}

function ProcedureCard({ procedure: p }: { procedure: Procedure }) {
  const { url, professional } = procedureBooking(p);
  const Icon = p.icon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-track="procedure_click"
      data-track-procedure={p.slug}
      data-track-professional={professional.id}
      className="group flex h-full flex-col rounded-[1.25rem] border border-forest/[.07] bg-ivory p-5 transition duration-300 ease-[var(--ease-soft)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_22px_44px_-28px_rgba(23,59,42,.45)] sm:p-7"
    >
      {/* No celular: ícone ao lado do texto (card mais compacto). A partir de sm: ícone no topo. */}
      <div className="flex flex-1 gap-4 sm:flex-col sm:gap-0">
        <div className="flex shrink-0 items-start justify-between sm:mb-6">
          <span className="flex size-10 items-center justify-center rounded-full bg-sage-soft text-forest ring-1 ring-gold/35 transition duration-300 group-hover:bg-forest group-hover:text-cream sm:size-12">
            <Icon aria-hidden className="size-[1.1rem] sm:size-5" strokeWidth={1.4} />
          </span>
          <span className="hidden pt-1 text-right text-[0.65rem] font-semibold tracking-[0.18em] text-gold-dark uppercase sm:block">
            {categoryLabel[p.category]}
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="font-display text-[1.45rem] leading-[1.1] font-medium text-balance text-forest sm:text-[1.6rem]">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/70 sm:mt-3">{p.description}</p>
          <p className="mt-4 flex items-center gap-2 text-[0.8rem] text-graphite/65">
            <Image src={professional.avatar} alt="" width={24} height={24} className="size-6 rounded-full object-cover" />
            <span>
              com <span className="font-semibold text-graphite">{professional.name}</span>
            </span>
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-forest/10 pt-4 sm:mt-6 sm:pt-5">
        <span className="text-[0.85rem] font-semibold tracking-wide text-forest">Agendar avaliação</span>
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition duration-300 group-hover:bg-forest-deep">
          <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <span className="sr-only">(abre o WhatsApp de {professional.name})</span>
    </a>
  );
}

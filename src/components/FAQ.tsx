import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <SectionHeading id="faq-title" eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="mt-10 divide-y divide-cafe/15 border-y border-cafe/15">
          {faq.map((f) => (
            <details key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl [&::-webkit-details-marker]:hidden">
                {f.question}
                <Plus aria-hidden className="size-5 shrink-0 transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-cafe/75">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

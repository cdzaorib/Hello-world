import { differentials } from "@/content/differentials";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="dif-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="dif-title" eyebrow="Diferenciais" title="O que nos define" align="center" />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {differentials.map(({ icon: Icon, title, text, placeholder }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08} className="text-center">
                <Icon aria-hidden className="mx-auto size-8 text-taupe-dark" strokeWidth={1.25} />
                <h3 className="mt-5 font-display text-2xl font-medium">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cafe/75">
                  {placeholder && <span className="sr-only">Pendente: </span>}
                  {text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

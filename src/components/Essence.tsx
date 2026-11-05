import { essence } from "@/content/site";
import { Botanical } from "./Botanical";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Essence() {
  const [uniforme, ampolas, detalhe] = essence.images;
  return (
    <section id="essencia" aria-labelledby="ess-title" className="relative overflow-hidden py-24 md:py-32">
      <Botanical className="pointer-events-none absolute top-16 -right-16 hidden h-96 rotate-12 text-sage/25 md:block" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Fotos em tamanho moderado: os originais disponíveis têm baixa resolução. */}
        <Reveal className="mx-auto w-full max-w-[32rem] lg:col-span-6 lg:max-w-none">
          <div className="grid grid-cols-12 items-start gap-3 sm:gap-4">
            <div className="col-span-7">
              <ImageSlot {...uniforme} sizes="(min-width: 1024px) 20rem, 58vw" className="aspect-[3/4] rounded-[1.25rem]" />
              <figure className="mt-6 hidden pr-4 sm:block">
                <span aria-hidden className="block h-px w-10 bg-gold" />
                <blockquote className="mt-4 font-display text-[1.6rem] leading-snug text-forest italic">{essence.quote}</blockquote>
              </figure>
            </div>
            <div className="col-span-5 grid gap-3 pt-12 sm:gap-4 sm:pt-16">
              <ImageSlot {...ampolas} sizes="(min-width: 1024px) 14rem, 40vw" className="arch-2-3 aspect-[2/3]" />
              <ImageSlot {...detalhe} sizes="(min-width: 1024px) 14rem, 40vw" className="aspect-square rounded-[1.25rem]" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
          <SectionHeading id="ess-title" eyebrow={essence.eyebrow} title={essence.title} />
          <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-graphite/75">
            {essence.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l border-gold pl-5 font-display text-[1.45rem] leading-snug text-forest italic sm:hidden">
            {essence.quote}
          </blockquote>
          <dl className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {essence.pillars.map((p) => (
              <div key={p.title} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-4 sm:grid-cols-[8rem_1fr]">
                <dt className="font-display text-[1.6rem] leading-none text-forest">{p.title}</dt>
                <dd className="text-sm leading-relaxed text-graphite/70">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

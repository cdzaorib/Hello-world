import { essence } from "@/content/site";
import { Botanical } from "./Botanical";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Essence() {
  const [a, b] = essence.images;
  return (
    <section id="essencia" aria-labelledby="ess-title" className="relative overflow-hidden py-20 md:py-28">
      <Botanical className="pointer-events-none absolute top-10 -right-12 h-80 rotate-12 text-sage/25" />
      <div className="container-x relative grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal className="grid grid-cols-5 gap-4">
          <ImageSlot {...a} className="col-span-3 aspect-[3/4] rounded-2xl" sizes="30vw" />
          <ImageSlot {...b} className="col-span-2 mt-12 aspect-[2/3] rounded-t-[999px] rounded-b-2xl" sizes="20vw" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading id="ess-title" eyebrow={essence.eyebrow} title={essence.title} />
          <div className="mt-6 space-y-4 leading-relaxed text-graphite/80">
            {essence.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {essence.pillars.map((p) => (
              <li key={p} className="rounded-full border border-gold/60 px-5 py-2 font-display text-lg text-forest">{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

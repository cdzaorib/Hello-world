import { about } from "@/content/site";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-20 md:py-28">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <ImageSlot {...about.image} className="aspect-[5/6] rounded-2xl" />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading id="sobre-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 leading-relaxed text-cafe/80">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

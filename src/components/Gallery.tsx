import { gallery } from "@/content/gallery";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="clinica" aria-labelledby="gal-title" className="bg-cafe py-20 text-ivory md:py-28">
      <div className="container-x">
        <SectionHeading id="gal-title" eyebrow="Experiência" title="Um espaço feito para acolher" />
        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {gallery.map((g, i) => (
            <li key={g.label} className={i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""}>
              <Reveal delay={i * 0.06} className="h-full">
                <ImageSlot {...g} sizes="(min-width: 768px) 25vw, 50vw" className={`rounded-xl ${i === 0 ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-80" : "aspect-square"}`} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

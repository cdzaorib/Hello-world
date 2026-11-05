import { professionals } from "@/content/professionals";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Professionals() {
  return (
    <section id="profissionais" aria-labelledby="prof-title" className="bg-forest py-20 text-cream md:py-28">
      <div className="container-x">
        <SectionHeading id="prof-title" eyebrow="Profissionais" title="Conheça quem cuida de você" tone="light" />
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {Object.values(professionals).map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.1}>
                <article className="grid gap-6 sm:grid-cols-5">
                  <ImageSlot src={p.photo} alt={`Foto de ${p.name}`} label={`Foto de ${p.name}`} className="aspect-[4/5] rounded-2xl sm:col-span-2" sizes="(min-width: 768px) 20vw, 100vw" />
                  <div className="sm:col-span-3">
                    <h3 className="font-display text-3xl font-medium">{p.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.2em] text-gold uppercase">{p.area}</p>
                    <p className="mt-4 text-sm text-cream/75">{p.registration ?? "[PENDENTE] Formação e registro profissional a confirmar."}</p>
                    {p.bio && <p className="mt-4 leading-relaxed text-cream/85">{p.bio}</p>}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

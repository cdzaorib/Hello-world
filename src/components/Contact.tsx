import { Clock, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { bookingUrl, hasWhatsapp } from "@/lib/whatsapp";
import { Button } from "./Button";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const addr = site.address;
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-nude/30 py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading id="contato-title" eyebrow="Contato" title="Agende sua avaliação" />
          <p className="mt-5 max-w-md leading-relaxed text-cafe/80">
            Fale com nossa equipe e escolha o melhor horário para você.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={bookingUrl()} external>
              <MessageCircle aria-hidden className="size-4" />
              {hasWhatsapp ? "Chamar no WhatsApp" : "Falar pelo Instagram"}
            </Button>
            <Button href={site.instagram.url} variant="ghost" external>
              <InstagramIcon className="size-4" />
              {site.instagram.handle}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6">
            <div className="flex gap-4">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-taupe-dark" />
              <div>
                <dt className="font-medium">Endereço</dt>
                <dd className="text-cafe/75">
                  {addr ? `${addr.street} — ${addr.city}/${addr.state}` : "[PENDENTE] Endereço a confirmar."}
                  {site.mapsLink && <> · <a className="underline" href={site.mapsLink} target="_blank" rel="noopener noreferrer">Ver no mapa</a></>}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock aria-hidden className="mt-1 size-5 shrink-0 text-taupe-dark" />
              <div>
                <dt className="font-medium">Horário de atendimento</dt>
                <dd className="text-cafe/75">
                  {site.hours ? site.hours.map((h) => <span key={h} className="block">{h}</span>) : "[PENDENTE] Horário a confirmar."}
                </dd>
              </div>
            </div>
          </dl>
          {site.mapsEmbedUrl && (
            <iframe title="Localização da clínica" src={site.mapsEmbedUrl} loading="lazy" className="mt-8 aspect-video w-full rounded-2xl border-0" />
          )}
        </Reveal>
      </div>
    </section>
  );
}

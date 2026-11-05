import Link from "next/link";
import { MapPin } from "lucide-react";
import { nav, site } from "@/content/site";
import { professionals } from "@/content/professionals";
import { bookingUrl, hasWhatsapp, professionalBooking } from "@/lib/whatsapp";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  const { neighborhood, city, state } = site.location;
  return (
    <footer className="bg-forest py-14 text-cream">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <Logo size={72} />
          <p className="mt-4 max-w-xs text-sm text-cream/75">{site.positioning}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2 text-sm">
            {nav.map((i) => (
              <li key={i.href}><a href={`/${i.href}`} className="text-cream/80 hover:text-cream">{i.label}</a></li>
            ))}
            <li><Link href="/politica-de-privacidade" className="text-cream/80 hover:text-cream">Aviso de privacidade</Link></li>
          </ul>
        </nav>
        <address className="space-y-3 text-sm not-italic text-cream/85">
          <p className="flex gap-2">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
            <span>
              {site.street ? `${site.street} — ` : ""}{neighborhood}, {city}/{state}
              {!site.street && <span className="block text-cream/60">[PENDENTE] endereço completo</span>}
              {site.mapsLink && <a className="block underline" href={site.mapsLink} target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>}
            </span>
          </p>
          <p>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" data-track="instagram_click" data-track-location="footer" className="inline-flex items-center gap-2 hover:text-cream">
              <InstagramIcon className="size-5" /> {site.instagram.handle}
            </a>
          </p>
          {hasWhatsapp && (
            <p>
              <a href={bookingUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="footer" className="hover:text-cream">
                WhatsApp da clínica
              </a>
            </p>
          )}
          {Object.values(professionals).map((p) =>
            p.whatsappNumber ? (
              <p key={p.id}>
                <a href={professionalBooking(p).url} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-location="footer" data-track-professional={p.id} className="hover:text-cream">
                  WhatsApp · {p.name}
                </a>
              </p>
            ) : (
              <p key={p.id} className="text-cream/60">[PENDENTE] WhatsApp · {p.name}</p>
            ),
          )}
          {site.hours && <p>{site.hours.join(" · ")}</p>}
        </address>
      </div>
      <div className="container-x mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
        © {new Date().getFullYear()} {site.legal.companyName ?? site.name}.
        {site.legal.cnpj && <> CNPJ {site.legal.cnpj}.</>} Todos os direitos reservados.
      </div>
    </footer>
  );
}

import Link from "next/link";
import { professionals } from "@/content/professionals";
import { nav, site } from "@/content/site";
import { formatPhone, professionalBookingUrl } from "@/lib/whatsapp";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";
import { Wordmark } from "./Wordmark";

const heading = "text-[0.68rem] font-semibold tracking-[0.26em] text-gold-light uppercase";
const link = "text-cream/80 transition-colors hover:text-cream";

export function Footer() {
  const { neighborhood, city, state } = site.location;
  return (
    <footer id="rodape" className="bg-forest text-cream">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <div className="flex items-center gap-4">
            <Logo size={60} />
            <Wordmark tone="light" />
          </div>
          <p className="mt-6 max-w-xs font-display text-xl leading-snug text-cream/85">{site.positioning}</p>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2 lg:col-start-6">
          <h2 className={heading}>Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((i) => (
              <li key={i.href}>
                <a href={i.href} className={link}>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={heading}>Agendamentos</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {Object.values(professionals).map((p) => (
              <li key={p.id}>
                <a
                  href={professionalBookingUrl(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  data-track-location="footer"
                  data-track-professional={p.id}
                  className={`${link} block`}
                >
                  <span className="block text-cream">{p.name}</span>
                  <span className="text-cream/65">WhatsApp {formatPhone(p.whatsappNumber)}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                data-track="instagram_click"
                data-track-location="footer"
                className={`${link} inline-flex items-center gap-2`}
              >
                <InstagramIcon className="size-4" /> {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className={heading}>Localização</h2>
          <address className="mt-5 text-sm leading-relaxed text-cream/80 not-italic">
            {site.street && (
              <>
                {site.street}
                <br />
              </>
            )}
            {neighborhood}
            <br />
            {city} — {state}
            {site.mapsLink && (
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className={`${link} mt-2 block underline underline-offset-4`}>
                Ver no Google Maps
              </a>
            )}
          </address>
          {site.hours && <p className="mt-4 text-sm text-cream/70">{site.hours.join(" · ")}</p>}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-3 py-7 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legal.companyName ?? site.name}.{site.legal.cnpj && <> CNPJ {site.legal.cnpj}.</>} Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade" className="transition-colors hover:text-cream">
            Aviso de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

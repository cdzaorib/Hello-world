import Link from "next/link";
import { nav, site } from "@/content/site";
import { InstagramIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-cafe py-14 text-ivory">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ivory/70">{site.tagline}.</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2 text-sm">
            {nav.map((i) => (
              <li key={i.href}><a href={`/${i.href}`} className="text-ivory/80 hover:text-ivory">{i.label}</a></li>
            ))}
            <li><Link href="/politica-de-privacidade" className="text-ivory/80 hover:text-ivory">Política de privacidade</Link></li>
          </ul>
        </nav>
        <div className="text-sm text-ivory/80">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-ivory">
            <InstagramIcon className="size-5" /> {site.instagram.handle}
          </a>
          {site.email && <p className="mt-2">{site.email}</p>}
        </div>
      </div>
      <div className="container-x mt-10 border-t border-ivory/15 pt-6 text-xs text-ivory/60">
        © {new Date().getFullYear()} {site.legal.companyName ?? site.name}.
        {site.legal.cnpj && <> CNPJ {site.legal.cnpj}.</>} Todos os direitos reservados.
      </div>
    </footer>
  );
}

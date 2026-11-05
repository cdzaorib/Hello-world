import { MessageCircle } from "lucide-react";
import { finalCta, site } from "@/content/site";
import { bookingUrl, hasWhatsapp } from "@/lib/whatsapp";
import { Button } from "./Button";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-sage-soft/60 py-24 md:py-32">
      <Reveal className="container-x max-w-3xl text-center">
        <h2 id="contato-title" className="font-display text-4xl leading-[1.05] font-medium text-balance text-forest md:text-6xl">{finalCta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-graphite/75">{finalCta.subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={bookingUrl()} external track={{ name: "whatsapp_click", location: "cta_final" }}>
            <MessageCircle aria-hidden className="size-4" />
            {hasWhatsapp ? finalCta.button : "Falar pelo Instagram"}
          </Button>
          <Button href={site.instagram.url} variant="ghost" external track={{ name: "instagram_click", location: "cta_final" }}>
            <InstagramIcon className="size-4" /> {site.instagram.handle}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

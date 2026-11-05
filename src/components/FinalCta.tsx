import { finalCta, site } from "@/content/site";
import { BookingTrigger } from "./BookingTrigger";
import { Botanical } from "./Botanical";
import { Button } from "./Button";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden py-24 md:py-36">
      <Botanical className="pointer-events-none absolute -bottom-12 -left-10 h-80 text-sage/25" />
      <Botanical className="pointer-events-none absolute -top-10 -right-10 hidden h-80 rotate-180 text-sage/20 md:block" />
      <Reveal className="container-x relative max-w-3xl text-center">
        <span aria-hidden className="mx-auto mb-8 block h-12 w-px bg-gold/60" />
        <h2 id="contato-title" className="font-display text-[2.5rem] leading-[1.04] font-medium text-balance text-forest sm:text-6xl lg:text-[4rem]">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-graphite/75">{finalCta.subtitle}</p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <BookingTrigger location="cta_final">{finalCta.button}</BookingTrigger>
          <Button href={site.instagram.url} variant="ghost" external track={{ name: "instagram_click", location: "cta_final" }}>
            <InstagramIcon className="size-4" /> {site.instagram.handle}
          </Button>
        </div>
        <p className="mt-10 text-[0.75rem] tracking-[0.2em] text-graphite/55 uppercase">
          {site.location.neighborhood} · {site.location.city}
        </p>
      </Reveal>
    </section>
  );
}

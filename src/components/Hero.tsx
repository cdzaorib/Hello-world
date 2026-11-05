import { ArrowDown } from "lucide-react";
import { hero, highlights, site } from "@/content/site";
import { BookingTrigger } from "./BookingTrigger";
import { Botanical } from "./Botanical";
import { Button } from "./Button";
import { ImageSlot } from "./ImageSlot";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-24 lg:pt-32">
      <Botanical className="pointer-events-none absolute top-40 -left-20 hidden h-[30rem] text-sage/20 lg:block" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pb-8">
          <p className="rise-in inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.26em] text-gold-dark uppercase">
            <span aria-hidden className="h-px w-8 bg-current opacity-60" />
            {site.positioning}
          </p>
          <h1
            id="hero-title"
            className="rise-in mt-6 font-display text-[2.75rem] leading-[1] font-medium tracking-[-0.01em] text-balance text-forest [animation-delay:70ms] sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
          >
            {hero.titleLead} <em className="font-normal text-gold-dark italic">{hero.titleAccent}</em>
          </h1>
          <p className="rise-in mt-7 max-w-xl text-[1.05rem] leading-relaxed text-graphite/75 [animation-delay:140ms] sm:text-lg">{hero.subtitle}</p>
          <div className="rise-in mt-10 flex flex-col gap-3 [animation-delay:210ms] sm:flex-row sm:items-center">
            <Button href="#procedimentos">
              {hero.primaryCta}
              <ArrowDown aria-hidden className="size-4" />
            </Button>
            <BookingTrigger location="hero" variant="ghost">
              {hero.secondaryCta}
            </BookingTrigger>
          </div>
        </div>

        <div className="rise-in relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-none">
            <div aria-hidden className="arch-4-5 absolute inset-0 translate-x-3 -translate-y-3 border border-gold/50 sm:translate-x-4 sm:-translate-y-4" />
            <ImageSlot
              {...hero.image}
              priority
              position="object-top"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 26rem, 92vw"
              className="arch-4-5 relative aspect-[4/5]"
            />
            <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ivory px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.14em] whitespace-nowrap text-forest uppercase shadow-[0_10px_30px_-18px_rgba(23,59,42,.5)]">
              {hero.caption}
            </p>
          </div>
        </div>
      </div>

      <div className="container-x mt-20 lg:mt-24">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-forest/10 py-7 md:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-[0.85rem] text-graphite/75">
              <Icon aria-hidden className="size-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

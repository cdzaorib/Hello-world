"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, site } from "@/content/site";
import { bookingUrl } from "@/lib/whatsapp";
import { Botanical } from "./Botanical";
import { Button } from "./Button";
import { ImageSlot } from "./ImageSlot";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <Botanical className="pointer-events-none absolute -bottom-10 -left-10 h-96 text-sage/25" />
      <div className="container-x relative grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p {...item(0)} className="mb-6 text-xs font-medium tracking-[0.3em] text-gold-dark uppercase">{site.positioning}</motion.p>
          <motion.h1 {...item(1)} id="hero-title" className="font-display text-5xl leading-[0.98] font-medium text-balance text-forest sm:text-6xl lg:text-7xl">
            {hero.title}
          </motion.h1>
          <motion.p {...item(2)} className="mt-6 max-w-lg text-lg leading-relaxed text-graphite/80">{hero.subtitle}</motion.p>
          <motion.div {...item(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={bookingUrl()} external track={{ name: "whatsapp_click", location: "hero" }}>{hero.primaryCta}</Button>
            <Button href="#especialidades" variant="ghost">{hero.secondaryCta}</Button>
          </motion.div>
          <motion.p {...item(4)} className="mt-6 text-sm text-graphite/60">{site.location.neighborhood}, {site.location.city}</motion.p>
        </div>
        <motion.div {...item(2)} className="md:col-span-5">
          <ImageSlot {...hero.image} position="object-top" priority sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] arch-4-5" />
        </motion.div>
      </div>
    </section>
  );
}

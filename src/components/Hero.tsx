"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, site } from "@/content/site";
import { bookingUrl } from "@/lib/whatsapp";
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
    <section id="inicio" aria-labelledby="hero-title" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-x grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p {...item(0)} className="mb-6 text-xs font-medium tracking-[0.3em] text-taupe-dark uppercase">{hero.eyebrow}</motion.p>
          <motion.h1 {...item(1)} id="hero-title" className="font-display text-5xl leading-[0.98] font-medium text-balance sm:text-6xl lg:text-7xl">
            {site.headline}
          </motion.h1>
          <motion.p {...item(2)} className="mt-6 max-w-md text-lg leading-relaxed text-cafe/80">{hero.subtitle}</motion.p>
          <motion.div {...item(3)} className="mt-9 flex flex-wrap gap-3">
            <Button href={bookingUrl()} external>Agende sua avaliação</Button>
            <Button href="#sobre" variant="ghost">Conheça a clínica</Button>
          </motion.div>
        </div>
        <motion.div {...item(2)} className="md:col-span-5">
          <ImageSlot
            {...hero.image}
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/5] rounded-t-[999px] rounded-b-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

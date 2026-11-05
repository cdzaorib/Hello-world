"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { openBooking } from "@/lib/booking";

/** Botão flutuante: aparece depois do hero e some ao chegar no CTA final e no rodapé, para não cobrir conteúdo. */
export function FloatingBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const cta = document.getElementById("contato");
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const pastHero = !hero || hero.getBoundingClientRect().bottom < vh * 0.35;
      const beforeCta = !cta || cta.getBoundingClientRect().top > vh * 0.85;
      setVisible(pastHero && beforeCta);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-label="Agendar avaliação pelo WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      data-track="booking_open"
      data-track-location="flutuante"
      onClick={openBooking}
      className={`fixed right-4 bottom-4 z-30 inline-flex size-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-forest text-cream shadow-[0_16px_36px_-14px_rgba(16,41,29,.6)] transition duration-300 ease-[var(--ease-soft)] hover:bg-forest-deep md:right-6 md:bottom-6 md:h-13 md:w-auto md:px-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle aria-hidden className="size-5" />
      <span className="hidden text-sm font-medium md:inline">Agendar avaliação</span>
    </button>
  );
}

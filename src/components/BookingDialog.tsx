"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { professionals } from "@/content/professionals";
import { booking } from "@/content/site";
import { BOOKING_EVENT } from "@/lib/booking";
import { closeDialog } from "@/lib/dialog";
import { professionalBookingUrl } from "@/lib/whatsapp";

/**
 * Seletor de profissional para os CTAs gerais. <dialog> nativo: foco preso no modal,
 * Esc fecha e o foco volta ao botão que o abriu.
 */
export function BookingDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => {
      const d = ref.current;
      if (d && !d.open) d.showModal();
    };
    window.addEventListener(BOOKING_EVENT, open);
    return () => window.removeEventListener(BOOKING_EVENT, open);
  }, []);

  const close = () => ref.current && closeDialog(ref.current);

  return (
    <dialog
      ref={ref}
      aria-labelledby="booking-title"
      aria-describedby="booking-note"
      className="booking-dialog"
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative px-6 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10">
        <span aria-hidden className="absolute top-3 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-forest/15 sm:hidden" />
        <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold-dark uppercase">{booking.eyebrow}</p>
        <h2 id="booking-title" className="mt-3 pr-8 font-display text-[2rem] leading-[1.05] font-medium text-forest sm:text-[2.4rem]">
          {booking.title}
        </h2>
        <p id="booking-note" className="mt-3 text-sm leading-relaxed text-graphite/70">{booking.note}</p>

        <ul className="mt-7 space-y-3">
          {Object.values(professionals).map((p) => (
            <li key={p.id}>
              <a
                href={professionalBookingUrl(p)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-location="seletor"
                data-track-professional={p.id}
                onClick={() => ref.current?.close()}
                className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-white/80 p-3 pr-4 transition duration-300 hover:border-gold/70 hover:bg-white hover:shadow-[0_14px_30px_-20px_rgba(23,59,42,.45)] sm:p-4 sm:pr-5"
              >
                <Image src={p.avatar} alt="" width={64} height={64} className="size-14 shrink-0 rounded-full object-cover ring-1 ring-gold/40 sm:size-16" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.72rem] font-semibold tracking-[0.2em] text-forest uppercase">{p.name}</span>
                  <span className="mt-1 block font-display text-xl leading-tight text-graphite">{p.area}</span>
                </span>
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-cream transition duration-300 group-hover:bg-forest-deep">
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="sr-only">(abre o WhatsApp)</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={close}
          aria-label="Fechar"
          className="absolute top-4 right-4 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-graphite/60 transition hover:bg-forest/5 hover:text-forest"
        >
          <X aria-hidden className="size-5" />
        </button>
      </div>
    </dialog>
  );
}

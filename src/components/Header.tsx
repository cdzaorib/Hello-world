"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { closeDialog } from "@/lib/dialog";
import { BookingTrigger } from "./BookingTrigger";
import { Logo } from "./Logo";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => menu.current && closeDialog(menu.current);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-500 ${
        scrolled ? "bg-cream/90 shadow-[0_1px_0_rgba(23,59,42,.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-16" : "h-16 lg:h-20"}`}>
        <Link href="/#inicio" aria-label={`${site.name}, voltar ao início`} className="flex items-center gap-3">
          <Logo size={44} priority className={`transition-transform duration-500 ${scrolled ? "lg:scale-90" : ""}`} />
          <Wordmark />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 xl:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="group relative py-2 text-sm tracking-wide whitespace-nowrap text-graphite/80 transition-colors hover:text-forest">
              {i.label}
              <span aria-hidden className="absolute bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <BookingTrigger location="header" className="min-h-11 px-6 whitespace-nowrap">
            Agendar avaliação
          </BookingTrigger>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          {/* Tablet: menu compacto, mas o CTA continua visível. */}
          <span className="hidden md:block">
            <BookingTrigger location="header" className="min-h-11 px-6 whitespace-nowrap">
              Agendar avaliação
            </BookingTrigger>
          </span>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-haspopup="dialog"
            aria-controls="menu-mobile"
            onClick={() => menu.current?.showModal()}
            className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-forest transition hover:bg-forest/5"
          >
            <Menu aria-hidden className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <dialog
        ref={menu}
        id="menu-mobile"
        aria-label="Menu de navegação"
        className="menu-dialog xl:hidden"
        onCancel={(e) => {
          e.preventDefault();
          closeMenu();
        }}
      >
        <div className="flex min-h-full flex-col">
          <div className="container-x flex h-16 items-center justify-between">
            <span className="flex items-center gap-3">
              <Logo size={44} />
              <Wordmark />
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-forest transition hover:bg-forest/5"
            >
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Principal (mobile)" className="container-x mt-8 flex flex-col">
            {nav.map((i, idx) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => menu.current?.close()}
                style={{ animationDelay: `${60 + idx * 45}ms` }}
                className="menu-link flex items-baseline justify-between border-b border-forest/10 py-5 font-display text-[2.1rem] leading-none text-forest"
              >
                {i.label}
                <span aria-hidden className="font-sans text-[0.7rem] tracking-[0.2em] text-gold-dark">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="container-x mt-auto pt-10 pb-10">
            <BookingTrigger location="menu_mobile" className="w-full" onBeforeOpen={() => menu.current?.close()}>
              Agendar avaliação
            </BookingTrigger>
            <p className="mt-5 text-center text-sm text-graphite/60">
              {site.location.neighborhood} · {site.location.city}
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}

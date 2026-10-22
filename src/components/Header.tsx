"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { bookingUrl } from "@/lib/whatsapp";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? "bg-ivory/95 shadow-[0_1px_0_rgba(71,58,53,.08)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" aria-label="Conceito Saúde Estética — início"><Logo /></a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="text-sm tracking-wide transition hover:text-taupe-dark">{i.label}</a>
          ))}
          <Button href={bookingUrl()} external className="!px-5 !py-2.5">Agendar avaliação</Button>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="container-x flex h-[calc(100dvh-4rem)] flex-col gap-1 pt-6 md:hidden">
          {nav.map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="border-b border-cafe/10 py-4 font-display text-3xl">
              {i.label}
            </a>
          ))}
          <Button href={bookingUrl()} external className="mt-8">Agendar avaliação</Button>
        </nav>
      )}
    </header>
  );
}

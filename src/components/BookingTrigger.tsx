"use client";

import type { ReactNode } from "react";
import { openBooking } from "@/lib/booking";
import { type ButtonVariant, buttonClass } from "./Button";

/** Botão que abre o seletor "Com quem deseja agendar sua avaliação?". */
export function BookingTrigger({
  children,
  location,
  variant = "primary",
  className = "",
  onBeforeOpen,
}: {
  children: ReactNode;
  location: string;
  variant?: ButtonVariant;
  className?: string;
  onBeforeOpen?: () => void;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      data-track="booking_open"
      data-track-location={location}
      onClick={() => {
        onBeforeOpen?.();
        openBooking();
      }}
      className={`${buttonClass(variant)} cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

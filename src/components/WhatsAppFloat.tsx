import { MessageCircle } from "lucide-react";
import { bookingUrl, hasWhatsapp } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={bookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={hasWhatsapp ? "Agendar pelo WhatsApp" : "Falar pelo Instagram"}
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-cafe text-ivory shadow-lg transition duration-300 hover:scale-105 hover:bg-taupe-dark md:right-6 md:bottom-6"
    >
      <MessageCircle aria-hidden />
    </a>
  );
}

import { site } from "@/content/site";

export const hasWhatsapp = Boolean(site.whatsappNumber);

/**
 * Link de agendamento. Sem número validado, usa o Instagram oficial como
 * canal de contato, para nunca apontar para um número fictício.
 */
export function bookingUrl(message: string = site.whatsappMessage): string {
  if (!site.whatsappNumber) return site.instagram.url;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

import type { Procedure } from "@/content/procedures";
import { type Professional, professionals } from "@/content/professionals";
import { procedureMessage, professionalMessage, site } from "@/content/site";

export const hasWhatsapp = Boolean(site.whatsappNumber);

const waLink = (number: string, message: string) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/**
 * Canal geral. Sem número validado, usa o Instagram oficial,
 * para nunca apontar para um número fictício.
 */
export function bookingUrl(message: string = site.whatsappMessage): string {
  return site.whatsappNumber ? waLink(site.whatsappNumber, message) : site.instagram.url;
}

type Booking = { url: string; viaWhatsapp: boolean };

function bookWith(pro: Professional, message: string): Booking {
  const number = pro.whatsappNumber ?? site.whatsappNumber;
  return number ? { url: waLink(number, message), viaWhatsapp: true } : { url: site.instagram.url, viaWhatsapp: false };
}

/**
 * Agendamento de um procedimento: WhatsApp da profissional responsável.
 * Sem o número dela, cai no WhatsApp geral e, sem ele, no Instagram.
 */
export function procedureBooking(p: Procedure): Booking & { professional: Professional } {
  const professional = professionals[p.professional];
  return { professional, ...bookWith(professional, procedureMessage(professional.name, p.title)) };
}

export const professionalBooking = (pro: Professional): Booking => bookWith(pro, professionalMessage(pro.name));

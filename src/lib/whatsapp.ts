import type { Procedure } from "@/content/procedures";
import { type Professional, professionals } from "@/content/professionals";
import { procedureMessage, professionalMessage } from "@/content/site";

const waLink = (number: string, message: string) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Agendamento de um procedimento: WhatsApp da profissional responsável, com mensagem contextual. */
export function procedureBooking(p: Procedure): { url: string; professional: Professional } {
  const professional = professionals[p.professional];
  return { professional, url: waLink(professional.whatsappNumber, procedureMessage(professional.name, p.title)) };
}

export const professionalBookingUrl = (pro: Professional) => waLink(pro.whatsappNumber, professionalMessage(pro.name));

/** "5521979341201" → "(21) 97934-1201"; "552121168332" → "(21) 2116-8332". */
export function formatPhone(number: string) {
  const local = number.replace(/^55/, "");
  const ddd = local.slice(0, 2);
  const rest = local.slice(2);
  const split = rest.length === 9 ? 5 : 4;
  return `(${ddd}) ${rest.slice(0, split)}-${rest.slice(split)}`;
}

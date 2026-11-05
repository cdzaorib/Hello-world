import type { LucideIcon } from "lucide-react";
import { Activity, Apple, Droplet, Droplets, Flower, Flower2, Leaf, PersonStanding, Pill, Sparkles, Sprout, Waves } from "lucide-react";
import type { ProfessionalId } from "./professionals";

export type Procedure = {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Profissional responsável: define para qual WhatsApp o agendamento vai. */
  professional: ProfessionalId;
};

/**
 * Vitrine única (sem separação visual por profissional); a ordem aqui é a ordem na página.
 * PENDENTE: validar escopo e elegibilidade de cada procedimento com a clínica.
 */
export const procedures: Procedure[] = [
  { slug: "tricologia-integrativa", title: "Tricologia Integrativa", icon: Sprout, professional: "claudia" },
  { slug: "nutricao-funcional-especializada", title: "Nutrição Funcional Especializada", icon: Apple, professional: "claudia" },
  { slug: "naturopatia", title: "Naturopatia / Limpeza do Terreno Biológico", icon: Leaf, professional: "claudia" },
  { slug: "terapia-capilar-personalizada", title: "Terapia Capilar Personalizada", icon: Droplets, professional: "claudia" },
  { slug: "suplementacao-individualizada", title: "Suplementação Individualizada", icon: Pill, professional: "claudia" },
  { slug: "terapias-integrativas", title: "Terapias Integrativas", icon: Flower2, professional: "claudia" },
  { slug: "harmonizacao-corporal", title: "Harmonização Corporal", icon: PersonStanding, professional: "munique" },
  { slug: "harmonizacao-glutea", title: "Harmonização Glútea", icon: Waves, professional: "munique" },
  { slug: "harmonizacao-de-seios", title: "Harmonização de Seios", icon: Sparkles, professional: "munique" },
  { slug: "harmonizacao-intima", title: "Harmonização Íntima", icon: Flower, professional: "munique" },
  { slug: "emagrecimento-sistemico", title: "Emagrecimento Sistêmico", icon: Activity, professional: "munique" },
  { slug: "protocolos-regenerativos-prp", title: "Protocolos Regenerativos com PRP", icon: Droplet, professional: "munique" },
];

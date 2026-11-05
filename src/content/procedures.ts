import type { LucideIcon } from "lucide-react";
import { Activity, Apple, Droplet, Droplets, Flower, Flower2, Leaf, PersonStanding, Pill, Sparkles, Sprout, Waves } from "lucide-react";
import type { ProfessionalId } from "./professionals";

export type CategoryId = "estetica" | "integrativa";

export const categories: { id: CategoryId; label: string; short: string }[] = [
  { id: "estetica", label: "Estética Avançada", short: "Estética" },
  { id: "integrativa", label: "Saúde Integrativa", short: "Integrativa" },
];

export type Procedure = {
  slug: string;
  title: string;
  /** Texto curto e neutro, sem promessa de resultado. PENDENTE: validar com a profissional. */
  description: string;
  icon: LucideIcon;
  category: CategoryId;
  /** Profissional responsável: define para qual WhatsApp o agendamento vai. */
  professional: ProfessionalId;
};

/** Vitrine única (sem separação por profissional); a ordem aqui é a ordem na página. */
export const procedures: Procedure[] = [
  {
    slug: "tricologia-integrativa",
    title: "Tricologia Integrativa",
    description: "Avaliação da saúde do couro cabeludo e dos fios, com um olhar integrativo.",
    icon: Sprout,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "nutricao-funcional-especializada",
    title: "Nutrição Funcional Especializada",
    description: "Orientação nutricional individualizada, considerando seus hábitos, objetivos e rotina.",
    icon: Apple,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "naturopatia",
    title: "Naturopatia / Limpeza do Terreno Biológico",
    description: "Abordagem naturalista com foco em prevenção e estilo de vida.",
    icon: Leaf,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "terapia-capilar-personalizada",
    title: "Terapia Capilar Personalizada",
    description: "Cuidados para os fios e o couro cabeludo, definidos a partir da sua avaliação.",
    icon: Droplets,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "suplementacao-individualizada",
    title: "Suplementação Individualizada",
    description: "Suplementação planejada de acordo com suas necessidades, objetivos e estilo de vida.",
    icon: Pill,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "terapias-integrativas",
    title: "Terapias Integrativas",
    description: "Práticas complementares voltadas ao bem-estar e ao equilíbrio.",
    icon: Flower2,
    category: "integrativa",
    professional: "claudia",
  },
  {
    slug: "harmonizacao-corporal",
    title: "Harmonização Corporal",
    description: "Protocolos estéticos para valorizar o contorno corporal, definidos após avaliação.",
    icon: PersonStanding,
    category: "estetica",
    professional: "munique",
  },
  {
    slug: "harmonizacao-glutea",
    title: "Harmonização Glútea",
    description: "Protocolos estéticos voltados ao contorno da região glútea.",
    icon: Waves,
    category: "estetica",
    professional: "munique",
  },
  {
    slug: "harmonizacao-de-seios",
    title: "Harmonização de Seios",
    description: "Protocolos estéticos para a região dos seios, indicados após avaliação individual.",
    icon: Sparkles,
    category: "estetica",
    professional: "munique",
  },
  {
    slug: "harmonizacao-intima",
    title: "Harmonização Íntima",
    description: "Cuidados estéticos íntimos, com privacidade e acolhimento.",
    icon: Flower,
    category: "estetica",
    professional: "munique",
  },
  {
    slug: "emagrecimento-sistemico",
    title: "Emagrecimento Sistêmico",
    description: "Abordagem que considera o organismo como um todo no processo de emagrecimento.",
    icon: Activity,
    category: "estetica",
    professional: "munique",
  },
  {
    slug: "protocolos-regenerativos-prp",
    title: "Protocolos Regenerativos com PRP",
    description: "Protocolos com plasma rico em plaquetas (PRP), indicados após avaliação profissional.",
    icon: Droplet,
    category: "estetica",
    professional: "munique",
  },
];

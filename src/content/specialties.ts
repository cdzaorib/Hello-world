import type { LucideIcon } from "lucide-react";
import { Apple, Droplets, Flower2, HeartPulse, Leaf, Pill, ScanFace, Sparkles, Waves, Wind } from "lucide-react";

export type Specialty = { slug: string; title: string; icon: LucideIcon };
export type SpecialtyGroup = { id: string; title: string; intro: string; items: Specialty[] };

/**
 * Nomes extraídos das publicações oficiais do Instagram.
 * PENDENTE: validar escopo, elegibilidade e descrição de cada item com a clínica.
 */
export const specialtyGroups: SpecialtyGroup[] = [
  {
    id: "estetica",
    title: "Estética avançada",
    intro: "Protocolos definidos após avaliação individual.",
    items: [
      { slug: "harmonizacao-facial", title: "Harmonização facial", icon: ScanFace },
      { slug: "harmonizacao-de-seios", title: "Harmonização de seios", icon: Flower2 },
      { slug: "harmonizacao-de-gluteos", title: "Harmonização de glúteos", icon: Waves },
      { slug: "harmonizacao-intima", title: "Harmonização íntima", icon: Sparkles },
      { slug: "protocolos-avancados-de-emagrecimento", title: "Protocolos avançados de emagrecimento", icon: Wind },
    ],
  },
  {
    id: "integrativa",
    title: "Saúde integrativa",
    intro: "Cuidado individualizado, de dentro para fora.",
    items: [
      { slug: "tricologia-integrativa", title: "Tricologia integrativa", icon: Droplets },
      { slug: "nutricao-funcional-especializada", title: "Nutrição funcional especializada", icon: Apple },
      { slug: "naturopatia", title: "Naturopatia", icon: Leaf },
      { slug: "terapia-capilar-personalizada", title: "Terapia capilar personalizada", icon: HeartPulse },
      { slug: "suplementacao-individualizada", title: "Suplementação individualizada", icon: Pill },
      { slug: "terapias-integrativas", title: "Terapias integrativas", icon: Flower2 },
    ],
  },
];

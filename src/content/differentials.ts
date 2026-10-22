import type { LucideIcon } from "lucide-react";
import { HeartHandshake, Leaf, Sparkles } from "lucide-react";

export type Differential = {
  icon: LucideIcon;
  title: string;
  text: string;
  placeholder: boolean;
};

/** PENDENTE: manter apenas diferenciais confirmados pela clínica. Sem promessas de resultado. */
export const differentials: Differential[] = [
  { icon: HeartHandshake, title: "Acolhimento", text: "Diferencial a confirmar com a clínica.", placeholder: true },
  { icon: Sparkles, title: "Atendimento individual", text: "Diferencial a confirmar com a clínica.", placeholder: true },
  { icon: Leaf, title: "Bem-estar", text: "Diferencial a confirmar com a clínica.", placeholder: true },
];

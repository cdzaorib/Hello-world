export type ProfessionalId = "claudia" | "munique";

export type Professional = {
  id: ProfessionalId;
  name: string;
  /** Área de atuação conforme o material oficial da clínica. */
  area: string;
  photo: string | null;
  /** WhatsApp de agendamento: somente dígitos com DDI+DDD. `null` = pendente. */
  whatsappNumber: string | null;
  /** PENDENTES: só preencher após confirmação da profissional (sem inventar títulos). */
  registration: string | null;
  bio: string | null;
};

/** A ordem aqui é a ordem de exibição. */
export const professionals: Record<ProfessionalId, Professional> = {
  claudia: {
    id: "claudia",
    name: "Claudia Marques",
    area: "Tricologia · Saúde integrativa",
    photo: "/images/claudia-marques.jpg",
    whatsappNumber: "552121168332",
    registration: null,
    bio: null,
  },
  munique: {
    id: "munique",
    name: "Munique Cabral",
    area: "Estética",
    photo: "/images/munique-cabral.jpg",
    /** PENDENTE: número não informado. Enquanto for null, os procedimentos dela usam o canal geral. */
    whatsappNumber: null,
    registration: null,
    bio: null,
  },
};

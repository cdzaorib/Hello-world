export type ProfessionalId = "claudia" | "munique";

export type Professional = {
  id: ProfessionalId;
  name: string;
  /** Área de atuação exibida no seletor e na seção de profissionais. */
  area: string;
  photo: string;
  /** Recorte quadrado da foto oficial, usado no seletor de agendamento. */
  avatar: string;
  /** WhatsApp de agendamento: somente dígitos com DDI+DDD. */
  whatsappNumber: string;
  /** Só preencher com informações confirmadas pela profissional; `null` fica oculto. */
  registration: string | null;
  bio: string | null;
};

/** A ordem aqui é a ordem de exibição. */
export const professionals: Record<ProfessionalId, Professional> = {
  claudia: {
    id: "claudia",
    name: "Claudia Marques",
    area: "Saúde Integrativa",
    photo: "/images/claudia-marques.jpg",
    avatar: "/images/avatar-claudia.jpg",
    whatsappNumber: "552121168332",
    registration: null,
    bio: null,
  },
  munique: {
    id: "munique",
    name: "Munique Cabral",
    area: "Estética Avançada",
    photo: "/images/munique-cabral.jpg",
    avatar: "/images/avatar-munique.jpg",
    whatsappNumber: "5521979341201",
    registration: null,
    bio: null,
  },
};

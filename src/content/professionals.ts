export type ProfessionalId = "claudia" | "munique";

export type Professional = {
  id: ProfessionalId;
  name: string;
  /** Como a profissional é chamada nos botões ("Agendar com …"). */
  shortName: string;
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
    name: "Ana Claudia Márques",
    shortName: "Ana Claudia",
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
    shortName: "Munique",
    area: "Estética Avançada",
    photo: "/images/munique-cabral.jpg",
    avatar: "/images/avatar-munique.jpg",
    whatsappNumber: "5521979341201",
    registration: null,
    bio: null,
  },
};

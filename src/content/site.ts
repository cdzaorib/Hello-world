/**
 * Dados institucionais. ÚNICA fonte para contatos e textos de marca.
 * `null` = ainda não confirmado: a interface esconde ou degrada o item.
 */
export const site = {
  name: "Conceito Saúde Estética Integrativa",
  shortName: "Conceito Saúde Estética",
  positioning: "Saúde, beleza e equilíbrio de dentro para fora.",
  description:
    "Conceito Saúde Estética Integrativa em Bangu, Rio de Janeiro: estética avançada e saúde integrativa em um atendimento personalizado. Agende sua avaliação pelo WhatsApp.",
  /** Na Vercel, usa o domínio de produção do projeto quando NEXT_PUBLIC_SITE_URL não estiver definida. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  instagram: {
    handle: "@conceito.saudeestetica",
    url: "https://www.instagram.com/conceito.saudeestetica/",
  },
  /** Somente dígitos com DDI+DDD, ex.: "5521999999999". PENDENTE.
   *  Os procedimentos usam o WhatsApp de cada profissional (professionals.ts). */
  whatsappNumber: null as string | null,
  /** WhatsApp geral da clínica (header, hero, botão flutuante, CTA final). PENDENTE. */
  whatsappMessage:
    "Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de saber mais sobre uma avaliação.",
  /** Confirmado pelo perfil do Instagram (localização das publicações). */
  location: { neighborhood: "Bangu", city: "Rio de Janeiro", state: "RJ" },
  /** PENDENTES. */
  street: null as string | null,
  mapsLink: null as string | null,
  hours: null as string[] | null,
  email: null as string | null,
  legal: { companyName: null as string | null, cnpj: null as string | null },
} as const;

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#essencia", label: "Nossa Essência" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  title: "Beleza, saúde e equilíbrio em cada detalhe.",
  subtitle:
    "Descubra uma nova forma de cuidar de você, unindo estética avançada e saúde integrativa em uma experiência de atendimento personalizada.",
  primaryCta: "Quero agendar minha avaliação",
  secondaryCta: "Conheça nossas especialidades",
  image: {
    src: "/images/hero-profissionais.jpg" as string | null,
    alt: "Claudia Marques e Munique Cabral, profissionais da Conceito Saúde Estética Integrativa",
    label: "Foto oficial das profissionais",
  },
} as const;

export const essence = {
  eyebrow: "Nossa essência",
  title: "Um novo conceito de cuidado com você.",
  paragraphs: [
    "Acreditamos que beleza, saúde e bem-estar caminham juntos. Por isso a Conceito reúne estética avançada e saúde integrativa, para cuidar de você por inteiro e com propósito.",
    "Cada atendimento começa pela escuta e pela avaliação individual, com acolhimento e respeito à sua história.",
  ],
  pillars: ["Saúde", "Estética", "Bem-estar"],
  images: [
    { src: "/images/essencia-uniforme.jpg" as string | null, alt: "Detalhe do uniforme bordado de Munique Cabral", label: "Detalhe do uniforme" },
    { src: "/images/essencia-ampolas.jpg" as string | null, alt: "Mãos segurando ampolas usadas nos protocolos", label: "Protocolos" },
  ],
} as const;

export const finalCta = {
  title: "Seu próximo momento de autocuidado começa aqui.",
  subtitle: "Entre em contato com nossa equipe e conheça as possibilidades de atendimento.",
  button: "Agendar minha avaliação",
} as const;

/** Mensagens de agendamento enviadas às profissionais. */
export const procedureMessage = (professional: string, procedure: string) =>
  `Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com ${professional} para o procedimento de ${procedure}. Poderiam me informar sobre a disponibilidade?`;

export const professionalMessage = (professional: string) =>
  `Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com ${professional}. Poderiam me informar sobre a disponibilidade?`;

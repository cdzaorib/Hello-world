/**
 * Dados institucionais da clínica. ÚNICA fonte para contatos e textos de marca.
 * Campos `null` = ainda não confirmados pela clínica: a interface esconde ou
 * degrada o item automaticamente (ver README, seção "Pendências").
 */
export const site = {
  name: "Conceito Saúde Estética",
  shortName: "Conceito",
  tagline: "Beleza, saúde e bem-estar em equilíbrio",
  headline: "Sua beleza, seu equilíbrio, sua essência.",
  description:
    "Conceito Saúde Estética: beleza, saúde e bem-estar em equilíbrio. Conheça a clínica e agende sua avaliação pelo WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  instagram: {
    handle: "@conceito.saudeestetica",
    url: "https://www.instagram.com/conceito.saudeestetica/",
  },
  /** Somente dígitos com DDI+DDD, ex.: "5511999999999". PENDENTE. */
  whatsappNumber: null as string | null,
  whatsappMessage:
    "Olá! Vim pelo site da Conceito Saúde Estética e gostaria de agendar uma avaliação.",
  /** PENDENTES — confirmar com a clínica. */
  address: null as {
    street: string;
    city: string;
    state: string;
    postalCode?: string;
  } | null,
  mapsEmbedUrl: null as string | null,
  mapsLink: null as string | null,
  hours: null as string[] | null,
  email: null as string | null,
  /** Preencher apenas com a razão social/CNPJ e responsável técnico reais. */
  legal: { companyName: null as string | null, cnpj: null as string | null },
} as const;

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
] as const;

export const about = {
  eyebrow: "A clínica",
  title: "Cuidar de si é um ato de equilíbrio.",
  paragraphs: [
    "A Conceito Saúde Estética nasce da ideia de que beleza, saúde e bem-estar caminham juntos: autocuidado com acolhimento, respeitando a individualidade de cada pessoa.",
    "[TEXTO PENDENTE] Substituir por apresentação institucional oficial: história, filosofia de atendimento e profissionais, conforme material validado pela clínica.",
  ],
  image: { src: null as string | null, alt: "Ambiente da clínica Conceito Saúde Estética", label: "Foto da clínica" },
} as const;

export const hero = {
  eyebrow: "Beleza, saúde e bem-estar em equilíbrio",
  subtitle:
    "Autocuidado, beleza individual e acolhimento em um só lugar. Agende uma avaliação e conheça a Conceito.",
  image: { src: null as string | null, alt: "Atendimento na Conceito Saúde Estética", label: "Imagem principal" },
} as const;

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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  instagram: {
    handle: "@conceito.saudeestetica",
    url: "https://www.instagram.com/conceito.saudeestetica/",
  },
  /** Somente dígitos com DDI+DDD, ex.: "5521999999999". PENDENTE. */
  whatsappNumber: null as string | null,
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
  /** PENDENTE: foto oficial em /public/images. */
  image: { src: null as string | null, alt: "Profissionais da Conceito Saúde Estética Integrativa", label: "Foto oficial das profissionais" },
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
    { src: null as string | null, alt: "Ambiente da clínica", label: "Foto da clínica" },
    { src: null as string | null, alt: "Atendimento na clínica", label: "Foto do atendimento" },
  ],
} as const;

export const finalCta = {
  title: "Seu próximo momento de autocuidado começa aqui.",
  subtitle: "Entre em contato com nossa equipe e conheça as possibilidades de atendimento.",
  button: "Agendar minha avaliação",
} as const;

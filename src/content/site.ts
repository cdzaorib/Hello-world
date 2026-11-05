import type { LucideIcon } from "lucide-react";
import { HeartHandshake, Leaf, MapPin, Sparkles } from "lucide-react";

/**
 * Dados institucionais. ÚNICA fonte para contatos e textos de marca.
 * `null` = ainda não confirmado: a interface esconde o item.
 */
export const site = {
  name: "Conceito Saúde Estética Integrativa",
  shortName: "Conceito Saúde Estética",
  positioning: "Saúde, beleza e equilíbrio de dentro para fora.",
  description:
    "Estética avançada e saúde integrativa em Bangu, Rio de Janeiro. Um cuidado personalizado que valoriza sua individualidade. Agende sua avaliação pelo WhatsApp.",
  /** Na Vercel, usa o domínio de produção do projeto quando NEXT_PUBLIC_SITE_URL não estiver definida. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  instagram: {
    handle: "@conceito.saudeestetica",
    url: "https://www.instagram.com/conceito.saudeestetica/",
  },
  /** Confirmado pelo perfil do Instagram (localização das publicações). */
  location: { neighborhood: "Bangu", city: "Rio de Janeiro", state: "RJ" },
  /** PENDENTES: aparecem automaticamente quando preenchidos. */
  street: null as string | null,
  mapsLink: null as string | null,
  hours: null as string[] | null,
  email: null as string | null,
  legal: { companyName: null as string | null, cnpj: null as string | null },
} as const;

export const nav = [
  { href: "/#inicio", label: "Início" },
  { href: "/#procedimentos", label: "Procedimentos" },
  { href: "/#essencia", label: "Nossa Essência" },
  { href: "/#profissionais", label: "Profissionais" },
  { href: "/#contato", label: "Contato" },
] as const;

export const hero = {
  titleLead: "Beleza, saúde e equilíbrio",
  titleAccent: "em sua melhor essência.",
  subtitle:
    "Estética avançada e saúde integrativa em Bangu, Rio de Janeiro. Um cuidado personalizado que valoriza sua individualidade.",
  primaryCta: "Conhecer procedimentos",
  secondaryCta: "Agendar avaliação",
  image: {
    src: "/images/hero-profissionais.jpg" as string | null,
    alt: "Ana Claudia Márques e Munique Cabral, profissionais da Conceito Saúde Estética Integrativa",
    label: "Foto oficial das profissionais",
  },
  caption: "Ana Claudia Márques & Munique Cabral",
} as const;

/** Faixa de destaques abaixo do hero: apenas fatos da marca, sem promessas. */
export const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: MapPin, label: "Bangu · Rio de Janeiro" },
  { icon: Sparkles, label: "Estética avançada" },
  { icon: Leaf, label: "Saúde integrativa" },
  { icon: HeartHandshake, label: "Atendimento individualizado" },
];

export const essence = {
  eyebrow: "Nossa essência",
  title: "Um novo conceito de cuidado com você.",
  paragraphs: [
    "Acreditamos que beleza, saúde e bem-estar caminham juntos. Por isso a Conceito reúne estética avançada e saúde integrativa em um só lugar.",
    "Cada atendimento começa pela escuta e pela avaliação individual, com acolhimento e respeito à sua história.",
  ],
  /** Frase da publicação oficial de boas-vindas da clínica no Instagram. */
  quote: "Cuidar de você por inteiro é o nosso propósito.",
  pillars: [
    { title: "Saúde", text: "Cuidado que começa de dentro para fora." },
    { title: "Estética", text: "Valorização da sua individualidade." },
    { title: "Bem-estar", text: "Acolhimento em cada etapa do atendimento." },
  ],
  images: [
    { src: "/images/essencia-uniforme.jpg" as string | null, alt: "Detalhe do uniforme bordado de Munique Cabral", label: "Detalhe do uniforme" },
    { src: "/images/essencia-ampolas.jpg" as string | null, alt: "Mãos segurando ampolas usadas nos protocolos", label: "Protocolos" },
    { src: "/images/essencia-detalhe.jpg" as string | null, alt: "Detalhe do uniforme da clínica com o bordado da coroa", label: "Detalhe" },
  ],
} as const;

export const professionalsIntro = {
  eyebrow: "Profissionais",
  title: "Conheça quem cuida de você",
  text: "Duas profissionais, um mesmo propósito: cuidar de você por inteiro.",
} as const;

export const booking = {
  eyebrow: "Agendar avaliação",
  title: "Com quem deseja agendar sua avaliação?",
  note: "Você será direcionado(a) ao WhatsApp da profissional, sem formulários.",
} as const;

export const finalCta = {
  title: "Seu próximo momento de autocuidado começa aqui.",
  subtitle: "Escolha a profissional e converse diretamente pelo WhatsApp.",
  button: "Agendar minha avaliação",
} as const;

/** Mensagens de agendamento enviadas às profissionais. */
export const procedureMessage = (professional: string, procedure: string) =>
  `Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com ${professional} para o procedimento de ${procedure}. Poderiam me informar sobre a disponibilidade?`;

export const professionalMessage = (professional: string) =>
  `Olá! Conheci a Conceito Saúde Estética pelo site e gostaria de agendar uma avaliação com ${professional}. Poderiam me informar sobre a disponibilidade?`;

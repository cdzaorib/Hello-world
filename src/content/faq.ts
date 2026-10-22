export type Faq = { question: string; answer: string };

/** Conteúdo editável. Sem afirmações clínicas: dúvidas de saúde são tratadas na avaliação. */
export const faq: Faq[] = [
  {
    question: "Como agendo minha avaliação?",
    answer: "Pelo botão de WhatsApp deste site. Nossa equipe responde com os horários disponíveis.",
  },
  {
    question: "Posso tirar dúvidas antes de agendar?",
    answer: "Sim. Envie sua mensagem pelo WhatsApp ou pelo Instagram oficial.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "[PENDENTE] Informação a ser confirmada pela clínica.",
  },
  {
    question: "Qual é o endereço e o horário de atendimento?",
    answer: "Veja a seção Contato. Enquanto não estiverem publicados, confirme pelo WhatsApp.",
  },
];

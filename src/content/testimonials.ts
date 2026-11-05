export type Testimonial = {
  name: string;
  text: string;
  /** Só adicionar com autorização escrita (LGPD). */
  authorized: true;
};

/** Vazio de propósito: a seção só aparece quando houver depoimentos reais autorizados. */
export const testimonials: Testimonial[] = [];

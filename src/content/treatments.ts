export type Treatment = {
  slug: string;
  title: string;
  summary: string;
  image: { src: string | null; alt: string };
  /** `true` enquanto o item não foi confirmado pela clínica. */
  placeholder: boolean;
  /** Página individual só é gerada quando há conteúdo validado. */
  detail?: { body: string[] };
};

/**
 * PENDENTE: substituir pelos tratamentos realmente oferecidos.
 * Para publicar um item: placeholder=false, preencher título/resumo/imagem
 * e, se desejar página própria, `detail.body`.
 */
export const treatments: Treatment[] = [
  {
    slug: "tratamento-1",
    title: "Tratamento a confirmar",
    summary: "Descrição pendente de validação pela clínica.",
    image: { src: null, alt: "Imagem do tratamento" },
    placeholder: true,
  },
  {
    slug: "tratamento-2",
    title: "Tratamento a confirmar",
    summary: "Descrição pendente de validação pela clínica.",
    image: { src: null, alt: "Imagem do tratamento" },
    placeholder: true,
  },
  {
    slug: "tratamento-3",
    title: "Tratamento a confirmar",
    summary: "Descrição pendente de validação pela clínica.",
    image: { src: null, alt: "Imagem do tratamento" },
    placeholder: true,
  },
];

export const publishedTreatments = treatments.filter((t) => !t.placeholder);
export const treatmentsWithPage = publishedTreatments.filter((t) => t.detail);

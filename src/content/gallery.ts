export type GalleryImage = { src: string | null; alt: string; label: string };

/**
 * Fotos do material oficial (Instagram e arquivos enviados). Não há fotos do espaço físico.
 * Fotos de pacientes (inclusive antes/depois) só com autorização e conforme as normas dos conselhos.
 */
export const gallery: GalleryImage[] = [
  { src: "/images/galeria-equipe.jpg", alt: "Claudia Marques e Munique Cabral", label: "Equipe" },
  { src: "/images/galeria-detalhe.jpg", alt: "Detalhe do uniforme da clínica", label: "Detalhe" },
];

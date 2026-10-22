export type Professional = {
  name: string;
  photo: string | null;
  /** Todos PENDENTES: só preencher após confirmação da profissional (sem inventar títulos). */
  role: string | null;
  registration: string | null;
  bio: string | null;
};

export const professionals: Professional[] = [
  { name: "Munique Cabral", photo: null, role: null, registration: null, bio: null },
  { name: "Claudia Marques", photo: null, role: null, registration: null, bio: null },
];

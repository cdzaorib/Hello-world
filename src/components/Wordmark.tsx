/** Nome da marca em texto, ao lado do logotipo oficial (que tem letras pequenas demais para leitura em tamanho reduzido). */
export function Wordmark({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <span className={`leading-none ${className}`}>
      <span className={`block text-[0.95rem] font-bold tracking-[0.18em] ${light ? "text-cream" : "text-forest"}`}>CONCEITO</span>
      <span className={`mt-1 block text-[0.56rem] font-medium tracking-[0.24em] uppercase ${light ? "text-cream/70" : "text-graphite/70"}`}>
        Saúde Estética Integrativa
      </span>
    </span>
  );
}

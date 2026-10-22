import { site } from "@/content/site";

/** Texto provisório até o logotipo oficial ser fornecido (ver README). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display leading-none ${className}`}>
      <span className="text-2xl font-semibold tracking-wide">{site.shortName}</span>
      <span className="block text-[0.6rem] tracking-[0.35em] uppercase opacity-70">Saúde Estética</span>
    </span>
  );
}

import Image from "next/image";

/**
 * Logotipo oficial (recorte do avatar do Instagram, 512px).
 * PENDENTE: substituir public/images/logo.png pelo arquivo original (SVG/PNG alta resolução).
 */
export function Logo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Conceito Saúde Estética Integrativa"
      width={size}
      height={size}
      priority
      className={`rounded-full ${className}`}
    />
  );
}

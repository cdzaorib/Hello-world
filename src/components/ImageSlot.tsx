import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Exibe a foto oficial quando `src` existir (arquivo em /public/images);
 * senão, mostra um placeholder claramente identificado.
 */
export function ImageSlot({ src, alt, label, className = "", priority, sizes = "(min-width: 768px) 50vw, 100vw" }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${label}`}
      className={`flex flex-col items-center justify-center gap-2 bg-nude/50 text-taupe-dark ${className}`}
    >
      <ImageIcon aria-hidden className="size-6" strokeWidth={1.25} />
      <span className="text-xs tracking-widest uppercase">{label} · pendente</span>
    </div>
  );
}

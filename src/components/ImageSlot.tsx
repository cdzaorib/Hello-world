import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Props = { src: string | null; alt: string; label: string; className?: string; priority?: boolean; sizes?: string; position?: string };

/** Foto oficial quando `src` existir (em /public/images); senão, placeholder identificado como pendente. */
export function ImageSlot({ src, alt, label, className = "", priority, sizes = "(min-width: 768px) 50vw, 100vw", position = "object-center" }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${label}`}
      className={`flex flex-col items-center justify-center gap-2 bg-sage-soft px-4 text-center text-forest/70 ${className}`}
    >
      <ImageIcon aria-hidden className="size-6" strokeWidth={1.25} />
      <span className="text-xs tracking-widest uppercase">{label} · pendente</span>
    </div>
  );
}

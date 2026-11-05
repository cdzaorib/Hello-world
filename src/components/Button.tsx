import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "light" | "outline-light";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-deep",
  ghost: "border border-forest/25 text-forest hover:border-forest hover:bg-forest/[.04]",
  light: "bg-cream text-forest hover:bg-ivory",
  "outline-light": "border border-cream/30 text-cream hover:border-cream hover:bg-cream/[.06]",
};

export const buttonClass = (variant: ButtonVariant = "primary") =>
  `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition duration-300 ease-[var(--ease-soft)] active:scale-[.98] ${variants[variant]}`;

type Props = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Evento de mensuração (ver ClickTracker). */
  track?: { name: string; location?: string; professional?: string };
};

export function Button({ href, variant = "primary", children, className = "", external, track }: Props) {
  return (
    <a
      href={href}
      className={`${buttonClass(variant)} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(track
        ? { "data-track": track.name, "data-track-location": track.location, "data-track-professional": track.professional }
        : {})}
    >
      {children}
    </a>
  );
}

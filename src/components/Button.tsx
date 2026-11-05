import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost" | "light";
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** Evento de mensuração (ver ClickTracker). */
  track?: { name: string; location?: string };
};

const variants = {
  primary: "bg-forest text-cream hover:bg-graphite",
  ghost: "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5",
  light: "bg-cream text-forest hover:bg-white",
};

export function Button({ href, variant = "primary", children, className = "", external, track }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition duration-300 active:scale-[.98] ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(track
        ? { "data-track": track.name, "data-track-location": track.location }
        : {})}
    >
      {children}
    </a>
  );
}

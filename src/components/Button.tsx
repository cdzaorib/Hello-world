import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({ href, variant = "primary", children, className = "", external }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition duration-300 active:scale-[.98]";
  const styles =
    variant === "primary"
      ? "bg-cafe text-ivory hover:bg-taupe-dark"
      : "border border-cafe/30 text-cafe hover:border-cafe hover:bg-cafe/5";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

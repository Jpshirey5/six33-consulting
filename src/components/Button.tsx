import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "dark" | "light" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-3 whitespace-nowrap rounded-btn py-1.5 pl-1.5 pr-5 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-charcoal",
  light: "bg-white text-ink hover:bg-sand",
  outline: "border border-line bg-transparent text-ink hover:bg-white",
  ghost: "border border-white/35 bg-white/10 text-white hover:bg-white/20",
};

function Icon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-bronze text-white transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2l4 4-4 4" />
      </svg>
    </span>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function LinkButton({ href, variant = "dark", className = "", children, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <Icon />
      <span>{children}</span>
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ComponentProps<"button">;

export function Button({ variant = "dark", className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <Icon />
      <span>{children}</span>
    </button>
  );
}

/** Small bronze text label above a heading. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep ${className}`}>{children}</p>;
}

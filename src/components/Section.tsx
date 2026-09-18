import type { ReactNode } from "react";
import Container from "./Container";

export type Background = "cream" | "sand" | "ink";

/**
 * Full-bleed background, contained content. "ink" also carries the `on-ink`
 * class, which globals.css uses to recolor headings, body copy, eyebrows,
 * accents, links, and cards, so dark sections need no per-element restyling.
 */
const backgrounds: Record<Background, string> = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  ink: "on-ink on-dark bg-ink text-white",
};

/** Dark blocks are a pause, so they breathe more than the light sections. */
const padding: Record<Background, string> = {
  cream: "py-16 sm:py-24",
  sand: "py-16 sm:py-24",
  ink: "py-20 sm:py-28",
};

type SectionProps = {
  background?: Background;
  children: ReactNode;
  id?: string;
  /** id of the heading that names this section. */
  labelledBy?: string;
  label?: string;
  className?: string;
  containerClassName?: string;
  /** Skip the Container, for sections that manage their own edges. */
  bleed?: boolean;
};

export default function Section({
  background = "cream",
  children,
  id,
  labelledBy,
  label,
  className = "",
  containerClassName = "",
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={`${backgrounds[background]} ${padding[background]} ${className}`}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

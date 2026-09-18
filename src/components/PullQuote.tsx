import Reveal from "./Reveal";
import Section, { type Background } from "./Section";

type PullQuoteProps = {
  background?: Background;
  eyebrow?: string;
  quote: string;
  attribution?: string;
  label: string;
};

/**
 * A single quote standing on its own. Built to be the emphasis block in the
 * scroll order: one line of text, generous padding, nothing to work through.
 */
export default function PullQuote({ background = "ink", eyebrow, quote, attribution, label }: PullQuoteProps) {
  return (
    <Section background={background} label={label}>
      <Reveal className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">{eyebrow}</p>}
        <blockquote className={eyebrow ? "mt-5" : ""}>
          <p className="font-serif text-3xl italic leading-tight sm:text-4xl lg:text-[2.75rem]">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        {attribution && <p className="mt-6 text-sm font-medium">{attribution}</p>}
      </Reveal>
    </Section>
  );
}

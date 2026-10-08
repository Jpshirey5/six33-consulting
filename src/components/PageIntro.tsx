import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import { Eyebrow } from "./Button";

type PageIntroProps = { eyebrow: string; title: ReactNode; text?: string };

/**
 * Centered page opener: eyebrow, big heading with italic accent, short
 * paragraph. The wrapper is wider than the paragraph it holds so each half of
 * a two-line heading fits on its own line; the paragraph stays narrow for
 * reading. Headings are written with an explicit <br />, so a segment longer
 * than roughly 29 characters will still wrap to a third line.
 */
export default function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="pb-10 pt-12 sm:pt-20">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-6xl lg:text-[4rem]">{title}</h1>
          {text && <p className="mx-auto mt-6 max-w-xl text-base text-stone sm:text-lg">{text}</p>}
        </Reveal>
      </Container>
    </section>
  );
}

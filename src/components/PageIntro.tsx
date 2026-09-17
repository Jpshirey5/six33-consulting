import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import { Eyebrow } from "./Button";

type PageIntroProps = { eyebrow: string; title: ReactNode; text?: string };

/** Centered page opener: eyebrow, big heading with italic accent, short paragraph. */
export default function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="pb-10 pt-12 sm:pt-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          {text && <p className="mx-auto mt-6 max-w-xl text-base text-stone sm:text-lg">{text}</p>}
        </Reveal>
      </Container>
    </section>
  );
}

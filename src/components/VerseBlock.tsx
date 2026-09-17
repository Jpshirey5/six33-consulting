import Container from "./Container";
import Reveal from "./Reveal";
import { Eyebrow } from "./Button";
import { site } from "@/lib/site";

export default function VerseBlock() {
  return (
    <section aria-label="Foundation verse" className="py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>The foundation</Eyebrow>
          <blockquote className="mt-5">
            <p className="font-serif text-3xl italic leading-tight text-ink sm:text-4xl lg:text-5xl">&ldquo;{site.verse.text}&rdquo;</p>
          </blockquote>
          <p className="mt-5 text-sm font-medium text-stone">{site.verse.reference}</p>
        </Reveal>
      </Container>
    </section>
  );
}

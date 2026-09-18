import Section, { type Background } from "./Section";
import Reveal from "./Reveal";
import { Eyebrow } from "./Button";
import { site } from "@/lib/site";

export default function VerseBlock({ background = "sand" }: { background?: Background }) {
  return (
    <Section background={background} label="Foundation verse">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>The foundation</Eyebrow>
        <blockquote className="mt-5">
          <p className="font-serif text-3xl italic leading-tight sm:text-4xl lg:text-5xl">&ldquo;{site.verse.text}&rdquo;</p>
        </blockquote>
        <p className="mt-5 text-sm font-medium text-stone">{site.verse.reference}</p>
      </Reveal>
    </Section>
  );
}

import Container from "./Container";
import PixelArt from "./PixelArt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { solution } from "@/lib/services";

export default function Solution() {
  return (
    <section aria-labelledby="solution-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          id="solution-heading"
          eyebrow="What we build"
          title={
            <>
              Order is not a personality type.
              <br />
              <em>It is something you build.</em>
            </>
          }
          text="Every engagement is aiming at the same five things. Get these right and the ministry stops depending on any one person remembering everything."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solution.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 70}
              className="flex min-h-[260px] flex-col justify-between rounded-card bg-white p-6 shadow-[0_1px_0_#e4e0dd]"
            >
              <PixelArt seed={i + 3} count={9} className="h-14 w-24" />
              <div>
                <h3 className="text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

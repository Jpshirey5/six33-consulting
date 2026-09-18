import Container from "./Container";
import PixelArt from "./PixelArt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export const framework = [
  {
    number: "01.",
    name: "Faith",
    question: "Am I leading from a healthy relationship with God?",
    text: "The work of ministry has a way of replacing the relationship that started it. Before anything else gets built, this is the one that has to hold.",
  },
  {
    number: "02.",
    name: "Family",
    question: "Does the way I lead allow me to be present for the people God has entrusted to me?",
    text: "The people closest to you should not get whatever is left over. How you lead should leave room for the ones at home.",
  },
  {
    number: "03.",
    name: "Ministry",
    question: "Are my ministry and systems helping me accomplish what actually matters?",
    text: "Your systems should support the calling, not become the calling. When ministry is third, it usually gets healthier, not smaller.",
  },
];

/** The Six33 framework: three questions, always in the same order. */
export default function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          id="pillars-heading"
          eyebrow="The Six33 Framework"
          title={
            <>
              Faith first. Family second.
              <br />
              <em>Ministry third.</em>
            </>
          }
          text="Three questions we come back to in every engagement. Not because we are trying to make consulting spiritual, but because leaders who get this order wrong eventually pay for it somewhere else."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {framework.map((card, i) => (
            <Reveal
              as="li"
              key={card.number}
              delay={i * 80}
              className="flex min-h-[340px] flex-col justify-between rounded-card bg-white p-7 shadow-[0_1px_0_#e4e0dd]"
            >
              <div>
                <p className="font-heading text-4xl font-medium text-ink/30 lining-nums">{card.number}</p>
                <PixelArt seed={i + 13} className="mt-6 h-16 w-32" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink">{card.name}</h3>
                <p className="mt-3 font-serif text-xl italic leading-snug text-ink">{card.question}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

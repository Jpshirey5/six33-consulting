import Container from "./Container";
import PixelArt from "./PixelArt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const cards = [
  { number: "01.", title: "Faith first", text: "Daily and weekly rhythms that keep you connected to Christ before the week starts pulling on you." },
  {
    number: "02.",
    title: "Family second",
    text: "Protected family time, clear boundaries, and family rhythms your home can count on. Your spouse and kids get the best of you, not what is left.",
    highlight: true,
  },
  { number: "03.", title: "Work third", text: "A healthy pace, a shared load, and leaders raised up around you, so ministry stops running on you alone." },
  { number: "04.", title: "For the long haul", text: "A plan for busy seasons so the new order holds when Easter, Christmas, and everything else arrives." },
];

/** Four numbered cards, one highlighted, like the template's "Why" row. */
export default function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          id="pillars-heading"
          eyebrow="Why Six33"
          title={
            <>
              First things first,
              <br />
              <em>in that order.</em>
            </>
          }
          text="Most leaders did not drift out of order on purpose. The week filled up, someone needed them, and the people at home learned to expect the tired version. We help you put it back in order, and keep it there."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal
              as="li"
              key={card.number}
              delay={i * 80}
              className={`flex min-h-[320px] flex-col justify-between rounded-card p-6 ${
                card.highlight ? "bg-white shadow-[0_1px_0_#e4e0dd]" : "bg-sand"
              }`}
            >
              {card.highlight ? (
                <div className="rounded-xl bg-cream p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-stone">This week</p>
                  <ul className="mt-3 space-y-2 text-xs text-ink">
                    {["Morning with God, before email", "Tuesday night is family night", "Saturday rehearsal ends by noon", "Sunday afternoon: rest"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="font-heading text-4xl font-medium text-ink/30 lining-nums">{card.number}</p>
                  <PixelArt seed={i + 3} className="mt-6 h-20 w-36" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-medium text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

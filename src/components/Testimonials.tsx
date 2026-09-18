import Reveal from "./Reveal";
import Section, { type Background } from "./Section";
import SectionHead from "./SectionHead";

/**
 * Hidden for now. Flip SHOW_TESTIMONIALS to true and fill in the list
 * when you have quotes you are ready to share.
 */
export const SHOW_TESTIMONIALS = false;

type Testimonial = { quote: string; name: string; role: string };

const testimonials: Testimonial[] = [
  // { quote: "A short quote about what changed at home and in ministry.", name: "First Last", role: "Worship Pastor, Church Name" },
];

export default function Testimonials({ background = "cream" }: { background?: Background }) {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null;

  return (
    <Section background={background} labelledBy="testimonials-heading">
      <SectionHead
        align="center"
        id="testimonials-heading"
        eyebrow="What leaders say"
        title={
          <>
            Leaders who lead well,
            <br />
            <em>and still make it home.</em>
          </>
        }
      />
    <div className="mt-12 overflow-x-auto px-5 sm:px-8">
      <ul className="mx-auto flex max-w-[1360px] gap-4">
        {testimonials.map((t) => (
          <Reveal as="li" key={t.name} className="flex w-[320px] shrink-0 flex-col justify-between rounded-card bg-white p-6">
            <p className="text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className="h-10 w-10 rounded-full bg-sand" />
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-stone">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
    </Section>
  );
}

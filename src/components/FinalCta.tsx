import Reveal from "./Reveal";
import Section, { type Background } from "./Section";
import { LinkButton } from "./Button";

/**
 * Closing call to action. Flat ink, edge to edge: no image or gradient, so the
 * block reads as a pause at the end of the scroll rather than another visual.
 */
export default function FinalCta({ background = "ink" }: { background?: Background }) {
  return (
    <Section background={background} labelledBy="final-cta-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id="final-cta-heading" className="text-4xl sm:text-5xl lg:text-6xl">
          Bring one thing back into order.
          <br />
          <em>Start there.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base">
          Tell us what you are carrying and where it is breaking down. If Six33 is a fit, we will tell you
          exactly what working together would look like. If it is not, we will tell you that too.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/contact#book" variant="light">
            Book a Consultation
          </LinkButton>
          <LinkButton href="/services" variant="ghost">
            Explore Services
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}

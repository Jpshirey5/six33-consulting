import Section, { type Background } from "./Section";
import Reveal from "./Reveal";
import { LinkButton } from "./Button";

/**
 * Secondary offer, kept deliberately quieter than the discovery call so the
 * two calls to action do not compete.
 */
export default function WorshipBand({ background = "cream" }: { background?: Background }) {
  return (
    <Section background={background} labelledBy="worship-band-heading">
      <Reveal className="flex flex-col gap-6 rounded-card bg-white p-7 shadow-[0_1px_0_#e4e0dd] sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 id="worship-band-heading" className="text-2xl text-ink sm:text-3xl">
            Need a worship leader for a Sunday or special event?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
            I come and lead your existing team. Based in Tampa Bay, available across Florida, and open to travel.
          </p>
        </div>
        <LinkButton href="/worship-leading" variant="outline" className="shrink-0">
          Check availability
        </LinkButton>
      </Reveal>
    </Section>
  );
}

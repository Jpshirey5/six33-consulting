import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import { LinkButton } from "./Button";
import BookingCta from "./BookingCta";
import { heroHeadlines } from "@/lib/site";

// Swap this index to use one of the other headline options in src/lib/site.ts.
const headline = heroHeadlines[0];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-2">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-card bg-ink text-white">
          <Image src="/images/hero.svg" alt="" width={1600} height={900} priority className="absolute inset-0 h-full w-full object-cover lg:static lg:h-[78dvh] lg:min-h-[560px]" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
          <div className="relative flex min-h-[max(80dvh,640px)] flex-col items-center justify-center px-6 py-12 text-center lg:absolute lg:inset-0 lg:min-h-0">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              Faith First. Family Second. Ministry Third.
            </p>
            <h1 id="hero-heading" className="max-w-4xl text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              {headline.lines[0]}
              <br />
              <em className="text-white/85">{headline.lines[1]}</em>
            </h1>
            <p className="mt-6 max-w-2xl font-heading text-base font-medium text-white sm:text-lg">
              {headline.sub}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              Consulting for church and ministry leaders, so the ministry stops running on one person holding
              everything together.
            </p>
            <BookingCta variant="light" tone="light" className="mt-8">
              <LinkButton href="/services" variant="ghost">
                Explore Services
              </LinkButton>
            </BookingCta>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}

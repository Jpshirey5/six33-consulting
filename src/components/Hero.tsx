import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import { LinkButton } from "./Button";
import { heroHeadlines } from "@/lib/site";

const audiences = ["Worship Leaders", "Lead Pastors", "Ministry Directors", "Production Leaders", "Church Staff"];

// Swap this index to use one of the other headline options in src/lib/site.ts.
const headline = heroHeadlines[0];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-2">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-card bg-ink text-white">
          <Image src="/images/hero.svg" alt="" width={1600} height={900} priority className="h-[80vh] min-h-[560px] w-full object-cover lg:h-[78vh]" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/contact#book" variant="light">
                Book a Consultation
              </LinkButton>
              <LinkButton href="/services" variant="ghost">
                Explore Services
              </LinkButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="py-10 text-center">
          <p className="text-sm text-stone">Built for the leaders carrying the most</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {audiences.map((a) => (
              <li key={a} className="font-heading text-lg font-semibold tracking-tight text-ink/60">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

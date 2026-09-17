import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import { LinkButton } from "./Button";

const audiences = ["Worship Pastors", "Lead Pastors", "Associate Pastors", "Student Leaders", "Church Staff"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-2">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-card bg-ink text-white">
          <Image src="/images/hero.svg" alt="" width={1600} height={900} priority className="h-[80vh] min-h-[560px] w-full object-cover lg:h-[78vh]" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 id="hero-heading" className="max-w-4xl text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              Seek first.
              <br className="sm:hidden" /> Lead well.
              <br />
              <em className="text-white/85">Build what lasts.</em>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Faith-based leadership and life consulting for ministry pastors and worship pastors. Put faith
              first, family second, and ministry third, so you can serve for the long haul.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact#book">Book a Free Call</LinkButton>
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

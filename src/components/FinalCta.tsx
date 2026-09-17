import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import { LinkButton } from "./Button";

export default function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="py-8">
      <Container>
        <Reveal className="on-dark relative overflow-hidden rounded-card bg-ink text-white">
          <Image src="/images/cta.svg" alt="" width={1600} height={700} className="h-[440px] w-full object-cover sm:h-[520px]" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 id="final-cta-heading" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Serve for the long haul.
              <br />
              <em>Start with a free call.</em>
            </h2>
            <p className="mt-5 max-w-lg text-sm text-white/85 sm:text-base">
              No pressure, no pitch. Thirty minutes to talk about where you are, what your home is feeling, and
              what would actually help.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact#book">Book a Free Call</LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

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
          <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 id="final-cta-heading" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Bring one thing back into order.
              <br />
              <em>Start there.</em>
            </h2>
            <p className="mt-5 max-w-lg text-sm text-white/85 sm:text-base">
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

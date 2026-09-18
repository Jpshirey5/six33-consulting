import Container from "./Container";
import PixelArt from "./PixelArt";
import Reveal from "./Reveal";
import { Eyebrow, LinkButton } from "./Button";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="faq-heading" className="mt-4 text-4xl sm:text-5xl">
              Questions
              <br />
              answered.
            </h2>
            <p className="mt-6 text-sm text-stone">Still curious?</p>
            <div className="mt-3">
              <LinkButton href="/contact#book">Book a consultation</LinkButton>
            </div>
            <PixelArt seed={11} count={26} className="mt-12 h-28 w-56" />
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-3">
              {faqs.map((f) => (
                <li key={f.q}>
                  <details className="group rounded-xl border border-line bg-white">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-ink sm:text-base">
                      {f.q}
                      <span aria-hidden="true" className="faq-icon inline-flex h-6 w-6 shrink-0 items-center justify-center text-bronze transition-transform">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M7 1v12M1 7h12" />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-stone">{f.a}</p>
                  </details>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

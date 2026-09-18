import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PixelArt from "@/components/PixelArt";
import ServiceCard from "@/components/ServiceCard";
import SectionHead from "@/components/SectionHead";
import StepsTabs from "@/components/StepsTabs";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { Eyebrow, LinkButton } from "@/components/Button";
import { coreAreas, engagements } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Worship leadership coaching, worship production and systems, and ministry and church systems consulting. One session, a four week reset, ongoing consulting, or a custom church systems project.",
  alternates: { canonical: "/services" },
  openGraph: { title: `Services | ${site.name}`, url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Three areas of work.
            <br />
            <em>Four ways to start.</em>
          </>
        }
        text="Leadership, production, and ministry systems. Bring one problem to a single session, or work through the whole thing over four weeks. Investment is discussed on the intro call."
      />

      <section aria-label="Core consulting areas" className="py-8">
        <Container>
          <div className="space-y-4">
            {coreAreas.map((area, i) => (
              <Reveal
                key={area.slug}
                as="article"
                delay={i * 60}
                className={`scroll-mt-24 rounded-card p-7 sm:p-10 ${i % 2 === 0 ? "bg-white" : "bg-sand"}`}
              >
                <div id={area.slug} className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                  <div>
                    <Eyebrow>{`0${i + 1}. ${area.name}`}</Eyebrow>
                    <h2 className="mt-4 text-3xl sm:text-4xl">{area.headline}</h2>
                    <PixelArt seed={i + 40} className="mt-8 h-20 w-40" />
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-ink sm:text-base">{area.summary}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                      What this can include
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {area.focus.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-stone">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-t border-line pt-5 text-sm font-medium text-ink sm:text-base">
                      {area.outcome}
                    </p>
                    <div className="mt-8">
                      <LinkButton href="/contact#book">Book a consultation</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="ladder-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="ladder-heading"
            eyebrow="Ways to work together"
            title={
              <>
                Start small.
                <br />
                <em>Go as deep as it needs.</em>
              </>
            }
            text="Most leaders start with a single consultation on the thing that is most stuck, then decide from there. Nothing here requires a long commitment up front."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engagements.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 70}>
                <ServiceCard service={service} highlight={service.slug === "six33-ministry-reset"} />
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-stone">
            Not sure which one fits? Book an intro call and we will help you pick, even if the answer is that you do
            not need us yet.
          </p>
        </Container>
      </section>

      <StepsTabs />
      <Faq />
      <FinalCta />
    </>
  );
}

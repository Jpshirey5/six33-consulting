import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PixelArt from "@/components/PixelArt";
import SectionHead from "@/components/SectionHead";
import EngagementCard from "@/components/EngagementCard";
import BookingCta from "@/components/BookingCta";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { Eyebrow } from "@/components/Button";
import { coreAreas, engagements, packetNote, teamNote } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Worship leadership coaching and worship production and systems consulting for church leaders. Start with a free discovery call.",
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
            Two areas of work.
            <br />
            <em>One place to start.</em>
          </>
        }
        text="Worship leadership and worship production. Most leaders start in one and find the other was part of the same problem."
      />

      {/* The two areas */}
      <section aria-label="Areas of work" className="py-8">
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
                    <BookingCta align="left" className="mt-8" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagements, named only */}
      <section aria-labelledby="engagements-heading" className="py-16 sm:py-20">
        <Container>
          <SectionHead
            id="engagements-heading"
            eyebrow="Ways we work together"
            title={
              <>
                Three engagements.
                <br />
                <em>We pick the fit together.</em>
              </>
            }
            text="Which one makes sense depends on what you are carrying. That is what the discovery call is for."
          />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
            {engagements.map((engagement) => (
              <EngagementCard key={engagement.slug} engagement={engagement} />
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-medium text-ink">{packetNote}</p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone">{teamNote}</p>
          <BookingCta className="mt-10" />
        </Container>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}

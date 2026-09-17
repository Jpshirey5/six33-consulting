import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PixelArt from "@/components/PixelArt";
import VerseBlock from "@/components/VerseBlock";
import FinalCta from "@/components/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet John Shirey, founder of Six33 Consulting, and learn why the business exists: to help ministry leaders put faith first, family second, and work third.",
  alternates: { canonical: "/about" },
  openGraph: { title: `About | ${site.name}`, url: "/about" },
};

const stats = [
  { value: "20+", label: "Years serving in local church ministry" },
  { value: "3", label: "States where John has led worship" },
  { value: "10", label: "Years married to Julia" },
  { value: "5", label: "Kids at the table every night" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            Ministry should not
            <br />
            <em>cost you your home.</em>
          </>
        }
        text="Six33 Consulting started with a simple conviction: the people who serve the church should not have to lose their own faith or family to do it."
      />

      <section aria-labelledby="founder-heading" className="py-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
            <Reveal className="overflow-hidden rounded-card bg-sand">
              <Image
                src="/images/john-shirey.jpg"
                alt="John Shirey, founder of Six33 Consulting"
                width={800}
                height={1000}
                priority
                className="h-[420px] w-full object-cover lg:h-full"
              />
            </Reveal>
            <Reveal delay={100} className="rounded-card bg-white p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                {site.founder.name}, {site.founder.title}
              </p>
              <h2 id="founder-heading" className="mt-4 text-3xl sm:text-4xl">
                Serving in ministry <em>since fourteen.</em>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink sm:text-base">
                <p>
                  John Shirey has served in ministry since he was fourteen, leading worship in churches across
                  Florida, Virginia, and New York, and he continues to serve in local church ministry today. He has
                  been married to his wife, Julia, for ten years, and together they are raising five children.
                </p>
                <p>
                  John is also a builder. He is the founder of Sermon Slide Pro, a tool that helps pastors and church
                  teams turn sermons into presentation slides in a fraction of the time, and he brings years of
                  experience in technology sales and business systems. He knows firsthand what it takes to lead in
                  ministry, provide for a family, and build something meaningful without losing what matters most.
                </p>
                <p>He lives in the Tampa Bay area of Florida.</p>
              </div>
            </Reveal>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 80} className="rounded-card bg-sand p-6">
                <p className="font-heading text-5xl font-medium text-ink lining-nums">{s.value}</p>
                <p className="mt-3 text-sm text-stone">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="why-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="why-heading"
            eyebrow="Why Six33"
            title={
              <>
                The name comes from
                <br />
                <em>Matthew 6:33.</em>
              </>
            }
            text="Seek first the kingdom of God, and all these things will be provided. Faith first, family second, work third. That order is easy to say and hard to keep."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "The drift is quiet",
                text: "Most ministry leaders did not get out of order on purpose. The week filled up. Someone needed them. The pace crept higher, and the people at home learned to expect the tired version.",
              },
              {
                title: "Even worship becomes work",
                text: "Over time, personal worship starts to feel like part of the job. Prayer becomes prep. Sunday becomes a production. The altar gets crowded out by the calendar.",
              },
              {
                title: "It can be put back",
                text: "Six33 exists to help leaders get faith, family, and work back in the right order, and to build the rhythms, boundaries, and shared load that keep it there.",
              },
            ].map((card, i) => (
              <Reveal as="div" key={card.title} delay={i * 80} className="rounded-card bg-white p-7">
                <PixelArt seed={i + 20} className="h-16 w-32" />
                <h3 className="mt-6 text-xl font-medium">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{card.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <VerseBlock />
      <FinalCta />
    </>
  );
}

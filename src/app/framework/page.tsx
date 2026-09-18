import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PixelArt from "@/components/PixelArt";
import SectionHead from "@/components/SectionHead";
import StepsTabs from "@/components/StepsTabs";
import VerseBlock from "@/components/VerseBlock";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { Eyebrow } from "@/components/Button";
import { solution } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Six33 Framework",
  description:
    "Faith first, family second, ministry third. Three questions Six33 Consulting comes back to in every engagement, and the work that follows from them.",
  alternates: { canonical: "/framework" },
  openGraph: { title: `The Six33 Framework | ${site.name}`, url: "/framework" },
};

const pillars = [
  {
    number: "01.",
    name: "Faith first",
    question: "Am I leading from a healthy relationship with God?",
    body: [
      "Before leading a team, running a ministry, building an organization, or serving anyone else, a leader has to stay rooted in their own relationship with God.",
      "Matthew 6:33 is not just where the name comes from. It is the order everything else gets built on. When the work of ministry quietly replaces the relationship that started it, everything downstream gets harder, and usually nobody notices for a while.",
    ],
  },
  {
    number: "02.",
    name: "Family second",
    question: "Does the way I lead allow me to be present for the people God has entrusted to me?",
    body: [
      "The people closest to you should not receive whatever is left over.",
      "Healthy ministry leadership should leave room to actually be present with your spouse, your kids, and the people at home. The goal is not to become more productive. It is to build rhythms and systems that let you serve faithfully without ministry consuming everything else.",
    ],
  },
  {
    number: "03.",
    name: "Ministry third",
    question: "Are my ministry and systems helping me accomplish what actually matters?",
    body: [
      "Whether you are leading worship, pastoring, managing volunteers, running production, or building a ministry organization, your systems should support the calling instead of becoming the calling.",
      "Ministry third does not mean ministry matters less. In practice it usually means the ministry gets healthier, because it stops depending on one exhausted person to hold it together.",
    ],
  },
];

export default function FrameworkPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Six33 Framework"
        title={
          <>
            Faith first. Family second.
            <br />
            <em>Ministry third.</em>
          </>
        }
        text="Three questions, always in the same order. They shape how we diagnose problems, what we recommend, and what we refuse to recommend."
      />
      <VerseBlock />

      <section aria-label="The three questions" className="py-8">
        <Container>
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.number}
                as="article"
                delay={i * 60}
                className={`rounded-card p-7 sm:p-10 ${i % 2 === 0 ? "bg-white" : "bg-sand"}`}
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                  <div>
                    <Eyebrow>{p.number}</Eyebrow>
                    <h2 className="mt-4 text-3xl sm:text-4xl">{p.name}</h2>
                    <PixelArt seed={i + 50} className="mt-8 h-20 w-40" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">{p.question}</p>
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone sm:text-base">
                      {p.body.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="order-heading" className="py-16 sm:py-24">
        <Container>
          <Reveal className="on-dark rounded-card bg-ink px-6 py-14 text-center text-white sm:px-10 sm:py-20">
            <Eyebrow className="text-bronze">The Six33 order</Eyebrow>
            <h2 id="order-heading" className="mt-5 text-3xl sm:text-5xl">
              Faith <span className="text-bronze">&rarr;</span> Family <span className="text-bronze">&rarr;</span>{" "}
              Ministry
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              When these are properly ordered, ministry tends to get healthier, more sustainable, and more fruitful.
              When they are out of order, the ministry can still look fine from the outside for years.
            </p>
            <p className="mx-auto mt-10 max-w-3xl font-serif text-2xl italic leading-snug sm:text-3xl">
              &ldquo;What would change if my ministry were built around the right priorities instead of just trying
              to keep everything running?&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm text-white/70">
              That is the question we help leaders answer, and then turn into practical leadership, systems, and
              rhythms that actually work.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="outcomes-heading"
            eyebrow="What it looks like in practice"
            title={
              <>
                A framework is only useful
                <br />
                <em>if it builds something.</em>
              </>
            }
            text="The order above decides what we work on. These five are what we are actually building toward in every engagement."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {solution.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70} className="rounded-card bg-white p-6">
                <p className="font-heading text-3xl font-medium text-ink/30 lining-nums">0{i + 1}.</p>
                <h3 className="mt-6 text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <StepsTabs />
      <Faq />
      <FinalCta />
    </>
  );
}

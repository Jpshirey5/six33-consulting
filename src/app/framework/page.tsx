import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PixelArt from "@/components/PixelArt";
import StepsTabs from "@/components/StepsTabs";
import VerseBlock from "@/components/VerseBlock";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Six33 Framework",
  description:
    "Three pillars and four steps for ministry leaders: faith rooted before busy, family present not leftover, and ministry that is fruitful and faithful.",
  alternates: { canonical: "/framework" },
  openGraph: { title: `The Six33 Framework | ${site.name}`, url: "/framework" },
};

const pillars = [
  {
    number: "01.",
    name: "Faith",
    title: "Rooted Before Busy",
    text: "Daily and weekly spiritual rhythms that keep you connected to Christ. Before the week starts pulling on you, you have already been with God, not as preparation for a sermon or a set, but as a son or daughter.",
    points: ["A simple daily rhythm you can actually keep", "A weekly Sabbath that is protected", "Personal worship that is yours again"],
  },
  {
    number: "02.",
    name: "Family",
    title: "Present, Not Leftover",
    text: "Protected family time, clear boundaries, and family rhythms your home can count on. Your spouse and kids get the best of you, not what is left over after the church has had its share.",
    points: ["Protected family time on the calendar", "Boundaries and non-negotiables", "Family rhythms for meals, rest, and play"],
  },
  {
    number: "03.",
    name: "Ministry",
    title: "Fruitful and Faithful",
    text: "A healthy pace, a shared load, and leaders raised up around you, so you can serve for the long haul without ministry taking over your home. Ministry flows from faith and family, not the other way around.",
    points: ["A pace you can keep through busy seasons", "Delegation and raising up other leaders", "Serving faithfully for the long haul"],
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
        text="Three pillars, always in the same order, and four steps to get there. Everything we build starts here."
      />
      <VerseBlock />

      <section aria-labelledby="pillars-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="pillars-heading"
            eyebrow="Three pillars"
            title={
              <>
                One order,
                <br />
                <em>three pillars.</em>
              </>
            }
            text="Faith stays first, family stays close, and ministry finds its healthy place behind both."
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.number} delay={i * 80} className={`flex flex-col rounded-card p-7 ${i === 1 ? "bg-white" : "bg-sand"}`}>
                <div className="flex items-center justify-between">
                  <p className="font-heading text-4xl font-medium text-ink/30 lining-nums">{p.number}</p>
                  <PixelArt seed={i + 30} count={12} className="h-12 w-24" />
                </div>
                <h3 className="mt-8 text-2xl font-medium">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-bronze-deep">{p.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone">{p.text}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <StepsTabs />
      <Faq />
      <FinalCta />
    </>
  );
}

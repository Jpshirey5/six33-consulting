import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CoreAreas from "@/components/CoreAreas";
import Pillars from "@/components/Pillars";
import StepsTabs from "@/components/StepsTabs";
import Testimonials, { SHOW_TESTIMONIALS } from "@/components/Testimonials";
import AudienceTabs from "@/components/AudienceTabs";
import Faq from "@/components/Faq";
import VerseBlock from "@/components/VerseBlock";
import FinalCta from "@/components/FinalCta";
import ServiceCard from "@/components/ServiceCard";
import SectionHead from "@/components/SectionHead";
import Section, { type Background } from "@/components/Section";
import PullQuote from "@/components/PullQuote";
import Reveal from "@/components/Reveal";
import { engagements } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const featured = engagements.slice(0, 3);

type Slot = {
  key: string;
  /** Ink slots are fixed. Every other slot takes the next light background. */
  ink?: boolean;
  show?: boolean;
  render: (background: Background) => ReactNode;
};

/**
 * The home page in scroll order. Light sections alternate cream and sand;
 * the two ink blocks are the pull quote and the closing CTA, which are far
 * enough apart that they can never touch. The alternation is computed rather
 * than hardcoded so a hidden section (Testimonials is behind a flag) cannot
 * silently put two cream sections next to each other.
 */
const slots: Slot[] = [
  { key: "problem", render: (bg) => <Problem background={bg} /> },
  {
    key: "pull-quote",
    ink: true,
    render: () => (
      <PullQuote
        background="ink"
        label="The question behind the work"
        quote="How do I get all of this out of my head and into a system that actually works?"
      />
    ),
  },
  { key: "solution", render: (bg) => <Solution background={bg} /> },
  { key: "core-areas", render: (bg) => <CoreAreas background={bg} /> },
  { key: "steps", ink: true, render: () => <StepsTabs background="ink" /> },
  { key: "testimonials", show: SHOW_TESTIMONIALS, render: (bg) => <Testimonials background={bg} /> },
  { key: "services", render: (bg) => <ServicesSection background={bg} /> },
  { key: "pillars", ink: true, render: () => <Pillars background="ink" /> },
  { key: "audiences", render: (bg) => <AudienceTabs background={bg} /> },
  { key: "faq", render: (bg) => <Faq background={bg} /> },
  { key: "verse", render: (bg) => <VerseBlock background={bg} /> },
  { key: "final-cta", ink: true, render: () => <FinalCta background="ink" /> },
];

function ServicesSection({ background }: { background: Background }) {
  return (
    <Section background={background} labelledBy="services-heading">
      <SectionHead
        id="services-heading"
        eyebrow="Ways to work together"
        title={
          <>
            Start small.
            <br />
            <em>Go as deep as it needs.</em>
          </>
        }
        text="One session for one problem, four weeks to reset a ministry, or an ongoing relationship. Every engagement is virtual unless noted, and investment is discussed on the intro call."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {featured.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80}>
            <ServiceCard service={service} highlight={i === 1} />
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-stone">
        Churches needing one specific system built or rebuilt can also scope a custom project.{" "}
        <Link href="/services" className="font-medium text-bronze-deep underline-offset-4 hover:underline">
          See all services
        </Link>
      </p>
    </Section>
  );
}

/**
 * Walks the slots once and assigns each visible one a background: ink where
 * fixed, otherwise the next light background in the cream/sand alternation.
 * Computed at module scope, so render stays pure.
 */
function assignBackgrounds(all: Slot[]): Array<{ key: string; background: Background; render: Slot["render"] }> {
  let light: Background = "sand";
  return all
    .filter((slot) => slot.show !== false)
    .map((slot) => {
      if (slot.ink) return { key: slot.key, background: "ink" as Background, render: slot.render };
      const background = light;
      light = light === "cream" ? "sand" : "cream";
      return { key: slot.key, background, render: slot.render };
    });
}

const flow = assignBackgrounds(slots);

export default function HomePage() {
  return (
    <>
      <Hero />
      {flow.map(({ key, background, render }) => (
        <Fragment key={key}>{render(background)}</Fragment>
      ))}
    </>
  );
}

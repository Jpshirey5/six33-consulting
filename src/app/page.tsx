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
import EngagementCard from "@/components/EngagementCard";
import SectionHead from "@/components/SectionHead";
import Section, { type Background } from "@/components/Section";
import PullQuote from "@/components/PullQuote";
import { engagements, packetNote } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

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
      <p className="mt-6 text-center text-sm text-stone">
        <Link href="/services" className="font-medium text-bronze-deep underline-offset-4 hover:underline">
          See what we work on
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

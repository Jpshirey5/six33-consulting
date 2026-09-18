import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CoreAreas from "@/components/CoreAreas";
import Pillars from "@/components/Pillars";
import StepsTabs from "@/components/StepsTabs";
import Testimonials from "@/components/Testimonials";
import AudienceTabs from "@/components/AudienceTabs";
import Faq from "@/components/Faq";
import VerseBlock from "@/components/VerseBlock";
import FinalCta from "@/components/FinalCta";
import ServiceCard from "@/components/ServiceCard";
import SectionHead from "@/components/SectionHead";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { engagements } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const featured = engagements.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <CoreAreas />
      <StepsTabs />
      <Testimonials />

      <section aria-labelledby="services-heading" className="py-16 sm:py-24">
        <Container>
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
        </Container>
      </section>

      <Pillars />
      <AudienceTabs />
      <Faq />
      <VerseBlock />
      <FinalCta />
    </>
  );
}

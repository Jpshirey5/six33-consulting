import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
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
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const featured = services.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <StepsTabs />
      <Testimonials />

      <section aria-labelledby="services-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="services-heading"
            eyebrow="Services"
            title={
              <>
                Simple, honest options.
                <br />
                <em>No surprises.</em>
              </>
            }
            text="Every engagement is virtual unless noted, and every one begins with an honest look at faith, family, and work. Investment is discussed on your free call."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featured.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <ServiceCard service={service} highlight={i === 1} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-stone">
            Also available: leadership coaching, staff workshops, and the Sunday Ready add-on.{" "}
            <Link href="/services" className="font-medium text-bronze-deep underline-offset-4 hover:underline">
              See all services
            </Link>
          </p>
        </Container>
      </section>

      <AudienceTabs />
      <Faq />
      <VerseBlock />
      <FinalCta />
    </>
  );
}

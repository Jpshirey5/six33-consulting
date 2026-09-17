import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sessions, resets, intensives, coaching, and team workshops for ministry leaders who want faith first, family second, and a pace they can keep.",
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
            Simple, honest options.
            <br />
            <em>No surprises.</em>
          </>
        }
        text="Every engagement is virtual unless noted, and every one begins with an honest look at faith, family, and work. Investment is discussed on your free call, so you can choose the right fit without guessing."
      />
      <section aria-label="Services" className="py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <ServiceCard service={service} highlight={service.slug === "seek-first-reset"} />
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-stone">
            Not sure where to start? Most leaders begin with the Balance Blueprint Session. Book a free call and we
            will help you pick the right fit.
          </p>
        </Container>
      </section>
      <Faq />
      <FinalCta />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import BookingEmbed from "@/components/BookingEmbed";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call or send a message to Six33 Consulting. Tell us what you are carrying and where it is breaking down.",
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact | ${site.name}`, url: "/contact" },
};

const cards = [
  {
    title: "Email directly",
    text: "For questions, scoping a church project, or anything you would rather not put in a form. Goes to John, not a queue.",
    link: { label: site.email, href: `mailto:${site.email}` },
  },
  {
    title: "Book a discovery call",
    text: "Bring the problem that is most stuck. We will start with an intro conversation about what you are dealing with and what would actually help.",
    link: { label: "Pick a time below", href: "#book" },
  },
  {
    title: "Tampa Bay, Florida",
    text: "Sessions are virtual unless noted. Team and staff sessions can be in person, with travel quoted separately.",
  },
];

function CardIcon() {
  return (
    <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-bronze/15 text-bronze-deep">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4h12v9H2zM2 4l6 5 6-5" />
      </svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Tell us what
            <br />
            <em>you are carrying.</em>
          </>
        }
        text="Book a free discovery call, ask a question, or describe what your week actually looks like. A real person responds, usually within a day."
      />

      <section aria-label="Contact options" className="py-8">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-4">
              {cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 60} className="rounded-card bg-white p-6">
                  <CardIcon />
                  <h2 className="mt-4 text-lg font-medium">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{card.text}</p>
                  {card.link && (
                    <a href={card.link.href} className="mt-3 inline-block text-sm font-medium text-ink underline-offset-4 hover:underline">
                      {card.link.label}
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="relative overflow-hidden rounded-card bg-ink p-3 sm:p-5">
              <Image src="/images/form-bg.svg" alt="" width={1200} height={1200} className="absolute inset-0 h-full w-full object-cover" />
              <div className="relative rounded-xl bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="book" aria-labelledby="book-heading" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">Book a discovery call</p>
              <h2 id="book-heading" className="mt-4 text-3xl sm:text-4xl">
                Pick a time <em>that works for you.</em>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-stone sm:text-base">
                We will start by getting clear on your ministry, your team, and the thing that keeps breaking
                down. If one of the Six33 options is a good fit, we will walk through exactly what it would
                involve, including the investment. If it is not a fit, we will say so.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <BookingEmbed />
            </Reveal>
          </div>
        </Container>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}

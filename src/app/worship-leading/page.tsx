import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import WorshipRequestForm from "@/components/WorshipRequestForm";
import FinalCta from "@/components/FinalCta";
import { Eyebrow } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guest worship leading",
  description:
    "Need a worship leader for a Sunday or special event? John Shirey leads your existing team. Based in Tampa Bay, available across Florida, open to travel.",
  alternates: { canonical: "/worship-leading" },
  openGraph: { title: `Guest worship leading | ${site.name}`, url: "/worship-leading" },
};

const facts = [
  {
    label: "What it is",
    title: "I lead your team.",
    text: "Your musicians, your songs, your room. I step in with the people you already have rather than bringing in a band or changing how you do things.",
  },
  {
    label: "Where",
    title: "Based in Tampa Bay.",
    text: "Available across Florida, and open to travel for special events. If you are further out, ask and we will see whether it works.",
  },
  {
    label: "Notice",
    title: "About four weeks.",
    text: "That is enough time to learn your songs and arrange coverage at my own church. If something came up sooner, ask anyway.",
  },
];

const steps = [
  { n: "01.", title: "You send the details", text: "Your date, your church, and your service times." },
  { n: "02.", title: "I reply within a day", text: "Either way, so you are not left waiting on an answer." },
  { n: "03.", title: "We talk it through", text: "A short call about your team, your songs, and the logistics." },
];

export default function WorshipLeadingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Guest worship leading"
        title={
          <>
            Need a worship leader for
            <br />
            <em>a Sunday or special event?</em>
          </>
        }
        text="I come and lead your existing team. Send me the date and I will tell you within a day whether it is open."
      />

      <section aria-label="What to expect" className="py-8">
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {facts.map((f, i) => (
              <Reveal as="li" key={f.label} delay={i * 80} className="rounded-card bg-white p-7 shadow-[0_1px_0_#e4e0dd]">
                <Eyebrow>{f.label}</Eyebrow>
                <p className="mt-4 font-heading text-xl font-medium text-ink">{f.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{f.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={240}>
            <p className="mt-6 text-center text-sm text-stone">
              I take a small number of guest dates each quarter, so dates tend to fill early.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="request-heading" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 id="request-heading" className="text-3xl text-ink sm:text-4xl">
                Fill out the request form
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-stone">
                It takes about a minute. The more you can tell me about the date and your team, the faster I can
                give you a straight answer.
              </p>
              <ol className="mt-10 space-y-6">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span aria-hidden="true" className="font-heading text-2xl font-medium text-ink/30 lining-nums">
                      {s.n}
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-medium text-ink">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-stone">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120} className="rounded-card bg-white p-6 shadow-[0_1px_0_#e4e0dd] sm:p-8">
              <WorshipRequestForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

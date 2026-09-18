import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PixelArt from "@/components/PixelArt";
import VerseBlock from "@/components/VerseBlock";
import FinalCta from "@/components/FinalCta";
import { Eyebrow } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "John Shirey has spent his life in two worlds: local church ministry and technology systems. Six33 Consulting is what happens when those two meet.",
  alternates: { canonical: "/about" },
  openGraph: { title: `About | ${site.name}`, url: "/about" },
};

const stats = [
  { value: "20+", label: "Years serving in local church ministry" },
  { value: "3", label: "States where John has led worship" },
  { value: "10", label: "Years married to Julia" },
  { value: "5", label: "Kids at the table every night" },
];

const disciplines = [
  {
    title: "Ministry",
    text: "Serving in the local church since he was fourteen, and still serving today. He knows what a Saturday night before Easter actually feels like.",
  },
  {
    title: "Worship and production",
    text: "Leading worship, building teams, running rehearsals, and holding together the weekend, including the ProPresenter file nobody else knows how to open.",
  },
  {
    title: "Technology and systems",
    text: "Years in technology sales engineering and business systems. Diagnosing how work actually flows, then rebuilding it into something repeatable.",
  },
  {
    title: "Building things",
    text: "Founder of Sermon Slide Pro, a tool that turns sermons into presentation slides in a fraction of the time. He builds what he recommends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            I understand ministry.
            <br />
            <em>I also understand systems.</em>
          </>
        }
        text="Most people who understand church ministry do not think in systems. Most people who think in systems have never run a Sunday. Six33 exists in the overlap."
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
              <Eyebrow>
                {site.founder.name}, {site.founder.title}
              </Eyebrow>
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
                  He also spends his working life in technology. Years in sales engineering and business systems
                  taught him how to walk into a complicated operation, find where the work is actually getting
                  stuck, and rebuild it into something people can run without heroics. He is the founder of Sermon
                  Slide Pro, a tool that helps pastors and church teams turn sermons into presentation slides in a
                  fraction of the time.
                </p>
                <p>
                  Those two worlds usually stay separate. Six33 Consulting is what happens when they do not. He
                  lives in the Tampa Bay area of Florida.
                </p>
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

      <section aria-labelledby="disciplines-heading" className="py-16 sm:py-24">
        <Container>
          <SectionHead
            id="disciplines-heading"
            eyebrow="The combination"
            title={
              <>
                Four things that
                <br />
                <em>rarely show up together.</em>
              </>
            }
            text="This is the whole differentiator. Not credentials, not a methodology. Someone who has actually carried the weekend and also knows how to build the system that carries it instead."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 70} className="flex min-h-[300px] flex-col justify-between rounded-card bg-white p-6">
                <PixelArt seed={i + 20} count={10} className="h-14 w-28" />
                <div>
                  <h3 className="text-xl font-medium text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{d.text}</p>
                </div>
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
            text="Seek first the kingdom of God, and all these things will be provided. Faith first, family second, ministry third. Easy to say. Hard to keep when the ministry depends on you remembering everything."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Nobody chose the chaos",
                text: "The ministry grew, a volunteer left, a system never got built, and it was always faster to just handle it yourself. That works for a while. Then it quietly becomes the job.",
              },
              {
                title: "Advice alone does not fix it",
                text: "Most leaders do not need another book or conference takeaway. They need someone to sit down with the actual mess, name the real bottleneck, and help build the thing that replaces it.",
              },
              {
                title: "Order is what we are after",
                text: "Not productivity for its own sake. Enough order that the ministry can keep working, the team can grow into it, and the leader still has something left for the people at home.",
              },
            ].map((card, i) => (
              <Reveal as="div" key={card.title} delay={i * 80} className="rounded-card bg-sand p-7">
                <PixelArt seed={i + 60} className="h-16 w-32" />
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

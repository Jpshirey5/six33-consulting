import type { Metadata } from "next";
import Container from "@/components/Container";
import { LogoMark } from "@/components/Logo";
import PixelArt from "@/components/PixelArt";
import PrintButton from "@/components/PrintButton";
import { LinkButton } from "@/components/Button";
import { consultation, coreAreas, engagements, resetWeeks, shifts, solution } from "@/lib/services";
import { framework } from "@/components/Pillars";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting Packet",
  description: "Six33 Consulting. Ministry and leadership consulting. Faith First. Family Second. Ministry Third.",
  alternates: { canonical: "/packet" },
  robots: { index: false, follow: false },
};

function Section({
  number,
  title,
  children,
  breakBefore = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  breakBefore?: boolean;
}) {
  return (
    <section className={`packet-section border-t border-line pt-10 ${breakBefore ? "packet-break" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">{number}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink sm:text-base">{children}</div>
    </section>
  );
}

export default function PacketPage() {
  return (
    <div className="pb-16 pt-10 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Cover */}
          <header className="packet-section">
            <div className="flex items-start justify-between gap-6">
              <div>
                <LogoMark className="h-14 w-14" />
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-bronze-deep">
                  {site.name}
                </p>
                <h1 className="mt-4 text-4xl sm:text-6xl">
                  Ministry &amp; Leadership
                  <br />
                  <em>Consulting.</em>
                </h1>
                <p className="mt-6 font-heading text-lg font-medium text-ink">
                  Faith First. Family Second. Ministry Third.
                </p>
              </div>
              <PixelArt seed={33} count={16} className="hidden h-24 w-40 sm:block" />
            </div>

            <blockquote className="mt-10 rounded-card bg-sand p-7">
              <p className="font-serif text-xl italic leading-snug text-ink sm:text-2xl">
                &ldquo;{site.verse.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-stone">{site.verse.reference}</p>
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="no-print">
                Book a discovery call
              </LinkButton>
              <PrintButton />
            </div>
          </header>

          <div className="mt-14 space-y-14">
            <Section number="01" title="What Six33 Consulting is">
              <p>
                Six33 Consulting helps church and ministry leaders bring their leadership, their ministry, and
                their systems into greater order, so they can lead effectively without sacrificing their
                relationship with God, their family, or their health.
              </p>
              <p>
                In practice, that means sitting down with what you are carrying, finding the real bottleneck, and
                building something practical around it. Not another book, another conference takeaway, or another
                tool to learn. Something built, with your team, that keeps working after we are done.
              </p>
            </Section>

            <Section number="02" title="The Six33 philosophy">
              <p>
                The name comes from Matthew 6:33. It is not just where the name came from. It is the order
                everything else gets built on.
              </p>
              <ul className="mt-6 space-y-5">
                {framework.map((f) => (
                  <li key={f.name} className="rounded-card bg-sand p-6">
                    <p className="font-heading text-lg font-medium text-ink">{f.name}</p>
                    <p className="mt-2 font-serif text-lg italic leading-snug text-ink">{f.question}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{f.text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                Faith first. Family second. Ministry third. When those are properly ordered, ministry tends to get
                healthier, more sustainable, and more fruitful. When they are out of order, the ministry can still
                look fine from the outside for a long time.
              </p>
            </Section>

            <Section number="03" title="The problem we solve" breakBefore>
              <p className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
                &ldquo;How do I get all of this out of my head and into a system that actually works?&rdquo;
              </p>
              <p>
                Most ministry leaders are responsible for people, services, volunteers, technology, communication,
                planning, administration, and a hundred details nobody else sees. The ministry keeps functioning,
                but it functions because one person is personally holding it together.
              </p>
              <p>That is the shift we are after:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {shifts.map((s) => (
                  <li key={s.from} className="flex items-center gap-3 rounded-lg bg-sand px-4 py-3 text-sm">
                    <span className="text-stone line-through decoration-stone/40">{s.from}</span>
                    <span aria-hidden="true" className="text-bronze">&rarr;</span>
                    <span className="font-medium text-ink">{s.to}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">Every engagement is aiming at the same five outcomes:</p>
              <ul className="mt-4 space-y-2">
                {solution.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                    <span>
                      <span className="font-medium text-ink">{item.title}.</span>{" "}
                      <span className="text-stone">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            {coreAreas.map((area, i) => (
              <Section
                key={area.slug}
                number={`0${i + 4}`}
                title={area.name}
                breakBefore={i === 0}
              >
                <p className="font-heading text-lg font-medium text-ink">{area.headline}</p>
                <p>{area.summary}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                  What this can include
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {area.focus.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-stone">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-lg bg-sand px-5 py-4 text-sm font-medium text-ink">{area.outcome}</p>
              </Section>
            ))}

            <Section number="07" title={consultation.name} breakBefore>
              <p className="text-sm font-medium text-stone">{consultation.format}</p>
              <p>{consultation.summary}</p>
              <p className="mt-4 rounded-lg bg-sand px-5 py-4 text-sm font-medium text-ink">
                This is the entry point. Every engagement below starts with one of these.
              </p>
            </Section>

            {engagements.map((e, i) => (
              <Section key={e.slug} number={`0${i + 8}`} title={e.name}>
                <p className="text-sm font-medium text-stone">{e.format}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                  Who this is for
                </p>
                <p className="mt-2">{e.forWhom}</p>
                <p>{e.summary}</p>
                {e.slug === "ministry-reset" && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {resetWeeks.map((w) => (
                      <li key={w.name} className="rounded-lg bg-sand p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone">{w.week}</p>
                        <p className="mt-1 font-heading text-lg font-medium text-ink">{w.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-stone">{w.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                  What you leave with
                </p>
                <ul className="mt-3 space-y-2">
                  {e.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            ))}

            <Section number="11" title="What working together looks like" breakBefore>
              <p>
                Every engagement starts with a One-Time Focused Consultation. Bring the problem, leave with a
                clear next step. From there, some leaders go deeper and some do not, and both are fine.
              </p>
              <ul className="mt-5 space-y-4">
                {resetWeeks.map((w, i) => (
                  <li key={w.name} className="flex gap-5 rounded-lg bg-sand p-5">
                    <p className="font-heading text-3xl font-medium text-ink/30 lining-nums">0{i + 1}.</p>
                    <div>
                      <p className="font-heading text-lg font-medium text-ink">{w.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-stone">{w.text}</p>
                      <p className="mt-2 text-xs text-stone">
                        <span className="font-semibold text-bronze-deep">You leave with:</span>{" "}
                        {w.deliverables.join(", ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                Sessions are virtual unless noted. Team and staff sessions are also available, virtual or in
                person. We will talk through the right fit on your consultation.
              </p>
            </Section>

            <Section number="12" title="About the founder">
              <p>
                John Shirey has served in ministry since he was fourteen, leading worship in churches across
                Florida, Virginia, and New York, and he continues to serve in local church ministry today. He has
                been married to his wife, Julia, for ten years, and together they are raising five children.
              </p>
              <p>
                He also spends his working life in technology. Years in sales engineering and business systems
                taught him how to walk into a complicated operation, find where the work is actually getting stuck,
                and rebuild it into something people can run without heroics. He is the founder of Sermon Slide Pro,
                a tool that helps pastors and church teams turn sermons into presentation slides in a fraction of
                the time.
              </p>
              <p className="rounded-card bg-sand p-6 font-serif text-xl italic leading-snug text-ink">
                I understand ministry, but I also understand systems. I do not just give you advice. I help
                identify the problem, build a better system, and put it into practice.
              </p>
              <p>He lives in the Tampa Bay area of Florida.</p>
            </Section>

            <Section number="13" title="Let us talk">
              <p>
                Tell us what you are carrying and where it is breaking down. If Six33 is a fit, we will walk through
                exactly what working together would look like. If it is not, we will tell you that too.
              </p>
              <div className="mt-6 rounded-card bg-ink p-7 text-white">
                <p className="font-heading text-2xl font-medium">Book a discovery call</p>
                <p className="mt-3 text-sm text-white/80">
                  Bring the one thing that is most stuck. We will start there.
                </p>
                <dl className="mt-6 space-y-2 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-white/60">Web</dt>
                    <dd>{site.url.replace(/^https?:\/\//, "")}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-white/60">Email</dt>
                    <dd>{site.email}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-white/60">Based in</dt>
                    <dd>{site.founder.location}</dd>
                  </div>
                </dl>
              </div>
              <p className="pt-4 text-center font-heading text-sm font-medium tracking-wide text-stone">
                Faith First. Family Second. Ministry Third.
              </p>
            </Section>
          </div>
        </div>
      </Container>
    </div>
  );
}

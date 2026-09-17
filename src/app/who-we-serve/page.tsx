import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PixelArt from "@/components/PixelArt";
import AudienceTabs from "@/components/AudienceTabs";
import FinalCta from "@/components/FinalCta";
import { Eyebrow, LinkButton } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Six33 Consulting serves ministry pastors, worship pastors, and church staff who want to lead well without their family getting the leftovers.",
  alternates: { canonical: "/who-we-serve" },
  openGraph: { title: `Who We Serve | ${site.name}`, url: "/who-we-serve" },
};

const audiences = [
  {
    id: "worship-pastors",
    eyebrow: "Worship pastors",
    title: "Your own worship starts to feel like a job.",
    text: [
      "Nights and weekends belong to the church. Rehearsals, set lists, and Sunday run-throughs eat Saturdays, and somewhere along the way, singing to God became something you do for other people.",
      "We help you get Saturdays back, build a weekly prep rhythm that holds, and remember why you started singing in the first place.",
    ],
    points: ["Worship pastors and worship leaders", "Younger leaders balancing ministry and a young family", "Leaders carrying every weekend alone"],
  },
  {
    id: "ministry-pastors",
    eyebrow: "Ministry pastors",
    title: "Family gets the tired version of you.",
    text: [
      "Sermon prep, meetings, and counseling fill the week. By the time you get home, the best of your attention has already gone to everyone else, and the people who love you most learn to expect what is left.",
      "We help you set a pace your home can live with, protect the time that matters, and share the load so that ministry stops running on you alone.",
    ],
    points: ["Lead, associate, and executive pastors", "Pastors with young families", "Leaders heading into a busy season"],
  },
  {
    id: "church-staff",
    eyebrow: "Church staff",
    title: "Not a pastor? You are welcome here too.",
    text: [
      "Children's, student, groups, and operations leaders carry the same weight and the same calendar. If you serve on a church staff and want to lead well without losing your home, we would love to talk.",
    ],
    points: ["Children's and student ministry leaders", "Groups and discipleship leaders", "Operations and administrative staff"],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageIntro
        eyebrow="Who we serve"
        title={
          <>
            Built for the leaders
            <br />
            <em>carrying the most.</em>
          </>
        }
        text="Our primary focus is worship pastors and younger ministry leaders balancing ministry with a young family. If you lead in a church and your home is feeling the cost, this is for you."
      />

      <section aria-label="Audiences" className="py-8">
        <Container>
          <div className="space-y-4">
            {audiences.map((a, i) => (
              <Reveal
                key={a.id}
                as="article"
                delay={i * 60}
                className={`scroll-mt-24 rounded-card p-7 sm:p-10 ${i % 2 === 0 ? "bg-white" : "bg-sand"}`}
              >
                <div id={a.id} className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                  <div>
                    <Eyebrow>{a.eyebrow}</Eyebrow>
                    <h2 className="mt-4 text-3xl sm:text-4xl">{a.title}</h2>
                    <PixelArt seed={i + 40} className="mt-8 h-20 w-40" />
                  </div>
                  <div>
                    <div className="space-y-4 text-sm leading-relaxed text-ink sm:text-base">
                      {a.text.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <ul className="mt-6 space-y-2">
                      {a.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-stone">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <LinkButton href="/contact#book">Book a free call</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <AudienceTabs />
      <FinalCta />
    </>
  );
}

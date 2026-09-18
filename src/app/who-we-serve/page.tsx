import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PixelArt from "@/components/PixelArt";
import AudienceTabs from "@/components/AudienceTabs";
import FinalCta from "@/components/FinalCta";
import { Eyebrow } from "@/components/Button";
import BookingCta from "@/components/BookingCta";
import { audiences } from "@/lib/audiences";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Six33 Consulting works with worship leaders, pastors, ministry directors, production leaders, and church staff who are carrying more than any one person should have to hold.",
  alternates: { canonical: "/who-we-serve" },
  openGraph: { title: `Who We Serve | ${site.name}`, url: "/who-we-serve" },
};

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
        text="If the ministry you lead works largely because you are personally holding it together, you are exactly who this is for. Different roles, same problem."
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
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
                      Who this usually is
                    </p>
                    <ul className="mt-4 space-y-2">
                      {a.who.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-stone">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <BookingCta align="left" />
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

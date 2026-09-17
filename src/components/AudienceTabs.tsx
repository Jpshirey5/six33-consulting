"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const tabs = [
  {
    id: "worship-pastors",
    label: "Worship pastors",
    title: "Your own worship starts to feel like a job.",
    text: "Nights and weekends belong to the church. Rehearsals, set lists, and Sunday run-throughs eat Saturdays. We help you get Saturdays back, build a weekly prep rhythm that holds, and remember why you started singing in the first place.",
    points: ["A weekly prep rhythm that ends on time", "Saturdays back with the family", "Personal worship that is yours again"],
  },
  {
    id: "ministry-pastors",
    label: "Ministry pastors",
    title: "Family gets the tired version of you.",
    text: "Sermon prep, meetings, and counseling fill the week, and the people who love you most learn to expect what is left. We help you set a pace your home can live with, protect the time that matters, and share the load.",
    points: ["A pace your home can live with", "Boundaries that hold on hard weeks", "Leaders raised up around you"],
  },
  {
    id: "church-staff",
    label: "Church staff",
    title: "Not a pastor? You are welcome here too.",
    text: "Children's, student, groups, and operations leaders carry the same weight and the same calendar. If you serve on a church staff and want to lead well without losing your home, we would love to talk.",
    points: ["Soul care for the whole staff", "Healthy pace as a team", "Half-day workshops, virtual or in person"],
  },
];

/** Pill tabs over an image card, like the template's "how it works" block. */
export default function AudienceTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = tabs[active];

  return (
    <section aria-labelledby="audience-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          align="center"
          id="audience-heading"
          eyebrow="Who we serve"
          title={
            <>
              For the leaders carrying the most.
              <br />
              <em>Especially the ones with young families.</em>
            </>
          }
        />
        <Reveal className="on-dark relative mt-12 overflow-hidden rounded-card bg-ink text-white">
          <Image src="/images/audience-bg.svg" alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
          <div className="relative p-4 sm:p-8 lg:p-10">
            <div role="tablist" aria-label="Who we serve" className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`${baseId}-panel`}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    i === active ? "bg-white text-ink" : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${active}`}
              className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-6 text-ink sm:p-10"
            >
              <h3 className="text-2xl sm:text-3xl">{current.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">{current.text}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={`/who-we-serve#${current.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze-deep underline-offset-4 hover:underline">
                More for {current.label.toLowerCase()} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

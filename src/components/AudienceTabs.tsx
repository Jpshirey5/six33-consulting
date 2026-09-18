"use client";

import Image from "next/image";
import Section, { type Background } from "./Section";
import Link from "next/link";
import { useId, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { audiences } from "@/lib/audiences";

/** Pill tabs over an image card, like the template's "how it works" block. */
export default function AudienceTabs({ background = "cream" }: { background?: Background }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = audiences[active];

  return (
    <Section background={background} labelledBy="audience-heading">
      <SectionHead
        align="center"
        id="audience-heading"
        eyebrow="Who we serve"
        title={
          <>
            For the leaders carrying the most.
            <br />
            <em>Especially the ones holding it alone.</em>
          </>
        }
      />
      <Reveal className="on-dark relative mt-12 overflow-hidden rounded-card bg-ink text-white">
        <Image src="/images/audience-bg.svg" alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
        <div className="relative p-4 sm:p-8 lg:p-10">
          <div role="tablist" aria-label="Who we serve" className="flex flex-wrap justify-center gap-2">
            {audiences.map((tab, i) => (
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
            <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">{current.short}</p>
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
    </Section>
  );
}

"use client";

import { useId, useState } from "react";
import Section, { type Background } from "./Section";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { resetWeeks } from "@/lib/services";

/** Vertical tab list beside a panel showing what comes out of each week. */
export default function StepsTabs({ background = "cream" }: { background?: Background }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = resetWeeks[active];

  return (
    <Section background={background} labelledBy="steps-heading">
      <SectionHead
        id="steps-heading"
        eyebrow="How it works"
        title={
          <>
            Find the bottleneck.
            <br />
            <em>Build the system.</em>
          </>
        }
        text="Whether we meet once or work together for months, the path is the same. Four moves, always in the same order, always ending with something built rather than something discussed."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div role="tablist" aria-label="The four steps" className="flex flex-col">
          {resetWeeks.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step.name}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setActive(i)}
                className={`border-b border-line py-5 text-left transition-colors ${isActive ? "text-ink" : "text-stone hover:text-ink"}`}
              >
                <span className="flex items-center gap-3 text-lg font-medium">
                  <span aria-hidden="true" className={`text-bronze transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}>
                    &raquo;
                  </span>
                  {step.name}
                </span>
                <span
                  id={`${baseId}-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`${baseId}-tab-${i}`}
                  hidden={!isActive}
                  className="mt-2 block pl-7 text-sm leading-relaxed text-stone"
                >
                  {step.text}
                </span>
              </button>
            );
          })}
        </div>

        <Reveal className="rounded-card bg-sand p-3 sm:p-5">
          <div className="rounded-xl bg-white p-5 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone">{current.week}</p>
                <p className="mt-1 text-2xl font-medium text-ink">{current.name}</p>
              </div>
              <ol className="flex gap-1.5" aria-hidden="true">
                {resetWeeks.map((w, i) => (
                  <li key={w.name} className={`h-2 w-8 rounded-sm ${i <= active ? "bg-bronze" : "bg-line"}`} />
                ))}
              </ol>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-stone">{current.text}</p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-bronze-deep">
              What you walk away with
            </p>
            <ul className="mt-4 space-y-3">
              {current.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-lg bg-sand/70 px-4 py-3 text-sm text-ink">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-stone">
              This is the shape of The Ministry Reset. A single consultation follows the same thinking in one
              session.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

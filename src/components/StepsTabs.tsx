"use client";

import { useId, useState } from "react";
import Container from "./Container";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export const steps = [
  {
    name: "Assess",
    text: "An honest look at where faith, family, and work actually sit right now, not where you wish they did.",
  },
  {
    name: "Align",
    text: "Name your priorities, in order, and decide what has to change for your week to reflect them.",
  },
  {
    name: "Build",
    text: "Rhythms, boundaries, and a shared load that put first things first and keep them there.",
  },
  {
    name: "Sustain",
    text: "A plan for busy seasons so the new order holds when Easter, Christmas, and everything else arrives.",
  },
];

const week = [
  { day: "Mon", blocks: ["faith", "work", "family"] },
  { day: "Tue", blocks: ["faith", "work", "family"] },
  { day: "Wed", blocks: ["faith", "work", "work"] },
  { day: "Thu", blocks: ["faith", "work", "family"] },
  { day: "Fri", blocks: ["faith", "rest", "family"] },
  { day: "Sat", blocks: ["faith", "family", "family"] },
  { day: "Sun", blocks: ["faith", "work", "rest"] },
];

const blockStyle: Record<string, string> = {
  faith: "bg-bronze/80",
  family: "bg-bronze/35",
  work: "bg-ink/70",
  rest: "bg-line",
};

/** Vertical tab list beside an "ideal week" mock, like the template's delegation section. */
export default function StepsTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <section aria-labelledby="steps-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          id="steps-heading"
          eyebrow="How it works"
          title={
            <>
              Tell us where you are.
              <br />
              <em>We build the rhythm.</em>
            </>
          }
          text="Whether we meet once or over several months, the path is the same. Four steps, always in the same order, always ending with a week you can actually live."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div role="tablist" aria-label="The four steps" className="flex flex-col">
            {steps.map((step, i) => {
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
            <div className="rounded-xl bg-white p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone">Your ideal week</p>
                  <p className="mt-1 text-lg font-medium text-ink">Step {active + 1}: {steps[active].name}</p>
                </div>
                <ul className="hidden gap-3 text-[11px] text-stone sm:flex">
                  {["faith", "family", "work", "rest"].map((k) => (
                    <li key={k} className="flex items-center gap-1.5">
                      <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-sm ${blockStyle[k]}`} />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid grid-cols-7 gap-2">
                {week.map((d) => (
                  <div key={d.day} className="flex flex-col gap-2">
                    <p className="text-center text-[11px] font-medium text-stone">{d.day}</p>
                    {d.blocks.map((b, j) => (
                      <div key={j} className={`h-10 rounded-md sm:h-14 ${blockStyle[b]}`} />
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-stone">
                Illustrative. Your week will look like your life, not a template.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

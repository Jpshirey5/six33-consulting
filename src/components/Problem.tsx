import Reveal from "./Reveal";
import Section, { type Background } from "./Section";
import SectionHead from "./SectionHead";

const scenes = [
  "The worship leader who is doing everything, because it is faster than explaining it.",
  "The pastor with forty-seven things living in his head and no place to put them.",
  "The volunteer team that only works because one person knows how everything works.",
  "The Sunday that comes together every single week, and feels unnecessarily chaotic every single week.",
  "The ministry leader who loves what they do, and is exhausted by how they have to do it.",
];

export default function Problem({ background = "cream" }: { background?: Background }) {
  return (
    <Section background={background} labelledBy="problem-heading">
      <SectionHead
        id="problem-heading"
        eyebrow="Sound familiar"
        title={
          <>
            You are not disorganized.
            <br />
            <em>You are carrying too much.</em>
          </>
        }
        text="Most ministry leaders are responsible for people, services, volunteers, technology, communication, planning, administration, and a hundred details nobody else sees. The ministry keeps working because someone is personally holding it together."
      />

      <div className="mt-12">
        <Reveal className="rounded-card bg-white p-7 sm:p-10">
          <ul className="space-y-5">
            {scenes.map((s) => (
              <li key={s} className="flex items-start gap-4 border-b border-line pb-5 text-base leading-relaxed text-ink last:border-0 last:pb-0 sm:text-lg">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </Section>
  );
}

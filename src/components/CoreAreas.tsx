import Link from "next/link";
import Container from "./Container";
import PixelArt from "./PixelArt";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { coreAreas } from "@/lib/services";

/** The three consulting areas, linked to their detail sections on /services. */
export default function CoreAreas() {
  return (
    <section aria-labelledby="areas-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHead
          id="areas-heading"
          eyebrow="Three areas"
          title={
            <>
              Where we work,
              <br />
              <em>and what changes.</em>
            </>
          }
          text="Leadership, production, and ministry systems. Most leaders start in one and find the others were part of the same problem."
        />
        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {coreAreas.map((area, i) => (
            <Reveal
              as="li"
              key={area.slug}
              delay={i * 80}
              className={`flex flex-col rounded-card p-7 sm:p-8 ${i === 1 ? "bg-white" : "bg-sand"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-heading text-4xl font-medium text-ink/30 lining-nums">0{i + 1}.</p>
                <PixelArt seed={i + 30} count={12} className="h-12 w-24" />
              </div>
              <h3 className="mt-8 text-2xl font-medium text-ink">{area.name}</h3>
              <p className="mt-2 text-sm font-medium text-bronze-deep">{area.short}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-stone">{area.summary}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-ink">{area.outcome}</p>
              <Link
                href={`/services#${area.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze-deep underline-offset-4 hover:underline"
              >
                See what this includes <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

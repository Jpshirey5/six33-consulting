import type { ReactNode } from "react";
import { Eyebrow } from "./Button";
import Reveal from "./Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "split" | "center";
  id?: string;
  tone?: "dark" | "light";
};

/** Eyebrow + heading, with the description either beside it or centered under it, like the template. */
export default function SectionHead({ eyebrow, title, text, align = "split", id, tone = "dark" }: SectionHeadProps) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const textColor = tone === "light" ? "text-white/80" : "text-stone";

  if (align === "center") {
    return (
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow className={tone === "light" ? "text-bronze" : ""}>{eyebrow}</Eyebrow>
        <h2 id={id} className={`mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] ${titleColor}`}>
          {title}
        </h2>
        {text && <p className={`mx-auto mt-5 max-w-xl text-base sm:text-lg ${textColor}`}>{text}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
      <div>
        <Eyebrow className={tone === "light" ? "text-bronze" : ""}>{eyebrow}</Eyebrow>
        <h2 id={id} className={`mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-[3.4rem] ${titleColor}`}>
          {title}
        </h2>
      </div>
      {text && <p className={`max-w-md text-base leading-relaxed lg:pb-2 ${textColor}`}>{text}</p>}
    </Reveal>
  );
}

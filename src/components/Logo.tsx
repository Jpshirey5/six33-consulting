import Link from "next/link";
import LogoMark from "./LogoMark";

type LogoProps = { asLink?: boolean; tone?: "dark" | "light"; className?: string };

/** Mark plus wordmark. The mark lives in LogoMark.tsx; the standalone SVG is public/logo.svg. */
export default function Logo({ asLink = true, tone = "dark", className = "" }: LogoProps) {
  const color = tone === "light" ? "text-white" : "text-ink";
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${color} ${className}`}>
      <LogoMark tone={tone} className="h-7 w-7" />
      <span className="inline-flex items-baseline gap-1.5 font-heading text-lg tracking-[-0.02em] lining-nums">
        <span className="font-semibold">
          six<span className="text-bronze">33</span>
        </span>
        <span className="text-sm font-medium opacity-70">consulting</span>
      </span>
    </span>
  );
  if (!asLink) {
    return (
      <span className="inline-block">
        <span className="sr-only">Six33 Consulting</span>
        {mark}
      </span>
    );
  }
  return (
    <Link href="/" aria-label="Six33 Consulting, home" className="inline-block rounded-sm">
      {mark}
    </Link>
  );
}

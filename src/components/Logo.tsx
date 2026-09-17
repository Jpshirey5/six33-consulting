import Link from "next/link";

type LogoProps = { asLink?: boolean; tone?: "dark" | "light"; className?: string };

/**
 * Temporary text logo. Swap the inner markup for an <Image> or inline SVG
 * later; keep the outer link and aria-label so nothing else has to change.
 */
export default function Logo({ asLink = true, tone = "dark", className = "" }: LogoProps) {
  const color = tone === "light" ? "text-white" : "text-ink";
  const mark = (
    <span className={`inline-flex items-baseline gap-1.5 font-heading text-lg tracking-[-0.02em] lining-nums ${color} ${className}`}>
      <span className="font-semibold">
        six<span className="text-bronze">33</span>
      </span>
      <span className="text-sm font-medium opacity-70">consulting</span>
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

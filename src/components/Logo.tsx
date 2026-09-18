import Link from "next/link";

type Variant = "dark" | "light";

/** "dark" = dark ink for light backgrounds. "light" = white for dark backgrounds. */
const variantColor: Record<Variant, string> = {
  dark: "text-ink",
  light: "text-white",
};

type LogoMarkProps = {
  /** Rendered size in px. Omit to size with utility classes instead. */
  size?: number;
  variant?: Variant;
  className?: string;
};

/**
 * The Six33 mark on its own: an upward chevron inside a rounded frame, with an
 * orange square at the peak. Frame and chevron use currentColor, so the mark
 * inherits ink on light backgrounds and white on dark. Works at favicon size.
 */
export function LogoMark({ size, variant = "dark", className = "" }: LogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 52 52"
      style={size ? { width: size, height: size } : undefined}
      className={`${variantColor[variant]} ${className}`}
    >
      <rect x="2" y="2" width="48" height="48" rx="12" fill="none" stroke="currentColor" strokeWidth="4" />
      <path
        d="M14 33 L26 19 L38 33"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="21" y="8" width="10" height="10" rx="2.5" fill="#F48D16" />
    </svg>
  );
}

const SUBTITLE = "CONSULTING";

type LogoProps = {
  /** Height of the mark in px. The wordmark scales from it. */
  size?: number;
  variant?: Variant;
  asLink?: boolean;
  className?: string;
};

/**
 * The full horizontal lockup: mark on the left, stacked SIX33 / CONSULTING
 * wordmark on the right, mark centered against the pair.
 *
 * "CONSULTING" is laid out as individual letters in a space-between flex row so
 * it is justified to the exact width of "SIX33" above it, rather than relying on
 * a hand-tuned letter-spacing that drifts between sizes and font fallbacks.
 */
export default function Logo({ size = 28, variant = "dark", asLink = true, className = "" }: LogoProps) {
  const title = size * 0.66;
  const subtitle = title / 3;

  const lockup = (
    <span
      aria-hidden="true"
      className={`inline-flex items-center ${variantColor[variant]} ${className}`}
      style={{ gap: size * 0.32 }}
    >
      <LogoMark size={size} variant={variant} />
      <span className="inline-flex flex-col font-heading font-semibold">
        {/* Negative right margin trims the trailing letter-space so the box ends
            at the final glyph, keeping both lines flush on the right edge. */}
        <span
          className="lining-nums"
          style={{ fontSize: title, lineHeight: 1, letterSpacing: "0.02em", marginRight: "-0.02em" }}
        >
          SIX<span className="text-bronze">33</span>
        </span>
        <span
          className="flex justify-between"
          style={{ fontSize: subtitle, lineHeight: 1, marginTop: subtitle * 0.45 }}
        >
          {SUBTITLE.split("").map((letter, i) => (
            <span key={`${letter}-${i}`}>{letter}</span>
          ))}
        </span>
      </span>
    </span>
  );

  if (!asLink) {
    return (
      <span className="inline-block">
        <span className="sr-only">Six33 Consulting</span>
        {lockup}
      </span>
    );
  }

  return (
    <Link href="/" aria-label="Six33 Consulting, home" className="inline-block rounded-sm">
      {lockup}
    </Link>
  );
}

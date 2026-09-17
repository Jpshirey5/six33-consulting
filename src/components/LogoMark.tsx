type LogoMarkProps = { className?: string; tone?: "dark" | "light" };

/**
 * The Six33 mark: an upward chevron inside a rounded frame, with an orange
 * square at the peak. Seek first. Works down to favicon size.
 */
export default function LogoMark({ className = "", tone = "dark" }: LogoMarkProps) {
  const line = tone === "light" ? "#F7F7F4" : "#251F19";
  return (
    <svg aria-hidden="true" viewBox="0 0 52 52" className={className}>
      <rect x="2" y="2" width="48" height="48" rx="12" fill="none" stroke={line} strokeWidth="4" />
      <path d="M14 33 L26 19 L38 33" fill="none" stroke={line} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="21" y="8" width="10" height="10" rx="2.5" fill="#F48D16" />
    </svg>
  );
}

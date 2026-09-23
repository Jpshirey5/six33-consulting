import { LinkButton } from "./Button";
import { bookingLabel, bookingSubline } from "@/lib/services";
import { site } from "@/lib/site";

type BookingCtaProps = {
  /** "light" on ink backgrounds, "dark" on cream and sand. */
  variant?: "dark" | "light" | "outline";
  align?: "center" | "left";
  className?: string;
  /** Extra links rendered beside the primary button. */
  children?: React.ReactNode;
  tone?: "dark" | "light";
};

/**
 * The single call to action for the whole site: book the free discovery call.
 * The button opens /book, which takes their details into HubSpot and then
 * hands off to Calendly. The line underneath is the same everywhere so the
 * next step never has to be explained twice.
 */
export default function BookingCta({
  variant = "dark",
  align = "center",
  className = "",
  children,
  tone = "dark",
}: BookingCtaProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const subline = tone === "light" ? "text-white/75" : "text-stone";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      <div className={`flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <LinkButton href={site.bookingPath} variant={variant}>
          {bookingLabel}
        </LinkButton>
        {children}
      </div>
      <p className={`mt-4 max-w-md text-sm leading-relaxed ${subline}`}>{bookingSubline}</p>
    </div>
  );
}

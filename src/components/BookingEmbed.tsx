import { site } from "@/lib/site";

/**
 * Calendly inline embed for the free discovery call.
 *
 * The event in Calendly must be configured to ask for:
 *   Name   (Calendly built-in)
 *   Email  (Calendly built-in)
 *   Church (custom question 1)
 *   Role   (custom question 2)
 *
 * Those four answers are what the booking needs to capture. Connecting the
 * booking to a CRM is done inside Calendly's own integrations, not here.
 */
export default function BookingEmbed() {
  const url = site.bookingUrl;
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "251f19",
    primary_color: "f48d16",
  });
  const src = `${url}${url.includes("?") ? "&" : "?"}${params.toString()}`;

  return (
    <div className="overflow-hidden rounded-card bg-white">
      <iframe src={src} title="Book a discovery call" loading="lazy" className="h-[760px] w-full" />
      <p className="border-t border-line px-5 py-3 text-xs text-stone">
        Calendar not loading?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-bronze-deep underline-offset-4 hover:underline"
        >
          Open the booking page in a new tab
        </a>
        .
      </p>
    </div>
  );
}

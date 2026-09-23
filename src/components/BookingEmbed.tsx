import { calendlySrc, type BookingPrefill } from "@/lib/booking";

/**
 * Calendly inline embed for the free discovery call. This is step two of the
 * booking flow — the HubSpot form in BookingFlow runs first and passes the
 * name and email it collected, so the calendar opens already filled in.
 */
export default function BookingEmbed({ prefill }: { prefill?: BookingPrefill }) {
  const src = calendlySrc(prefill);

  return (
    <div className="overflow-hidden rounded-card bg-white">
      <iframe src={src} title="Book a discovery call" loading="lazy" className="h-[760px] w-full" />
      <p className="border-t border-line px-5 py-3 text-xs text-stone">
        Calendar not loading?{" "}
        <a
          href={src}
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

import { site } from "@/lib/site";

/**
 * Booking embed. Works with a Cal.com or Calendly event URL set in
 * NEXT_PUBLIC_BOOKING_URL (or the fallback in src/lib/site.ts).
 * Cal.com example: https://cal.com/your-username/free-call
 * Calendly example: https://calendly.com/your-username/free-call
 */
export default function BookingEmbed() {
  const url = site.bookingUrl;
  const isCal = url.includes("cal.com");
  const src = isCal ? `${url}${url.includes("?") ? "&" : "?"}embed=true&theme=light` : url;

  return (
    <div className="overflow-hidden rounded-card bg-white">
      <iframe src={src} title="Book a consultation" loading="lazy" className="h-[720px] w-full" allow="payment" />
      <p className="border-t border-line px-5 py-3 text-xs text-stone">
        Calendar not loading?{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="font-medium text-bronze-deep underline-offset-4 hover:underline">
          Open the booking page in a new tab
        </a>
        .
      </p>
    </div>
  );
}

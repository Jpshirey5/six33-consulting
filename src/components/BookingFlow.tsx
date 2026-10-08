"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import BookingEmbed from "./BookingEmbed";
import { hubspotEmbedSrc, hubspotForm, type BookingPrefill } from "@/lib/booking";
import { site } from "@/lib/site";
import { useHubSpotSubmit } from "./useHubSpotSubmit";

/**
 * The whole booking flow, in two steps on one page.
 *
 *   1. The Six33 Discovery Call form, rendered by HubSpot. Fields are managed
 *      in HubSpot, so questions change there, not here.
 *   2. Calendly, swapped in once HubSpot confirms the submission.
 *
 * Listening for the submission lives in useHubSpotSubmit, which the guest
 * worship leading form uses too.
 */

export default function BookingFlow() {
  const [submitted, setSubmitted] = useState(false);
  const [prefill, setPrefill] = useState<BookingPrefill>({});
  const schedulerRef = useRef<HTMLDivElement>(null);

  // Advance even when no values come back: a missing prefill is a small
  // annoyance, but a calendar that never appears costs the booking.
  const advance = useCallback((values: Record<string, string>) => {
    setPrefill({
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
    });
    setSubmitted(true);
  }, []);

  useHubSpotSubmit(hubspotForm.formId, advance);

  useEffect(() => {
    if (submitted) schedulerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submitted]);

  // The two steps carry distinct keys on purpose. HubSpot's script injects its
  // iframe into the mount div below, where React cannot see it, so without a
  // key React reuses that same node for the scheduler and the form iframe
  // rides along into it — leaving both steps on screen at once.
  if (submitted) {
    return (
      <div key="scheduler" ref={schedulerRef}>
        <div role="status" className="mb-6 rounded-xl bg-cream p-5">
          <p className="text-lg font-semibold text-ink">
            Thank you{prefill.firstName ? `, ${prefill.firstName}` : ""}.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-stone">
            Last step: pick the time that works best for you.
          </p>
        </div>
        <BookingEmbed prefill={prefill} />
      </div>
    );
  }

  return (
    <div key="form">
      <div
        className="hs-form-frame"
        data-region={hubspotForm.region}
        data-portal-id={hubspotForm.portalId}
        data-form-id={hubspotForm.formId}
      />
      <Script src={hubspotEmbedSrc()} strategy="afterInteractive" />
      {/* An ad blocker or a HubSpot outage should never cost a booking. */}
      <p className="mt-4 text-xs text-stone">
        Form not loading?{" "}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-bronze-deep underline-offset-4 hover:underline"
        >
          Skip ahead and pick a time
        </a>
        .
      </p>
    </div>
  );
}

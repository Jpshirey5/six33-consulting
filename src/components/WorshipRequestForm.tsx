"use client";

import { useCallback, useState } from "react";
import Script from "next/script";
import { hubspotEmbedSrc, worshipForm } from "@/lib/booking";
import { site } from "@/lib/site";
import { useHubSpotSubmit } from "./useHubSpotSubmit";

/**
 * Guest worship leading requests. Unlike the discovery flow, this does not
 * hand off to a calendar: whether a date is open is something only John can
 * answer, so the form ends with a reply promise instead of a scheduler.
 */
export default function WorshipRequestForm() {
  const [name, setName] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback((values: Record<string, string>) => {
    setName(values.firstname ?? null);
    setSent(true);
  }, []);

  useHubSpotSubmit(worshipForm.formId, onSubmit);

  if (sent) {
    return (
      <div role="status" className="rounded-card bg-cream p-7 sm:p-8">
        <p className="text-lg font-semibold text-ink">Thank you{name ? `, ${name}` : ""}.</p>
        <p className="mt-2 text-sm leading-relaxed text-stone">
          Your request is in. I will reply within a day either way, so you are not left waiting on a date.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="hs-form-frame"
        data-region={worshipForm.region}
        data-portal-id={worshipForm.portalId}
        data-form-id={worshipForm.formId}
      />
      <Script src={hubspotEmbedSrc()} strategy="afterInteractive" />
      {/* An ad blocker, a HubSpot outage, or a form id that is not set yet
          should never cost a request, so email is always offered. */}
      <p className="mt-6 text-sm leading-relaxed text-stone">
        Form not loading, or would rather just write?{" "}
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Worship leading request")}`}
          className="font-medium text-bronze-deep underline-offset-4 hover:underline"
        >
          {site.email}
        </a>{" "}
        goes straight to John. Include your date, your church, and your city.
      </p>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import BookingEmbed from "./BookingEmbed";
import { hubspotEmbedSrc, hubspotForm, type BookingPrefill } from "@/lib/booking";
import { site } from "@/lib/site";

/**
 * The whole booking flow, in two steps on one page.
 *
 *   1. The Six33 Discovery Call form, rendered by HubSpot. Fields are managed
 *      in HubSpot, so questions change there, not here.
 *   2. Calendly, swapped in once HubSpot confirms the submission.
 *
 * Six33's form is one of HubSpot's newer (V4) forms, which announce themselves
 * through `hs-form-event:` events on window rather than the legacy
 * `hsFormCallback` postMessage. V4 also does not put the answers in the event:
 * they come from an async call on the form handle, and arrive namespaced by
 * object type, e.g. `0-1/firstname`. Both paths are handled below, because the
 * legacy one still applies if this is ever pointed at an older form.
 */

type HubSpotFieldValue = { name?: unknown; value?: unknown };

type HubSpotFormApi = {
  getFormId?: () => string;
  getFormFieldValues?: () => Promise<HubSpotFieldValue[] | Record<string, unknown>>;
};

declare global {
  interface Window {
    HubSpotFormsV4?: { getFormFromEvent?: (event: Event) => HubSpotFormApi | undefined };
  }
}

/**
 * The V4 embed dispatches exactly one success event. The full set it emits,
 * read off js-na2.hsforms.net/forms/embed/246327823.js, is: on-ready,
 * on-submission:success, on-submission:failed, and on-interaction:navigate
 * (plus :next / :previous). A failed submission is deliberately not handled
 * here — HubSpot renders that error inside its own frame.
 */
const V4_SUCCESS_EVENT = "hs-form-event:on-submission:success";

type LegacyMessage = {
  type?: string;
  eventName?: string;
  id?: string;
  data?: { formGuid?: string; submissionValues?: Record<string, unknown> };
};

/** HubSpot posts from its own domains; the embed script posts from this page. */
function isTrustedOrigin(origin: string) {
  if (origin === window.location.origin) return true;
  try {
    return /(^|\.)hsforms\.(com|net)$/.test(new URL(origin).hostname);
  } catch {
    return false;
  }
}

/**
 * Flatten whatever HubSpot hands back into plain `{ firstname, email, ... }`.
 * V4 returns [{ name: "0-1/firstname", value: "Jane" }]; the legacy callback
 * returns a plain object. Both land in the same shape here.
 */
function collectValues(raw: unknown): Record<string, string> {
  const values: Record<string, string> = {};

  const add = (name: unknown, value: unknown) => {
    if (typeof name !== "string" || typeof value !== "string") return;
    const key = name.split("/").pop();
    if (key) values[key.toLowerCase()] = value.trim().slice(0, 200);
  };

  if (Array.isArray(raw)) {
    for (const field of raw) add((field as HubSpotFieldValue)?.name, (field as HubSpotFieldValue)?.value);
  } else if (raw && typeof raw === "object") {
    for (const [key, value] of Object.entries(raw)) add(key, value);
  }

  return values;
}

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

  useEffect(() => {
    let done = false;

    async function onV4Success(event: Event) {
      if (done) return;
      let values: Record<string, string> = {};

      try {
        const form = window.HubSpotFormsV4?.getFormFromEvent?.(event);
        if (form) {
          // Ignore any other HubSpot form that might be on the page.
          const id = form.getFormId?.();
          if (id && id !== hubspotForm.formId) return;
          values = collectValues(await form.getFormFieldValues?.());
        }
      } catch (err) {
        console.warn("Could not read HubSpot form values; continuing without prefill.", err);
      }

      if (done) return;
      done = true;
      advance(values);
    }

    function onLegacyMessage(event: MessageEvent) {
      if (done || !isTrustedOrigin(event.origin)) return;

      const message = event.data as LegacyMessage | undefined;
      if (message?.type !== "hsFormCallback" || message.eventName !== "onFormSubmitted") return;

      const formId = message.id ?? message.data?.formGuid;
      if (formId && formId !== hubspotForm.formId) return;

      done = true;
      advance(collectValues(message.data?.submissionValues));
    }

    window.addEventListener(V4_SUCCESS_EVENT, onV4Success);
    window.addEventListener("message", onLegacyMessage);

    return () => {
      window.removeEventListener(V4_SUCCESS_EVENT, onV4Success);
      window.removeEventListener("message", onLegacyMessage);
    };
  }, [advance]);

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

"use client";

import { useEffect } from "react";

/**
 * Six33's forms are HubSpot's newer (V4) embeds, which announce themselves
 * through `hs-form-event:` events on window rather than the legacy
 * `hsFormCallback` postMessage. V4 also does not put the answers in the event:
 * they come from an async call on the form handle, and arrive namespaced by
 * object type, e.g. `0-1/firstname`. Both paths are handled below, because the
 * legacy one still applies if this is ever pointed at an older form.
 */
const V4_SUCCESS_EVENT = "hs-form-event:on-submission:success";

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

/**
 * Calls `onSubmit` once, with whatever answers HubSpot gives back, when the
 * form with `formId` is submitted. Values can come back empty: a missing
 * answer is a small annoyance, but a step that never advances costs the lead.
 */
export function useHubSpotSubmit(formId: string, onSubmit: (values: Record<string, string>) => void) {
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
          if (id && id !== formId) return;
          values = collectValues(await form.getFormFieldValues?.());
        }
      } catch (err) {
        console.warn("Could not read HubSpot form values; continuing without them.", err);
      }

      if (done) return;
      done = true;
      onSubmit(values);
    }

    function onLegacyMessage(event: MessageEvent) {
      if (done || !isTrustedOrigin(event.origin)) return;

      const message = event.data as LegacyMessage | undefined;
      if (message?.type !== "hsFormCallback" || message.eventName !== "onFormSubmitted") return;

      const id = message.id ?? message.data?.formGuid;
      if (id && id !== formId) return;

      done = true;
      onSubmit(collectValues(message.data?.submissionValues));
    }

    window.addEventListener(V4_SUCCESS_EVENT, onV4Success);
    window.addEventListener("message", onLegacyMessage);

    return () => {
      window.removeEventListener(V4_SUCCESS_EVENT, onV4Success);
      window.removeEventListener("message", onLegacyMessage);
    };
  }, [formId, onSubmit]);
}

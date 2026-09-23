import { site } from "./site";

/**
 * The HubSpot form that opens the booking flow. Fields live in HubSpot
 * (Marketing > Forms > Six33 Discovery Call Form), so questions can be added
 * or removed there without touching this codebase.
 */
export const hubspotForm = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "246327823",
  formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID ?? "b086a556-be5d-490c-84b7-964251cf902f",
  /** Data centre the portal lives in. Six33 is on na2. */
  region: process.env.NEXT_PUBLIC_HUBSPOT_REGION ?? "na2",
} as const;

export function hubspotEmbedSrc() {
  return `https://js-${hubspotForm.region}.hsforms.net/forms/embed/${hubspotForm.portalId}.js`;
}

/** The answers we carry from HubSpot into Calendly so nobody types them twice. */
export type BookingPrefill = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

/**
 * Calendly event URL, with whatever the form already told us filled in.
 * `name` and `email` are Calendly built-ins, so they always apply. If the
 * event grows custom questions, Calendly maps them to a1, a2, ... in the order
 * they appear on the event.
 */
export function calendlySrc(prefill?: BookingPrefill) {
  const url = site.bookingUrl;
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "251f19",
    primary_color: "f48d16",
  });

  const name = [prefill?.firstName, prefill?.lastName].filter(Boolean).join(" ").trim();
  if (name) params.set("name", name);
  if (prefill?.email) params.set("email", prefill.email);

  return `${url}${url.includes("?") ? "&" : "?"}${params.toString()}`;
}

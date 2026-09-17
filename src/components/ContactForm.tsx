"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type Status = "idle" | "sending" | "sent" | "error";

const roles = [
  "Worship Pastor",
  "Lead Pastor",
  "Associate Pastor",
  "Ministry Pastor",
  "Children's or Student Leader",
  "Groups or Operations Leader",
  "Other Church Staff",
];

const inputClass =
  "mt-2 block w-full rounded-xl border border-transparent bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone/70 focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/30";
const labelClass = "block text-xs font-semibold text-charcoal";

/**
 * Contact form. `compact` hides the church and role fields for the short
 * version used inside the contact block on other pages.
 */
export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl bg-cream p-6">
        <p className="text-lg font-semibold text-ink">Thank you.</p>
        <p className="mt-2 text-sm leading-relaxed text-stone">
          Your message is on its way. We will get back to you within a couple of days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-bronze-deep underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Your name <span aria-hidden="true" className="text-bronze">*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span aria-hidden="true" className="text-bronze">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email@gmail.com" className={inputClass} />
      </div>

      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="church" className={labelClass}>
              Church
            </label>
            <input id="church" name="church" type="text" autoComplete="organization" placeholder="Your church" className={inputClass} />
          </div>
          <div>
            <label htmlFor="role" className={labelClass}>
              Role
            </label>
            <select id="role" name="role" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span aria-hidden="true" className="text-bronze">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 5}
          className={inputClass}
          placeholder="Tell us a little about where you are and what would help."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage} You can also email us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

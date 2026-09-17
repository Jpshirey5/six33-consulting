import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name?: string;
  email?: string;
  church?: string;
  role?: string;
  message?: string;
  website?: string; // honeypot
};

const MAX = { name: 120, email: 200, church: 200, role: 80, message: 5000 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field. Pretend it worked and drop it.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const church = clean(body.church, MAX.church);
  const role = clean(body.role, MAX.role);
  const message = clean(body.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email, and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "john@example.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Six33 Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set. Contact form submission was not sent.");
    return NextResponse.json(
      { ok: false, error: "The contact form is not set up yet. Please email us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const lines = [`Name: ${name}`, `Email: ${email}`];
  if (church) lines.push(`Church: ${church}`);
  if (role) lines.push(`Role: ${role}`);
  lines.push("", message);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Website contact from ${name}${church ? ` (${church})` : ""}`,
    text: lines.join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${church ? `<p><strong>Church:</strong> ${escapeHtml(church)}</p>` : ""}
      ${role ? `<p><strong>Role:</strong> ${escapeHtml(role)}</p>` : ""}
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false, error: "We could not send your message right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

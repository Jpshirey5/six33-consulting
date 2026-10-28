import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles the information you share through this website.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

type Section = {
  title: string;
  body?: string[];
  itemsIntro?: string;
  items?: string[];
  closing?: string;
};

/**
 * Written to match what the site actually does: two HubSpot forms, a Calendly
 * scheduler, and Cloudflare hosting. There is no analytics, no advertising
 * pixel, and fonts are served from this origin rather than from Google. If any
 * of that changes, this page has to change with it.
 */
const sections: Section[] = [
  {
    title: "The short version",
    body: [
      "We collect what you tell us in a form or on a call, and we use it to reply to you and get ready for the conversation. We do not sell it, we do not rent it, and we do not add you to a mailing list without asking. There is no advertising tracking on this site.",
    ],
  },
  {
    title: "What you share with us",
    itemsIntro: "Almost everything we hold comes from you filling in a form or writing to us.",
    items: [
      "Booking a discovery call: your name, email, church, and some context about your ministry, such as weekly attendance, campus type, team sizes, and your role.",
      "Requesting a guest worship leading date: your name, email, church, city and state, the date you have in mind, your service times, and anything else you choose to add.",
      "Picking a time: your name, email, time zone, the slot you choose, and any notes you leave.",
      "Emailing us directly: whatever you put in the message.",
    ],
  },
  {
    title: "What we do with it",
    body: [
      "We use it to reply to you, to prepare for our conversation, and to keep track of who we have spoken with so you are not starting over every time.",
      "If we end up working together, we use it to run the engagement. We do not sell or rent your information, and we do not hand it to anyone outside the services listed below.",
    ],
  },
  {
    title: "Who else handles it",
    itemsIntro:
      "Running a small practice means relying on a few outside services. Each one holds part of your information under its own privacy policy.",
    items: [
      "HubSpot hosts the forms on this site and stores what you submit as our client record system.",
      "Calendly handles scheduling and holds what you enter when you pick a time.",
      "Cloudflare hosts and serves this website.",
    ],
    closing: "We do not use an analytics service, an advertising network, or a tracking pixel.",
  },
  {
    title: "Cookies",
    body: [
      "This site sets no cookies of its own. The HubSpot form and the Calendly scheduler are loaded from those companies and may set their own cookies when they appear on a page. Fonts are served from this site rather than from a third party, so visiting a page does not quietly call out to anyone else.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep enquiries and client records for as long as we have a working relationship and for a reasonable period afterward, so we can pick up where we left off. If you would rather we delete yours sooner, ask and we will.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "Write to us and we will tell you what we hold about you, correct anything that is wrong, or delete it. You do not have to give a reason, and asking will not affect how we treat you.",
    ],
  },
  {
    title: "Keeping it safe",
    body: [
      "Access is limited to John and anyone directly helping with your engagement. The services above hold your information on their own secured systems. No system is perfect, and if something goes wrong that affects you, we will tell you promptly rather than quietly.",
    ],
  },
  {
    title: "Children",
    body: [
      "This site is meant for ministry leaders and church staff. It is not directed at children, and we do not knowingly collect information from anyone under 13.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If what we do with your information changes, we will update this page and change the date at the top.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        text="Last updated October 2026. Plain language, because you should be able to tell what happens to your information without a lawyer."
      />
      <Container className="pb-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {sections.map((s) => (
            <section key={s.title} className="rounded-card bg-white p-7">
              <h2 className="text-xl font-medium text-ink">{s.title}</h2>
              {s.body?.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-stone">
                  {p}
                </p>
              ))}
              {s.itemsIntro && <p className="mt-3 text-sm leading-relaxed text-stone">{s.itemsIntro}</p>}
              {s.items && (
                <ul className="mt-4 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.closing && <p className="mt-4 text-sm leading-relaxed text-stone">{s.closing}</p>}
            </section>
          ))}

          <section className="rounded-card bg-white p-7">
            <h2 className="text-xl font-medium text-ink">Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-bronze-deep underline-offset-4 hover:underline"
              >
                {site.email}
              </a>{" "}
              with anything about your information, including a request to see it or delete it. It goes straight
              to John.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}

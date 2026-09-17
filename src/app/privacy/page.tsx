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

const sections = [
  {
    title: "What we collect",
    text: "When you fill out the contact form or book a call, we collect the information you provide, such as your name, email address, church, role, and message. We use it only to respond to you and to prepare for our conversation.",
  },
  {
    title: "How we use it",
    text: "We do not sell or rent your information. We do not add you to a mailing list without asking. Your contact form submission is delivered to us by email through a third-party email service, and bookings are handled by our scheduling provider under their own privacy policies.",
  },
  {
    title: "Cookies and analytics",
    text: "This site does not currently use advertising cookies. If we add basic analytics later, we will update this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy policy" text="Last updated September 2026. This is a placeholder policy. Replace it with your final wording before launch." />
      <Container className="pb-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {sections.map((s) => (
            <div key={s.title} className="rounded-card bg-white p-7">
              <h2 className="text-xl font-medium">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">{s.text}</p>
            </div>
          ))}
          <div className="rounded-card bg-white p-7">
            <h2 className="text-xl font-medium">Questions</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Email us at{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-bronze-deep underline-offset-4 hover:underline">
                {site.email}
              </a>{" "}
              with any questions about your information.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

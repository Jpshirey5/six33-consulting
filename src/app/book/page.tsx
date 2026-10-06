import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BookingFlow from "@/components/BookingFlow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Tell us a little about your church and what is most stuck right now, then pick a time for a free discovery call with Six33 Consulting.",
  alternates: { canonical: "/book" },
  openGraph: { title: `Book a discovery call | ${site.name}`, url: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Book a discovery call"
        title={
          <>
            Let&rsquo;s talk about
            <br />
            <em>what you are carrying.</em>
          </>
        }
        text="No pitch, no pressure. Just a real conversation about your ministry and where it is straining."
      />

      <section className="pb-20 sm:pb-28" aria-labelledby="book-heading">
        <Container>
          <h2 id="book-heading" className="sr-only">
            Book a discovery call
          </h2>
          <Reveal className="mx-auto w-full max-w-2xl">
            <BookingFlow />
            <p className="mt-8 text-center text-sm leading-relaxed text-stone">
              Would rather just email?{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-bronze-deep underline-offset-4 hover:underline"
              >
                {site.email}
              </a>{" "}
              goes straight to John.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

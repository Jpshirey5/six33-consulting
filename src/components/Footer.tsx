import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import LogoMark from "./LogoMark";
import PixelArt from "./PixelArt";
import { navLinks, site } from "@/lib/site";

const columns = [
  { title: "Explore", links: navLinks.slice(0, 3) },
  { title: "Get started", links: [navLinks[3], navLinks[4], { href: "/contact#book", label: "Book a consultation" }] },
  { title: "Legal", links: [{ href: "/privacy", label: "Privacy policy" }] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-line bg-sand/60">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Ministry and leadership consulting for worship leaders, pastors, ministry directors, and church
              teams. Leadership, production, and systems that do not depend on one person.{" "}{site.tagline}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-[repeat(3,auto)_1fr] sm:gap-12">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-stone transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="sm:text-right">
              <p className="text-xs text-stone">Social</p>
              <ul className="mt-3 flex gap-4 sm:justify-end">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-stone hover:text-ink">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <p
            aria-hidden="true"
            className="select-none font-heading text-[22vw] font-semibold leading-none tracking-[-0.05em] text-ink/[0.06] lining-nums lg:text-[17rem]"
          >
            six33
          </p>
          <LogoMark className="absolute bottom-6 right-4 h-16 w-16 opacity-90 sm:bottom-8 sm:h-24 sm:w-24" />
          <PixelArt seed={7} count={24} className="absolute right-28 top-4 hidden h-24 w-48 sm:block sm:h-32 sm:w-64 lg:right-40" />
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <Link href="/privacy" className="hover:text-ink">
              Privacy policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

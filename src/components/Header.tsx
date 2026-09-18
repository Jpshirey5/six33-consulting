"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Logo from "./Logo";
import { LinkButton } from "./Button";
import { navLinks, site } from "@/lib/site";
import { bookingLabel } from "@/lib/services";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Main">
            <ul className="flex items-center">
              {navLinks.map((link, i) => (
                <li key={link.href} className="flex items-center">
                  {i > 0 && (
                    <span aria-hidden="true" className="mx-3 h-1 w-1 rounded-full bg-bronze" />
                  )}
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`text-sm font-medium transition-colors hover:text-bronze-deep ${
                      isActive(link.href) ? "text-bronze-deep" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LinkButton href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            {bookingLabel}
          </LinkButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-ink hover:bg-sand lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M3 8h18" />
                <path d="M3 16h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <nav id={menuId} aria-label="Main" hidden={!open} className="border-t border-line bg-cream lg:hidden">
        <ul className="mx-auto flex max-w-[1360px] flex-col px-5 py-3 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-3 text-base font-medium ${isActive(link.href) ? "text-bronze-deep" : "text-ink"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pb-3 pt-3">
            <LinkButton
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-start"
              onClick={() => setOpen(false)}
            >
              {bookingLabel}
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

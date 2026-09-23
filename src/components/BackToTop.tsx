"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

/** How far down the page you have to be before the button is worth offering. */
const SHOW_AFTER = 500;

/**
 * Floating back-to-top control, on every page via the root layout.
 *
 * It uses the Six33 mark, which is already an upward chevron, so the button
 * reads as "up" without introducing a second icon language to the site.
 *
 * Sits at z-30, below the sticky header (z-40), so it can never cover the open
 * mobile menu. It also stays put while focused, so a keyboard user is never
 * left on a control that vanishes underneath them.
 */
export default function BackToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > SHOW_AFTER);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const shown = scrolled || focused;

  return (
    <button
      type="button"
      /*
       * `behavior` is passed explicitly rather than left to resolve against the
       * page's CSS, which globals.css switches to `auto` under
       * prefers-reduced-motion — that would leave this button doing the one
       * thing it exists not to do, jumping. The browser drives this scroll
       * itself, so it keeps going even on a throttled tab, and browsers already
       * cancel it as soon as the visitor scrolls by hand.
       */
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/95 shadow-lg shadow-ink/10 backdrop-blur transition-[opacity,transform] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <LogoMark size={26} />
    </button>
  );
}

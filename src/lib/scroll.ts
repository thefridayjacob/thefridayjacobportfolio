"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

/**
 * CRITICAL: plugins must be registered at MODULE LOAD time, not inside a
 * useEffect. React runs effects bottom-up (child components' effects fire
 * BEFORE their parents' effects). Hero/Reveal/RevealText are children of
 * SmoothScrollProvider, so if registration only happened inside
 * SmoothScrollProvider's effect, every child's ScrollTrigger.create() call
 * would run first and fail with "Invalid property scrollTrigger... Missing
 * plugin?" / "_context is not a function". Registering here, synchronously,
 * the moment this module is first imported, guarantees the plugin exists
 * before ANY component's effect — child or parent — can possibly run.
 */
gsap.registerPlugin(ScrollTrigger, SplitText);

let lenisInstance: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;
let activeMounts = 0;

/**
 * Wires Lenis smooth scroll into GSAP's ScrollTrigger so pinned / scrubbed
 * animations track the smoothed scroll position instead of the native one.
 *
 * Resilient to React Strict Mode's dev-only double mount → unmount → mount
 * cycle: only the LAST unmount (when no instances remain mounted) tears down
 * Lenis/ScrollTrigger.
 *
 * Mount this once at the root layout level.
 */
export function useSmoothScroll() {
  useEffect(() => {
    activeMounts += 1;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!lenisInstance && !prefersReduced) {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });
      lenisInstance = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      tickerFn = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    }

    // Intercept same-page hash link clicks (#about, #contact, etc.) and
    // route them through Lenis.scrollTo so they animate smoothly instead
    // of being silently ignored or instant-jumping — Lenis owns scroll
    // position once active, so the browser's native anchor-jump no longer
    // works correctly on its own.
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      let target: Element | null = null;
      try {
        target = document.querySelector(href);
      } catch {
        // Malformed hash (e.g. starts with a digit) is not a valid CSS
        // selector and would throw a SyntaxError — just bail out and let
        // the browser's default anchor behavior (or nothing) happen.
        return;
      }
      if (!target) return;
      e.preventDefault();
      if (lenisInstance) {
        lenisInstance.scrollTo(target as HTMLElement, { duration: 1.2 });
      } else {
        target.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
        });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      activeMounts -= 1;
      document.removeEventListener("click", handleAnchorClick);
      // Only tear down once every mounted instance (including the Strict
      // Mode phantom mount) has unmounted — never on the first of a pair.
      if (activeMounts <= 0) {
        if (tickerFn) {
          gsap.ticker.remove(tickerFn);
          tickerFn = null;
        }
        lenisInstance?.destroy();
        lenisInstance = null;
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);
}

export function getLenis() {
  return lenisInstance;
}

export { gsap, ScrollTrigger };

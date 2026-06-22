"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/scroll";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Skip entirely on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      dotX(e.clientX - 4);
      dotY(e.clientY - 4);
      ringX(e.clientX - 18);
      ringY(e.clientY - 18);
    };

    const grow = () => gsap.to(ring, { scale: 1.8, duration: 0.3, ease: "power2.out" });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });

    window.addEventListener("mousemove", move);

    // Use event delegation on `document` with the `over`/`out` events
    // (which bubble, unlike mouseenter/mouseleave) instead of querying
    // interactive elements once at mount. The DOM changes on every
    // client-side route navigation in Next.js — a one-time querySelectorAll
    // snapshot would silently stop matching new page content after the
    // first navigation away from the page this mounted on.
    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor-grow]"
      );
      if (target) grow();
    };
    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor-grow]"
      );
      if (target) shrink();
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/scroll";

/**
 * Full-screen curtain that wipes down on route change, then lifts away.
 * Runs on every pathname change (App Router re-renders this on navigation).
 */
export default function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    if (isFirstRender.current) {
      // Don't run the wipe on initial page load — only on subsequent nav
      isFirstRender.current = false;
      gsap.set(curtain, { scaleY: 0 });
      return;
    }

    gsap.fromTo(
      curtain,
      { scaleY: 1, transformOrigin: "top" },
      {
        scaleY: 0,
        duration: 0.7,
        ease: "expo.inOut",
        delay: 0.05,
      }
    );
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[9997] pointer-events-none"
      style={{ background: "var(--bg)" }}
      aria-hidden="true"
    />
  );
}

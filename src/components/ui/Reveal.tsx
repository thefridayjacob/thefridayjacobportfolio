"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/scroll";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** vertical travel distance in px */
  y?: number;
  delay?: number;
  duration?: number;
  scale?: number;
  /** stagger children of this element instead of animating it as one block */
  staggerChildren?: boolean;
  staggerAmount?: number;
  start?: string;
};

export default function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
  duration = 0.9,
  scale,
  staggerChildren = false,
  staggerAmount = 0.12,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = staggerChildren ? gsap.utils.toArray(el.children) : el;

    // Reduced motion: show content immediately, skip the reveal animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { y: 0, opacity: 1, ...(scale ? { scale: 1 } : {}) });
      return;
    }

    gsap.set(targets, {
      y,
      opacity: 0,
      ...(scale ? { scale } : {}),
    });

    let st: ReturnType<typeof ScrollTrigger.create> | undefined;

    try {
      st = ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            ...(scale ? { scale: 1 } : {}),
            duration,
            delay,
            stagger: staggerChildren ? staggerAmount : 0,
            ease: "expo.out",
          });
        },
      });
    } catch {
      // Animation is purely decorative — if ScrollTrigger isn't ready yet
      // (e.g. a dev-mode remount race), just show the content immediately
      // rather than crashing the page.
      gsap.set(targets, { y: 0, opacity: 1, ...(scale ? { scale: 1 } : {}) });
    }

    return () => st?.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

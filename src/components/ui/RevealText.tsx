"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/scroll";
import { SplitText } from "gsap/SplitText";

type RevealType = "lines" | "chars" | "words";

export default function RevealText({
  children,
  as: Tag = "div",
  type = "lines",
  className = "",
  style,
  delay = 0,
  trigger = "scroll",
  stagger = 0.06,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  type?: RevealType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** "scroll" reveals on scroll-into-view, "mount" reveals immediately on mount */
  trigger?: "scroll" | "mount";
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: render the text as-is, no split, no reveal.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    let split: SplitText | undefined;
    let st: ReturnType<typeof ScrollTrigger.create> | undefined;

    try {
      split = new SplitText(el, {
        type,
        linesClass: "split-line",
        mask: type === "lines" ? "lines" : undefined,
      });

      const targets =
        type === "lines"
          ? split.lines
          : type === "words"
            ? split.words
            : split.chars;

      gsap.set(targets, { yPercent: 110, opacity: 0 });

      const anim = () =>
        gsap.to(targets, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger,
          delay,
          ease: "expo.out",
        });

      if (trigger === "scroll") {
        st = ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: anim,
        });
      } else {
        anim();
      }
    } catch {
      // Animation is purely decorative — never let a GSAP timing race
      // (e.g. dev-mode Strict Mode remount) crash the page. Just make
      // sure the text is visible.
      gsap.set(el, { opacity: 1 });
    }

    return () => {
      st?.kill();
      split?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

/** Shared scroll-reveal: springs up into view. Respects reduced motion. */
export default function Rise({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.7, delay }}
    >
      {children}
    </MotionTag>
  );
}

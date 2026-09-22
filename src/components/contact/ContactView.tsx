"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import SocialIcon from "@/components/ui/SocialIcon";
import ArrowIcon from "@/components/ui/ArrowIcon";

const SOCIALS = [
  { key: "linkedin", href: "https://www.linkedin.com/in/thefridayjacob", label: "LinkedIn" },
  { key: "instagram", href: "https://instagram.com/thefridayjacob", label: "Instagram" },
  { key: "x", href: "https://x.com/thefridayjacob", label: "X" },
  { key: "facebook", href: "https://www.facebook.com/thefridayjacob", label: "Facebook" },
  { key: "whatsapp", href: "https://wa.me/2348104137178", label: "WhatsApp" },
];

export default function ContactView() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <div className="flex flex-1 flex-col justify-between px-[var(--pad)] pb-[var(--pad)] pt-[clamp(1.5rem,4vw,3.5rem)]">
      <div className="wrap w-full">
        <motion.span
          {...rise(0.05)}
          className="mono uppercase tracking-[0.16em]"
          style={{ fontSize: "var(--fs-mono)", color: "var(--amber)", display: "inline-block" }}
        >
          Contact
        </motion.span>

        <motion.h1
          {...rise(0.12)}
          className="mt-4 font-semibold"
          style={{ fontSize: "var(--fs-h1)", letterSpacing: "-0.04em", lineHeight: 0.98 }}
        >
          Let&apos;s build
          <br />
          something that works.
        </motion.h1>

        <motion.p
          {...rise(0.19)}
          className="mt-8 max-w-[44ch]"
          style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.35 }}
        >
          Tell me what you&apos;re trying to solve. Not a full brief, just the
          problem. I take a handful of projects at a time so each one gets real
          attention.
        </motion.p>

        <motion.div {...rise(0.26)} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="mailto:thefridayjacob@gmail.com"
            className="press inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium"
            style={{ background: "var(--pink)", color: "#fff", fontSize: "1.05rem" }}
          >
            Start a project
            <ArrowIcon direction="ne" size={16} />
          </a>
          <a
            href="mailto:thefridayjacob@gmail.com"
            className="font-medium transition-colors hover:text-[var(--pink)]"
            style={{ fontSize: "1.05rem" }}
          >
            thefridayjacob@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Footer row */}
      <motion.div
        {...rise(0.36)}
        className="wrap mt-16 flex w-full flex-col gap-6 border-t pt-8 sm:flex-row sm:items-end sm:justify-between"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="press grid h-11 w-11 place-items-center rounded-full transition-colors hover:text-[var(--text-high)]"
              style={{ border: "1px solid var(--line-strong)", color: "var(--text-mid)" }}
            >
              <SocialIcon name={s.key} size={17} />
            </a>
          ))}
        </div>
        <span style={{ fontSize: "var(--fs-label)", color: "var(--text-low)" }}>
          Port Harcourt, Nigeria &middot; available for work
        </span>
      </motion.div>
    </div>
  );
}

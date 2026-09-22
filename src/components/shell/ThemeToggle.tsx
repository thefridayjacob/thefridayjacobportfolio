"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="press relative grid h-9 w-9 place-items-center rounded-full"
      style={{ border: "1px solid var(--line-strong)", color: "var(--text-high)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={reduce ? false : { opacity: 0, rotate: -40, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, rotate: 40, scale: 0.6 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="absolute grid place-items-center"
        >
          {isDark ? (
            /* moon */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            /* sun */
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M12 2.4v2.2M12 19.4v2.2M21.6 12h-2.2M4.6 12H2.4M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6M18.8 18.8l-1.6-1.6M6.8 6.8 5.2 5.2" />
              </g>
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

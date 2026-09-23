"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import Rise from "@/components/motion/Rise";
import type { CaseStudy } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function CaseCover({ study }: { study: CaseStudy }) {
  const reduce = useReducedMotion();
  return (
    <section className="edge pt-[clamp(2rem,6vw,4.5rem)]">
      <div className="wrap w-full">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-[900px]"
        >
          <span
            className="mono uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--fs-mono)", color: accentColor[study.accent] }}
          >
            {study.category}
          </span>
          <h1
            className="mt-4 font-semibold text-balance"
            style={{ fontSize: "var(--fs-h1)", letterSpacing: "-0.04em", lineHeight: 0.98 }}
          >
            {study.name}
          </h1>
          <p
            className="mt-7 max-w-[62ch]"
            style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.35 }}
          >
            {study.lede}
          </p>
        </motion.div>

        <Rise delay={0.15}>
          <div
            className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 border-t pt-8 md:grid-cols-4"
            style={{ borderColor: "var(--line)" }}
          >
            {study.meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>{m.label}</span>
                <span style={{ color: "var(--text-high)", fontWeight: 500 }}>{m.value}</span>
              </div>
            ))}
          </div>
        </Rise>

        <Rise delay={0.2} y={32}>
          <div className="media mt-[clamp(2.5rem,5vw,4rem)]" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src={study.heroImage}
              alt={`${study.name}, hero shot`}
              fill
              sizes="(max-width: 1360px) 100vw, 1320px"
              priority
              className="object-cover"
            />
          </div>
        </Rise>
      </div>
    </section>
  );
}

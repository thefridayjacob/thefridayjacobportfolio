"use client";

import Rise from "@/components/motion/Rise";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseProblem({ study }: { study: CaseStudy }) {
  return (
    <section className="edge py-[var(--section)]">
      <div className="wrap w-full">
        <Rise>
          <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
            The problem
          </span>
          <h2
            className="mt-5 max-w-[20ch] text-balance font-semibold"
            style={{ fontSize: "var(--fs-h2)", letterSpacing: "-0.03em", lineHeight: 1.06 }}
          >
            {study.problem.title}
          </h2>
        </Rise>
        <Rise delay={0.1}>
          <p className="mt-8 max-w-[62ch]" style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.4 }}>
            {study.problem.body}
          </p>
        </Rise>
      </div>
    </section>
  );
}

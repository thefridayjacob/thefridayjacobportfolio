"use client";

import Rise from "@/components/motion/Rise";
import type { CaseStudy } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function CaseDecisions({ study }: { study: CaseStudy }) {
  return (
    <section className="edge pb-[var(--section)]">
      <div className="wrap w-full border-t pt-[var(--section)]" style={{ borderColor: "var(--line)" }}>
        <Rise>
          <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
            Key decisions
          </span>
          <h2 className="mt-5 font-semibold" style={{ fontSize: "var(--fs-h2)", letterSpacing: "-0.03em", lineHeight: 1.06 }}>
            What mattered, and why.
          </h2>
        </Rise>

        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-x-12 gap-y-[clamp(2.5rem,5vw,4rem)] md:grid-cols-2">
          {study.decisions.map((d, i) => (
            <Rise key={d.title} delay={i * 0.08} y={28}>
              <span
                className="font-semibold tabular-nums"
                style={{ fontSize: "clamp(2rem,3vw,2.75rem)", color: accentColor[study.accent], letterSpacing: "-0.03em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-semibold" style={{ fontSize: "var(--fs-h3)" }}>
                {d.title}
              </h3>
              <p className="mt-3 max-w-[46ch]" style={{ color: "var(--text-mid)", lineHeight: 1.6 }}>
                {d.body}
              </p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

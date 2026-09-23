"use client";

import Rise from "@/components/motion/Rise";
import type { CaseStudy } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function CaseReflection({ study }: { study: CaseStudy }) {
  return (
    <section className="edge pb-[var(--section)]">
      <div
        className="wrap grid w-full gap-x-16 gap-y-14 border-t pt-[var(--section)] md:grid-cols-2"
        style={{ borderColor: "var(--line)" }}
      >
        <div>
          <Rise>
            <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
              What this demonstrates
            </span>
          </Rise>
          <div className="mt-8 flex flex-col gap-7">
            {study.demonstrates.map((item, i) => (
              <Rise key={item} delay={i * 0.07} y={16}>
                <span
                  className="mb-3 block h-[3px] w-8 rounded-full"
                  style={{ background: accentColor[study.accent] }}
                />
                <p style={{ color: "var(--text-high)", lineHeight: 1.5 }}>{item}</p>
              </Rise>
            ))}
          </div>
        </div>

        <div>
          <Rise>
            <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
              Reflection
            </span>
          </Rise>
          <Rise delay={0.1}>
            <blockquote
              className="mt-8 font-semibold"
              style={{ fontSize: "var(--fs-quote)", letterSpacing: "-0.02em", lineHeight: 1.25 }}
            >
              {study.reflection}
            </blockquote>
          </Rise>
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseDecisions({ study }: { study: CaseStudy }) {
  return (
    <section
      className="px-6 md:px-12 py-[var(--space-section)]"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              Key decisions
            </span>
          </Reveal>
          <RevealText
            as="h2"
            className="font-bold max-w-[680px]"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.08,
              } as React.CSSProperties
            }
          >
            What mattered, and why.
          </RevealText>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16 md:pl-[calc(180px+4rem)]">
          {study.decisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.1} y={32}>
              <div
                className="rounded-xl p-7 h-full"
                style={{ background: "var(--surface-2)", border: "1px solid var(--line)" }}
              >
                <span
                  className="font-bold inline-block"
                  style={{
                    fontSize: "var(--fs-caption)",
                    color: "var(--text-low)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-bold mt-3"
                  style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                >
                  {d.title}
                </h3>
                <p className="mt-4" style={{ color: "var(--text-mid)" }}>
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseProblem({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 md:px-12 py-[var(--space-section)]" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              The problem
            </span>
          </Reveal>
          <RevealText
            as="h2"
            className="font-bold max-w-[760px] text-balance"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.08,
              } as React.CSSProperties
            }
          >
            {study.problem.title}
          </RevealText>
        </div>
        <div className="md:pl-[calc(180px+4rem)]">
          <Reveal delay={0.15}>
            <p className="max-w-[680px] mt-8" style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)" }}>
              {study.problem.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

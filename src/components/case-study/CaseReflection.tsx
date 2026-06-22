"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function CaseReflection({ study }: { study: CaseStudy }) {
  return (
    <section
      className="px-6 md:px-12 py-[var(--space-section)]"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <span
                className="uppercase tracking-[0.16em]"
                style={{ fontSize: "var(--fs-eyebrow)", color: accentColor[study.accent] }}
              >
                What this demonstrates
              </span>
            </Reveal>
            <Reveal staggerChildren staggerAmount={0.08} className="flex flex-col gap-4 mt-7">
              {study.demonstrates.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accentColor[study.accent] }}
                  />
                  <p style={{ color: "var(--text-high)" }}>{item}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span
                className="uppercase tracking-[0.16em]"
                style={{ fontSize: "var(--fs-eyebrow)", color: "var(--text-mid)" }}
              >
                Reflection
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <RevealText
                as="blockquote"
                className="font-bold mt-7 block"
                style={
                  {
                    fontSize: "var(--fs-quote)",
                    fontFamily: "var(--font-display)",
                  } as React.CSSProperties
                }
              >
                {study.reflection}
              </RevealText>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

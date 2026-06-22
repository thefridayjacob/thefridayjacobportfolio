"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="px-6 md:px-12 py-[var(--space-section)]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              Philosophy
            </span>
          </Reveal>

          <RevealText
            as="h2"
            className="font-bold max-w-[840px] text-balance"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
              } as React.CSSProperties
            }
          >
            Design is not decoration. It&apos;s the way a thing works, made
            visible.
          </RevealText>
        </div>

        <div className="md:pl-[calc(180px+4rem)]">
          <Reveal delay={0.15}>
            <p className="max-w-[680px] mt-10" style={{ fontSize: "var(--fs-lede)", color: "var(--text-high)" }}>
              I&apos;ve watched beautiful websites convert nobody. I&apos;ve
              seen products launch broken because someone skipped the edge
              cases. So when I join a team, I&apos;m not the person obsessing
              over border radii first — I&apos;m asking what the user is
              trying to do, what&apos;s in the way, and what the business needs
              to happen.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <blockquote className="max-w-[600px] mt-10">
              <p style={{ fontSize: "var(--fs-quote)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                If it doesn&apos;t serve function, perception, and income —
                we&apos;re not done.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

export default function Transpose() {
  return (
    <section
      id="transpose"
      className="px-6 md:px-12 py-[var(--space-section)] surface-elevated"
      style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              Beyond the work
            </span>
          </Reveal>

          <RevealText
            as="h2"
            className="font-bold max-w-[680px]"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
              } as React.CSSProperties
            }
          >
            There&apos;s more to me than work.
          </RevealText>
        </div>

        <div className="md:pl-[calc(180px+4rem)]">
          <Reveal delay={0.15}>
            <p className="max-w-[640px] mt-10" style={{ fontSize: "var(--fs-lede)", color: "var(--text-high)" }}>
              I run a monthly gathering called Transpose — a room where young
              people think seriously about life, faith, nation, money, and the
              right way to live. Not a motivational session. Not a church
              service. Structured, honest, sometimes uncomfortable conversation.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="max-w-[560px] mt-7" style={{ color: "var(--text-mid)" }}>
              I believe Jesus is the antidote for the world — that shapes how I
              build, how I lead, and what I consider worth my time. Design is
              my craft. Formation is my calling. Both demand the same thing
              from me: precision, honesty, and a refusal to be surface-level.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

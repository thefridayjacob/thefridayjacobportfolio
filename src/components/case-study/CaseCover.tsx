"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import type { CaseStudy } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function CaseCover({ study }: { study: CaseStudy }) {
  return (
    <section
      className="px-6 md:px-12 pb-20 flex flex-col justify-center"
      style={{ minHeight: "100vh", paddingTop: "var(--space-nav)" }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <Reveal>
          <span
            className="uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--fs-eyebrow)", color: accentColor[study.accent] }}
          >
            {study.eyebrow}
          </span>
        </Reveal>

        <RevealText
          as="h1"
          trigger="mount"
          className="font-extrabold mt-5"
          style={
            {
              fontSize: "var(--fs-display)",
              fontFamily: "var(--font-display)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
            } as React.CSSProperties
          }
        >
          {study.name}
        </RevealText>

        <Reveal delay={0.3}>
          <p
            className="max-w-[680px] mt-7"
            style={{ fontSize: "var(--fs-lede)", color: "var(--text-high)" }}
          >
            {study.lede}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 pt-8 mt-10"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            {study.meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
                  {m.label}
                </span>
                <span style={{ color: "var(--text-high)", fontWeight: 500 }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.5} scale={0.97}>
          <div
            className="relative rounded-2xl overflow-hidden mt-10"
            style={{
              height: 560,
              background: "var(--surface)",
              border: "1px solid var(--line)",
            }}
          >
            <Image
              src={study.heroImage}
              alt={`${study.name} — hero shot`}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import { caseStudies } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function WorkGrid() {
  return (
    <section id="work" className="px-6 md:px-12 py-[var(--space-section)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span
            className="uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
          >
            Selected work
          </span>
        </Reveal>
        <RevealText
          as="h2"
          className="font-bold mt-5 max-w-[680px]"
          style={
            {
              fontSize: "var(--fs-section)",
              fontFamily: "var(--font-display)",
              lineHeight: 1.05,
            } as React.CSSProperties
          }
        >
          A healthcare app. A fintech super-app. A church management
          system with real members. Different briefs, same approach.
        </RevealText>

        <div className="grid md:grid-cols-2 gap-x-5 gap-y-16 mt-20">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.06} y={36}>
              <Link href={`/work/${cs.slug}`} className="group block">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-bold"
                    style={{ fontSize: "var(--fs-caption)", color: "var(--text-low)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1" style={{ background: "var(--line)" }} />
                </div>
                <div
                  className="relative rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]"
                  style={{
                    height: 338,
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Image
                    src={cs.heroImage}
                    alt={`${cs.name} — ${cs.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3
                      className="font-bold"
                      style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                    >
                      {cs.name}
                    </h3>
                    <p style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
                      {cs.category}
                    </p>
                  </div>
                  <span
                    className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: accentColor[cs.accent] }}
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

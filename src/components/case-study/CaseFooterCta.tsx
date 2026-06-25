"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { caseStudies } from "@/lib/case-studies";

export default function CaseFooterCta({ currentSlug }: { currentSlug: string }) {
  const idx = caseStudies.findIndex((c) => c.slug === currentSlug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <section className="px-6 md:px-12 py-[var(--space-section)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <Reveal>
          <span
            className="uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
          >
            Next project
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href={`/work/${next.slug}`}
            className="font-extrabold mt-5 flex items-center justify-center gap-4 transition-opacity hover:opacity-70"
            style={{
              fontSize: "var(--fs-display)",
              fontFamily: "var(--font-display)",
              lineHeight: 1.04,
            }}
          >
            {next.name}
            <ArrowIcon direction="e" size={40} />
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 mt-12">
            <Magnetic strength={0.35}>
              <Link
                href="/"
                className="rounded-full px-7 py-3.5 font-medium inline-block"
                style={{
                  border: "1px solid var(--line-strong)",
                  color: "var(--text-high)",
                  fontSize: "var(--fs-button)",
                }}
              >
                Back to home
              </Link>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href="mailto:thefridayjacob@gmail.com"
                className="rounded-full px-7 py-3.5 font-medium inline-block"
                style={{ background: "var(--pink)", color: "#0c0c0c", fontSize: "var(--fs-button)" }}
              >
                Let&apos;s work together
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

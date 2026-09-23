"use client";

import Link from "next/link";
import Rise from "@/components/motion/Rise";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { caseStudies } from "@/lib/case-studies";

export default function CaseFooterCta({ currentSlug }: { currentSlug: string }) {
  const idx = caseStudies.findIndex((c) => c.slug === currentSlug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <section className="edge pb-[var(--section)]">
      <div className="wrap w-full border-t pt-[var(--section)]" style={{ borderColor: "var(--line)" }}>
        <Rise>
          <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
            Next project
          </span>
        </Rise>

        <Rise delay={0.05}>
          <Link href={`/work/${next.slug}`} className="group mt-5 inline-flex items-center gap-5">
            <span className="font-semibold" style={{ fontSize: "var(--fs-h1)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {next.name}
            </span>
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2"
              style={{ border: "1px solid var(--line-strong)", color: "var(--text-high)" }}
            >
              <ArrowIcon direction="e" size={22} />
            </span>
          </Link>
        </Rise>

        <Rise delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="mailto:thefridayjacob@gmail.com"
              className="press inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium"
              style={{ background: "var(--pink)", color: "#fff" }}
            >
              Start a project
              <ArrowIcon direction="ne" size={16} />
            </a>
            <Link
              href="/work"
              className="press inline-flex items-center rounded-full px-7 py-3.5 font-medium"
              style={{ border: "1px solid var(--line-strong)", color: "var(--text-high)" }}
            >
              All work
            </Link>
          </div>
        </Rise>
      </div>
    </section>
  );
}

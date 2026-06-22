"use client";

import Link from "next/link";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import SmokeField from "@/components/ui/SmokeField";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col px-6 md:px-12 overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "calc(var(--space-nav) + 2rem)", paddingBottom: "2rem" }}
    >
      <SmokeField />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid md:grid-cols-[180px_1fr] gap-10 md:gap-16 my-auto py-10">
        {/* Margin column — masthead style, editorial running head */}
        <Reveal y={12} duration={0.7} className="md:pt-3">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
            <div
              className="flex items-center gap-2 rounded-full px-3.5 py-2 shrink-0"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line-strong)",
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full"
                style={{ background: "var(--amber)" }}
              />
              <span
                className="uppercase tracking-[0.16em] whitespace-nowrap"
                style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
              >
                Available
              </span>
            </div>
            <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
              Port Harcourt
              <br className="hidden md:block" />
              <span className="md:hidden">, </span>
              Nigeria
            </span>
          </div>
        </Reveal>

        {/* Main column */}
        <div>
          {/* Headline */}
          <RevealText
            as="h1"
            type="lines"
            trigger="mount"
            className="font-extrabold"
            style={
              {
                fontSize: "var(--fs-display)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
              } as React.CSSProperties
            }
          >
            I don&apos;t design to make
            <br />
            things look good.
            <br />
            I design to make things{" "}
            <span style={{ color: "var(--pink)" }}>work.</span>
          </RevealText>

          {/* Deck — indented like a magazine sub-headline, not centered under the title */}
          <Reveal y={20} delay={0.5} duration={0.8}>
            <p
              className="mt-10 max-w-[480px] pl-6 md:pl-8"
              style={{
                fontSize: "var(--fs-subhead)",
                color: "var(--text-high)",
                borderLeft: "2px solid var(--line-strong)",
              }}
            >
              I learned to design because someone needed help and I
              didn&apos;t know how. Eight years later I&apos;m still solving
              that same problem — just with better tools.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal y={20} delay={0.65} duration={0.8}>
            <div className="flex flex-wrap items-center gap-3 mt-10 pl-6 md:pl-8">
              <Magnetic strength={0.35}>
                <Link
                  href="#work"
                  className="rounded-full px-7 py-3.5 font-medium inline-block"
                  style={{ background: "var(--pink)", color: "#0c0c0c", fontSize: "var(--fs-button)" }}
                >
                  See my work
                </Link>
              </Magnetic>
              <Magnetic strength={0.35}>
                <Link
                  href="#contact"
                  className="rounded-full px-7 py-3.5 font-medium inline-block"
                  style={{
                    border: "1px solid var(--line-strong)",
                    color: "var(--text-mid)",
                    fontSize: "var(--fs-button)",
                  }}
                >
                  Let&apos;s work together
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue — a genuine flex child pushed to the bottom via
          margin-top: auto, so it can never overlap tall hero content.
          On short viewports it simply compresses toward the content
          instead of overlapping it. */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 opacity-60 shrink-0"
        style={{ marginTop: "auto", paddingTop: "2rem" }}
      >
        <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
          Scroll
        </span>
        <div
          className="w-[1px] h-8 animate-pulse"
          style={{ background: "var(--line-strong)" }}
        />
      </div>
    </section>
  );
}

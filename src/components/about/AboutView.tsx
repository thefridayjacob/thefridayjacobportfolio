"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import ScrollRevealText from "@/components/reveal/ScrollRevealText";
import ArrowIcon from "@/components/ui/ArrowIcon";

const FACTS = [
  { k: "8 yrs", v: "designing & building" },
  { k: "5", v: "countries shipped in" },
  { k: "13", v: "products in the world" },
];

const DOES = [
  { t: "Design", d: "Product UX, brand systems, and interfaces that earn trust.", accent: "var(--teal)" },
  { t: "Build", d: "Frontend and full sites. WordPress, Framer, React.", accent: "var(--pink)" },
  { t: "AI-native", d: "Shipping real tools with Claude, live users on them today.", accent: "var(--amber)" },
];

export default function AboutView() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-1 flex-col px-[var(--pad)] pb-[var(--pad)] pt-[clamp(1.5rem,4vw,3.5rem)]">
      <div className="wrap w-full">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-semibold"
          style={{ fontSize: "var(--fs-mega)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
        >
          About
        </motion.h1>

        {/* Scroll reveal paragraph */}
        <div className="mt-[clamp(3rem,12vh,9rem)] md:pl-[28%]">
          <ScrollRevealText
            text="I'm Friday Jacob, a designer and builder in Port Harcourt. I started on the roadside in 2017, making posters because someone needed help I couldn't give. Eight years on, I design and ship products across healthcare, fintech, and civic tech, and I build AI-native tools with real users on them today. I care about the details most people scroll past. That's what makes a product feel like it works."
            style={{
              fontSize: "var(--fs-lede)",
              lineHeight: 1.4,
              maxWidth: "34ch",
              color: "var(--text-high)",
              letterSpacing: "-0.01em",
            }}
          />
        </div>

        {/* Facts */}
        <div
          className="mt-[clamp(3rem,10vh,7rem)] grid grid-cols-3 gap-4 border-t pt-8"
          style={{ borderColor: "var(--line)" }}
        >
          {FACTS.map((f) => (
            <div key={f.v}>
              <div className="font-semibold" style={{ fontSize: "clamp(1.75rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
                {f.k}
              </div>
              <div className="mt-1 max-w-[16ch]" style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>
                {f.v}
              </div>
            </div>
          ))}
        </div>

        {/* What I do */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DOES.map((d) => (
            <div key={d.t} className="tile" style={{ boxShadow: "none" }}>
              <div className="p-6">
                <span className="mb-4 block h-1 w-8 rounded-full" style={{ background: d.accent }} />
                <h3 className="font-semibold" style={{ fontSize: "var(--fs-h3)" }}>
                  {d.t}
                </h3>
                <p className="mt-2" style={{ fontSize: "0.95rem", color: "var(--text-mid)" }}>
                  {d.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="press inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
            style={{ background: "var(--text-high)", color: "var(--frame)" }}
          >
            See the work
            <ArrowIcon direction="ne" size={16} />
          </Link>
          <Link
            href="/contact"
            className="press inline-flex items-center rounded-full px-6 py-3 font-medium"
            style={{ border: "1px solid var(--line-strong)", color: "var(--text-high)" }}
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import ToolIcon from "@/components/ui/ToolIcon";
import ArrowIcon from "@/components/ui/ArrowIcon";
import WorkTileMedia from "./WorkTileMedia";

const STACK = ["claude", "figma", "framer", "supabase", "wordpress"];

export default function BentoHub() {
  const reduce = useReducedMotion();

  const rise = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 26,
      delay: 0.12 + i * 0.06,
    },
  });

  const tileInner = "relative z-10 flex h-full flex-col justify-between p-6 md:p-7";
  const arrow =
    "grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";
  const arrowStyle: React.CSSProperties = {
    background: "var(--accent-tint)",
    border: "1px solid color-mix(in srgb, var(--accent) 40%, var(--line-strong))",
    color: "var(--accent)",
  };

  return (
    <div
      className="flex flex-1 flex-col gap-[clamp(1rem,2vw,1.75rem)] px-[var(--pad)] pb-[var(--pad)] pt-[clamp(1.25rem,3vw,2.5rem)]"
      style={{ minHeight: 0 }}
    >
      {/* Wordmark */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="shrink-0"
      >
        <h1 className="font-semibold leading-[0.92]" style={{ fontSize: "var(--fs-mega)", letterSpacing: "-0.04em" }}>
          Friday Jacob
        </h1>
        <p
          className="mt-3 max-w-[46ch]"
          style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.25 }}
        >
          I design and build products that work.
        </p>
      </motion.div>

      {/* Bento */}
      <section className="bento" aria-label="Explore">
        {/* WORK — sliding media hero */}
        <motion.div {...rise(0)} className="area-work">
          <Link href="/work" className="tile accent-pink group block h-full" aria-label="Work, six shipped products">
            <WorkTileMedia />
            <span
              className="absolute inset-0 z-[1]"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(112deg, rgba(8,8,10,0.74) 0%, rgba(8,8,10,0.36) 38%, rgba(8,8,10,0.06) 68%, transparent 100%), linear-gradient(to top, rgba(8,8,10,0.5) 0%, transparent 30%)",
              }}
            />
            <div className={tileInner} style={{ color: "#fff" }}>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-medium uppercase tracking-[0.14em]" style={{ fontSize: "var(--fs-mono)", color: "var(--pink)" }}>
                    Portfolio
                  </span>
                  <h2 className="mt-1 font-semibold" style={{ fontSize: "clamp(1.75rem,3.2vw,2.75rem)", letterSpacing: "-0.03em", color: "#fff" }}>
                    Work
                  </h2>
                </div>
                <span
                  className={arrow}
                  style={{ background: "rgba(10,10,12,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.24)", color: "#fff" }}
                >
                  <ArrowIcon direction="ne" size={18} />
                </span>
              </div>
              <p className="self-end text-right" style={{ fontSize: "var(--fs-label)", color: "rgba(255,255,255,0.9)" }}>
                Six shipped products, five countries.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* ABOUT */}
        <motion.div {...rise(1)} className="area-about">
          <Link href="/about" className="tile accent-teal group block h-full" aria-label="About">
            <span className="tile-accent-glow" aria-hidden="true" />
            <div className={tileInner}>
              <div className="flex justify-end">
                <span className={arrow} style={arrowStyle}>
                  <ArrowIcon direction="ne" size={16} />
                </span>
              </div>
              <div>
                <h2 className="font-semibold" style={{ fontSize: "var(--fs-h3)" }}>About</h2>
                <p className="mt-2 max-w-[26ch]" style={{ fontSize: "0.95rem", color: "var(--text-mid)" }}>
                  Eight years, roadside posters to AI-native products.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* PHOTO */}
        <motion.div {...rise(2)} className="tile area-photo">
          <Image
            src="/work/about/portrait.jpg"
            alt="Friday Jacob"
            fill
            sizes="(max-width: 860px) 100vw, 22vw"
            className="object-cover object-top"
            style={{ filter: "grayscale(1) contrast(1.03)" }}
          />
          <span
            className="absolute inset-0"
            aria-hidden="true"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent 45%)" }}
          />
        </motion.div>

        {/* CONTACT */}
        <motion.div {...rise(3)} className="area-contact">
          <Link href="/contact" className="tile accent-amber group block h-full" aria-label="Contact">
            <span className="tile-accent-glow" aria-hidden="true" />
            <div className={tileInner}>
              <div className="flex justify-end">
                <span className={arrow} style={arrowStyle}>
                  <ArrowIcon direction="ne" size={16} />
                </span>
              </div>
              <div>
                <h2 className="font-semibold" style={{ fontSize: "var(--fs-h3)" }}>Contact</h2>
                <p className="mt-2 max-w-[24ch]" style={{ fontSize: "0.95rem", color: "var(--text-mid)" }}>
                  Have a project in mind? Start here.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* TOOLS */}
        <motion.div {...rise(4)} className="tile area-tools">
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
            <span className="mb-4" style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>
              Stack
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4" style={{ color: "var(--text-high)" }}>
              {STACK.map((k) => (
                <ToolIcon key={k} name={k} size={24} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

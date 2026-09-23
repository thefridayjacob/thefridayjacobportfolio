"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import ToolIcon from "@/components/ui/ToolIcon";
import ArrowIcon from "@/components/ui/ArrowIcon";
import WorkTileMedia from "./WorkTileMedia";

const STACK = ["claude", "figma", "framer", "supabase", "wordpress", "vercel"];

export default function BentoHub() {
  const reduce = useReducedMotion();

  const rise = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { type: "spring" as const, bounce: 0.28, duration: 0.7, delay: i * 0.05 },
  });

  const arrowChip =
    "grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45";

  return (
    <div className="edge flex flex-1 flex-col pb-[var(--section)] pt-[clamp(2rem,6vw,4.5rem)]">
      <div className="wrap w-full">
        {/* Hero */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="pb-[clamp(3rem,9vw,7rem)]"
        >
          <h1 className="font-semibold leading-[0.92]" style={{ fontSize: "var(--fs-mega)", letterSpacing: "-0.04em" }}>
            Friday Jacob
          </h1>
          <p className="mt-5 max-w-[42ch]" style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.3 }}>
            I design and build products that work.
          </p>
        </motion.div>

        {/* Bento */}
        <div className="bento items-start">
          {/* WORK — big clean image, text below on solid space */}
          <motion.div {...rise(0)} className="area-work">
            <Link href="/work" className="group block" aria-label="Work, six shipped products">
              <div className="media" style={{ aspectRatio: "16 / 10" }}>
                <WorkTileMedia />
              </div>
              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--pink)" }}>
                    Portfolio
                  </span>
                  <h2 className="mt-1 font-semibold" style={{ fontSize: "clamp(1.9rem,3.4vw,2.9rem)", letterSpacing: "-0.03em" }}>
                    Work
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <p className="hidden text-right sm:block" style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)", maxWidth: "18ch" }}>
                    Six shipped products, five countries.
                  </p>
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45"
                    style={{ border: "1px solid var(--line-strong)", color: "var(--pink)" }}
                  >
                    <ArrowIcon direction="ne" size={20} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* PHOTO — clean portrait, no text */}
          <motion.div {...rise(1)} className="area-photo">
            <div className="media" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src="/work/about/portrait.jpg"
                alt="Friday Jacob"
                fill
                sizes="(max-width: 720px) 100vw, 30vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ filter: "grayscale(1) contrast(1.03)" }}
              />
            </div>
          </motion.div>

          {/* ABOUT */}
          <motion.div {...rise(2)} className="area-about">
            <Link href="/about" className="tile accent-teal group flex h-full min-h-[220px] flex-col justify-between p-7 md:p-8" aria-label="About">
              <div className="flex justify-end">
                <span className={arrowChip} style={{ background: "var(--tint-teal)", color: "var(--teal)" }}>
                  <ArrowIcon direction="ne" size={16} />
                </span>
              </div>
              <div>
                <h2 className="font-semibold" style={{ fontSize: "var(--fs-h3)" }}>About</h2>
                <p className="mt-2 max-w-[26ch]" style={{ fontSize: "0.95rem", color: "var(--text-mid)" }}>
                  Eight years, roadside posters to AI-native products.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...rise(3)} className="area-contact">
            <Link href="/contact" className="tile accent-amber group flex h-full min-h-[220px] flex-col justify-between p-7 md:p-8" aria-label="Contact">
              <div className="flex justify-end">
                <span className={arrowChip} style={{ background: "var(--tint-amber)", color: "var(--amber)" }}>
                  <ArrowIcon direction="ne" size={16} />
                </span>
              </div>
              <div>
                <h2 className="font-semibold" style={{ fontSize: "var(--fs-h3)" }}>Contact</h2>
                <p className="mt-2 max-w-[24ch]" style={{ fontSize: "0.95rem", color: "var(--text-mid)" }}>
                  Have a project in mind? Start here.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* STACK — playful icons */}
          <motion.div {...rise(4)} className="area-tools">
            <div className="tile flex h-full min-h-[220px] flex-col justify-between p-7 md:p-8">
              <span style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>Stack</span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4" style={{ color: "var(--text-high)" }}>
                {STACK.map((k, i) => (
                  <span
                    key={k}
                    className={reduce ? "" : "fj-float"}
                    style={{ animationDelay: `${i * 0.22}s`, display: "inline-flex" }}
                  >
                    <motion.span
                      whileHover={reduce ? { scale: 1.08 } : { scale: 1.28, rotate: 12, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", bounce: 0.55, duration: 0.45 }}
                      style={{ display: "inline-flex", cursor: "default" }}
                    >
                      <ToolIcon name={k} size={26} />
                    </motion.span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

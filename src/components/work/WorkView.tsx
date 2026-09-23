"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { caseStudies, galleryProjects } from "@/lib/case-studies";
import ArrowIcon from "@/components/ui/ArrowIcon";

const accent: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

const arrowChip =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45";

export default function WorkView() {
  const reduce = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { type: "spring" as const, bounce: 0.24, duration: 0.7, delay: (i % 2) * 0.05 },
  });

  return (
    <div className="edge flex flex-1 flex-col pb-[var(--section)] pt-[clamp(2rem,6vw,4.5rem)]">
      <div className="wrap w-full">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h1 className="font-semibold" style={{ fontSize: "var(--fs-mega)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            Work
          </h1>
          <p className="mt-6 max-w-[46ch]" style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.3 }}>
            Healthcare, fintech, civic tech, and AI-native builds. Six shipped,
            in the world today.
          </p>
        </motion.header>

        {/* Case studies — large clean images, captions below */}
        <div className="mt-[var(--section)] grid gap-x-8 gap-y-[clamp(3rem,6vw,5rem)] md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.slug} {...rise(i)}>
              <Link href={`/work/${cs.slug}`} className="group block" aria-label={`${cs.name}, ${cs.category}`}>
                <div className="media" style={{ aspectRatio: "16 / 11" }}>
                  <Image
                    src={cs.heroImage}
                    alt={`${cs.name}, ${cs.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: accent[cs.accent] }}>
                      {cs.category}
                    </span>
                    <h2 className="mt-1.5 font-semibold" style={{ fontSize: "clamp(1.6rem,2.4vw,2.2rem)", letterSpacing: "-0.03em" }}>
                      {cs.name}
                    </h2>
                  </div>
                  <span className={arrowChip} style={{ border: "1px solid var(--line-strong)", color: accent[cs.accent] }}>
                    <ArrowIcon direction="ne" size={18} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* More builds */}
        <div className="mt-[var(--section)]">
          <h2 className="font-semibold" style={{ fontSize: "var(--fs-h2)", letterSpacing: "-0.03em" }}>
            More builds
          </h2>
          <p className="mt-3" style={{ color: "var(--text-mid)" }}>
            Live sites and shipped products. Each one is online.
          </p>

          <div className="mt-12 grid gap-x-8 gap-y-[clamp(2.5rem,5vw,4rem)] sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.map((p, i) => (
              <motion.div key={p.slug} {...rise(i)}>
                <a
                  href={p.liveUrl ? `https://${p.liveUrl}` : undefined}
                  target={p.liveUrl ? "_blank" : undefined}
                  rel={p.liveUrl ? "noopener noreferrer" : undefined}
                  className="group block"
                  aria-label={`${p.name}, opens ${p.liveUrl} in a new tab`}
                >
                  <div className="media" style={{ aspectRatio: "16 / 10" }}>
                    <Image
                      src={p.image}
                      alt={`${p.name}, ${p.category}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold" style={{ fontSize: "1.1rem" }}>{p.name}</h3>
                      <span style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>{p.category}</span>
                    </div>
                    <span className="mt-0.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: accent[p.accent] }}>
                      <ArrowIcon direction="ne" size={16} />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

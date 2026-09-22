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

export default function WorkView() {
  const reduce = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: (i % 2) * 0.06, ease: EASE },
  });

  return (
    <div className="flex flex-1 flex-col px-[var(--pad)] pb-[var(--pad)] pt-[clamp(1.5rem,4vw,3.5rem)]">
      <div className="wrap w-full">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h1 className="font-semibold" style={{ fontSize: "var(--fs-mega)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            Work
          </h1>
          <p className="mt-4 max-w-[48ch]" style={{ fontSize: "var(--fs-lede)", color: "var(--text-mid)", lineHeight: 1.3 }}>
            Healthcare, fintech, civic tech, and AI-native builds. Six shipped,
            in the world today.
          </p>
        </motion.header>

        {/* Case studies — big image cards */}
        <div className="mt-[clamp(2.5rem,6vh,4.5rem)] grid gap-5 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.slug} {...rise(i)}>
              <Link href={`/work/${cs.slug}`} className="tile group block" aria-label={`${cs.name}, ${cs.category}`}>
                <div className="relative" style={{ aspectRatio: "16 / 11" }}>
                  <Image
                    src={cs.heroImage}
                    alt=""
                    fill
                    sizes="(max-width: 860px) 100vw, 44vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{ background: "linear-gradient(to top, rgba(8,8,10,0.82) 0%, rgba(8,8,10,0.15) 42%, transparent 70%)" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6" style={{ color: "#fff" }}>
                    <div>
                      <span
                        className="mono uppercase tracking-[0.14em]"
                        style={{ fontSize: "var(--fs-mono)", color: accent[cs.accent] }}
                      >
                        {cs.category}
                      </span>
                      <h2 className="mt-1 font-semibold" style={{ fontSize: "clamp(1.5rem,2.4vw,2.1rem)", letterSpacing: "-0.03em", color: "#fff" }}>
                        {cs.name}
                      </h2>
                    </div>
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ background: "rgba(10,10,12,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}
                    >
                      <ArrowIcon direction="ne" size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* More builds — compact live-site grid */}
        <div className="mt-[clamp(3rem,8vh,6rem)]">
          <h2 className="font-semibold" style={{ fontSize: "var(--fs-h2)", letterSpacing: "-0.03em" }}>
            More builds
          </h2>
          <p className="mt-2" style={{ color: "var(--text-mid)" }}>
            Live sites and shipped products. Each one is online.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.map((p, i) => (
              <motion.a
                key={p.slug}
                href={p.liveUrl ? `https://${p.liveUrl}` : undefined}
                target={p.liveUrl ? "_blank" : undefined}
                rel={p.liveUrl ? "noopener noreferrer" : undefined}
                className="tile group block"
                aria-label={`${p.name}, opens ${p.liveUrl} in a new tab`}
                {...rise(i)}
              >
                <div className="relative" style={{ aspectRatio: "16 / 10" }}>
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold" style={{ fontSize: "1.05rem" }}>
                      {p.name}
                    </h3>
                    <span style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>{p.category}</span>
                  </div>
                  <span style={{ color: accent[p.accent] }} className="mt-0.5 shrink-0">
                    <ArrowIcon direction="ne" size={15} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { caseStudies } from "@/lib/case-studies";

/**
 * Full-bleed, infinitely sliding images behind the Work tile.
 * Each slide fills the tile; the strip is duplicated and translated -50%
 * for a seamless loop. Reduced motion -> a single static cover.
 */
export default function WorkTileMedia() {
  const reduce = useReducedMotion();
  const shots = caseStudies;

  if (reduce) {
    return (
      <div className="absolute inset-0">
        <Image
          src={shots[0].heroImage}
          alt=""
          fill
          sizes="(max-width: 860px) 100vw, 55vw"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const strip = [...shots, ...shots];
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="fj-slide-track"
        style={{ width: `${strip.length * 100}%`, ["--slide-dur" as string]: "30s" }}
      >
        {strip.map((cs, i) => (
          <div
            key={`${cs.slug}-${i}`}
            className="relative h-full"
            style={{ width: `${100 / strip.length}%` }}
          >
            <Image
              src={cs.heroImage}
              alt=""
              fill
              sizes="(max-width: 860px) 100vw, 55vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

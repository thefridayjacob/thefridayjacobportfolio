"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/scroll";
import { caseStudies } from "@/lib/case-studies";

export default function WorkMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 360 + 16; // card width + gap
    const totalWidth = cardWidth * caseStudies.length;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 32,
      ease: "none",
      repeat: -1,
    });

    const onEnter = () => tween.timeScale(0.15);
    const onLeave = () => tween.timeScale(1);

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const doubled = [...caseStudies, ...caseStudies];

  return (
    <section className="py-16 overflow-hidden" id="work-marquee">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between mb-6">
        <span
          className="uppercase tracking-[0.16em]"
          style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
        >
          Selected work
        </span>
        <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
          Hover to pause
        </span>
      </div>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-4 px-6 md:px-12 w-max">
          {doubled.map((cs, i) => (
            <Link
              key={`${cs.slug}-${i}`}
              href={`/work/${cs.slug}`}
              className="flex-shrink-0 rounded-[10px] flex flex-col items-center justify-center gap-1 transition-transform hover:scale-[1.02]"
              style={{
                width: 360,
                height: 220,
                background: "var(--surface)",
                border: "1px solid var(--line)",
              }}
            >
              <span
                className="uppercase tracking-[0.16em]"
                style={{ fontSize: "var(--fs-eyebrow)", color: "var(--text-low)" }}
              >
                img placeholder
              </span>
              <span
                className="font-bold mt-2"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-card-title)" }}
              >
                {cs.name}
              </span>
              <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
                {cs.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/scroll";

const STATS = [
  { value: 8, suffix: "+", label: "Years designing & building" },
  { value: 5, suffix: "", label: "Countries served" },
  { value: 600, suffix: "+", label: "Screens designed" },
  { value: 13, suffix: "", label: "Shipped projects" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const numberEls = section.querySelectorAll<HTMLSpanElement>("[data-stat]");

    const runCountUp = () => {
      numberEls.forEach((el) => {
        const target = Number(el.dataset.stat);
        const suffix = el.dataset.suffix || "";
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate() {
              el.textContent = `${Math.round(Number(el.textContent))}${suffix}`;
            },
          }
        );
      });
    };

    let st: ReturnType<typeof ScrollTrigger.create> | undefined;

    try {
      st = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,
        onEnter: runCountUp,
      });
    } catch {
      // Fall back to just showing final numbers without the count-up
      // animation if ScrollTrigger isn't ready (dev remount race).
      numberEls.forEach((el) => {
        const target = Number(el.dataset.stat);
        const suffix = el.dataset.suffix || "";
        el.textContent = `${target}${suffix}`;
      });
    }

    return () => st?.kill();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="px-6 md:px-12 py-20 surface-elevated"
      style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 stats-grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="pl-8 stats-cell">
            <span
              className="font-extrabold block"
              style={{ fontSize: "var(--fs-stat)", fontFamily: "var(--font-display)" }}
              data-stat={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </span>
            <span className="block mt-3" style={{ color: "var(--text-mid)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

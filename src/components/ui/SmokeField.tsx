"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/scroll";

/**
 * Soft, slow-drifting radial-gradient "smoke" blobs behind hero content.
 * Pure CSS/GSAP — no images, no WebGL, cheap to render.
 */
export default function SmokeField({
  className = "",
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const blobs = container.querySelectorAll<HTMLDivElement>(".smoke-blob");

    blobs.forEach((blob, i) => {
      gsap.to(blob, {
        x: `random(-80, 80)`,
        y: `random(-60, 60)`,
        duration: gsap.utils.random(14, 22),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.6,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="smoke-blob absolute rounded-full"
        style={{
          width: "60vw",
          height: "60vw",
          top: "-10%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(255,46,126,0.16), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="smoke-blob absolute rounded-full"
        style={{
          width: "50vw",
          height: "50vw",
          top: "20%",
          right: "-15%",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.12), transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="smoke-blob absolute rounded-full"
        style={{
          width: "40vw",
          height: "40vw",
          bottom: "-10%",
          left: "20%",
          background:
            "radial-gradient(circle, rgba(255,176,32,0.10), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

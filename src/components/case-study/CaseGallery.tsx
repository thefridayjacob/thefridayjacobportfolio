"use client";

import Image from "next/image";
import Rise from "@/components/motion/Rise";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseGallery({ study }: { study: CaseStudy }) {
  return (
    <section className="edge pb-[var(--section)]">
      <div className="wrap w-full border-t pt-[var(--section)]" style={{ borderColor: "var(--line)" }}>
        <Rise>
          <span className="mono uppercase tracking-[0.16em]" style={{ fontSize: "var(--fs-mono)", color: "var(--text-low)" }}>
            A closer look
          </span>
          <h2 className="mt-5 font-semibold" style={{ fontSize: "var(--fs-h2)", letterSpacing: "-0.03em" }}>
            Inside the work.
          </h2>
        </Rise>

        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-8 gap-y-[clamp(2rem,4vw,3.5rem)] sm:grid-cols-2 lg:grid-cols-3">
          {study.gallery.map((g, i) => (
            <Rise key={g.src} delay={(i % 3) * 0.06} y={28}>
              <div className="media" style={{ aspectRatio: "3 / 4" }}>
                <Image
                  src={g.src}
                  alt={`${study.name}, ${g.caption}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="mt-4 block" style={{ fontSize: "var(--fs-label)", color: "var(--text-mid)" }}>
                {g.caption}
              </span>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

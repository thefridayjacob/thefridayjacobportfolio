"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseGallery({ study }: { study: CaseStudy }) {
  return (
    <section className="px-6 md:px-12 py-[var(--space-section)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <span
            className="uppercase tracking-[0.16em]"
            style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
          >
            A closer look
          </span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {study.gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.08} y={32} scale={0.97}>
              <div>
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    aspectRatio: "3/4",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Image
                    src={g.src}
                    alt={`${study.name}, ${g.caption}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className="block mt-3"
                  style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}
                >
                  {g.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

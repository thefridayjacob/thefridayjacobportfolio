"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { galleryProjects } from "@/lib/case-studies";

const accentColor: Record<string, string> = {
  pink: "var(--pink)",
  teal: "var(--teal)",
  amber: "var(--amber)",
};

export default function WorkGallery() {
  return (
    <section className="px-6 md:px-12 py-[var(--space-section)]" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              More work
            </span>
          </Reveal>
          <RevealText
            as="h2"
            className="font-bold max-w-[680px]"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
              } as React.CSSProperties
            }
          >
            Brands, builds, and a few things in between.
          </RevealText>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16 md:pl-[calc(180px+4rem)]">
          {galleryProjects.map((p, i) => {
            const card = (
              <>
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-bold"
                      style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                    >
                      {p.name}
                    </h3>
                    {p.liveUrl && (
                      <ArrowIcon
                        direction="ne"
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: accentColor[p.accent] }}
                      />
                    )}
                  </div>
                  <p style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
                    {p.category}
                  </p>
                  <p className="mt-3" style={{ color: "var(--text-mid)" }}>
                    {p.blurb}
                  </p>
                  {p.liveUrl && (
                    <span
                      className="inline-flex items-center gap-1 mt-3"
                      style={{ fontSize: "var(--fs-caption)", color: accentColor[p.accent] }}
                    >
                      {p.liveUrl}
                      <ArrowIcon direction="ne" size={12} />
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={p.slug} delay={i * 0.05} y={32}>
                {p.liveUrl ? (
                  <a
                    href={`https://${p.liveUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`Visit ${p.name} — opens in a new tab`}
                  >
                    {card}
                  </a>
                ) : (
                  <div className="group">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

const SERVICES = [
  {
    title: "Graphic Design & Visual Communication",
    body: "From a borrowed CorelDraw copy to full brand systems — flyers, posters, logos, identities. My first language.",
    since: "2017 —",
  },
  {
    title: "Brand Identity & Strategy",
    body: "A brand is a promise made visible. Guidelines, rebrands, and market perception — built for 10+ clients.",
    since: "2022 —",
  },
  {
    title: "UI/UX Design",
    body: "Products for real users, not mockup awards. Research, flows, prototypes, hi-fi across six-plus sectors.",
    since: "2023 —",
  },
  {
    title: "Web Design & Development",
    body: "Sites that work, not just exist. WordPress, Wix, Framer, deep SEO — across four countries.",
    since: "2024 —",
  },
  {
    title: "AI-Native Building",
    body: "Claude, Figma AI, Make — shipping real products with live users. Speed plus design thinking.",
    since: "2025 —",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 md:px-12 py-[var(--space-section)]"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              Services
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
            What I bring when I&apos;m in the room.
          </RevealText>
        </div>

        <div className="mt-16 md:pl-[calc(180px+4rem)]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} y={24}>
              <div
                className="flex items-center justify-between gap-6 py-7"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div className="flex-1 min-w-0 flex flex-col gap-2.5">
                  <h3
                    className="font-bold"
                    style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="max-w-[560px]" style={{ color: "var(--text-mid)" }}>
                    {s.body}
                  </p>
                </div>
                <span
                  className="whitespace-nowrap"
                  style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}
                >
                  {s.since}
                </span>
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid var(--line)" }} />
        </div>
      </div>
    </section>
  );
}

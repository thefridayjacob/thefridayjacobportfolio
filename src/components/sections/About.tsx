"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/scroll";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const imgColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const col = imgColRef.current;
    if (!col) return;

    let tween: gsap.core.Tween | undefined;

    try {
      tween = gsap.to(col, {
        y: -48,
        ease: "none",
        scrollTrigger: {
          trigger: col,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    } catch {
      // Parallax is purely decorative — skip silently if GSAP/ScrollTrigger
      // isn't ready yet (dev-mode remount race).
    }

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section
      id="about"
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
              About
            </span>
          </Reveal>

          <RevealText
            as="h2"
            className="font-bold max-w-[720px] text-balance"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
              } as React.CSSProperties
            }
          >
            The origin story isn&apos;t glamorous. That&apos;s the point.
          </RevealText>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mt-16 md:pl-[calc(180px+4rem)]">
          <div className="flex-1 flex flex-col gap-7">
            <Reveal>
              <p style={{ fontSize: "var(--fs-lede)", color: "var(--text-high)" }}>
                In 2017, a woman walked up to me and asked for help. Someone
                she loved had just died. She needed a burial poster — fast. I
                couldn&apos;t help her. I didn&apos;t know how.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: "var(--text-mid)" }}>
                That moment didn&apos;t feel like a design origin story. It
                felt like failure. But it lit something I couldn&apos;t
                ignore. I went and learned CorelDraw. Not because I was drawn
                to aesthetics. Not because I had a creative calling.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="max-w-[460px]">
                <p style={{ fontSize: "var(--fs-quote)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  Because I refused to be helpless in front of someone who
                  needed me.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-medium" style={{ color: "var(--text-high)" }}>
                That&apos;s still why I do this.
              </p>
            </Reveal>
            <div className="w-full max-w-[460px] h-px" style={{ background: "var(--line)" }} />
            <Reveal delay={0.05}>
              <p style={{ color: "var(--text-mid)" }}>
                I spent years as a roadside graphic designer in Nigeria —
                hundreds of flyers, posters, and event materials, for real
                people with real briefs and real deadlines. Then in 2022 I
                joined Ihifix in Kaduna as their graphic designer, marketing
                lead, UI/UX designer, and design tutor — all four, same desk.
                That role forced me to connect design to business outcomes. I
                helped drive a 50% revenue increase.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: "var(--text-mid)" }}>
                In 2023 I moved into UI/UX full-time — flows, wireframes,
                prototypes, full interfaces across healthcare, automotive,
                NGOs, aviation, and civic tech. Then in 2024 an NGO&apos;s
                website went down and their developer kept stalling. I got
                tired of watching them suffer over something fixable, so I
                picked it up, learnt WordPress on the job, and shipped it.
                That became a pattern — sites for clients across Nigeria, the
                US, Canada, the UK, and New Zealand.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{ color: "var(--text-mid)" }}>
                Now I build with AI — not as a shortcut, as a multiplier.
                I&apos;ve shipped an expense tracker and a church management
                system with live users running on it today. Real people. Real
                data.
              </p>
            </Reveal>
          </div>

          <div ref={imgColRef} className="md:w-[360px] flex flex-col gap-4">
            <Reveal>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 460,
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                }}
              >
                <Image
                  src="/work/about/portrait.jpg"
                  alt="Portrait — Friday Jacob"
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  height: 240,
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                }}
              >
                <Image
                  src="/work/about/roadside.jpg"
                  alt="2017 — the roadside years"
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

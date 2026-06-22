"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

const CARDS = [
  {
    num: "01",
    eyebrow: "Function",
    question: "Does it work?",
    body: "If a user can't finish the task, the design failed — no matter how clean the components are.",
    color: "var(--pink)",
  },
  {
    num: "02",
    eyebrow: "Perception",
    question: "How does it feel?",
    body: "Trust, clarity, and confidence are designed — they don't happen by accident.",
    color: "var(--teal)",
  },
  {
    num: "03",
    eyebrow: "Income",
    question: "Does it pay?",
    body: "Does it drive the outcome the business needs? Design that doesn't move a number is decoration.",
    color: "var(--amber)",
  },
];

export default function Triad() {
  return (
    <section
      className="px-6 md:px-12 py-[var(--space-section)] surface-elevated"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <RevealText
            as="h2"
            className="font-bold text-balance"
            style={
              {
                fontSize: "var(--fs-section)",
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
              } as React.CSSProperties
            }
          >
            Three questions, before I touch a border radius.
          </RevealText>

          <div>
            {CARDS.map((card, i) => (
              <Reveal key={card.num} delay={i * 0.1} y={28}>
                <div
                  className="flex items-start gap-6 md:gap-8 py-8"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--line)" : undefined,
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    className="font-extrabold shrink-0"
                    style={{
                      fontSize: "var(--fs-stat)",
                      fontFamily: "var(--font-display)",
                      color: card.color,
                      lineHeight: 1,
                    }}
                  >
                    {card.num}
                  </span>
                  <div className="pt-1">
                    <span
                      className="uppercase tracking-[0.16em]"
                      style={{ fontSize: "var(--fs-eyebrow)", color: "var(--text-mid)" }}
                    >
                      {card.eyebrow}
                    </span>
                    <h3
                      className="font-bold mt-2"
                      style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                    >
                      {card.question}
                    </h3>
                    <p className="mt-3 max-w-[440px]" style={{ color: "var(--text-mid)" }}>
                      {card.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="flex flex-wrap items-baseline gap-x-5 mt-16">
          <span
            className="font-extrabold"
            style={{ fontSize: "var(--fs-display)", fontFamily: "var(--font-display)", color: "var(--pink)" }}
          >
            Function.
          </span>
          <span
            className="font-extrabold"
            style={{ fontSize: "var(--fs-display)", fontFamily: "var(--font-display)", color: "var(--teal)" }}
          >
            Perception.
          </span>
          <span
            className="font-extrabold"
            style={{ fontSize: "var(--fs-display)", fontFamily: "var(--font-display)", color: "var(--amber)" }}
          >
            Income.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import ToolIcon from "@/components/ui/ToolIcon";

const TOOLS = [
  { key: "figma", name: "Figma", role: "Design, prototyping, handoff" },
  { key: "claude", name: "Claude & Claude Code", role: "AI-native building, real shipped products" },
  { key: "wordpress", name: "WordPress", role: "Elementor builds, custom ACF, plugin ecosystems" },
  { key: "framer", name: "Framer", role: "Portfolio-grade interfaces, motion" },
  { key: "supabase", name: "Supabase", role: "Backend, auth, database for AI-native builds" },
  { key: "vercel", name: "Vercel", role: "Deployment for everything I ship" },
  { key: "wix", name: "Wix", role: "Form automation, fast client builds" },
  { key: "make", name: "Make", role: "Workflow automation, webhooks" },
  { key: "photoshop", name: "Photoshop", role: "Brand identity, visual systems" },
  { key: "illustrator", name: "Illustrator", role: "Logos, vector identity work" },
  { key: "coreldraw", name: "CorelDraw", role: "Where this all started, 2017" },
];

export default function Tools() {
  return (
    <section
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
              Toolbox
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
            What I actually reach for.
          </RevealText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mt-16 md:pl-[calc(180px+4rem)]">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.04} y={20}>
              <div className="flex items-start gap-3">
                <ToolIcon
                  name={tool.key}
                  size={26}
                  className="shrink-0 mt-1"
                />
                <div>
                  <h3
                    className="font-bold"
                    style={{ fontSize: "var(--fs-card-title)", fontFamily: "var(--font-display)" }}
                  >
                    {tool.name}
                  </h3>
                  <p className="mt-2" style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
                    {tool.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

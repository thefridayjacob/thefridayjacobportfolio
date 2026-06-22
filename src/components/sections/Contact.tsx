"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import Magnetic from "@/components/ui/Magnetic";
import SocialIcon from "@/components/ui/SocialIcon";

const SOCIALS = [
  { key: "linkedin", href: "https://www.linkedin.com/in/thefridayjacob", label: "LinkedIn" },
  { key: "instagram", href: "https://instagram.com/thefridayjacob", label: "Instagram" },
  { key: "x", href: "https://x.com/thefridayjacob", label: "X" },
  { key: "facebook", href: "https://www.facebook.com/thefridayjacob", label: "Facebook" },
  { key: "whatsapp", href: "https://wa.me/2348104137178", label: "WhatsApp" },
];

export default function Contact() {
  return (
    <footer id="contact" className="px-6 md:px-12 pt-[var(--space-section)] pb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[180px_1fr] gap-y-7 gap-x-6 md:gap-x-16 md:gap-y-0">
          <Reveal className="md:pt-3">
            <span
              className="uppercase tracking-[0.16em]"
              style={{ fontSize: "var(--fs-eyebrow)", color: "var(--teal)" }}
            >
              Contact
            </span>
          </Reveal>

          <div>
            <RevealText
              as="h2"
              className="font-bold max-w-[760px] text-balance"
              style={
                {
                  fontSize: "var(--fs-section)",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1.05,
                } as React.CSSProperties
              }
            >
              Tell me what you&apos;re trying to solve.
            </RevealText>

            <Reveal delay={0.15}>
              <div className="flex items-center gap-4 mt-12">
                <Magnetic strength={0.35}>
                  <a
                    href="mailto:thefridayjacob@gmail.com"
                    className="rounded-full px-7 py-3.5 font-medium inline-block"
                    style={{ background: "var(--pink)", color: "#0c0c0c", fontSize: "var(--fs-button)" }}
                  >
                    Get in touch
                  </a>
                </Magnetic>
                <a href="mailto:thefridayjacob@gmail.com" style={{ color: "var(--text-high)" }}>
                  thefridayjacob@gmail.com
                </a>
              </div>
            </Reveal>

            {/* Social icons row */}
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 mt-8">
                {SOCIALS.map((social) => (
                  <Magnetic key={social.key} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center rounded-full transition-colors"
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid var(--line-strong)",
                        color: "var(--text-mid)",
                      }}
                    >
                      <SocialIcon name={social.key} size={18} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 mt-28 pt-10" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--pink)" }} />
              <span className="font-bold" style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-card-title)" }}>
                Friday Jacob
              </span>
            </div>
            <p className="max-w-[360px]" style={{ color: "var(--text-mid)" }}>
              I take on a handful of projects at a time, so I can actually
              pay attention to each one.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <Link href="https://instagram.com/thefridayjacob" style={{ fontSize: "var(--fs-nav)" }}>
              @thefridayjacob
            </Link>
            <a href="mailto:thefridayjacob@gmail.com" style={{ fontSize: "var(--fs-nav)" }}>
              thefridayjacob@gmail.com
            </a>
            <Link href="#transpose" style={{ fontSize: "var(--fs-nav)" }}>
              Transpose
            </Link>
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-6 pt-6"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
            © 2026 Friday Jacob — built with Next.js & GSAP.
          </span>
          <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
            Port Harcourt, Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
}

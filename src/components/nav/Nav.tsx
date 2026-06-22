"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { gsap } from "@/lib/scroll";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#transpose", label: "Transpose" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (menuOpen) {
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    } else {
      gsap.to(menu, {
        autoAlpha: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        height: "var(--space-nav)",
        backgroundColor: scrolled || menuOpen ? "rgba(12,12,12,0.85)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <Link href="/" className="flex items-center gap-2.5 shrink-0">
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--pink)" }} />
        <span
          className="font-semibold text-[16px] md:text-[17px] whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Friday Jacob
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[15px] transition-colors hover:text-[var(--text-high)]"
            style={{ color: "var(--text-mid)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <Magnetic strength={0.3} className="hidden sm:inline-block">
          <Link
            href="#contact"
            className="rounded-full px-5 md:px-6 py-2.5 text-[14px] md:text-[16px] font-medium inline-block whitespace-nowrap"
            style={{ background: "var(--pink)", color: "#0c0c0c" }}
          >
            Let&apos;s talk
          </Link>
        </Magnetic>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-full"
          style={{ border: "1px solid var(--line-strong)" }}
        >
          <span
            className="block w-4 h-px transition-transform"
            style={{
              background: "var(--text-high)",
              transform: menuOpen ? "rotate(45deg) translateY(2px)" : "none",
            }}
          />
          <span
            className="block w-4 h-px transition-transform"
            style={{
              background: "var(--text-high)",
              transform: menuOpen ? "rotate(-45deg) translateY(-2px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className="md:hidden absolute top-full left-0 right-0 flex-col px-5 py-6 gap-5"
        style={{
          display: "none",
          background: "rgba(12,12,12,0.97)",
          borderBottom: "1px solid var(--line)",
          backdropFilter: "blur(20px)",
        }}
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[17px]"
            style={{ color: "var(--text-high)" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-full px-6 py-3 text-center font-medium mt-2"
          style={{ background: "var(--pink)", color: "#0c0c0c" }}
        >
          Let&apos;s work together
        </Link>
      </div>
    </nav>
  );
}

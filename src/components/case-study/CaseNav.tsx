"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CaseNav({ label }: { label: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        height: "var(--space-nav)",
        backgroundColor: scrolled ? "rgba(12,12,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <Link href="/" style={{ fontSize: "var(--fs-nav)", color: "var(--text-mid)" }}>
        ← Friday Jacob
      </Link>
      <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-mid)" }}>
        {label}
      </span>
    </nav>
  );
}

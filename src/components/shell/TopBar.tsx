"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function useLagosTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Lagos",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const time = useLagosTime();

  return (
    <header
      className="topbar sticky top-0 z-40 flex items-center justify-between gap-4 px-[var(--pad)]"
      style={{ height: "var(--topbar-h)" }}
    >
      {/* Left: identity or back */}
      <div className="flex min-w-0 items-center">
        {isHome ? (
          <Link
            href="/"
            className="truncate font-medium"
            style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
          >
            Friday Jacob
          </Link>
        ) : (
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-medium"
            style={{ fontSize: "0.95rem" }}
          >
            <span
              className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5"
              style={{ color: "var(--text-mid)" }}
            >
              &larr;
            </span>
            Home
          </Link>
        )}
      </div>

      {/* Center: role */}
      <span
        className="mono absolute left-1/2 hidden -translate-x-1/2 uppercase tracking-[0.14em] sm:block"
        style={{ fontSize: "var(--fs-mono)", color: "var(--text-mid)" }}
      >
        AI Design Engineer
      </span>

      {/* Right: location + time, theme, status */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span
          className="mono whitespace-nowrap"
          style={{ fontSize: "var(--fs-mono)", color: "var(--text-mid)" }}
        >
          <span className="hidden md:inline">Port Harcourt&nbsp;&middot;&nbsp;</span>
          {time}
        </span>
        <ThemeToggle />
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true" title="Available for work">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ background: "var(--teal)", animation: "fj-ping 2.4s var(--ease-out) infinite" }}
          />
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: "var(--teal)" }}
          />
        </span>
      </div>
    </header>
  );
}

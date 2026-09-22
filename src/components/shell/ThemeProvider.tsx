"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const Ctx = createContext<ThemeCtx>({
  theme: "light",
  toggle: () => {},
  setTheme: () => {},
});

export function useTheme() {
  return useContext(Ctx);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start from whatever the pre-hydration script already stamped on <html>.
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setThemeState(current);
  }, []);

  const apply = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch {
      // storage blocked — fine, the choice just won't persist
    }
  }, []);

  const toggle = useCallback(() => {
    apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }, [apply]);

  return (
    <Ctx.Provider value={{ theme, toggle, setTheme: apply }}>{children}</Ctx.Provider>
  );
}

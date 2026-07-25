"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

// ── Available themes ────────────────────────────────────────────
// Each name must match a [data-theme="name"] block in globals.css.
const THEMES = ["modern", "devdark", "warm"];

// ── LocalStorage keys ───────────────────────────────────────────
const THEME_KEY = "portfolio-theme";
const DARK_KEY = "portfolio-dark";

// ── Context ─────────────────────────────────────────────────────
const ThemeContext = createContext(null);

/**
 * useTheme — hook to read / write theme state from anywhere.
 *
 * Returns:
 *   theme     – "modern" | "devdark" | "warm"
 *   setTheme  – setter (accepts a theme name)
 *   isDark    – boolean, true when dark mode is active
 *   toggleDark – flips light ↔ dark
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// ── Helpers ─────────────────────────────────────────────────────

/** Read from localStorage with a fallback default. */
function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v !== null ? v : fallback;
  } catch {
    return fallback;
  }
}

/** Detect the user's OS-level dark preference (used only on first load). */
function prefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// ── Provider ────────────────────────────────────────────────────
export default function ThemeProvider({ children }) {
  // Lazy-init from localStorage (or OS preference for dark).
  const [theme, setThemeState] = useState(() =>
    readStorage(THEME_KEY, "modern")
  );
  const [isDark, setIsDark] = useState(() =>
    readStorage(DARK_KEY, null) !== null
      ? readStorage(DARK_KEY, "false") === "true"
      : prefersDark()
  );

  // Persist + apply whenever theme or isDark changes.
  useEffect(() => {
    const root = document.documentElement;

    // 1. Set data-theme attribute
    root.setAttribute("data-theme", theme);

    // 2. Toggle the .dark class (Tailwind v4 convention)
    root.classList.toggle("dark", isDark);

    // 3. Persist to localStorage
    try {
      localStorage.setItem(THEME_KEY, theme);
      localStorage.setItem(DARK_KEY, String(isDark));
    } catch { /* storage full — ignore */ }
  }, [theme, isDark]);

  // ── Listen for OS dark-mode changes while the page is open ──
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      // Only auto-switch if the user hasn't manually chosen yet.
      if (localStorage.getItem(DARK_KEY) === null) {
        setIsDark(e.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setTheme = useCallback((name) => {
    if (THEMES.includes(name)) setThemeState(name);
  }, []);

  const toggleDark = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

"use client";

import { useTheme } from "./ThemeProvider";

// ── Theme metadata ──────────────────────────────────────────────
// Each swatch shows a preview of the theme's accent + bg colours.
// The `ring` highlight indicates the currently-selected theme.
const themeOptions = [
  {
    name: "modern",
    label: "Modern",
    accent: "#6366f1",   // indigo
    bgLight: "#ffffff",
    bgDark: "#0f172a",
  },
  {
    name: "devdark",
    label: "Dev Dark",
    accent: "#10b981",   // emerald
    bgLight: "#ffffff",
    bgDark: "#0d1117",
  },
  {
    name: "warm",
    label: "Warm",
    accent: "#f59e0b",   // amber
    bgLight: "#ffffff",
    bgDark: "#1c1917",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme, isDark, toggleDark } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* ── Colour swatches ──────────────────────────────── */}
      {themeOptions.map((opt) => {
        const active = theme === opt.name;
        return (
          <button
            key={opt.name}
            type="button"
            title={`${opt.label} theme`}
            aria-label={`Switch to ${opt.label} theme`}
            aria-pressed={active}
            onClick={() => setTheme(opt.name)}
            className={`
              h-6 w-6 rounded-full border-2 transition-all duration-200
              hover:scale-110
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              ${active
                ? "border-accent ring-2 ring-accent/40"
                : "border-border hover:border-accent/60"
              }
            `}
            style={{
              backgroundColor: isDark ? opt.bgDark : opt.bgLight,
              boxShadow: `inset 0 0 0 2px ${opt.accent}`,
            }}
          />
        );
      })}

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="mx-1 h-5 w-px bg-border" aria-hidden="true" />

      {/* ── Dark / Light toggle ──────────────────────────── */}
      <button
        type="button"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleDark}
        className="
          inline-flex items-center justify-center rounded-md p-1.5
          text-text-secondary transition-colors duration-200
          hover:bg-bg-secondary hover:text-text-primary
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        "
      >
        {isDark ? (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>
    </div>
  );
}

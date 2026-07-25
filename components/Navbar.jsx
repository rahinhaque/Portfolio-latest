"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

// ── Navigation items ────────────────────────────────────────
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Helper: determine if a nav link is the active route
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-border
        bg-bg-primary/80
        backdrop-blur-md
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ── Brand / Logo ────────────────────────────────── */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-text-primary"
        >
          Rahin Haque
        </Link>

        {/* ── Desktop right section: ThemeSwitcher + links ── */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeSwitcher />

          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    rounded-md px-3 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive(href)
                        ? "text-accent underline underline-offset-4"
                        : "text-text-secondary hover:text-text-primary"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile: ThemeSwitcher + hamburger ────────────── */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors duration-200 hover:bg-bg-secondary hover:text-text-primary"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ──────────────────────────── */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block rounded-md px-3 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive(href)
                        ? "text-accent underline underline-offset-4"
                        : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

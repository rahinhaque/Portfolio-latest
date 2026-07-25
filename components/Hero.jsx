"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiGithub } from "react-icons/si";

/* ────────────────────────────────────────────────────────────────
   Hero.jsx — Top section of the home page

   Two-column layout on desktop: text left, photo right.
   Stacked on mobile: text first, then photo.
   Uses semantic theme classes (bg-bg-primary, text-accent, etc.)
   so every theme + dark/light mode is respected automatically.
   ──────────────────────────────────────────────────────────────── */

// ── Quick-stats row data ──────────────────────────────────────
const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2+", label: "Years Learning" },
  { value: "MERN", label: "Stack Focused" },
];

// ── Small subcomponent for a single stat ──────────────────────
function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6">
      <span className="text-lg font-bold text-accent">{value}</span>
      <span className="text-xs text-text-secondary">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary">
      {/* ── Background accent blob (behind everything) ────── */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 top-1/3 -z-10
          h-[500px] w-[500px] rounded-full
          bg-accent/10 blur-3xl
          dark:bg-accent/8
        "
      />

      {/* ── Main grid ─────────────────────────────────────── */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-4 py-24 sm:px-6 lg:min-h-0 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* ── LEFT COLUMN — Text ──────────────────────────── */}
        <div className="flex flex-1 flex-col items-start gap-6 lg:gap-8">

          {/* Eyebrow badge with pulsing dot */}
          <div
            className="
              animate-fade-in-up
              inline-flex items-center gap-2 rounded-full
              border border-border bg-bg-secondary/60
              px-3 py-1 text-xs font-medium tracking-wide text-text-secondary
              backdrop-blur-sm
            "
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            AVAILABLE FOR WORK
          </div>

          {/* Greeting + name */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            <p className="text-base text-text-secondary sm:text-lg">Hi, I&apos;m</p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Rahin
              <br />
              Haque
            </h1>
          </div>

          {/* Role */}
          <p
            className="animate-fade-in-up text-lg font-semibold text-accent sm:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Full-Stack MERN Developer
          </p>

          {/* Bio paragraph — accent-colour keyword highlights */}
          <p
            className="animate-fade-in-up max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base"
            style={{ animationDelay: "320ms" }}
          >
            I build fast, scalable web applications with{" "}
            <span className="font-semibold text-accent">React</span>,{" "}
            <span className="font-semibold text-accent">Next.js</span>, and{" "}
            <span className="font-semibold text-accent">Node.js</span> —
            turning ideas into clean, production-ready products.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-in-up flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "440ms" }}
          >
            {/* Primary */}
            <Link
              href="/project"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl bg-accent px-6 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-accent/25
                transition-all duration-200
                hover:bg-accent-hover hover:shadow-accent/35
                hover:-translate-y-0.5
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              "
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Secondary / Ghost */}
            <a
              href="https://github.com/rahinhaque"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl border border-border bg-bg-secondary/60
                px-6 py-3 text-sm font-semibold text-text-primary
                backdrop-blur-sm
                transition-all duration-200
                hover:border-accent/40 hover:bg-bg-secondary
                hover:-translate-y-0.5
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              "
            >
              <SiGithub className="h-4 w-4" />
              GitHub Profile
            </a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-in-up flex items-center"
            style={{ animationDelay: "560ms" }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    className="h-8 w-px bg-border"
                  />
                )}
                <Stat value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Photo ─────────────────────────── */}
        <div
          className="animate-fade-in relative flex flex-1 items-center justify-center"
          style={{ animationDelay: "200ms" }}
        >
          {/* Photo wrapper — angled rectangle + gradient border glow */}
          <div className="relative">
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="
                absolute -inset-1 rounded-[2rem]
                bg-gradient-to-br from-accent via-accent/50 to-purple-500/40
                opacity-30 blur-lg
                dark:opacity-20
              "
            />
            {/* Image container */}
            <div
              className="
                relative overflow-hidden rounded-[2rem]
                border-2 border-accent/20
                shadow-2xl shadow-accent/10
                rotate-2
                dark:border-accent/15 dark:shadow-accent/8
              "
            >
              <Image
                src="/heroMain.jpg"
                alt="Rahin Haque — Full-Stack MERN Developer"
                width={500}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* ── Floating tech-stack pill (top-left corner) ── */}
            <div
              className="
                absolute -left-4 -top-4 z-10
                flex items-center gap-2.5
                rounded-full border border-border
                bg-bg-primary/80 px-4 py-2
                shadow-lg backdrop-blur-md
                dark:bg-bg-primary/70
              "
            >
              <FaReact className="h-4 w-4 text-[#61DAFB]" />
              <FaNodeJs className="h-4 w-4 text-[#3C873A]" />
              <SiMongodb className="h-4 w-4 text-[#47A248]" />
              <span className="text-xs font-medium text-text-secondary">
                MERN
              </span>
            </div>

            {/* ── Floating status badge (bottom-right corner) ── */}
            <div
              className="
                absolute -bottom-3 -right-3 z-10
                inline-flex items-center gap-2
                rounded-full border border-border
                bg-bg-primary/80 px-3.5 py-1.5
                shadow-lg backdrop-blur-md
                dark:bg-bg-primary/70
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-text-primary">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator (desktop only) ───────────────── */}
      <div
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          hidden flex-col items-center gap-1.5
          text-text-secondary
          lg:flex
        "
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="h-5 w-5 animate-bounce-slow"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}

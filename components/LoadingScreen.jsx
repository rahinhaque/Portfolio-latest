"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================================================================
   LoadingScreen — full-viewport intro overlay shown once per session.

   • Counter 0→100 with ease-out deceleration over ~1.8 s
   • Thin gradient progress bar synced to the counter
   • Framer Motion fade+scale exit once complete
   • sessionStorage flag "hasLoadedOnce" — skipped after first visit
   • Respects prefers-reduced-motion (static 500 ms hold, no count-up)
   • Purely visual overlay — real page content stays in the DOM
   ================================================================ */

const COUNT_DURATION = 1800;
const PAUSE_AT_END = 300;
const EXIT_DURATION = 500;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

export default function LoadingScreen() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Already shown this session — skip entirely
    if (sessionStorage.getItem("hasLoadedOnce")) return;

    // Mark as seen immediately so a refresh mid-animation won't replay it
    sessionStorage.setItem("hasLoadedOnce", "true");
    setShow(true); // eslint-disable-line react-hooks/set-state-in-effect -- one-time session check

    // ── Reduced-motion path: brief static hold, no count-up ──
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setCount(100);
      timerRef.current = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timerRef.current);
    }

    // ── Animated count-up ─────────────────────────────────────
    let start = null;

    const tick = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / COUNT_DURATION, 1);
      setCount(Math.round(easeOutCubic(progress) * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Reached 100 — hold briefly, then trigger exit
        timerRef.current = setTimeout(() => setShow(false), PAUSE_AT_END);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-screen"
          className="pointer-events-none fixed inset-0 z-[60] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: EXIT_DURATION / 1000, ease: "easeOut" }}
        >
          {/* ── Counter number ─────────────────────────────── */}
          <div
            className="text-6xl font-bold md:text-8xl"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              {count}
            </span>
          </div>

          {/* ── Progress bar ───────────────────────────────── */}
          <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-purple-500"
              style={{ width: `${count}%` }}
            />
          </div>

          {/* ── Loading text ───────────────────────────────── */}
          <p className="mt-4 text-sm text-text-secondary">
            Loading Rahin&apos;s Portfolio...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

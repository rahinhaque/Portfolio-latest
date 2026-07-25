"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ================================================================
   CustomCursor — two-part custom cursor for desktop/mouse devices.

   • Small solid dot (10 px) follows the mouse instantly
   • Larger accent-coloured ring (36 px) follows with spring easing
   • Detects hoverable + fine-pointer devices only — renders nothing
     on touch/mobile so native cursor is untouched
   • Interactive elements (links, buttons) trigger a scale-up on the
     ring and a subtle scale on the dot for visual feedback
   ================================================================ */

const SPRING = { stiffness: 150, damping: 15, mass: 0.1 };
const CLICKABLE = 'a, button, [role="button"], input, textarea, select, label';

export default function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [hovering, setHovering] = useState(false);

  /* ── Motion values ──────────────────────────────────────── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Ring follows with spring easing (trailing effect) */
  const ringX = useSpring(mouseX, SPRING);
  const ringY = useSpring(mouseY, SPRING);

  /* ── Mount + listeners ──────────────────────────────────── */
  useEffect(() => {
    // Only activate on mouse-equipped devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    setReady(true); // eslint-disable-line react-hooks/set-state-in-effect -- one-time client-only device check

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e) => {
      if (e.target.closest(CLICKABLE)) setHovering(true);
    };

    const onOut = (e) => {
      if (!e.relatedTarget?.closest?.(CLICKABLE)) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- MotionValues are stable refs
  }, []);

  if (!ready) return null;

  return (
    <>
      {/* ── Dot — solid, instant follow ──────────────────── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full bg-accent"
        style={{
          x: mouseX,
          y: mouseY,
          marginLeft: -5,
          marginTop: -5,
        }}
        animate={{ scale: hovering ? 1.2 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* ── Ring — outline, spring-eased trailing follow ─── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-9 w-9 rounded-full border-2 border-accent"
        style={{
          x: ringX,
          y: ringY,
          marginLeft: -18,
          marginTop: -18,
        }}
        animate={{ scale: hovering ? 1.5 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}

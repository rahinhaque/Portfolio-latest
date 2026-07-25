"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, invalidate } from "@react-three/fiber";

/* ================================================================
   ThreeBackground — ambient animated particle field behind all content.

   • Fixed, full-viewport canvas sitting behind the page at z-index -10
   • Small floating points drifting upward with subtle mouse parallax
   • Accent colour synced to the active theme's --accent CSS variable
   • Performance safeguards: reduced-motion check, mobile fallback,
     demand-mode rendering, tab-visibility pause
   ================================================================ */

const DESKTOP_COUNT = 800;
const MOBILE_BREAKPOINT = 768;
const ACCENT_FALLBACK = "#6366f1";

/* ── Browser-only helpers ──────────────────────────────────────── */

function readAccentColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim() || ACCENT_FALLBACK
  );
}

/* ── Particle field (lives inside <Canvas>) ──────────────────── */

function ParticleField({ count }) {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const pausedRef = useRef(false);
  const accentRef = useRef(ACCENT_FALLBACK);

  /* Particle positions + per-particle speeds, generated once on
     the client inside an effect to satisfy React's purity rules. */
  const [particles, setParticles] = useState(null);

  /* Generate random particle data once on the client. */
  useEffect(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      speeds[i] = 0.15 + Math.random() * 0.4;
    }
    setParticles({ positions, speeds }); // eslint-disable-line react-hooks/set-state-in-effect -- one-time client-only init
  }, [count]);

  /* ── Mouse tracking (normalised -1 → 1) ──────────────────── */
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Pause render loop when the tab is hidden ────────────── */
  useEffect(() => {
    const sync = () => {
      pausedRef.current = document.hidden;
      if (!document.hidden) invalidate();
    };
    pausedRef.current = document.hidden;
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  /* ── Sync accent colour with the active theme ───────────── */
  useEffect(() => {
    const update = () => {
      accentRef.current = readAccentColor();
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => obs.disconnect();
  }, []);

  /* ── Per-frame animation ────────────────────────────────── */
  useFrame((state, delta) => {
    if (pausedRef.current || !meshRef.current || !particles) return;

    const posArr = meshRef.current.geometry.attributes.position.array;
    const { speeds } = particles;

    // Drift upward; wrap around at the top
    for (let i = 0; i < count; i++) {
      const y = i * 3 + 1;
      posArr[y] += speeds[i] * delta * 0.3;
      if (posArr[y] > 10) posArr[y] = -10;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Sync material colour from ref (avoids React re-render on theme change)
    meshRef.current.material.color.set(accentRef.current);

    // Subtle mouse-driven camera parallax
    const cam = state.camera;
    cam.position.x += (mouseRef.current.x * 0.8 - cam.position.x) * 0.02;
    cam.position.y += (mouseRef.current.y * 0.5 - cam.position.y) * 0.02;
    cam.lookAt(0, 0, 0);

    // Very slow rotation for ambient drift
    meshRef.current.rotation.y += delta * 0.015;
    meshRef.current.rotation.x += delta * 0.008;

    // Keep the demand-mode loop alive
    invalidate();
  });

  // Wait until client-side particle data is ready
  if (!particles) return null;

  return (
    <points ref={meshRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={ACCENT_FALLBACK}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ── Lightweight CSS fallback for mobile / low-power devices ──── */

function CssFallback() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at 30% 40%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 60%), " +
          "radial-gradient(ellipse at 70% 60%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 50%)",
      }}
    />
  );
}

/* ── Exported wrapper ──────────────────────────────────────────── */

export default function ThreeBackground() {
  const [mode, setMode] = useState("ssr"); // "ssr" | "canvas" | "css" | "none"

  /* eslint-disable react-hooks/set-state-in-effect -- one-time
     client-only detection (reduced-motion, viewport width) that
     cannot run during SSR.  This is the documented hydration-safe
     pattern for feature-detecting browser APIs. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMode("none");
      return;
    }
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setMode("css");
      return;
    }
    setMode("canvas");
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // During SSR and when reduced-motion is active, render nothing
  if (mode === "ssr" || mode === "none") return null;

  if (mode === "css") return <CssFallback />;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        frameloop="demand"
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: "transparent" }}
      >
        <ParticleField count={DESKTOP_COUNT} />
      </Canvas>
    </div>
  );
}

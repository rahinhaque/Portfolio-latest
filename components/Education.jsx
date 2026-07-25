"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Globe } from "lucide-react";

/* ================================================================
   Education.jsx — Education & Background section

   Placed between About and Skills on the homepage.
   Matches the card style, border-radius, spacing, and hover effects
   established in About.jsx for visual consistency.
   ================================================================ */

/** Reusable aspiration card for the bottom row. */
function AspirationCard({ icon: Icon, title, text, iconBg, iconColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-2xl border border-border bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
    >
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}
      >
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>

      <h3 className={`mb-2 text-lg font-bold ${iconColor}`}>{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{text}</p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Eyebrow pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-text-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            MY BACKGROUND
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-text-primary">Educational </span>
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Qualification
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-text-secondary">
            My academic journey and the foundation that drives my passion for
            technology and continuous learning.
          </p>
        </motion.div>

        {/* ── Main education card ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-20 max-w-3xl overflow-hidden rounded-2xl border border-border border-t-4 border-t-accent bg-bg-secondary"
        >
          <div className="p-6 sm:p-8">
            {/* Icon + degree title + status pill */}
            <div className="mb-1 flex flex-wrap items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-text-primary">
                  Bachelor of Arts (Honours)
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  2nd Year — In Progress
                </span>
              </div>
            </div>

            <p className="mb-5 ml-[3.75rem] text-sm font-medium text-text-secondary">
              Political Science
            </p>

            {/* Nested info box */}
            <div className="ml-[3.75rem] rounded-xl border border-border bg-bg-primary/60 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-bold text-text-primary">
                  Narsingdi Government College
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                Currently pursuing my Honours degree in Political Science,
                developing critical thinking and analytical skills alongside my
                passion for technology and web development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Future Aspirations heading ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h3 className="mb-2 text-xl font-bold text-text-primary">
            Future Aspirations
          </h3>
          <p className="text-sm text-text-secondary">
            My roadmap ahead — blending academic growth with professional
            ambition.
          </p>
        </motion.div>

        {/* ── Aspiration cards ──────────────────────────────── */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <AspirationCard
            icon={Code2}
            title="Web Development Career"
            text="Committed to mastering the MERN stack and modern web technologies. Building real-world projects and contributing to open source to sharpen my craft."
            iconBg="bg-cyan-500/10"
            iconColor="text-cyan-500"
          />
          <AspirationCard
            icon={Globe}
            title="Higher Studies Abroad"
            text="Aspiring to pursue advanced studies internationally, combining my political science background with technology to drive meaningful global impact."
            iconBg="bg-purple-500/10"
            iconColor="text-purple-500"
          />
        </div>
      </div>
    </section>
  );
}

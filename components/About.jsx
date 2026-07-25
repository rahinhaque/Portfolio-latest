"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Target,
  BookOpen,
  Handshake,
  Monitor,
  GraduationCap,
  Rocket,
} from "lucide-react";
import {
  SiMongodb,
  SiGit,
  SiFigma,
  SiPostman,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* ================================================================
   About.jsx — "About Me" section for the homepage

   Two-part layout:
   1. Intro heading + two-column story/tools card
   2. "At a Glance" stats row

   Uses semantic theme classes for full theme compatibility.
   ================================================================ */

// ── Tool card data ─────────────────────────────────────────────
const tools = [
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#ffffff" },
];

// ── Progress bar data ──────────────────────────────────────────
const stackBars = [
  {
    label: "Frontend",
    techs: "React · Next.js · Tailwind",
    percent: 90,
    barColor: "bg-cyan-500",
  },
  {
    label: "Backend",
    techs: "Node.js · Express · REST",
    percent: 75,
    barColor: "bg-emerald-500",
  },
  {
    label: "Database",
    techs: "MongoDB · Mongoose",
    percent: 80,
    barColor: "bg-amber-500",
  },
];

// ── Quick facts data ───────────────────────────────────────────
const quickFacts = [
  { icon: MapPin, text: "Based in Bangladesh" },
  { icon: Target, text: "Open to remote opportunities" },
  { icon: BookOpen, text: "Continuous learner — always building" },
  { icon: Handshake, text: "Team player, detail-oriented" },
];

// ── At-a-Glance card data ──────────────────────────────────────
const glanceCards = [
  {
    icon: Monitor,
    heading: "Languages & Frameworks",
    headingColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    borderColor: "border-t-cyan-500",
    text: "React, Next.js, JavaScript ES6+, HTML5, CSS3, Tailwind CSS",
    pills: ["React & Next.js", "JavaScript ES6+", "HTML5 & CSS3", "Tailwind CSS"],
  },
  {
    icon: GraduationCap,
    heading: "Education",
    headingColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    borderColor: "border-t-purple-500",
    text: "Narsingdi Govt. College — Bachelor of Arts, Political Science",
    pills: [
      "Narsingdi Govt. College",
      "Bachelor of Arts",
      "Political Science",
      "Self-taught Dev",
    ],
  },
  {
    icon: Rocket,
    heading: "Projects",
    headingColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    borderColor: "border-t-emerald-500",
    text: "Built 5+ real-world full-stack projects with authentication, APIs, and databases",
    pills: [
      "5+ Projects Built",
      "REST API Design",
      "Auth Systems",
      "MongoDB & Node.js",
    ],
  },
];

/* ================================================================
   Subcomponents
   ================================================================ */

/** Small branded tool card — icon + label in a bordered box. */
function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <div
      className="skill-badge flex flex-col items-center gap-2 rounded-xl border px-3 py-3 transition-all duration-300 hover:scale-[1.05]"
      style={{
        "--skill-color": tool.color,
        "--skill-dark": tool.darkColor || tool.color,
      }}
    >
      <Icon className="skill-icon h-6 w-6" />
      <span className="text-xs font-medium text-text-secondary">
        {tool.name}
      </span>
    </div>
  );
}

/** Animated stat bar — fills to `percent` on scroll into view. */
function StatBar({ bar }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-text-primary">
          {bar.label}
        </span>
        <span className="text-xs text-text-secondary">{bar.techs}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border">
        <motion.div
          className={`h-full rounded-full ${bar.barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${bar.percent}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/** "At a Glance" card — icon, heading, description, pill tags. */
function GlanceCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group rounded-2xl border border-border border-t-4 bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 ${card.borderColor}`}
    >
      {/* Icon badge */}
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${card.iconBg}`}
      >
        <Icon className={`h-5 w-5 ${card.headingColor}`} />
      </div>

      <h3 className={`mb-2 text-lg font-bold ${card.headingColor}`}>
        {card.heading}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {card.text}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {card.pills.map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-border bg-bg-primary/60 px-2.5 py-0.5 text-xs font-medium text-text-secondary"
          >
            {pill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ================================================================
   Main About component
   ================================================================ */

export default function About() {
  return (
    <section id="about" className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── PART 1 — Intro heading ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <span className="text-sm font-medium tracking-wide uppercase">
              About Me
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-text-primary">Turning Ideas into </span>
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            I&apos;m currently pursuing a Bachelor&apos;s degree in Political
            Science at Narsingdi Govt. College, while actively building my path
            as a Junior MERN Stack Developer.
          </p>
        </motion.div>

        {/* ── PART 1 — Two-column card ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid lg:grid-cols-5">

            {/* ── LEFT — My Story ───────────────────────────── */}
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:col-span-3 lg:border-r lg:border-border">
              {/* Avatar + heading */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-lg">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    My Story
                  </h3>
                  <p className="text-xs text-text-secondary">
                    Junior Frontend Developer
                  </p>
                </div>
              </div>

              {/* Paragraphs */}
              <p className="text-sm leading-relaxed text-text-secondary">
                My interest lies at the intersection of{" "}
                <span className="font-semibold text-accent">technology</span>,{" "}
                <span className="font-semibold text-accent">logic</span>, and{" "}
                <span className="font-semibold text-accent">
                  user experience
                </span>{" "}
                — where I enjoy turning ideas into clean, functional web
                interfaces.
              </p>

              <p className="text-sm leading-relaxed text-text-secondary">
                Alongside my academic journey, I&apos;m actively developing my
                programming skills and building projects to strengthen my
                understanding of modern web development. I believe great software
                emerges where disciplined thinking meets creative execution.
              </p>

              <p className="text-sm leading-relaxed text-text-secondary">
                I specialize in the MERN stack — building everything from
                polished, animated frontends with{" "}
                <span className="font-semibold text-accent">React</span> and{" "}
                <span className="font-semibold text-accent">Next.js</span> to
                robust REST APIs with{" "}
                <span className="font-semibold text-accent">Node</span>,{" "}
                <span className="font-semibold text-accent">Express</span>, and{" "}
                <span className="font-semibold text-accent">MongoDB</span>.
              </p>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Quick facts */}
              <div className="space-y-3">
                {quickFacts.map((fact) => {
                  const FactIcon = fact.icon;
                  return (
                    <div
                      key={fact.text}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <FactIcon className="h-4 w-4 shrink-0 text-accent/70" />
                      {fact.text}
                    </div>
                  );
                })}
              </div>

              {/* GitHub button */}
              <div>
                <a
                  href="https://github.com/rahinhaque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 rounded-xl
                    border border-border bg-bg-secondary/60
                    px-5 py-2.5 text-sm font-semibold text-text-primary
                    backdrop-blur-sm transition-all duration-200
                    hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-0.5
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                  "
                >
                  <SiGithub className="h-4 w-4" />
                  View my GitHub
                  <span className="text-text-secondary/60">↗</span>
                </a>
              </div>
            </div>

            {/* ── RIGHT — Tools & Stack ─────────────────────── */}
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:col-span-2">
              {/* Tools grid */}
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-text-secondary">
                  Tools I Work With
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {tools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>

              {/* Stack bars */}
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-text-secondary">
                  My Stack
                </p>
                <div className="space-y-4">
                  {stackBars.map((bar) => (
                    <StatBar key={bar.label} bar={bar} />
                  ))}
                </div>
              </div>

              {/* Status card */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-secondary/60 px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Open to opportunities
                  </p>
                  <p className="text-xs text-text-secondary">
                    Remote-friendly · Responds within 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PART 2 — At a Glance ─────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-6 h-px w-16 bg-border" />
            <p className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
              At a Glance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {glanceCards.map((card, i) => (
              <GlanceCard key={card.heading} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

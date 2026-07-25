"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUp, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

/* ================================================================
   Footer.jsx — Global footer rendered on every page via layout

   Three parts:
   1. CTA banner (email call-to-action)
   2. Footer content (4-column grid)
   3. Bottom bar (copyright + scroll-to-top)
   ================================================================ */

// ── Quick links data ───────────────────────────────────────────
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/#contact" },
];

// ── "What I Do" list ──────────────────────────────────────────
const whatIDo = [
  "Frontend Development",
  "React & Next.js",
  "UI/UX Implementation",
  "REST API Integration",
  "Performance Optimization",
];

// ── Social buttons data ────────────────────────────────────────
const socials = [
  { icon: SiGithub, href: "https://github.com/rahinhaque", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/rahin-haque-web/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:haquerahin743@gmail.com", label: "Email" },
];

// ── Small reusable footer column wrapper ───────────────────────
function FooterColumn({ dotColor, title, children }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dotColor}`} />
        <h4 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-bg-primary">
      {/* ════════════════════════════════════════════════════════
          PART 1 — CTA Banner
          ════════════════════════════════════════════════════════ */}
      <div className="relative">
        {/* Gradient divider line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-purple-500" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 py-16 text-center sm:px-6 md:py-20"
        >
          {/* Pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-text-secondary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            OPEN TO WORK
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="text-text-primary">
              Have a project in mind?{" "}
            </span>
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-text-secondary">
            I&apos;m available for freelance work and remote opportunities. Drop
            me a message — I respond within 24 hours.
          </p>

          {/* Email button */}
          <a
            href="mailto:haquerahin743@gmail.com"
            className="
              inline-flex items-center gap-2 rounded-xl
              bg-gradient-to-r from-accent to-purple-500
              px-6 py-3 text-sm font-semibold text-white
              shadow-lg shadow-accent/25
              transition-all duration-200
              hover:shadow-accent/40 hover:brightness-110 hover:-translate-y-0.5
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            <Mail className="h-4 w-4" />
            haquerahin743@gmail.com
          </a>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 2 — Footer Content
          ════════════════════════════════════════════════════════ */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* ── Column 1 — Brand ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-purple-500 text-sm font-bold text-white">
                  R
                </div>
                <div>
                  <p className="text-base font-bold text-text-primary">
                    Rahin.
                  </p>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-text-secondary">
                    Frontend Dev
                  </p>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                Junior Frontend Developer building clean, functional web
                interfaces at the intersection of technology, logic, and user
                experience.
              </p>

              {/* Social buttons */}
              <div className="flex gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={
                        s.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={s.label}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-lg border border-border bg-bg-secondary
                        text-text-secondary transition-all duration-200
                        hover:border-accent/40 hover:text-accent
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* ── Column 2 — Quick Links ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <FooterColumn dotColor="bg-accent" title="Quick Links">
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        <span className="text-text-secondary/40 group-hover:text-accent">
                          -
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </motion.div>

            {/* ── Column 3 — What I Do ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <FooterColumn dotColor="bg-purple-500" title="What I Do">
                <ul className="space-y-2.5">
                  {whatIDo.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-text-secondary/40">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </motion.div>

            {/* ── Column 4 — Let's Connect ──────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <FooterColumn dotColor="bg-emerald-500" title="Let's Connect">
                <p className="mb-4 text-sm text-text-secondary">
                  Have a project or just want to say hi? My inbox is always
                  open.
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-text-secondary">
                      Email
                    </p>
                    <a
                      href="mailto:haquerahin743@gmail.com"
                      className="text-sm text-accent transition-colors hover:text-accent-hover"
                    >
                      haquerahin743@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-text-secondary">
                      Location
                    </p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-sm text-text-primary">
                        Bangladesh
                      </span>
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-500">
                        BD
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="
                    mt-5 inline-flex items-center gap-1.5
                    rounded-lg border border-border bg-bg-secondary/60
                    px-4 py-2 text-sm font-semibold text-accent
                    transition-all duration-200
                    hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-0.5
                  "
                >
                  Start a Project
                  <span className="text-text-secondary/60">↗</span>
                </a>
              </FooterColumn>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          PART 3 — Bottom Bar
          ════════════════════════════════════════════════════════ */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Rahin Haque. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg border border-border bg-bg-secondary
              text-text-secondary transition-all duration-200
              hover:border-accent/40 hover:text-accent hover:-translate-y-0.5
            "
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

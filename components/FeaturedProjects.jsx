"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <FolderOpen className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            A selection of projects I&apos;ve built while learning and growing as a
            developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/project"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl border border-border bg-bg-primary/60
              px-6 py-3 text-sm font-semibold text-text-primary
              backdrop-blur-sm
              transition-all duration-200
              hover:border-accent/40 hover:bg-bg-primary
              hover:-translate-y-0.5 hover:shadow-md
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

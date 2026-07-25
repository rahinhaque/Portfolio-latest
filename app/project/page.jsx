"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, SearchX } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const frameworkFilters = [
  { label: "All", value: "all" },
  { label: "Next.js", value: "Next.js" },
  { label: "React", value: "React" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFramework, setActiveFramework] = useState("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "all" ||
        p.category.includes(activeCategory);
      const matchesFramework =
        activeFramework === "all" ||
        p.frameworks.includes(activeFramework);
      return matchesCategory && matchesFramework;
    });
  }, [activeCategory, activeFramework]);

  return (
    <section className="min-h-screen bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <FolderOpen className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Portfolio
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            All Projects
          </h1>
          <p className="mx-auto max-w-xl text-text-secondary">
            Every project I&apos;ve built — from full-stack applications to
            AI experiments and everything in between.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 space-y-4"
        >
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-text-secondary">
              Category:
            </span>
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveCategory(f.value)}
                className={`
                  rounded-full border px-4 py-1.5 text-sm font-medium
                  transition-all duration-200
                  ${
                    activeCategory === f.value
                      ? "border-accent bg-accent text-white shadow-sm shadow-accent/25"
                      : "border-border bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"
                  }
                `}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Framework filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-text-secondary">
              Framework:
            </span>
            {frameworkFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFramework(f.value)}
                className={`
                  rounded-full border px-4 py-1.5 text-sm font-medium
                  transition-all duration-200
                  ${
                    activeFramework === f.value
                      ? "border-accent bg-accent text-white shadow-sm shadow-accent/25"
                      : "border-border bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"
                  }
                `}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-text-secondary">
            Showing{" "}
            <span className="font-semibold text-text-primary">
              {filtered.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-text-primary">
              {projects.length}
            </span>{" "}
            projects
          </p>
        </motion.div>

        {/* Project grid */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-20 text-center"
          >
            <SearchX className="h-12 w-12 text-text-secondary/40" />
            <p className="text-lg font-medium text-text-secondary">
              No projects match the selected filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setActiveFramework("all");
              }}
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

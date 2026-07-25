"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { blogs } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";

/** Sort blogs by date, most recent first. */
const sorted = [...blogs].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Blog
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            Articles &amp; Insights
          </h1>
          <p className="mx-auto max-w-xl text-text-secondary">
            Thoughts on web development, problem-solving, and my journey as a
            MERN stack developer.
          </p>
        </motion.div>

        {/* ── Blog grid ────────────────────────────────── */}
        {sorted.length > 0 ? (
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-text-secondary"
          >
            No articles yet — check back soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}

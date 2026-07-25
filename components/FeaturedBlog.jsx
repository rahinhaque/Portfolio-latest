"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { blogs } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";

/** Show the 2 most recent posts on the homepage. */
const latest = [...blogs]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2);

export default function FeaturedBlog() {
  if (latest.length === 0) return null;

  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Section header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Blog
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            Latest Articles
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Thoughts on web development, problem-solving, and my journey as a
            developer.
          </p>
        </motion.div>

        {/* ── Cards grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((blog, i) => (
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

        {/* ── View All link ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl border border-border bg-bg-secondary/60
              px-6 py-3 text-sm font-semibold text-text-primary
              backdrop-blur-sm
              transition-all duration-200
              hover:border-accent/40 hover:bg-bg-secondary
              hover:-translate-y-0.5 hover:shadow-md
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

/**
 * Format an ISO date string into a human-readable form, e.g. "July 8, 2026".
 */
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * BlogCard — preview card for an externally-published article.
 *
 * Follows the same visual structure as ProjectCard:
 *   image → content (title, description, meta, link)
 */
export default function BlogCard({ blog }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* ── Image area ─────────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 via-bg-secondary to-accent/5">
            <span className="text-sm font-medium text-text-secondary/60">
              {blog.title}
            </span>
          </div>
        )}

        {/* ── Platform badge (top-right corner) ────────── */}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#0A66C2] px-2.5 py-1 text-[11px] font-semibold text-white shadow-md">
          <FaLinkedin className="h-3 w-3" />
          {blog.platform}
        </span>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-bold leading-snug text-text-primary line-clamp-2">
          {blog.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-text-secondary">
          {blog.description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-text-secondary/70">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
        </div>

        {/* Read Article link */}
        <a
          href={blog.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          Read Article
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

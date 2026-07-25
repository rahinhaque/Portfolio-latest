import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/projects";
import { TechBadge } from "@/components/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Rahin Haque`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <section className="min-h-screen bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/project"
          className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Title + short description */}
        <div className="mb-8">
          <h1 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        {project.techStack && (
          <div className="mb-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
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
            Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl
                bg-accent px-5 py-2.5 text-sm font-semibold text-white
                shadow-lg shadow-accent/25 transition-all duration-200
                hover:bg-accent-hover hover:shadow-accent/35 hover:-translate-y-0.5
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
              "
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>

        {/* Cover image */}
        {project.image ? (
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="mb-10 flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/10 via-bg-secondary to-accent/5">
            <span className="text-lg font-medium text-text-secondary/50">
              {project.title}
            </span>
          </div>
        )}

        {/* Full description */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-text-primary">
            About this project
          </h2>
          <p className="leading-relaxed text-text-secondary">
            {project.fullDescription}
          </p>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h2 className="mb-4 text-xl font-bold text-text-primary">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={600}
                    height={340}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

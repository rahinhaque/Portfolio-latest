"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiFirebase,
  SiStripe,
  SiJsonwebtokens,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiLangchain,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiDocker,
  SiRedux,
  SiGraphql,
  SiSupabase,
  SiSocketdotio,
  SiRedis,
  SiSass,
  SiGoogle,
} from "react-icons/si";
import { Workflow, Sparkles, Cpu, ShieldCheck, Zap, Bot, Server } from "lucide-react";

const techDetails = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
    darkColor: "#ffffff",
  },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": {
    icon: SiExpress,
    color: "#000000",
    darkColor: "#ffffff",
  },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#88AA11" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Stripe: { icon: SiStripe, color: "#635BFF" },
  JWT: {
    icon: SiJsonwebtokens,
    color: "#000000",
    darkColor: "#ffffff",
  },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: {
    icon: SiGithub,
    color: "#181717",
    darkColor: "#ffffff",
  },
  LangChain: { icon: SiLangchain, color: "#412991" },
  Vercel: {
    icon: SiVercel,
    color: "#000000",
    darkColor: "#ffffff",
  },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Prisma: { icon: SiPrisma, color: "#2D3748", darkColor: "#E2E8F0" },
  Python: { icon: SiPython, color: "#3776AB" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  "REST API": { icon: Workflow, color: "#FF6B35" },
  "Socket.io": { icon: SiSocketdotio, color: "#010101", darkColor: "#ffffff" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Sass: { icon: SiSass, color: "#CC6699" },
  Gemini: { icon: Sparkles, color: "#1A73E8" },
  "AI/ML": { icon: Cpu, color: "#FF6F00" },
  "Google OAuth": { icon: SiGoogle, color: "#4285F4" },
  "Better Auth": { icon: ShieldCheck, color: "#8B5CF6" },
  FastAPI: { icon: Zap, color: "#009688" },
  CrewAI: { icon: Bot, color: "#FF6F00" },
  "shadcn/ui": { icon: SiReact, color: "#F1F5F9", darkColor: "#0f172a" },
};

function TechBadge({ name }) {
  const tech = techDetails[name];

  if (!tech) {
    return (
      <span className="inline-flex items-center rounded-full border border-border bg-bg-primary/50 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
        {name}
      </span>
    );
  }

  const Icon = tech.icon;

  return (
    <span
      className="skill-badge inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
      style={{
        "--skill-color": tech.color,
        "--skill-dark": tech.darkColor || tech.color,
      }}
    >
      <Icon className="skill-icon h-3 w-3 shrink-0" />
      <span className="whitespace-nowrap text-text-primary">{name}</span>
    </span>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const maxVisibleBadges = 4;
  const visibleTech = project.techStack
    ? project.techStack.slice(0, maxVisibleBadges)
    : [];
  const extraCount = project.techStack
    ? project.techStack.length - maxVisibleBadges
    : 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* Image area */}
      <div className="relative aspect-video overflow-hidden bg-bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-bg-secondary">
            <Server className="h-10 w-10 text-text-secondary/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-text-primary">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tech stack badges */}
        {project.techStack && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {visibleTech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-full bg-bg-primary/50 px-2.5 py-0.5 text-xs font-medium text-text-secondary">
                +{extraCount} more
              </span>
            )}
          </div>
        )}

        {/* View Details link */}
        <Link
          href={`/project/${project.id}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export { TechBadge, techDetails };

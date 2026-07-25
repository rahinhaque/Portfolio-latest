"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiFirebase,
  SiAxios,
  SiReactquery,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiJest,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Workflow, ShieldCheck } from "lucide-react";
import { skillCategories } from "@/lib/skills";
import Marquee from "@/components/ui/marquee";

const iconMap = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiFirebase,
  SiAxios,
  SiReactquery,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPostman,
  VscVscode,
  SiJest,
  Workflow,
  ShieldCheck,
};

function SkillBadge({ skill }) {
  const Icon = iconMap[skill.icon];

  return (
    <div
      className="skill-badge flex items-center gap-2.5 rounded-full border px-4 py-2 transition-all duration-300 hover:scale-[1.05]"
      style={{
        "--skill-color": skill.color,
        "--skill-dark": skill.darkColor || skill.color,
      }}
    >
      <Icon className="skill-icon h-4 w-4 shrink-0" />
      <span className="whitespace-nowrap text-sm font-medium text-text-primary">
        {skill.name}
      </span>
    </div>
  );
}

function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <h3 className="text-lg font-semibold text-text-primary">
          {category.title}
        </h3>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg-primary to-transparent z-10 sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg-primary to-transparent z-10 sm:w-20" />
        <Marquee speed={35} pauseOnHover reverse={index % 2 === 1}>
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-accent">
            <Wrench className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Tech Stack
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-text-primary md:text-4xl">
            Skills &amp; Tools
          </h2>
          <p className="mx-auto max-w-xl text-text-secondary">
            Technologies I use to design, build, and ship full-stack
            applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

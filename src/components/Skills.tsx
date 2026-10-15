"use client";

import { skillCategories } from "@/data/skills";
import { Code, Globe, Server, Database, Brain, Wrench } from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const ACCENT_STYLES = {
  primary: {
    iconColor: "text-primary",
    hoverBorder: "hover:border-primary/40",
    pillBorder: "hover:border-primary/30",
  },
  secondary: {
    iconColor: "text-secondary",
    hoverBorder: "hover:border-secondary/40",
    pillBorder: "hover:border-secondary/30",
  },
  tertiary: {
    iconColor: "text-tertiary",
    hoverBorder: "hover:border-tertiary/40",
    pillBorder: "hover:border-tertiary/30",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-space-3xl bg-surface-container-lowest/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
            02 / TECHNOLOGY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
                Tools I Build With.
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mt-1 max-w-2xl">
                A categorized toolkit across full-stack engineering, distributed backends, and applied AI systems.
              </p>
            </div>
            <span className="font-terminal-tag text-[11px] text-tertiary border border-tertiary/20 bg-tertiary/5 px-3 py-1.5 rounded-lg w-fit font-mono font-medium">
              NO_PERCENTAGE_BARS // REAL_STACK_EXPERIENCE
            </span>
          </div>
        </div>

        {/* Categorized Tech Matrix Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {skillCategories.map((category, index) => {
            const styles = ACCENT_STYLES[category.accent];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-space-lg rounded-2xl bg-surface-container-low border border-white/10 ${styles.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-2.5 mb-space-md">
                  <div className={`${styles.iconColor}`}>
                    {ICON_MAP[category.iconName]}
                  </div>
                  <h3 className="font-headline text-base text-white font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg bg-surface-container font-code-inline text-[13px] text-white border border-white/5 ${styles.pillBorder} transition-colors shadow-sm cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

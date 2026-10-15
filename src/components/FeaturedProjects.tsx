"use client";

import { featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

export default function FeaturedProjects() {
  const heroicProjects = featuredProjects.slice(0, 2);
  const compactProjects = featuredProjects.slice(2);

  return (
    <section id="projects" className="w-full py-space-3xl border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
              03 / SELECTED WORK
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
                Projects That Turn Ideas Into Reality.
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-3xl leading-relaxed">
                A selection of autonomous systems, intelligent copilot architectures, and production backend services built with real engineering constraints.
              </p>
            </div>

            <span className="font-terminal-tag text-[11px] text-outline px-3 py-1.5 rounded-lg border border-white/10 bg-surface-container-low font-mono shrink-0">
              VERIFIED DEPLOYMENTS // 04 SYSTEMS
            </span>
          </div>
        </div>

        {/* Showcase Layout */}
        <div className="flex flex-col gap-space-xl">
          {/* Heroic Project 1: CareerPilot-AI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={heroicProjects[0]} layout="heroic" reverse={false} />
          </motion.div>

          {/* Heroic Project 2: Detoura */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectCard project={heroicProjects[1]} layout="heroic" reverse={true} />
          </motion.div>

          {/* Supporting 2-Column Grid: JanaWaaz & Transaction Engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {compactProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <ProjectCard project={project} layout="compact" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { FeaturedProject } from "@/data/projects";
import { ExternalLink, Code2 } from "lucide-react";
import {
  CareerPilotPreview,
  DetouraPreview,
  JanaWaazPreview,
  TransactionPreview,
} from "./ProjectPreviews";

interface ProjectCardProps {
  project: FeaturedProject;
  layout?: "heroic" | "compact";
  reverse?: boolean;
}

export default function ProjectCard({
  project,
  layout = "heroic",
  reverse = false,
}: ProjectCardProps) {
  const renderPreview = () => {
    switch (project.previewType) {
      case "copilot":
        return <CareerPilotPreview />;
      case "gis":
        return <DetouraPreview />;
      case "civic":
        return <JanaWaazPreview />;
      case "ledger":
        return <TransactionPreview />;
      default:
        return null;
    }
  };

  // Status badge styling
  const statusColors = {
    production: "bg-tertiary/10 border-tertiary/30 text-tertiary",
    alpha: "bg-secondary-container/20 border-secondary/30 text-secondary",
    prototype: "bg-primary-container/20 border-primary/30 text-primary",
    verified: "bg-tertiary/10 border-tertiary/30 text-tertiary",
  }[project.statusType];

  if (layout === "compact") {
    return (
      <div className="rounded-2xl bg-surface-container-low/80 border border-white/10 hover:border-primary/40 transition-all duration-300 p-space-lg flex flex-col justify-between group shadow-xl hover:-translate-y-1">
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <span
              className={`font-terminal-tag text-[10px] px-2.5 py-1 rounded border uppercase font-bold tracking-wider ${statusColors}`}
            >
              {project.categoryTag}
            </span>
            <span className="font-terminal-tag text-[11px] text-outline font-mono">
              {project.statusBadge}
            </span>
          </div>

          <div>
            <h3 className="font-headline text-xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-code-inline text-[11px] px-2 py-0.5 rounded bg-surface-container text-white border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Specific Custom Visual Preview */}
          {renderPreview()}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-sm pt-space-md mt-space-md border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-headline text-xs font-semibold hover:bg-primary-container hover:text-white transition-all shadow-[0_0_16px_rgba(82,141,255,0.3)]"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-white/10 text-white font-headline text-xs font-medium transition-all hover:border-primary/40"
          >
            <Code2 className="w-3.5 h-3.5 text-primary" />
            <span>{project.isSpecificRepo ? "View Repository" : "View Source Profile"}</span>
          </a>
        </div>
      </div>
    );
  }

  // Heroic wide card layout (For CareerPilot-AI & Detoura)
  return (
    <div
      className={`rounded-2xl bg-surface-container-low/80 border border-white/10 ${
        reverse ? "hover:border-secondary/40" : "hover:border-primary/40"
      } transition-all duration-300 p-space-lg lg:p-space-xl relative overflow-hidden group shadow-2xl`}
    >
      {/* Background ambient aura */}
      <div
        className={`absolute ${
          reverse ? "-bottom-24 -left-24 bg-secondary-container/15" : "-top-24 -right-24 bg-primary-container/10"
        } w-96 h-96 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-500`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        {/* Editorial Content */}
        <div
          className={`lg:col-span-6 flex flex-col gap-space-md ${
            reverse ? "order-1 lg:order-2" : "order-1"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`font-terminal-tag text-[11px] px-2.5 py-1 rounded border uppercase font-bold tracking-wider ${statusColors}`}
            >
              {project.categoryTag}
            </span>
            <span className="font-terminal-tag text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-outline tracking-wider font-mono">
              {project.year}
            </span>
            <span className="font-terminal-tag text-[11px] px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/30 text-tertiary tracking-wider font-mono flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              {project.statusBadge}
            </span>
          </div>

          <div>
            <h3
              className={`font-headline text-2xl sm:text-3xl font-bold text-white transition-colors tracking-tight ${
                reverse ? "group-hover:text-secondary" : "group-hover:text-primary"
              }`}
            >
              {project.title}
            </h3>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-code-inline text-xs px-2.5 py-1 rounded-md bg-surface-container text-white border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${
                  reverse
                    ? "bg-secondary text-on-secondary hover:bg-secondary-container hover:text-white"
                    : "bg-primary text-on-primary hover:bg-primary-container hover:text-white"
                } font-headline text-sm font-semibold transition-all shadow-[0_0_20px_rgba(82,141,255,0.35)]`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-white/10 text-white font-headline text-sm font-medium transition-all ${
                reverse ? "hover:border-secondary/40" : "hover:border-primary/40"
              }`}
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span>View Repository</span>
            </a>
          </div>
        </div>

        {/* Custom Visual Preview Mockup */}
        <div
          className={`lg:col-span-6 ${
            reverse ? "order-2 lg:order-1" : "order-2"
          }`}
        >
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}

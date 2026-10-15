"use client";

import { useState, useEffect } from "react";
import { GitHubDataResponse, GitHubRepo } from "@/lib/github";
import { ExternalLink, Bookmark, Star, GitFork, RefreshCw, Code2, AlertTriangle, Layers } from "lucide-react";
import { motion } from "motion/react";

interface GitHubDashboardProps {
  initialData?: GitHubDataResponse;
}

export default function GitHubDashboard({ initialData }: GitHubDashboardProps) {
  const [data, setData] = useState<GitHubDataResponse | null>(initialData || null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"active" | "skeleton" | "schema">("active");

  useEffect(() => {
    if (!initialData) {
      fetch("/api/github")
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((resData: GitHubDataResponse) => {
          setData(resData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load GitHub telemetry", err);
          setError("Failed to load GitHub telemetry");
          setLoading(false);
        });
    }
  }, [initialData]);

  const user = data?.user;
  const repos = data?.repos || [];
  const stats = data?.stats;

  return (
    <section id="github" className="w-full py-space-3xl bg-surface-container-lowest/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
            04 / OPEN SOURCE
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
                Building in the Open.
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mt-1">
                Live developer dashboard tracking public code contributions, language velocity, and repository activity for{" "}
                <a
                  href="https://github.com/ASingha165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-mono"
                >
                  @ASingha165
                </a>
                .
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/ASingha165?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-white/10 text-white font-headline text-xs font-medium transition-all hover:border-primary/40 shrink-0"
              >
                <span>View All Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Metrics Top Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-xl">
          <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10">
            <div className="font-terminal-tag text-[11px] text-outline uppercase font-mono">
              Public Repositories
            </div>
            <div className="font-headline text-3xl text-white font-bold mt-1">
              {stats ? `${stats.totalRepos}` : "5+"}
            </div>
            <div className="font-code-inline text-[11px] text-tertiary mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
              REST API Verified
            </div>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10">
            <div className="font-terminal-tag text-[11px] text-outline uppercase font-mono">
              Active Stack Velocity
            </div>
            <div className="font-headline text-2xl sm:text-3xl text-primary font-bold mt-1">
              Java • Py • TS
            </div>
            <div className="font-code-inline text-[11px] text-on-surface-variant mt-1">
              Full Systems Spectrum
            </div>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10">
            <div className="font-terminal-tag text-[11px] text-outline uppercase font-mono">
              Total Stars Logged
            </div>
            <div className="font-headline text-3xl text-secondary font-bold mt-1">
              {stats ? stats.totalStars : 2}
            </div>
            <div className="font-code-inline text-[11px] text-on-surface-variant mt-1">
              Across Public Codebases
            </div>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10">
            <div className="font-terminal-tag text-[11px] text-outline uppercase font-mono">
              Dominant Language
            </div>
            <div className="font-headline text-2xl sm:text-3xl text-tertiary font-bold mt-1 truncate">
              {stats?.dominantLanguage || "TypeScript / Python"}
            </div>
            <div className="font-code-inline text-[11px] text-outline mt-1 truncate">
              {stats?.languageDistribution?.map((l) => `${l.language}: ${l.percentage}%`).slice(0, 2).join(" | ") || "Java • Py"}
            </div>
          </div>
        </div>

        {/* Language Distribution Ratio Bar */}
        {stats && stats.languageDistribution.length > 0 && (
          <div className="mb-space-xl p-space-md rounded-xl bg-surface-container-low border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-terminal-tag text-xs text-on-surface-variant mb-2 gap-1">
              <span>Language Distribution Analysis (From Verified Repositories)</span>
              <span className="font-mono text-white text-[11px]">
                {stats.languageDistribution.map((l) => `${l.language} ${l.percentage}%`).join(" • ")}
              </span>
            </div>
            <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-surface-container-high">
              {stats.languageDistribution.map((l) => (
                <div
                  key={l.language}
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${l.percentage}%`,
                    backgroundColor: l.color,
                  }}
                  title={`${l.language}: ${l.percentage}% (${l.count} repos)`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Interactive Tabbed Switcher for Developer Dashboard Simulation */}
        <div className="flex items-center gap-2 mb-space-md border-b border-white/10 pb-3" id="github-tabs">
          <button
            type="button"
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 rounded-lg font-code-inline text-xs transition-all ${
              activeTab === "active"
                ? "bg-surface-container-high text-white border border-primary/30 font-semibold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            Active Repositories ({repos.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("skeleton")}
            className={`px-4 py-2 rounded-lg font-code-inline text-xs transition-all ${
              activeTab === "skeleton"
                ? "bg-surface-container-high text-white border border-secondary/30 font-semibold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            API Skeleton State
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2 rounded-lg font-code-inline text-xs transition-all ${
              activeTab === "schema"
                ? "bg-surface-container-high text-white border border-tertiary/30 font-semibold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            REST Schema View
          </button>
        </div>

        {/* Tab View 1: Active Repository Cards */}
        {activeTab === "active" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {loading ? (
              // Loading State Skeletons
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="p-space-md rounded-xl bg-surface-container-low border border-white/5 animate-pulse flex flex-col gap-3"
                >
                  <div className="h-5 bg-white/10 rounded w-1/2" />
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                  <div className="h-4 bg-white/10 rounded w-1/4 mt-4" />
                </div>
              ))
            ) : repos.length === 0 ? (
              <div className="col-span-2 p-8 text-center bg-surface-container-low rounded-xl border border-white/10 text-on-surface-variant font-mono text-sm">
                No public repositories retrieved. Check connection.
              </div>
            ) : (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-space-md rounded-xl bg-surface-container-low border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-md hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-white font-headline text-base font-semibold group-hover:text-primary transition-colors">
                        <Bookmark className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{repo.fullName}</span>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded font-mono text-outline border border-white/10">
                        Public
                      </span>
                    </div>

                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4 min-h-[36px]">
                      {repo.description || "Open source software project repository."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 font-code-inline text-[11px] text-outline">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            repo.language === "Java"
                              ? "#528dff"
                              : repo.language === "Python"
                              ? "#8B5CF6"
                              : repo.language === "TypeScript"
                              ? "#27e0a9"
                              : "#ff5722",
                        }}
                      />
                      <span className="text-white">{repo.language || "Multi-language"}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-primary" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-outline" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        )}

        {/* Tab View 2: Simulated Skeleton Loaders */}
        {activeTab === "skeleton" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-space-md rounded-xl bg-surface-container-low border border-white/5 animate-pulse flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="h-5 bg-white/10 rounded w-1/2" />
                  <div className="h-4 bg-white/5 rounded w-16" />
                </div>
                <div className="h-4 bg-white/5 rounded w-3/4" />
                <div className="h-4 bg-white/5 rounded w-2/3" />
                <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-2">
                  <div className="h-4 bg-white/10 rounded w-24" />
                  <div className="h-4 bg-white/10 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab View 3: REST Schema Simulator View */}
        {activeTab === "schema" && (
          <div className="rounded-xl bg-surface-container-lowest p-space-md border border-white/10 font-code-block text-[12px] text-on-surface-variant overflow-x-auto">
            <p className="text-tertiary">
              // GET https://api.github.com/users/ASingha165/repos?sort=updated&amp;per_page=100
            </p>
            <pre className="mt-2 text-outline-variant leading-relaxed">
              {JSON.stringify(
                {
                  status: 200,
                  user: "ASingha165",
                  endpoint: "v3_rest_ready",
                  isLive: data?.isLive ?? true,
                  stats: stats || {},
                  sampleRepos: repos.slice(0, 3).map((r) => ({
                    id: r.id,
                    name: r.name,
                    language: r.language,
                    stars: r.stars,
                    forks: r.forks,
                    url: r.htmlUrl,
                  })),
                },
                null,
                2
              )}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}

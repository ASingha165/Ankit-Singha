"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Terminal, Brain, Rocket, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="w-full py-space-3xl relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Tag Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
            01 / ABOUT
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
            Curiosity Builds. Engineering Makes It Real.
          </h2>
        </div>

        {/* Two-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Editorial Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col gap-space-md"
          >
            {/* Identity Badge */}
            <div className="p-space-md rounded-2xl bg-surface-container-low border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-[0_0_24px_rgba(82,141,255,0.12)] flex flex-col sm:flex-row items-center gap-space-md group">
              <div className="relative w-20 h-20 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 p-1 shrink-0 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-[0_0_16px_rgba(82,141,255,0.25)]">
                <Image
                  src={siteConfig.avatarUrl}
                  alt="Ankit Singha Profile"
                  fill
                  className="object-cover object-top rounded-xl"
                  sizes="80px"
                />
              </div>

              <div className="flex flex-col gap-1 w-full text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-between gap-2">
                  <h3 className="font-headline text-base text-white font-semibold">
                    {siteConfig.name}
                  </h3>
                  <span className="font-terminal-tag text-[10px] px-2 py-0.5 rounded bg-primary-container/20 text-primary border border-primary/30 font-bold hidden sm:inline">
                    VERIFIED DEVELOPER
                  </span>
                </div>
                <span className="font-terminal-tag text-[11px] text-tertiary tracking-wider font-semibold">
                  CS UNDERGRADUATE // AI &amp; MACHINE LEARNING
                </span>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Focused on production-ready AI pipelines, distributed backend microservices, and practical systems engineering.
                </p>
              </div>
            </div>

            <p className="font-body text-body-lg text-on-surface leading-relaxed">
              I am a Computer Science and Engineering undergraduate with a deliberate focus in Artificial Intelligence and Machine Learning. My approach sits squarely at the intersection of{" "}
              <span className="text-white font-semibold">high-performance backend engineering</span> and{" "}
              <span className="text-primary font-semibold">pragmatic, production-ready machine learning</span>.
            </p>

            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              I do not build technology merely to demonstrate theoretical concepts. Instead, I formulate architectures that address verified constraints: mitigating tourism overpopulation via geospatial heuristics, orchestrating real-time AI career advisory copilot instances, and structuring high-throughput transaction backends with strict reliability.
            </p>

            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Whether architecting modular Spring Boot microservices, fine-tuning retrieval pipelines, or designing ergonomic web interfaces in Next.js, my dedication remains consistent: craftsmanship, clean abstraction, and measurable real-world performance.
            </p>

            {/* Key Quantitative Metric Indicators */}
            <div className="grid grid-cols-3 gap-space-sm pt-space-md border-t border-white/10 mt-space-sm">
              <div className="flex flex-col">
                <span className="font-headline text-3xl sm:text-4xl text-white font-bold">04+</span>
                <span className="font-terminal-tag text-[11px] text-outline uppercase tracking-wider mt-1">
                  Featured Systems
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl sm:text-4xl text-tertiary font-bold">100%</span>
                <span className="font-terminal-tag text-[11px] text-outline uppercase tracking-wider mt-1">
                  Open Source Ethos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-3xl sm:text-4xl text-primary font-bold">AI/ML</span>
                <span className="font-terminal-tag text-[11px] text-outline uppercase tracking-wider mt-1">
                  Specialization
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right 3 Compact High-Fidelity Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-space-md justify-between"
          >
            {/* Card 1 */}
            <div className="p-space-lg rounded-xl bg-surface-container-low border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 border border-primary-container/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline text-base text-white font-semibold">
                      Software Engineering
                    </h3>
                    <span className="font-terminal-tag text-[11px] text-outline font-mono">01</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Building reliable applications, structured RESTful APIs, and backend architectures designed for scalability, testability, and enterprise resilience with Spring Boot and Java.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-space-lg rounded-xl bg-surface-container-low border border-white/10 hover:border-secondary/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-secondary-container/20 border border-secondary/30 flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline text-base text-white font-semibold">
                      Artificial Intelligence
                    </h3>
                    <span className="font-terminal-tag text-[11px] text-outline font-mono">02</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Exploring intelligent applications, computer vision, vector embeddings, and algorithmic data modeling with practical utility for real users and decision support.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-space-lg rounded-xl bg-surface-container-low border border-white/10 hover:border-tertiary/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-start gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 border border-tertiary/30 flex items-center justify-center text-tertiary shrink-0 group-hover:scale-105 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline text-base text-white font-semibold">
                      Building in Public
                    </h3>
                    <span className="font-terminal-tag text-[11px] text-outline font-mono">03</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Active participant in engineering hackathons and Google student programs, sharing open-source codebases, testing new toolchains, and continuously iterating in transparent loops.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

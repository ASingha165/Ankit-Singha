"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, FileText, Code2, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-screen flex items-center justify-center pt-28 pb-space-2xl bg-surface-container-lowest"
    >
      {/* Subtle ambient radial glows for deep spatial depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary-container/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-secondary-container/15 blur-[140px] pointer-events-none" />

      {/* Subtle architectural grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-gutter-sm lg:px-gutter w-full py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Commanding Editorial Typography & Action Core */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-space-md"
          >
            {/* Razor-sharp Minimal Status / Monospace Telemetry Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-surface-container-high/60 border border-white/10 backdrop-blur-md w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              <span className="font-terminal-tag text-[11px] text-tertiary tracking-widest uppercase font-semibold">
                {siteConfig.statusBadge}
              </span>
              <span className="text-outline-variant font-code-inline text-[11px]">/</span>
              <span className="font-terminal-tag text-[11px] text-on-surface-variant tracking-wider uppercase font-medium hidden sm:inline">
                {siteConfig.subBadge}
              </span>
            </div>

            {/* Dominant Editorial Headline */}
            <h1 className="font-headline font-bold text-4xl sm:text-6xl lg:text-[72px] tracking-tight text-white leading-[1.08]">
              {siteConfig.headline.line1} <br className="hidden sm:inline" />
              {siteConfig.headline.line2Prefix}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-container to-secondary">
                {siteConfig.headline.line2Gradient}
              </span>
            </h1>

            {/* Refined Supporting Paragraph */}
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I&apos;m <span className="text-white font-semibold">{siteConfig.name}</span>, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I build software applications, intelligent systems, and technology-driven solutions that turn ideas into practical products.
            </p>

            {/* Action Buttons with High-Contrast Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-headline text-sm font-semibold shadow-[0_0_24px_rgba(82,141,255,0.4)] hover:shadow-[0_0_36px_rgba(82,141,255,0.65)] hover:bg-primary-container hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.resumeUrl}
                download="Ankit_Singha_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-high/80 hover:bg-surface-container-highest border border-white/10 text-on-surface font-headline text-sm font-medium backdrop-blur-md transition-all hover:border-primary/40 group"
              >
                <FileText className="w-4 h-4 text-primary group-hover:scale-105 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Minimal Monospace Social Links Bar */}
            <div className="flex items-center gap-space-md pt-space-sm border-t border-white/5 mt-space-xs">
              <span className="font-terminal-tag text-[11px] uppercase text-outline tracking-wider">
                Telemetry:
              </span>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors group font-code-inline text-[12px]"
              >
                <Code2 className="w-3.5 h-3.5 text-outline group-hover:text-primary transition-colors" />
                <span className="group-hover:underline">GitHub</span>
              </a>
              <span className="text-outline-variant font-code-inline text-[11px]">•</span>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors group font-code-inline text-[12px]"
              >
                <Linkedin className="w-3.5 h-3.5 text-outline group-hover:text-secondary transition-colors" />
                <span className="group-hover:underline">LinkedIn</span>
              </a>
              <span className="text-outline-variant font-code-inline text-[11px]">•</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-white transition-colors group font-code-inline text-[12px]"
              >
                <Mail className="w-3.5 h-3.5 text-outline group-hover:text-tertiary transition-colors" />
                <span className="group-hover:underline">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture & Abstract AI Neural Topology Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col gap-space-md items-center"
          >
            {/* Real Official Profile Picture Card */}
            <div className="w-full rounded-2xl bg-surface-container-low/85 border border-primary/30 p-space-md shadow-[0_0_36px_rgba(82,141,255,0.18)] backdrop-blur-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-terminal-tag text-[10px] text-white tracking-widest uppercase font-semibold">
                    ANKIT SINGHA // OFFICIAL PROFILE
                  </span>
                </div>
                <span className="font-terminal-tag text-[10px] text-tertiary px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  IDENTITY VERIFIED
                </span>
              </div>

              {/* Headshot Portrait Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl bg-surface-container-lowest border border-white/10 overflow-hidden flex items-center justify-center p-3 my-2 group-hover:border-primary/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15 pointer-events-none" />

                {/* Tactical Corner Reticles */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/60" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/60" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full px-2">
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-primary via-primary-container to-secondary p-[2.5px] shadow-[0_0_28px_rgba(82,141,255,0.45)] shrink-0 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full rounded-full bg-surface-container-lowest overflow-hidden relative">
                      <Image
                        src={siteConfig.avatarUrl}
                        alt="Ankit Singha - Personal Profile"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 112px, 120px"
                        priority
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <h2 className="font-headline text-base text-white font-bold tracking-wide">
                        {siteConfig.name}
                      </h2>
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    </div>
                    <span className="font-terminal-tag text-[11px] text-on-surface-variant font-mono mt-0.5">
                      CS Undergrad • AI &amp; Software Systems
                    </span>
                    <span className="font-code-inline text-[11px] text-tertiary mt-1">
                      {siteConfig.university}
                    </span>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high/90 border border-primary/30 text-primary text-[10px] font-code-inline w-fit mx-auto sm:mx-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      <span>Kolkata, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-white/5 font-code-inline text-[11px] text-on-surface-variant">
                <span>BRANDING: AUTHENTIC</span>
                <span className="text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  CORE TELEMETRY LINKED
                </span>
              </div>
            </div>

            {/* Abstract AI Neural Topology & Synapse Matrix Visual */}
            <div className="relative w-full rounded-2xl bg-surface-container-low/60 backdrop-blur-xl border border-white/10 p-space-md shadow-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="font-code-inline text-[11px] text-white tracking-wider">
                    SYNAPSE_MATRIX // TENSOR_MAP
                  </span>
                </div>
                <div className="flex items-center gap-2 font-terminal-tag text-[10px] text-tertiary">
                  <span className="px-1.5 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">
                    KERNEL: ACTIVE
                  </span>
                </div>
              </div>

              {/* Neural Mesh SVG Canvas */}
              <div className="relative w-full h-40 flex items-center justify-center my-1">
                <svg
                  className="w-full h-full text-primary-container/40"
                  fill="none"
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="edgeGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#afc6ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#27e0a9" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="edgeGrad2" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#528dff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d0bcff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  <circle cx="200" cy="100" r="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" strokeWidth="1" />
                  <circle cx="200" cy="100" r="45" stroke="rgba(82,141,255,0.15)" strokeWidth="1" />
                  <line stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" x1="30" x2="370" y1="100" y2="100" />
                  <line stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" x1="200" x2="200" y1="15" y2="185" />

                  <path d="M 60 130 Q 200 10 340 130" fill="none" stroke="url(#edgeGrad2)" strokeWidth="1.5" />
                  <path d="M 70 70 Q 200 190 330 70" fill="none" opacity="0.5" stroke="url(#edgeGrad1)" strokeWidth="1.2" />

                  <line stroke="currentColor" strokeDasharray="3 3" x1="60" x2="130" y1="100" y2="55" />
                  <line stroke="currentColor" x1="60" x2="130" y1="100" y2="145" />
                  <line stroke="url(#edgeGrad1)" strokeWidth="2" x1="130" x2="200" y1="55" y2="100" />
                  <line stroke="currentColor" x1="130" x2="200" y1="145" y2="100" />
                  <line stroke="url(#edgeGrad2)" strokeWidth="2" x1="200" x2="270" y1="100" y2="45" />
                  <line stroke="currentColor" x1="200" x2="270" y1="100" y2="155" />
                  <line stroke="currentColor" x1="270" x2="340" y1="45" y2="100" />

                  {/* Core & Node Spheres */}
                  <circle cx="60" cy="100" fill="#121317" r="7" stroke="#afc6ff" strokeWidth="2" />
                  <circle cx="60" cy="100" fill="#afc6ff" r="3" />
                  <circle cx="130" cy="55" fill="#121317" r="6" stroke="#528dff" strokeWidth="1.5" />
                  <circle cx="130" cy="55" fill="#528dff" r="2.5" />
                  <circle cx="130" cy="145" fill="#121317" r="6" stroke="#528dff" strokeWidth="1.5" />
                  <circle cx="130" cy="145" fill="#528dff" r="2.5" />
                  <circle cx="200" cy="100" fill="#121317" r="10" stroke="#27e0a9" strokeWidth="2.5" />
                  <circle cx="200" cy="100" fill="#27e0a9" r="4.5" />
                  <circle cx="200" cy="100" fill="none" opacity="0.6" r="16" stroke="#27e0a9" strokeDasharray="2 3" strokeWidth="1" />
                  <circle cx="270" cy="45" fill="#121317" r="6" stroke="#d0bcff" strokeWidth="1.5" />
                  <circle cx="270" cy="45" fill="#d0bcff" r="2.5" />
                  <circle cx="270" cy="155" fill="#121317" r="6" stroke="#d0bcff" strokeWidth="1.5" />
                  <circle cx="270" cy="155" fill="#d0bcff" r="2.5" />
                  <circle cx="340" cy="100" fill="#121317" r="8" stroke="#27e0a9" strokeWidth="2" />
                  <circle cx="340" cy="100" fill="#27e0a9" r="3.5" />
                </svg>
              </div>

              {/* Real-time Telemetry Status Nodes */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 font-code-block text-[11px]">
                <div className="flex flex-col">
                  <span className="text-outline text-[10px] font-terminal-tag">NODE_WEIGHT</span>
                  <span className="text-tertiary font-semibold">0.984</span>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-outline text-[10px] font-terminal-tag">LATENCY</span>
                  <span className="text-primary font-semibold">12ms</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-outline text-[10px] font-terminal-tag">INTEGRATION</span>
                  <span className="text-secondary font-semibold">SE × AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

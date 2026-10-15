"use client";

import React from "react";
import { Brain, MapPin, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight, Satellite, Wallet } from "lucide-react";

export function CareerPilotPreview() {
  return (
    <div className="w-full rounded-xl bg-surface-container-lowest border border-white/10 shadow-2xl p-space-md flex flex-col gap-3 font-mono text-[12px] group-hover:border-primary/30 transition-all duration-300">
      {/* Mock Terminal / Browser Chrome */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary/70" />
          <span className="text-outline text-[11px] ml-2 font-code-inline">dashboard.careerpilot.ai</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-outline">
          <span className="text-tertiary font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
            kernel: active
          </span>
          <span className="hidden sm:inline">cluster: vercel-edge</span>
          <span className="text-primary font-medium">latency: 18ms</span>
        </div>
      </div>

      {/* Copilot Telemetry Prompt Dialog */}
      <div className="p-2.5 rounded-lg bg-surface-container-high/60 border border-primary/20 flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-primary font-bold flex items-center gap-1.5 font-sans">
            <Brain className="w-4 h-4 text-primary" />
            AI COPILOT TELEMETRY
          </span>
          <span className="text-tertiary text-[10px] px-1.5 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">
            MATCH: 94.6%
          </span>
        </div>
        <p className="text-white font-sans text-[12px] leading-snug">
          Vector query matching:{" "}
          <span className="text-primary font-mono font-medium">Senior Software Engineer (AI Systems)</span>
        </p>
        <div className="flex items-center gap-2 text-[10px] text-on-surface-variant font-code-inline">
          <span className="text-tertiary">›</span> 4 High-leverage gap modules generated
          <span className="text-outline-variant">•</span>
          <span className="text-secondary">Embedding dist: 0.124</span>
        </div>
      </div>

      {/* Skill Competency Matrix / Progress Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="p-2.5 rounded-lg bg-surface-container-low border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-outline mb-1">
            <span>SYSTEM DESIGN</span>
            <span className="text-primary font-bold">92%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[92%]" />
          </div>
          <span className="text-[9px] text-tertiary mt-1.5 block">Distributed Caches</span>
        </div>

        <div className="p-2.5 rounded-lg bg-surface-container-low border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-outline mb-1">
            <span>ALGORITHMS</span>
            <span className="text-secondary font-bold">88%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[88%]" />
          </div>
          <span className="text-[9px] text-secondary mt-1.5 block">Graph &amp; DP Mastery</span>
        </div>

        <div className="p-2.5 rounded-lg bg-surface-container-low border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-outline mb-1">
            <span>AI/ML PIPELINES</span>
            <span className="text-tertiary font-bold">95%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-[95%]" />
          </div>
          <span className="text-[9px] text-tertiary mt-1.5 block">RAG &amp; Fine-tuning</span>
        </div>
      </div>

      {/* Active Milestone Path Nodes */}
      <div className="p-2.5 rounded-lg bg-surface-container-low border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="text-white text-[11px] font-sans font-medium">Adaptive Mock Interview Mode: Active</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold">
          PROMPT #08 READY
        </span>
      </div>
    </div>
  );
}

export function DetouraPreview() {
  return (
    <div className="w-full rounded-xl bg-surface-container-lowest border border-white/10 shadow-2xl p-space-md flex flex-col gap-3 font-mono text-[12px] group-hover:border-secondary/30 transition-all duration-300">
      {/* HUD Coordinate Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Satellite className="w-4 h-4 text-secondary" />
          <span className="text-white text-[11px] font-semibold tracking-wider">
            GEO_SPATIAL // LOAD_ROUTER
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-tertiary font-bold">
          <span className="px-1.5 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">
            DIVERSION: +42.8%
          </span>
        </div>
      </div>

      {/* GIS Visual Map SVG Canvas */}
      <div className="relative w-full h-40 rounded-lg bg-surface-container-high/40 border border-white/5 overflow-hidden flex items-center justify-center p-2">
        <svg className="w-full h-full" fill="none" viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="50%" cy="50%" id="saturatedZone" r="50%">
              <stop offset="0%" stopColor="#ffb4ab" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffb4ab" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" id="optimalZone" r="50%">
              <stop offset="0%" stopColor="#27e0a9" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#27e0a9" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="routeVector" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#ffb4ab" />
              <stop offset="50%" stopColor="#d0bcff" />
              <stop offset="100%" stopColor="#27e0a9" />
            </linearGradient>
          </defs>

          {/* Topo Contour Grid Lines */}
          <path d="M 10 30 Q 90 10 180 40 T 360 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M 10 80 Q 110 50 200 90 T 370 70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M 10 130 Q 120 110 220 140 T 370 120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* Heat Intensity Zones */}
          <circle cx="100" cy="80" fill="url(#saturatedZone)" r="48" />
          <circle cx="280" cy="65" fill="url(#optimalZone)" r="44" />

          {/* Alternate Route Vector Arcs */}
          <path d="M 100 80 Q 190 20 280 65" fill="none" stroke="url(#routeVector)" strokeDasharray="4 3" strokeWidth="2" />
          <path d="M 100 80 Q 180 145 280 65" fill="none" opacity="0.5" stroke="#27e0a9" strokeDasharray="2 3" strokeWidth="1.5" />

          {/* Saturated Node */}
          <circle cx="100" cy="80" fill="#121317" r="8" stroke="#ffb4ab" strokeWidth="2" />
          <circle cx="100" cy="80" fill="#ffb4ab" r="3.5" />
          <text fill="#ffb4ab" fontFamily="JetBrains Mono" fontSize="8" x="55" y="105">OVERFLOW (96%)</text>

          {/* Intermediate Waypoint Nodes */}
          <circle cx="190" cy="42" fill="#121317" r="5" stroke="#d0bcff" strokeWidth="1.5" />
          <circle cx="190" cy="42" fill="#d0bcff" r="2" />
          <text fill="#c2c6d6" fontFamily="JetBrains Mono" fontSize="7" x="165" y="32">WAYPOINT #B12</text>

          {/* Recommended Alt Node */}
          <circle cx="280" cy="65" fill="#121317" r="10" stroke="#27e0a9" strokeWidth="2.5" />
          <circle cx="280" cy="65" fill="#27e0a9" r="4" />
          <circle cx="280" cy="65" fill="none" opacity="0.6" r="16" stroke="#27e0a9" strokeDasharray="2 2" strokeWidth="1" />
          <text fill="#27e0a9" fontFamily="JetBrains Mono" fontSize="8" x="235" y="94">DETOUR CORRIDOR (32%)</text>
        </svg>
      </div>

      {/* Telemetry Overlay Status */}
      <div className="p-2.5 rounded-lg bg-surface-container-low border border-white/5 flex flex-col gap-1">
        <div className="flex items-center justify-between text-[10px] text-outline">
          <span>COORDINATES: LAT 27.502° N | LNG 88.512° E</span>
          <span className="text-secondary font-mono">DBSCAN eps=0.04</span>
        </div>
        <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/5">
          <span className="text-error font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-error" />
            Cluster Anomaly: +310% Peak
          </span>
          <span className="text-tertiary font-semibold flex items-center gap-1 font-sans text-xs">
            <ArrowRight className="w-3.5 h-3.5 text-tertiary" />
            4 Eco-Corridors Unlocked
          </span>
        </div>
      </div>
    </div>
  );
}

export function JanaWaazPreview() {
  return (
    <div className="w-full rounded-xl bg-surface-container-lowest p-space-sm border border-white/10 font-mono text-[11px] flex flex-col gap-2 mt-2">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
        <span className="text-tertiary flex items-center gap-1.5 font-semibold font-sans">
          <AlertCircle className="w-3.5 h-3.5 text-tertiary" />
          INCIDENT TRIAGE DISPATCH
        </span>
        <span className="text-outline">#JA-8419</span>
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-white font-sans">Road Infrastructure • Pothole Hazard</span>
        <span className="px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-bold text-[10px]">
          DISPATCHED
        </span>
      </div>
      <div className="flex items-center justify-between text-[10px] text-outline pt-1">
        <span>GEO-HASH: 8f283082813ffff (VERIFIED)</span>
        <span className="text-tertiary font-semibold">SLA: &lt; 24h</span>
      </div>
    </div>
  );
}

export function TransactionPreview() {
  return (
    <div className="w-full rounded-xl bg-surface-container-lowest p-space-sm border border-white/10 font-mono text-[11px] flex flex-col gap-1.5 mt-2">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-[10px]">
        <span className="text-primary flex items-center gap-1 font-semibold font-sans">
          <Wallet className="w-3.5 h-3.5 text-primary" />
          LEDGER ENGINE // SERIALIZABLE
        </span>
        <span className="text-tertiary font-mono">EXEC: 0.84ms</span>
      </div>
      <div className="flex items-center justify-between text-white text-[11px]">
        <span className="text-outline-variant font-mono">[TX_84102] USD → EUR</span>
        <span className="text-tertiary font-bold">+ €4,250.00 SETTLED</span>
      </div>
      <div className="flex items-center justify-between text-[10px] text-outline pt-1">
        <span className="text-outline truncate max-w-[200px]">HASH: 9e83a...20f1b (VALID)</span>
        <span className="text-tertiary font-semibold">ROLLBACK: 0.00%</span>
      </div>
    </div>
  );
}

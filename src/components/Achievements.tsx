"use client";

import { useState } from "react";
import Image from "next/image";
import { milestones, Milestone } from "@/data/achievements";
import { Award, CheckCircle, Zap, Cpu, GraduationCap, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ICON_MAP = {
  award: <Award className="w-4 h-4" />,
  verified: <CheckCircle className="w-4 h-4" />,
  bolt: <Zap className="w-4 h-4" />,
  schema: <Cpu className="w-4 h-4" />,
  school: <GraduationCap className="w-4 h-4" />,
};

const TAG_STYLES = {
  primary: "bg-primary-container/20 border-primary/30 text-primary",
  secondary: "bg-secondary-container/20 border-secondary/30 text-secondary",
  tertiary: "bg-tertiary/10 border-tertiary/30 text-tertiary",
  white: "bg-surface-container-highest border-white/10 text-white",
};

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<Milestone | null>(null);

  return (
    <section id="milestones" className="w-full py-space-3xl border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
            05 / MILESTONES
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
            Learning by Building.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl">
            Key engineering checkpoints, project deployments, Google ambassador trials, and technical milestones.
          </p>
        </div>

        {/* Vertical Interactive Glowing Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-space-xl">
          {milestones.map((item, index) => {
            const isCertificate = Boolean(item.certificateImage);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Glowing Node Indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:border-tertiary group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(82,141,255,0.6)]" />

                <div className="p-space-lg rounded-2xl bg-surface-container-low border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-space-xs">
                    <span
                      className={`font-terminal-tag text-[10px] px-2.5 py-0.5 rounded border font-bold uppercase tracking-wider ${
                        TAG_STYLES[item.tagColor]
                      }`}
                    >
                      {item.categoryTag}
                    </span>
                    <span className="font-code-inline text-[11px] text-outline font-mono">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights / Certificate CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs font-code-inline text-tertiary">
                      {ICON_MAP[item.highlightIcon]}
                      <span>{item.highlight}</span>
                    </div>

                    {isCertificate && (
                      <button
                        type="button"
                        onClick={() => setSelectedCertificate(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-primary/30 text-primary font-headline text-xs font-semibold transition-all hover:shadow-[0_0_12px_rgba(82,141,255,0.3)]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal Overlay */}
      <AnimatePresence>
        {selectedCertificate && selectedCertificate.certificateImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-surface-container-low border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-terminal-tag text-[10px] text-tertiary font-mono uppercase">
                    AUTHENTIC VERIFIED CREDENTIAL
                  </span>
                  <h4 className="font-headline text-base sm:text-lg text-white font-bold">
                    {selectedCertificate.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <Image
                  src={selectedCertificate.certificateImage}
                  alt={`${selectedCertificate.title} Certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-outline pt-2 border-t border-white/5">
                <span>Issuer: {selectedCertificate.issuer || "Official Organization"}</span>
                <span className="text-tertiary flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-tertiary" />
                  Cryptographic / Physical Verification: Authentic
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

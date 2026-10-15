"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import {
  certifications,
  Certification,
  CertificationCategory,
  certificationCategories,
} from "@/data/certifications";
import { milestones, Milestone } from "@/data/achievements";
import {
  Award,
  CheckCircle,
  ExternalLink,
  Eye,
  X,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Layers,
  Calendar,
  Building2,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ActiveTab = CertificationCategory | "All" | "Milestones";

const CATEGORY_STYLES: Record<
  CertificationCategory,
  { badge: string; border: string; glow: string }
> = {
  "Professional Certification": {
    badge: "bg-primary-container/20 border-primary/40 text-primary",
    border: "hover:border-primary/50",
    glow: "shadow-[0_0_15px_rgba(82,141,255,0.15)]",
  },
  "Technical Training & Bootcamp": {
    badge: "bg-tertiary/15 border-tertiary/40 text-tertiary",
    border: "hover:border-tertiary/50",
    glow: "shadow-[0_0_15px_rgba(39,224,169,0.15)]",
  },
  "Hackathon & Participation": {
    badge: "bg-secondary-container/25 border-secondary/40 text-secondary",
    border: "hover:border-secondary/50",
    glow: "shadow-[0_0_15px_rgba(208,188,255,0.15)]",
  },
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("All");
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | Milestone | null>(
    null
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };
    if (selectedCertificate) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  // Priority-based sorting:
  // Category 1: Professional Certification
  // Category 2: Technical Training & Bootcamp
  // Category 3: Hackathon & Participation
  const CATEGORY_ORDER: Record<CertificationCategory, number> = {
    "Professional Certification": 1,
    "Technical Training & Bootcamp": 2,
    "Hackathon & Participation": 3,
  };

  const sortedCertifications = [...certifications].sort((a, b) => {
    const orderDiff = CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category];
    if (orderDiff !== 0) return orderDiff;
    return b.issueDate.localeCompare(a.issueDate);
  });

  const filteredCertifications =
    activeTab === "All"
      ? sortedCertifications
      : activeTab === "Milestones"
      ? []
      : sortedCertifications.filter((cert) => cert.category === activeTab);

  const professionalCount = certifications.filter(
    (c) => c.category === "Professional Certification"
  ).length;
  const bootcampCount = certifications.filter(
    (c) => c.category === "Technical Training & Bootcamp"
  ).length;
  const hackathonCount = certifications.filter(
    (c) => c.category === "Hackathon & Participation"
  ).length;

  const modalImage = selectedCertificate
    ? "image" in selectedCertificate
      ? selectedCertificate.image
      : "certificateImage" in selectedCertificate
      ? selectedCertificate.certificateImage
      : undefined
    : undefined;

  const modalIssuer = selectedCertificate
    ? "issuingOrganization" in selectedCertificate
      ? selectedCertificate.issuingOrganization
      : "issuer" in selectedCertificate && selectedCertificate.issuer
      ? selectedCertificate.issuer
      : "Official Organization"
    : "Official Organization";

  return (
    <section
      id="milestones"
      className="w-full py-space-3xl border-t border-white/5 relative bg-surface/50"
    >
      {/* Anchor for direct #certifications navigation */}
      <div id="certifications" className="absolute -top-20 left-0" />

      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              05 / CERTIFICATIONS &amp; CREDENTIALS
            </span>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
              Verified Credentials &amp; Certifications.
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              Curated technical qualifications, verified Google product trials, hands-on AI bootcamps, and competitive hackathon distinctions.
            </p>
          </div>

          {/* LinkedIn Integration CTA Button */}
          <div className="flex items-center gap-space-sm shrink-0">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-white/10 hover:border-primary/40 text-white font-headline text-xs font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(82,141,255,0.25)] transition-all group"
            >
              <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>View All Certifications on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-outline group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Category Navigation Bar & Statistics */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-xl p-2 rounded-2xl bg-surface-container-low border border-white/10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {certificationCategories.map((cat) => {
              const isActive = activeTab === cat.key;
              const count =
                cat.key === "All"
                  ? certifications.length
                  : cat.key === "Professional Certification"
                  ? professionalCount
                  : cat.key === "Technical Training & Bootcamp"
                  ? bootcampCount
                  : hackathonCount;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-3.5 py-2 rounded-xl font-headline text-xs font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-on-primary font-semibold shadow-[0_0_14px_rgba(82,141,255,0.35)]"
                      : "text-on-surface-variant hover:text-white hover:bg-surface-container-high"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-on-primary/20 text-on-primary font-bold"
                        : "bg-surface-container-highest text-outline"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Optional Engineering Milestones Sub-view */}
            <button
              type="button"
              onClick={() => setActiveTab("Milestones")}
              className={`px-3.5 py-2 rounded-xl font-headline text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === "Milestones"
                  ? "bg-secondary text-on-secondary font-semibold shadow-[0_0_14px_rgba(208,188,255,0.35)]"
                  : "text-on-surface-variant hover:text-white hover:bg-surface-container-high"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Engineering Checkpoints</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full font-mono bg-surface-container-highest text-outline">
                {milestones.length}
              </span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-tertiary px-3 py-1 rounded-lg bg-tertiary/10 border border-tertiary/20">
            <CheckCircle className="w-3 h-3 text-tertiary" />
            <span>STANDALONE CERTIFICATION ARCHITECTURE // VERIFIED</span>
          </div>
        </div>

        {/* Content View: Certifications Grid */}
        {activeTab !== "Milestones" && (
          <div className="space-y-space-xl">
            {/* If Professional Certification tab or "All" is active, handle Category 1 */}
            {(activeTab === "All" || activeTab === "Professional Certification") && (
              <div className="space-y-space-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-terminal-tag text-xs uppercase tracking-wider text-primary font-semibold">
                      CATEGORY 1: PROFESSIONAL CERTIFICATIONS
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-outline">
                    {professionalCount} Verified Entry
                  </span>
                </div>

                {professionalCount === 0 ? (
                  <div className="p-space-lg rounded-2xl bg-surface-container-low/70 border border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline text-sm font-semibold text-white">
                          LinkedIn Licenses &amp; Certifications Curated Registry
                        </h4>
                        <p className="font-body text-xs text-on-surface-variant max-w-xl leading-relaxed">
                          Professional licenses from Coursera, Google Cloud, AWS, or DeepLearning.AI are indexed here as verified records. View live credentials directly via the verified LinkedIn profile.
                        </p>
                      </div>
                    </div>
                    <a
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-primary/30 text-primary font-headline text-xs font-semibold transition-all inline-flex items-center gap-1.5 shrink-0"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>Check LinkedIn Licenses</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                    {sortedCertifications
                      .filter((c) => c.category === "Professional Certification")
                      .map((cert) => renderCard(cert))}
                  </div>
                )}
              </div>
            )}

            {/* Category 2: Technical Training & Bootcamps */}
            {(activeTab === "All" || activeTab === "Technical Training & Bootcamp") && (
              <div className="space-y-space-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    <h3 className="font-terminal-tag text-xs uppercase tracking-wider text-tertiary font-semibold">
                      CATEGORY 2: TECHNICAL TRAINING &amp; BOOTCAMPS
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-outline">
                    {bootcampCount} Verified Entries
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {sortedCertifications
                    .filter((c) => c.category === "Technical Training & Bootcamp")
                    .map((cert) => renderCard(cert))}
                </div>
              </div>
            )}

            {/* Category 3: Hackathons & Participation */}
            {(activeTab === "All" || activeTab === "Hackathon & Participation") && (
              <div className="space-y-space-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <h3 className="font-terminal-tag text-xs uppercase tracking-wider text-secondary font-semibold">
                      CATEGORY 3: HACKATHONS &amp; EVENT PARTICIPATION
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-outline">
                    {hackathonCount} Verified Entries
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {sortedCertifications
                    .filter((c) => c.category === "Hackathon & Participation")
                    .map((cert) => renderCard(cert))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content View: Engineering Milestones Timeline (Preserved) */}
        {activeTab === "Milestones" && (
          <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-space-xl">
            {milestones.map((item, index) => {
              const hasCertificateImage = Boolean(item.certificateImage);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-secondary group-hover:border-tertiary group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(208,188,255,0.6)]" />

                  <div className="p-space-lg rounded-2xl bg-surface-container-low border border-white/10 hover:border-secondary/40 transition-all duration-300 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-space-xs">
                      <span className="font-terminal-tag text-[10px] px-2.5 py-0.5 rounded border font-bold uppercase tracking-wider bg-secondary-container/20 border-secondary/30 text-secondary">
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

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-code-inline text-tertiary">
                        <CheckCircle className="w-4 h-4" />
                        <span>{item.highlight}</span>
                      </div>

                      {hasCertificateImage && (
                        <button
                          type="button"
                          onClick={() => setSelectedCertificate(item)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-primary/30 text-primary font-headline text-xs font-semibold transition-all"
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
        )}
      </div>

      {/* Accessible Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-surface-container-low border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col gap-4 max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
                <div className="flex flex-col gap-0.5">
                  <span className="font-terminal-tag text-[10px] text-tertiary font-mono uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    AUTHENTIC VERIFIED CREDENTIAL DOCUMENT
                  </span>
                  <h4
                    id="cert-modal-title"
                    className="font-headline text-base sm:text-lg text-white font-bold"
                  >
                    {selectedCertificate.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Frame with preserved aspect ratio */}
              <div className="relative w-full aspect-[4/3] max-h-[62vh] rounded-xl overflow-hidden bg-black/50 border border-white/10 shrink">
                <Image
                  src={modalImage}
                  alt={`${selectedCertificate.title} Certificate Document`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-outline pt-2 border-t border-white/5 shrink-0 gap-2">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-primary" />
                  Issuer: {modalIssuer}
                </span>
                <span className="text-tertiary flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-tertiary" />
                  Cryptographic &amp; Document Verification: Authentic
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );

  // Helper renderer for individual certificate cards
  function renderCard(cert: Certification) {
    const style = CATEGORY_STYLES[cert.category];
    const hasImage = Boolean(cert.image);
    const hasUrl = Boolean(cert.credentialUrl);

    return (
      <motion.div
        key={cert.id}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col justify-between p-space-md rounded-2xl bg-surface-container-low border border-white/10 ${style.border} ${style.glow} transition-all duration-300 group`}
      >
        <div>
          {/* Top Row: Category Badge + Date */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`font-terminal-tag text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${style.badge}`}
            >
              {cert.category}
            </span>
            <span className="font-code-inline text-[11px] text-outline font-mono flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {cert.issueDate}
            </span>
          </div>

          {/* Issuing Organization */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-outline mb-1.5">
            <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{cert.issuingOrganization}</span>
          </div>

          {/* Certificate Title */}
          <h4 className="font-headline text-base text-white font-bold group-hover:text-primary transition-colors leading-snug mb-2">
            {cert.title}
          </h4>

          {/* Description */}
          <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-3">
            {cert.description}
          </p>

          {/* Skills Tags */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-code-inline text-[10px] px-2 py-0.5 rounded bg-surface-container-high border border-white/5 text-on-surface-variant"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
          {hasImage ? (
            <button
              type="button"
              onClick={() => setSelectedCertificate(cert)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-primary/30 text-primary font-headline text-xs font-semibold transition-all hover:shadow-[0_0_10px_rgba(82,141,255,0.25)]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Certificate</span>
            </button>
          ) : hasUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-tertiary/30 text-tertiary font-headline text-xs font-semibold transition-all hover:shadow-[0_0_10px_rgba(39,224,169,0.25)]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Credential</span>
            </a>
          ) : (
            <span className="font-code-inline text-[10px] text-tertiary flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-tertiary" />
              Verified Record (CV / On File)
            </span>
          )}

          {cert.featured && (
            <span className="font-terminal-tag text-[10px] text-primary flex items-center gap-1 font-mono">
              <Sparkles className="w-3 h-3" />
              FEATURED
            </span>
          )}
        </div>
      </motion.div>
    );
  }
}

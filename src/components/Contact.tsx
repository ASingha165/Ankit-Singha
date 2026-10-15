"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-config";
import { getRecruitmentStatusText, getRecruitmentPlaceholder } from "@/lib/date-utils";
import { Mail, Copy, Check, ExternalLink, Send, Terminal, Code2, Linkedin, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [recruitmentStatus, setRecruitmentStatus] = useState<string>(() =>
    getRecruitmentStatusText()
  );
  const [recruitmentPlaceholder, setRecruitmentPlaceholder] = useState<string>(() =>
    getRecruitmentPlaceholder()
  );

  useEffect(() => {
    const update = () => {
      setRecruitmentStatus(getRecruitmentStatusText());
      setRecruitmentPlaceholder(getRecruitmentPlaceholder());
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, message: val }));
    setCharCount(val.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback("Preparing transmission payload...");

    setTimeout(() => {
      setFeedback("Launching default email application...");
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject || "Collaboration"}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\nTopic / Objective: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setTimeout(() => {
        setSubmitting(false);
        setFeedback("Draft prepared in email client — ready to send.");
      }, 1000);
    }, 600);
  };

  return (
    <section id="contact" className="w-full py-space-3xl bg-surface-container-lowest/80 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-terminal-tag text-[11px] text-primary uppercase tracking-widest font-semibold">
            06 / GET IN TOUCH
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[44px] text-white tracking-tight">
            Have an Idea? Let&apos;s Build Something.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl">
            Interested in AI, software engineering, innovative products, or meaningful engineering internships? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Direct Communication Channels & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-space-md"
          >
            {/* Status Card */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10 flex flex-col gap-space-sm">
              <span className="font-terminal-tag text-[11px] text-tertiary flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                CURRENT RECRUITMENT STATUS
              </span>
              <p className="font-headline text-base text-white font-semibold">
                {recruitmentStatus}
              </p>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                Quick response guarantee for technical inquiries, engineering opportunities, and open source discussions.
              </p>
            </div>

            {/* Channel 1: Email with 1-Click Copy Interaction */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-terminal-tag text-[10px] text-outline uppercase font-mono">
                    DIRECT INBOX
                  </span>
                  <span className="font-code-inline text-xs text-white font-medium select-all">
                    {siteConfig.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-white transition-all flex items-center gap-1 font-terminal-tag text-[11px]"
                aria-label="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-tertiary" />
                    <span className="text-tertiary font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Channel 2: GitHub */}
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-md rounded-xl bg-surface-container-low border border-white/10 hover:border-primary/40 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-white group-hover:border-primary/30 shrink-0">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-terminal-tag text-[10px] text-outline uppercase font-mono">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="font-code-inline text-xs text-white font-medium">
                    github.com/ASingha165
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
            </a>

            {/* Channel 3: LinkedIn */}
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-space-md rounded-xl bg-surface-container-low border border-white/10 hover:border-secondary/40 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:border-secondary/40 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-terminal-tag text-[10px] text-outline uppercase font-mono">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-code-inline text-xs text-white font-medium">
                    LinkedIn / Ankit Singha
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-outline group-hover:text-secondary transition-colors" />
            </a>

            {/* Channel 4: Resume Download */}
            <a
              href={siteConfig.resumeUrl}
              download="Ankit_Singha_Resume.pdf"
              className="p-space-md rounded-xl bg-surface-container-low border border-white/10 hover:border-tertiary/40 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 border border-tertiary/30 flex items-center justify-center text-tertiary group-hover:border-tertiary/40 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-terminal-tag text-[10px] text-outline uppercase font-mono">
                    CURRICULUM VITAE
                  </span>
                  <span className="font-code-inline text-xs text-white font-medium">
                    Download Verified Resume (PDF)
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-outline group-hover:text-tertiary transition-colors" />
            </a>
          </motion.div>

          {/* Right Column: Direct Dispatch Transmission Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-surface-container-low border border-white/10 rounded-2xl p-space-lg lg:p-space-xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/10">
                <span className="font-code-inline text-xs text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  Direct Dispatch Interface
                </span>
                <span className="font-terminal-tag text-[10px] text-tertiary font-mono">
                  DIRECT TRANSMISSION // VALIDATED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-terminal-tag text-[10px] text-outline uppercase font-mono"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Turner"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-white/10 text-white font-body text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-terminal-tag text-[10px] text-outline uppercase font-mono"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organization.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-white/10 text-white font-body text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-terminal-tag text-[10px] text-outline uppercase font-mono"
                >
                  Topic / Objective
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={recruitmentPlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-white/10 text-white font-body text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="font-terminal-tag text-[10px] text-outline uppercase font-mono"
                  >
                    Message
                  </label>
                  <span className="font-terminal-tag text-[10px] text-outline font-mono">
                    {charCount} / 500
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  maxLength={500}
                  rows={4}
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder="Hi Ankit, I reviewed your work on CareerPilot-AI and Detoura and would like to talk about..."
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-white/10 text-white font-body text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-outline-variant"
                />
              </div>

              {/* Submit CTA & Feedback */}
              <div className="flex items-center justify-between pt-2">
                {feedback ? (
                  <span className="font-code-inline text-xs text-tertiary">
                    ✓ {feedback}
                  </span>
                ) : (
                  <span className="text-[11px] text-outline font-mono">
                    Opens default mail client with formatted transmission.
                  </span>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="ml-auto inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-headline text-xs font-semibold hover:bg-primary-container transition-all shadow-[0_0_20px_rgba(82,141,255,0.35)] disabled:opacity-50"
                >
                  <span>{submitting ? "Transmitting..." : "Dispatch Transmission"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

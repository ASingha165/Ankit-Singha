"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, Code2, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/10 py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-sm lg:px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Brand identity */}
        <div className="flex items-center gap-space-md">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-white/10 shrink-0">
            <Image
              src={siteConfig.logoUrl}
              alt={`${siteConfig.name} Monogram Logo`}
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-sm font-semibold text-on-surface">
              ANKIT SINGHA
            </span>
            <span className="font-body text-xs text-on-surface-variant">
              Designed with curiosity. Engineered with code.
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-space-lg font-code-inline text-xs text-on-surface-variant">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-tertiary transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-space-md">
          <span className="font-code-inline text-[11px] text-on-surface-variant">
            © {new Date().getFullYear()} Ankit Singha
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg bg-surface-container-high border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-primary-container transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

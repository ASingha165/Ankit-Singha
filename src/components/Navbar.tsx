"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-container-lowest/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-surface-container-lowest/60 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="h-16 max-w-7xl mx-auto px-gutter-sm lg:px-gutter flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="#hero"
            className="flex items-center gap-space-sm group focus:outline-none focus:ring-1 focus:ring-primary rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-white/10 shrink-0">
              <Image
                src={siteConfig.logoUrl}
                alt={`${siteConfig.name} Monogram Logo`}
                fill
                className="object-contain p-0.5 group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-semibold text-sm tracking-wider text-on-surface leading-none group-hover:text-white transition-colors">
                ANKIT SINGHA
              </span>
              <span className="font-terminal-tag text-[10px] text-tertiary flex items-center gap-1 tracking-widest mt-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                AI &amp; SE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 font-body-sm text-[13px] p-1 rounded-xl bg-surface-container-low/70 border border-white/5 backdrop-blur-md"
          >
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.path}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    isActive
                      ? "bg-surface-container-high text-white shadow-sm border border-white/10 font-semibold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Core: Connect CTA & Profile Badge */}
          <div className="flex items-center gap-space-sm">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 font-code-inline text-[13px] px-4 py-2 rounded-lg bg-surface-container-low border border-white/10 text-on-surface hover:border-primary-container hover:shadow-[0_0_20px_rgba(82,141,255,0.35)] transition-all group font-medium"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Profile DP Indicator in Header */}
            <div
              className="relative flex items-center shrink-0 group cursor-pointer"
              title="Ankit Singha // Verified Profile"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-primary-container to-secondary p-[2px] transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(82,141,255,0.35)]">
                <div className="w-full h-full rounded-full bg-surface-container-lowest overflow-hidden border border-white/10 relative">
                  <Image
                    src={siteConfig.avatarUrl}
                    alt="Ankit Singha Profile Picture"
                    fill
                    className="object-cover object-top"
                    sizes="36px"
                  />
                </div>
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary border-2 border-surface-container-lowest shadow-[0_0_8px_rgba(39,224,169,0.8)]"
                title="Status: Open to Internships"
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-surface-container-lowest/95 backdrop-blur-2xl flex flex-col justify-between p-margin-mobile pt-24 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {siteConfig.navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.path}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-headline text-lg py-2.5 px-4 rounded-lg transition-colors ${
                      isActive
                        ? "bg-surface-container-high text-white font-semibold border border-white/10"
                        : "text-on-surface-variant hover:text-white hover:bg-surface-container"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-space-lg border-t border-white/10 flex flex-col gap-space-md">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-headline text-sm py-3 rounded-lg bg-primary text-on-primary font-semibold shadow-[0_0_24px_rgba(82,141,255,0.4)]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between text-on-surface-variant font-code-inline text-[11px]">
                <span>ankit@core:~/portfolio</span>
                <span className="text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                  STATUS: ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

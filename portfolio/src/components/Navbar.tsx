"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-[#080B14]/90 border-b border-[#1E293B]/80 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-[#00D9FF]/40 flex items-center justify-center group-hover:border-[#00D9FF] transition-colors duration-300 group-hover:glow-cyan">
            <span className="text-[#00D9FF] font-mono text-sm font-bold">M</span>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors duration-300">
            MAZ
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 animated-underline ${
                activeSection === href.slice(1)
                  ? "text-[#00D9FF]"
                  : "text-[#94A3B8] hover:text-[#F1F5F9]"
              }`}
            >
              {label}
              {activeSection === href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#00D9FF] to-[#6366F1]"
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohammed-azharuddin-zartargar-b80b7a42"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-[#080B14] bg-[#00D9FF] rounded hover:bg-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#94A3B8] hover:text-[#00D9FF] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#080B14]/95 border-b border-[#1E293B]"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium text-[#94A3B8] hover:text-[#00D9FF] border-b border-[#1E293B]/50 last:border-0 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/mohammed-azharuddin-zartargar-b80b7a42"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2 text-sm font-semibold text-center text-[#080B14] bg-[#00D9FF] rounded"
              >
                LinkedIn
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

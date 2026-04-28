"use client";

import { Mail, ArrowUp } from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1E293B]/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-[#00D9FF]/40 flex items-center justify-center">
              <span className="text-[#00D9FF] font-mono text-sm font-bold">M</span>
            </div>
            <div>
              <div className="text-[#F1F5F9] text-sm font-semibold">
                Mohammed Azharuddin Zartargar
              </div>
              <div className="text-[#475569] text-xs">
                PMP® | SAP Expert | Dubai, UAE
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mohammed-azharuddin-zartargar-b80b7a42"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#475569] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="mailto:zartargarazhar@gmail.com"
              className="p-2 rounded-lg text-[#475569] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-lg text-[#475569] hover:text-[#F1F5F9] hover:bg-[#1E293B] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1E293B]/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#334155]">
          <span>
            © {new Date().getFullYear()} Mohammed Azharuddin Zartargar. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <span className="text-[#00D9FF]">Next.js</span>
            {" & "}
            <span className="text-[#6366F1]">Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

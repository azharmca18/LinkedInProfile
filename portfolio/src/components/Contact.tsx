"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "zartargarazhar@gmail.com",
    href: "mailto:zartargarazhar@gmail.com",
    color: "#00D9FF",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 54 342 7340",
    href: "tel:+971543427340",
    color: "#10B981",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, United Arab Emirates",
    href: "https://maps.google.com/?q=Dubai,UAE",
    color: "#6366F1",
    copyable: false,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "mohammed-azharuddin-zartargar",
    href: "https://www.linkedin.com/in/mohammed-azharuddin-zartargar-b80b7a42",
    color: "#0EA5E9",
    copyable: false,
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-auto p-1.5 rounded text-[#475569] hover:text-[#94A3B8] hover:bg-[#1E293B] transition-all"
    >
      {copied ? <Check size={12} className="text-[#10B981]" /> : <Copy size={12} />}
    </button>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `From: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:zartargarazhar@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(0,217,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label block mb-3">05 — Contact</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-4">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-[#64748B] max-w-xl">
            Open to connecting with SAP professionals, project leaders, and
            organisations navigating digital transformation.
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#00D9FF] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href, color, copyable }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-hover rounded-xl group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-[#475569] uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-[#94A3B8] group-hover:text-[#F1F5F9] transition-colors truncate">
                    {value}
                  </div>
                </div>
                {copyable && <CopyButton value={value} />}
              </a>
            ))}

            {/* Availability badge */}
            <div className="mt-8 p-4 rounded-xl border border-[#10B981]/20 bg-[#10B981]/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#10B981] text-xs font-semibold uppercase tracking-wider">
                  Available
                </span>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Open to new connections, consulting opportunities, and
                conversations about SAP, digital transformation, and project
                leadership.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 card-hover rounded-xl">
                <CheckCircle2 size={48} className="text-[#10B981] mb-4" />
                <h3 className="text-[#F1F5F9] text-xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#64748B]">
                  Your email client should have opened. Looking forward to
                  connecting.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 card-hover rounded-xl p-6"
              >
                <div>
                  <label className="block text-xs text-[#475569] uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E293B] text-[#F1F5F9] text-sm placeholder:text-[#334155] focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#475569] uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E293B] text-[#F1F5F9] text-sm placeholder:text-[#334155] focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#475569] uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#1E293B] text-[#F1F5F9] text-sm placeholder:text-[#334155] focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 font-semibold text-[#080B14] bg-[#00D9FF] rounded hover:bg-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

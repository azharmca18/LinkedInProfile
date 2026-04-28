"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, Award } from "lucide-react";

const roles = [
  "PMP® IT Project Manager",
  "SAP Full Stack Expert",
  "Digital Transformation Leader",
  "Enterprise Systems Architect",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      {displayText}
      <span className="cursor-blink text-[#00D9FF]">|</span>
    </span>
  );
}

const stats = [
  { value: "13+", label: "Years SAP Experience", icon: Briefcase },
  { value: "PMP®", label: "Certified PM", icon: Award },
  { value: "DEWA", label: "Energy & Utilities", icon: MapPin },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,217,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 70%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/5">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="section-label">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
          >
            <span className="text-[#F1F5F9]">Mohammed</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">Azharuddin Zartargar</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-[#94A3B8] mb-8 h-10"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2 text-[#475569] text-sm mb-10"
          >
            <MapPin size={14} className="text-[#00D9FF]" />
            <span>Dubai, United Arab Emirates</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#journey"
              className="group px-6 py-3 font-semibold text-[#080B14] bg-[#00D9FF] rounded hover:bg-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] flex items-center gap-2"
            >
              View My Journey
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-semibold text-[#00D9FF] border border-[#00D9FF]/40 rounded hover:border-[#00D9FF] hover:bg-[#00D9FF]/5 transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 max-w-xl"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="card-hover rounded-lg p-4 text-center"
              >
                <Icon size={16} className="text-[#00D9FF] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#F1F5F9] mb-1">
                  {value}
                </div>
                <div className="text-[10px] text-[#475569] uppercase tracking-wider leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Terminal-style decoration - right side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="corner-bracket p-4 w-64">
          <div className="font-mono text-[11px] text-[#1E293B] leading-6 select-none">
            <div className="text-[#00D9FF]/40 mb-1">// profile.ts</div>
            <div><span className="text-[#6366F1]/60">const</span> <span className="text-[#00D9FF]/50">profile</span> <span className="text-[#475569]">= {"{"}</span></div>
            <div className="ml-4"><span className="text-[#94A3B8]/40">name:</span> <span className="text-[#10B981]/50">&quot;MAZ&quot;</span>,</div>
            <div className="ml-4"><span className="text-[#94A3B8]/40">exp:</span> <span className="text-[#F59E0B]/50">&quot;13+ yrs&quot;</span>,</div>
            <div className="ml-4"><span className="text-[#94A3B8]/40">cert:</span> <span className="text-[#EF4444]/50">&quot;PMP®&quot;</span>,</div>
            <div className="ml-4"><span className="text-[#94A3B8]/40">stack:</span> <span className="text-[#00D9FF]/50">&quot;SAP Full&quot;</span>,</div>
            <div className="ml-4"><span className="text-[#94A3B8]/40">base:</span> <span className="text-[#10B981]/50">&quot;Dubai&quot;</span>,</div>
            <div><span className="text-[#475569]">{"}"}</span></div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-[#00D9FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Code2, TrendingUp, Globe, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Foundation",
    desc: "Deep SAP expertise across ABAP, Fiori, S/4HANA, RAP/CAPM, OData, and core modules (MM, SD, PM).",
    color: "#00D9FF",
  },
  {
    icon: Target,
    title: "Project Leadership",
    desc: "PMP®-certified leader with growing capabilities in stakeholder management, team coordination, and delivery excellence.",
    color: "#6366F1",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    desc: "Building trust across technical teams and business stakeholders through clear, empathetic communication.",
    color: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    desc: "Delivering enterprise-scale implementations that balance stakeholder expectations with real-world feasibility.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Industry Focus",
    desc: "Utilities sector specialist — currently shaping digital systems at one of the world's most innovative utilities: DEWA.",
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "Unique Perspective",
    desc: "Rare ability to bridge the gap between hands-on SAP code and strategic project delivery at scale.",
    color: "#EF4444",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="mb-16"
        >
          <span className="section-label block mb-3">01 — About</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-6">
            Bridging Code{" "}
            <span className="gradient-text">&amp; Strategy</span>
          </h2>
          <div className="max-w-3xl">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-5">
              With{" "}
              <span className="text-[#00D9FF] font-semibold">
                13+ years of SAP expertise
              </span>{" "}
              and a growing foundation in project management, I bring a unique
              perspective that bridges technical depth with strategic leadership.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              My journey from hands-on SAP technical roles to team leadership
              has been deliberate. Three years of leading teams in
              enterprise-scale projects has reinforced my belief: the best
              Project Managers understand both the code and the business —
              I&apos;m building that bridge every day at{" "}
              <span className="text-[#F59E0B] font-semibold">DEWA</span>, one
              of the world&apos;s leading utilities.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#00D9FF] to-transparent" />
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {highlights.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="card-hover rounded-xl p-6 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="text-[#F1F5F9] font-semibold mb-2 text-sm">
                {title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 border-l-2 border-[#00D9FF] pl-6 max-w-2xl"
        >
          <p className="text-[#94A3B8] italic text-lg leading-relaxed">
            &ldquo;Successful IT projects start with understanding the
            technology deeply and leading with empathy.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#475569]">
            — Mohammed Azharuddin Zartargar
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

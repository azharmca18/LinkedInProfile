"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Sparkles, ArrowRight, Code2, ExternalLink } from "lucide-react";

const placeholderProjects = [
  {
    number: "01",
    title: "SAP Fiori Enterprise Dashboard",
    domain: "Energy & Utilities",
    desc: "End-to-end SAP Fiori application for real-time utilities monitoring. Built with SAP RAP, OData V4, and SAPUI5 on S/4HANA.",
    tags: ["SAP RAP", "Fiori", "S/4HANA", "OData V4"],
    color: "#00D9FF",
    status: "coming-soon",
  },
  {
    number: "02",
    title: "Digital Transformation Playbook",
    domain: "Project Management",
    desc: "Comprehensive methodology for SAP digital transformation projects — from stakeholder alignment to hypercare. PMP® framework-driven.",
    tags: ["PMP®", "Agile", "Stakeholder Mgmt", "DEWA"],
    color: "#6366F1",
    status: "coming-soon",
  },
  {
    number: "03",
    title: "SAP CAPM Microservices Architecture",
    domain: "Enterprise Architecture",
    desc: "Cloud Application Programming Model (CAPM) based microservices for enterprise utilities — fully cloud-native on BTP.",
    tags: ["SAP CAPM", "BTP", "Node.js", "CDS"],
    color: "#F59E0B",
    status: "coming-soon",
  },
  {
    number: "04",
    title: "Mobile-First Utilities App",
    domain: "Mobile / Hybrid",
    desc: "Cross-platform enterprise mobile application for field technicians at a leading utilities company, built with SAP Fiori Elements.",
    tags: ["Fiori Elements", "Mobile", "SAP HANA", "Responsive"],
    color: "#10B981",
    status: "coming-soon",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden dot-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="section-label block mb-3">04 — Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-4">
            Work in Progress —{" "}
            <span className="gradient-text">Stay Tuned</span>
          </h2>
          <p className="text-[#64748B] max-w-xl">
            Projects and case studies are being curated. Each will showcase
            real enterprise impact — from SAP architecture to delivery
            excellence.
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#6366F1] to-transparent" />
        </motion.div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12 flex items-center gap-3 px-4 py-3 rounded-lg border border-[#F59E0B]/20 bg-[#F59E0B]/5 w-fit"
        >
          <Sparkles size={14} className="text-[#F59E0B]" />
          <span className="text-sm text-[#94A3B8]">
            Portfolio launching soon — projects are being prepared with full case studies
          </span>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {placeholderProjects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-hover rounded-xl overflow-hidden group relative"
            >
              {/* Top accent bar */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />

              <div className="p-6">
                {/* Number + lock */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-3xl font-bold font-mono opacity-20"
                    style={{ color: project.color }}
                  >
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color: project.color,
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {project.domain}
                    </span>
                    <Lock size={12} className="text-[#475569]" />
                  </div>
                </div>

                <h3 className="text-[#F1F5F9] font-bold text-lg mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded font-medium"
                      style={{
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}20`,
                        color: `${project.color}CC`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 opacity-40">
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs text-[#94A3B8] cursor-not-allowed"
                  >
                    <Code2 size={13} />
                    Source
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs text-[#94A3B8] cursor-not-allowed"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </button>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#475569] text-sm mb-4">
            Have a project in mind? Let&apos;s connect.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[#080B14] bg-[#00D9FF] rounded hover:bg-white transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
          >
            Start a Conversation
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

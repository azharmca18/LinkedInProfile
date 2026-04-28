"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    category: "SAP Core",
    color: "#00D9FF",
    skills: [
      { name: "SAP ABAP / OO ABAP", level: 95 },
      { name: "SAP Fiori / SAPUI5", level: 95 },
      { name: "S/4HANA", level: 90 },
      { name: "SAP RAP / CAPM", level: 85 },
      { name: "OData / SAP Gateway", level: 90 },
    ],
  },
  {
    category: "SAP Modules",
    color: "#6366F1",
    skills: [
      { name: "Materials Management (MM)", level: 80 },
      { name: "Sales & Distribution (SD)", level: 75 },
      { name: "Plant Maintenance (PM)", level: 75 },
      { name: "Business Intelligence (BI)", level: 80 },
      { name: "SAP HANA 2.0", level: 85 },
    ],
  },
  {
    category: "Project Management",
    color: "#F59E0B",
    skills: [
      { name: "PMP® Methodology", level: 90 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Stakeholder Management", level: 88 },
      { name: "Resource Management", level: 82 },
      { name: "Change Leadership", level: 80 },
    ],
  },
  {
    category: "Technical",
    color: "#10B981",
    skills: [
      { name: "JavaScript / TypeScript", level: 75 },
      { name: "SAP Business App Studio", level: 90 },
      { name: "WebDynpro / PhoneGap", level: 70 },
      { name: "Enterprise Design Thinking", level: 85 },
      { name: "Process Optimization", level: 85 },
    ],
  },
];

const certifications = [
  {
    name: "Project Management Professional (PMP)®",
    issuer: "PMI",
    color: "#00D9FF",
  },
  {
    name: "SAP Certified Development Associate — SAP Fiori",
    issuer: "SAP",
    color: "#6366F1",
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    color: "#F59E0B",
  },
  {
    name: "SAP Certified Application Associate — SAP HANA 2.0 (SPS04)",
    issuer: "SAP",
    color: "#10B981",
  },
  {
    name: "Think Faster, Talk Smarter",
    issuer: "Stanford (Coursera)",
    color: "#8B5CF6",
  },
];

const languages = [
  { name: "English", level: "Full Professional", pct: 95 },
  { name: "Hindi", level: "Native / Bilingual", pct: 100 },
  { name: "Kannada", level: "Native / Bilingual", pct: 100 },
  { name: "Urdu", level: "Native / Bilingual", pct: 100 },
  { name: "Arabic", level: "Elementary", pct: 20 },
];

function SkillBar({
  name,
  level,
  color,
  delay,
  inView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#94A3B8]">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1E293B] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(245,158,11,0.05) 0%, transparent 70%)",
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
          <span className="section-label block mb-3">03 — Skills & Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-4">
            Technical Depth,{" "}
            <span className="gradient-text-amber">Strategic Width</span>
          </h2>
          <p className="text-[#64748B] max-w-xl">
            A rare combination of deep SAP technical expertise and enterprise
            project management capabilities.
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#F59E0B] to-transparent" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="card-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-5 rounded-full"
                  style={{ background: color }}
                />
                <h3
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color }}
                >
                  {category}
                </h3>
              </div>
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={color}
                  delay={gi * 0.1 + si * 0.06}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Certifications + Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-hover rounded-xl p-6"
          >
            <h3 className="section-label mb-5">Certifications</h3>
            <div className="space-y-3">
              {certifications.map(({ name, issuer, color }) => (
                <div
                  key={name}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1E293B]/50 transition-colors"
                >
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color }}
                  />
                  <div>
                    <div className="text-[#F1F5F9] text-sm font-medium">
                      {name}
                    </div>
                    <div className="text-[#475569] text-xs mt-0.5">{issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-hover rounded-xl p-6"
          >
            <h3 className="section-label mb-5">Languages</h3>
            <div className="space-y-4">
              {languages.map(({ name, level, pct }) => (
                <div key={name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[#94A3B8] text-sm">{name}</span>
                    <span className="text-xs text-[#475569]">{level}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1E293B] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background:
                          pct === 100
                            ? "linear-gradient(90deg, #F59E0B, #EF4444)"
                            : pct > 50
                            ? "linear-gradient(90deg, #00D9FF, #6366F1)"
                            : "#475569",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

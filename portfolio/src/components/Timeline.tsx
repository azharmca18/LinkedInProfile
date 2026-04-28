"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Dubai Electricity & Water Authority",
    companyShort: "DEWA",
    role: "Project Manager",
    period: "Oct 2025 – Present",
    duration: "7 months",
    location: "Dubai, UAE",
    type: "current",
    color: "#00D9FF",
    description:
      "PMP®-Certified IT Project Manager leading digital transformation initiatives. Overseeing enterprise-scale SAP implementations for one of the world's most innovative utilities.",
    tags: ["Project Management", "SAP", "Digital Transformation", "Agile"],
  },
  {
    company: "Dubai Electricity & Water Authority",
    companyShort: "DEWA",
    role: "Senior SAP Consultant",
    period: "Dec 2021 – Present",
    duration: "4 years 5 months",
    location: "Dubai, UAE",
    type: "current",
    color: "#00D9FF",
    description:
      "Senior-level SAP consultancy at DEWA. Delivering end-to-end SAP solutions across utilities operations, spanning S/4HANA, Fiori, RAP/CAPM, and Business Intelligence.",
    tags: ["S/4HANA", "SAP Fiori", "SAP RAP", "SAP CAPM", "Utilities"],
  },
  {
    company: "IBM",
    companyShort: "IBM",
    role: "Application Developer",
    period: "Apr 2020 – Oct 2021",
    duration: "1 year 7 months",
    location: "Bengaluru, India",
    type: "past",
    color: "#6366F1",
    description:
      "End-to-end SAP Fiori and OData development using SAP Business Application Studio. Led a team of 6 as Team Lead, driving delivery quality and mentoring junior developers.",
    tags: ["SAP Fiori", "OData", "Team Lead", "BAS", "ABAP"],
  },
  {
    company: "Deloitte India",
    companyShort: "Deloitte",
    role: "Senior Consultant → Consultant",
    period: "Apr 2016 – Apr 2020",
    duration: "4 years 1 month",
    location: "Bangalore, India",
    type: "past",
    color: "#8B5CF6",
    description:
      "Progressed from Consultant to Senior Consultant. Delivered complex SAPUI5/Fiori applications and SAP NetWeaver Gateway development. Built strong foundations in enterprise ABAP solutions.",
    tags: ["SAPUI5", "Fiori", "NetWeaver", "ABAP", "Gateway"],
  },
  {
    company: "Maventic Innovative Solutions",
    companyShort: "Maventic",
    role: "Consultant",
    period: "Jan 2013 – Mar 2016",
    duration: "3 years 3 months",
    location: "Bangalore, India",
    type: "past",
    color: "#F59E0B",
    description:
      "Started the SAP journey here. Delivered SAPUI5, Fiori, JavaScript, OData, and SAP NetWeaver Gateway solutions. Also worked on OO ABAP, WebDynpro, and PhoneGap mobile applications.",
    tags: ["SAPUI5", "OData", "OO ABAP", "WebDynpro", "PhoneGap"],
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="relative py-28 overflow-hidden dot-grid">
      {/* Background */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(0,217,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label block mb-3">02 — Career Journey</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9] mb-4">
            13 Years of{" "}
            <span className="gradient-text">Deliberate Growth</span>
          </h2>
          <p className="text-[#64748B] max-w-xl">
            From SAP consultant to certified Project Manager — a career built
            on technical mastery and strategic leadership.
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#00D9FF] to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="timeline-line w-full h-full"
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop: spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{
                      background: `${exp.color}15`,
                      border: `2px solid ${exp.color}`,
                      color: exp.color,
                      boxShadow: `0 0 16px ${exp.color}30`,
                    }}
                  >
                    {exp.companyShort.slice(0, 2)}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 md:w-1/2 md:flex-none ${
                      isLeft ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="card-hover rounded-xl p-5 group">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Building2
                              size={13}
                              style={{ color: exp.color }}
                            />
                            <span
                              className="text-xs font-semibold uppercase tracking-wider"
                              style={{ color: exp.color }}
                            >
                              {exp.company}
                            </span>
                          </div>
                          <h3 className="text-[#F1F5F9] font-bold text-base">
                            {exp.role}
                          </h3>
                        </div>
                        {exp.type === "current" && (
                          <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-[10px] font-semibold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-[11px] text-[#475569] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                        <span className="text-[#475569]">·</span>
                        <span>{exp.duration}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-medium"
                            style={{
                              background: `${exp.color}10`,
                              border: `1px solid ${exp.color}20`,
                              color: exp.color,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10 ml-18 md:ml-0 flex md:justify-center"
          >
            <div className="card-hover rounded-xl p-5 inline-flex items-center gap-4 max-w-sm">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#F59E0B] text-xs font-bold">MCA</span>
              </div>
              <div>
                <div className="text-[#F1F5F9] font-semibold text-sm">
                  Master of Computer Applications
                </div>
                <div className="text-[#475569] text-xs mt-0.5">
                  Visvesvaraya Technological University
                </div>
              </div>
              <ChevronRight size={14} className="text-[#475569] flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

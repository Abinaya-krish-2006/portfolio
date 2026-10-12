"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { 
  HiCode, 
  HiCheckCircle, 
  HiLightBulb, 
  HiSparkles,
  HiChip,
  HiColorSwatch,
  HiDocumentText,
  HiShieldCheck
} from "react-icons/hi";
import { motion } from "framer-motion";

const PROJECT_ILLUSTRATIONS: Record<string, React.ReactNode> = {
  "bean-bloom": (
    <div className="w-full h-48 bg-gradient-to-tr from-amber-50 via-orange-50 to-purple-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-amber-100/60 relative overflow-hidden">
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-amber-600 mb-3 text-3xl">
        ☕
      </div>
      <span className="text-sm font-bold text-gray-800 tracking-wide">
        Bean & Bloom Café Platform
      </span>
      <span className="text-xs text-gray-500 mt-1">
        Specialty Coffee Commerce & Customizer UI
      </span>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#6D5EF8]/10 rounded-full blur-xl" />
    </div>
  ),
  "signai": (
    <div className="w-full h-48 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-blue-100/60 relative overflow-hidden">
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 mb-3 text-3xl">
        🤟
      </div>
      <span className="text-sm font-bold text-gray-800 tracking-wide">
        SignAI Recognition Engine
      </span>
      <span className="text-xs text-gray-500 mt-1">
        Computer Vision & ASL Speech Translation
      </span>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-500/10 rounded-full blur-xl" />
    </div>
  ),
  "smartirrigate": (
    <div className="w-full h-48 bg-gradient-to-tr from-emerald-50 via-teal-50 to-purple-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-emerald-100/60 relative overflow-hidden">
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-emerald-600 mb-3 text-3xl">
        🌱
      </div>
      <span className="text-sm font-bold text-gray-800 tracking-wide">
        SmartIrrigate IoT Dashboard
      </span>
      <span className="text-xs text-gray-500 mt-1">
        Telemetry Hydration Analytics & Automated Valves
      </span>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl" />
    </div>
  ),
  "digital-safety": (
    <div className="w-full h-48 bg-gradient-to-tr from-purple-50 via-pink-50 to-blue-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-purple-100/60 relative overflow-hidden">
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#6D5EF8] mb-3 text-3xl">
        🛡️
      </div>
      <span className="text-sm font-bold text-gray-800 tracking-wide">
        Digital Safety Platform
      </span>
      <span className="text-xs text-gray-500 mt-1">
        Interactive Threat Awareness & Phishing Simulator
      </span>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#6D5EF8]/10 rounded-full blur-xl" />
    </div>
  ),
  "resume-builder": (
    <div className="w-full h-48 bg-gradient-to-tr from-sky-50 via-indigo-50 to-purple-50 rounded-2xl flex flex-col items-center justify-center p-6 border border-sky-100/60 relative overflow-hidden">
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-sky-600 mb-3 text-3xl">
        📄
      </div>
      <span className="text-sm font-bold text-gray-800 tracking-wide">
        Resume Builder Studio
      </span>
      <span className="text-xs text-gray-500 mt-1">
        Live Split-Screen ATS Template Architect
      </span>
      <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-sky-500/10 rounded-full blur-xl" />
    </div>
  ),
};

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Portfolio" icon={<HiCode />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Projects I&apos;ve Built
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Architected with precision, solved with modern engineering, and focused on exceptional user experience
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-gray-200/90 hover:border-[#6D5EF8]/40 shadow-xs hover:shadow-xl transition-all p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="mb-6 rounded-2xl overflow-hidden shadow-2xs group-hover:scale-[1.01] transition-transform duration-300">
                  {PROJECT_ILLUSTRATIONS[project.id] || (
                    <div className="w-full h-48 bg-[#F5F3FF] rounded-2xl flex items-center justify-center">
                      <HiCode className="w-12 h-12 text-[#6D5EF8]" />
                    </div>
                  )}
                </div>

                {/* Category & Title */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-[#6D5EF8] tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] group-hover:text-[#6D5EF8] transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#FAFAFA] border border-gray-200/80 text-xs font-semibold text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6 bg-[#FAFAFA] rounded-2xl p-4 sm:p-5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <HiSparkles className="text-[#6D5EF8]" />
                    <span>Key Features</span>
                  </p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <HiCheckCircle className="w-4 h-4 text-[#6D5EF8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lessons Learned */}
                <div className="bg-[#F5F3FF]/60 rounded-2xl p-4 sm:p-5 border border-[#6D5EF8]/15">
                  <p className="text-xs font-bold text-[#6D5EF8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <HiLightBulb className="text-base" />
                    <span>Engineering Takeaway & Lessons Learned</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {project.lessonsLearned}
                  </p>
                </div>
              </div>

              {/* Note: GitHub Button and Live Demo Button are strictly removed per user instruction */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Production Architecture</span>
                <span className="font-medium text-[#6D5EF8]">Documented & Tested</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

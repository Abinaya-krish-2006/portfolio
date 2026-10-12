"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { HiSparkles, HiAcademicCap, HiCode, HiBriefcase, HiBadgeCheck, HiFire } from "react-icons/hi";
import { motion } from "framer-motion";

const STAT_ICONS: Record<string, React.ReactNode> = {
  "CGPA": <HiAcademicCap className="w-5 h-5 text-[#6D5EF8]" />,
  "Projects": <HiCode className="w-5 h-5 text-indigo-500" />,
  "Internships": <HiBriefcase className="w-5 h-5 text-purple-600" />,
  "Certificates": <HiBadgeCheck className="w-5 h-5 text-blue-600" />,
  "LeetCode Challenge": <HiFire className="w-5 h-5 text-amber-500" />,
};

export function JourneySection() {
  const { heading, subtitle, paragraphs, stats } = PORTFOLIO_DATA.journey;

  return (
    <section id="journey" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="About" icon={<HiSparkles />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            {subtitle}
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-[#FAFAFA] border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-xs relative">
            <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="font-normal text-[#374151]">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Values Tag Row */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-2xs">
                💻 Full Stack Engineering
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-2xs">
                🧠 Data Structures & Algorithms
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-2xs">
                🚀 Product-Minded Execution
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-2xs">
                🌱 Continuous Learning
              </span>
            </div>
          </div>

          {/* Key Milestones / Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F5F3FF] to-white border border-[#6D5EF8]/15 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-[#6D5EF8]/10 text-[#6D5EF8] flex items-center justify-center font-bold text-base">
                  1
                </span>
                <h3 className="text-base font-bold text-[#111827]">
                  Information Technology Foundation
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-normal pl-12">
                B.Tech Information Technology student at SNS College of Technology with strong academic consistency, mastering web architectures, database management, and software systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EEF6FF] to-white border border-blue-200/40 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base">
                  2
                </span>
                <h3 className="text-base font-bold text-[#111827]">
                  Practical Industry Internships
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-normal pl-12">
                Applied classroom concepts to real production codebases during internships, shipping responsive interfaces and testing client-facing APIs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F5F3FF] to-[#EEF6FF] border border-purple-200/40 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-purple-100 text-[#6D5EF8] flex items-center justify-center font-bold text-base">
                  3
                </span>
                <h3 className="text-base font-bold text-[#111827]">
                  Targeted for Product Companies
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-normal pl-12">
                Dedicated daily practice on algorithmic thinking, clean code architectures, and high-impact web design inspired by industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Statistic Cards (5 Required Cards) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#111827]">
              Key Milestones at a Glance
            </h3>
            <p className="text-sm text-gray-500">
              Measurable progress across academics, problem solving, and software delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#FAFAFA] hover:bg-white border border-gray-200/80 hover:border-[#6D5EF8]/30 transition-all shadow-xs hover:shadow-md flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/70 shadow-2xs flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {STAT_ICONS[stat.label] || <HiSparkles className="w-5 h-5 text-[#6D5EF8]" />}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#111827] group-hover:text-[#6D5EF8] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

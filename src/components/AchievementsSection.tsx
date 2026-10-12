"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { 
  HiFire, 
  HiHeart, 
  HiLightningBolt, 
  HiAcademicCap, 
  HiTerminal 
} from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
  code: <HiFire className="w-6 h-6 text-amber-500" />,
  heart: <HiHeart className="w-6 h-6 text-rose-500" />,
  zap: <HiLightningBolt className="w-6 h-6 text-[#6D5EF8]" />,
  award: <HiAcademicCap className="w-6 h-6 text-indigo-500" />,
  terminal: <HiTerminal className="w-6 h-6 text-emerald-500" />,
};

export function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Milestones" icon={<FaTrophy />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Milestones & Achievements
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Active engagement across technical workshops, hackathons, and real-world web application development
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 hover:border-[#6D5EF8]/35 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#6D5EF8]/15 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {ACHIEVEMENT_ICONS[item.iconName] || <FaTrophy className="w-6 h-6 text-[#6D5EF8]" />}
                </div>

                <span className="text-xs font-bold text-[#6D5EF8] tracking-wider uppercase mb-1.5 block">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#6D5EF8] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Milestone Verified</span>
                <span className="w-2 h-2 rounded-full bg-[#6D5EF8]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

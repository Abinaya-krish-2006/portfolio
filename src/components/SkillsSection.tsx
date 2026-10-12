"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { 
  HiCode, 
  HiDesktopComputer, 
  HiServer, 
  HiDatabase, 
  HiCheckCircle,
  HiColorSwatch
} from "react-icons/hi";
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaFigma, 
  FaDatabase,
  FaTools,
  FaMicrochip
} from "react-icons/fa";
import { 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiVercel, 
  SiPostman 
} from "react-icons/si";
import { motion } from "framer-motion";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <HiCode className="w-5 h-5 text-[#6D5EF8]" />,
  "Frontend Development": <HiDesktopComputer className="w-5 h-5 text-blue-500" />,
  "Backend Development": <HiServer className="w-5 h-5 text-emerald-500" />,
  "Databases": <HiDatabase className="w-5 h-5 text-amber-500" />,
  "Tools & Platforms": <FaTools className="w-5 h-5 text-purple-500" />,
  "Core IT Concepts": <FaMicrochip className="w-5 h-5 text-rose-500" />,
};

const SKILL_ICONS: Record<string, React.ReactNode> = {
  Java: <FaJava className="text-red-500" />,
  Python: <FaPython className="text-blue-500" />,
  JavaScript: <FaJs className="text-amber-500" />,
  SQL: <FaDatabase className="text-sky-600" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  React: <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-emerald-600" />,
  "Express.js": <SiExpress className="text-gray-800" />,
  PostgreSQL: <SiPostgresql className="text-sky-700" />,
  MySQL: <SiMysql className="text-blue-600" />,
  MongoDB: <SiMongodb className="text-emerald-500" />,
  "Neon Database": <HiDatabase className="text-teal-500" />,
  Git: <FaGitAlt className="text-orange-600" />,
  GitHub: <FaGithub className="text-gray-900" />,
  Postman: <SiPostman className="text-orange-500" />,
  Vercel: <SiVercel className="text-black" />,
  Figma: <FaFigma className="text-purple-500" />,
  Canva: <HiColorSwatch className="text-cyan-500" />,
};

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Capabilities" icon={<FaMicrochip />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Technical Skills
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Core competencies across modern web engineering, data storage, and systems fundamentals
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid - No percentage bars or ratings! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="p-7 rounded-2xl bg-white border border-gray-200/80 hover:border-[#6D5EF8]/35 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-[#F5F3FF] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {CATEGORY_ICONS[category.title] || <HiCheckCircle className="w-5 h-5 text-[#6D5EF8]" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#6D5EF8] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.skills.length} core technologies
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFAFA] hover:bg-[#F5F3FF] border border-gray-200/70 hover:border-[#6D5EF8]/30 text-xs sm:text-sm font-medium text-gray-800 transition-all cursor-default shadow-2xs hover:-translate-y-0.5"
                    >
                      {SKILL_ICONS[skill] && (
                        <span className="text-sm">{SKILL_ICONS[skill]}</span>
                      )}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer accent line */}
              <div className="mt-6 pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400">
                <span>Production Standard</span>
                <span className="w-2 h-2 rounded-full bg-[#6D5EF8]/30 group-hover:bg-[#6D5EF8] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

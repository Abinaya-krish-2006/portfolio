"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { HiBriefcase, HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Work Experience" icon={<HiBriefcase />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Internship Experience
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Hands-on engineering contributions across product development and full-stack software delivery
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards - Strict: No Dates displayed, only Company, Role, Description, Technologies Used */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200/80 hover:border-[#6D5EF8]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Role */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#F5F3FF] text-[#6D5EF8] text-xs font-semibold tracking-wide uppercase mb-2">
                      Internship
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#6D5EF8] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-gray-700 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#6D5EF8]">
                    <HiBriefcase className="w-6 h-6" />
                  </div>
                </div>

                {/* Bullet Descriptions */}
                <ul className="mt-6 space-y-3">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                      <HiCheckCircle className="w-5 h-5 text-[#6D5EF8] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mt-8 pt-6 border-t border-gray-200/70">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

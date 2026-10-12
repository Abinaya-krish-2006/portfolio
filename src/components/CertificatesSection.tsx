"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { HiBadgeCheck, HiAcademicCap, HiSparkles } from "react-icons/hi";
import { FaPython, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const CERTIFICATE_ICONS: Record<string, React.ReactNode> = {
  "Technical Training Academy": <FaPython className="text-[#3776AB] w-6 h-6" />,
  "Professional Learning Initiative": <HiAcademicCap className="text-[#6D5EF8] w-6 h-6" />,
  NPTEL: <HiBadgeCheck className="text-emerald-600 w-6 h-6" />,
  "Technical Forums": <FaCode className="text-blue-600 w-6 h-6" />,
};

export function CertificatesSection() {
  const { certificates } = PORTFOLIO_DATA;

  return (
    <section id="certificates" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Certifications & Learning" icon={<HiBadgeCheck />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Certifications & Training
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Verified credentials and skill development programs extracted directly from my resume
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-7 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 hover:border-[#6D5EF8]/35 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                    {CERTIFICATE_ICONS[cert.issuer] || <HiBadgeCheck className="text-[#6D5EF8] w-6 h-6" />}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#6D5EF8] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-500 font-medium mb-4">
                  {cert.category}
                </p>
              </div>

              {/* Status Indicator (No Verify button) */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Verified Learning</span>
                </span>
                <span className="text-[11px] text-gray-400">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

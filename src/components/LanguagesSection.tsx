"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SectionBadge } from "./ui/SectionBadge";
import { HiGlobeAlt, HiTranslate } from "react-icons/hi";
import { motion } from "framer-motion";

export function LanguagesSection() {
  const { languages } = PORTFOLIO_DATA;

  return (
    <section id="languages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Communication" icon={<HiTranslate />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Languages I Speak
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Multilingual fluency enabling seamless cross-functional and global collaboration
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Beautiful Language Chips - Strict: No percentages, No Native/Professional/Bilingual labels! */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#FAFAFA] hover:bg-[#F5F3FF]/50 border border-gray-200/80 hover:border-[#6D5EF8]/35 shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                {/* Globe/Language Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/70 shadow-2xs flex items-center justify-center text-[#6D5EF8] mb-4 group-hover:scale-110 transition-transform">
                  <HiGlobeAlt className="w-6 h-6" />
                </div>

                {/* Primary Name */}
                <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#6D5EF8] transition-colors mb-1">
                  {lang.name}
                </h3>

                {/* Native Script Callout */}
                {lang.nativeScript && (
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {lang.nativeScript}
                  </p>
                )}

                {/* Status chip if applicable (e.g. Learning) */}
                {lang.note ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F3FF] text-[#6D5EF8] border border-[#6D5EF8]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D5EF8] animate-pulse" />
                    <span>{lang.note}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-gray-500 bg-gray-100">
                    Conversational
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom subtle banner */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-medium tracking-wide">
              Effective verbal and written communication across distributed engineering teams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { HiDownload, HiArrowNarrowDown, HiUpload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export function HeroSection() {
  const titles = PORTFOLIO_DATA.personal.typingTitles;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Soft Ambient Background Elements (Linear / Apple style) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F5F3FF] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#EEF6FF] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-100/50 rounded-full blur-2xl opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#6D5EF8]/20 text-[#6D5EF8] text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6D5EF8] animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.role}</span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#111827] leading-[1.1] mb-4">
              Hello, <br />
              <span className="text-[#111827]">
                I&apos;m{" "}
                <span className="relative inline-block text-[#6D5EF8]">
                  {PORTFOLIO_DATA.personal.shortName}.
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#6D5EF8]/20 rounded-full" />
                </span>
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="flex items-center h-10 sm:h-12 text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              <span className="text-gray-400 mr-2.5 font-light">I am a</span>
              <span className="text-[#6D5EF8] font-semibold min-w-[200px]">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#6D5EF8] ml-1 animate-pulse" />
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mb-8 font-normal">
              {PORTFOLIO_DATA.personal.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#6D5EF8] text-white text-sm sm:text-base font-semibold hover:bg-[#5A4BE0] transition-all duration-200 shadow-md shadow-[#6D5EF8]/25 hover:shadow-lg hover:shadow-[#6D5EF8]/35 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <HiArrowNarrowDown className="text-lg" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Abinaya_G_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#111827] text-sm sm:text-base font-semibold border border-gray-200 hover:border-[#6D5EF8]/40 hover:bg-[#F5F3FF]/50 transition-all duration-200 shadow-xs hover:-translate-y-0.5 group"
              >
                <HiDownload className="text-lg text-[#6D5EF8] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-resume-modal"))}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#F5F3FF] hover:bg-[#ECE9FE] text-[#6D5EF8] text-xs sm:text-sm font-semibold border border-[#6D5EF8]/20 transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
                title="Upload updated resume file anytime"
              >
                <HiUpload className="text-base" />
                <span>Upload New Resume</span>
              </button>
            </div>

            {/* Quick Links & Meta */}
            <div className="flex items-center gap-5 pt-4 border-t border-gray-200/60 w-full max-w-xl">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-xs"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-2.5 rounded-xl bg-white border border-gray-200/80 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-xs"
                  aria-label="Email"
                >
                  <FiMail className="w-4 h-4" />
                </a>
              </div>
              <div className="ml-auto text-xs text-gray-500 font-medium hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Internship & Full-time</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Circular Frame Container with Abstract Elements */}
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              {/* Soft Abstract Backdrops */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F5F3FF] via-[#EEF6FF] to-[#ECE9FE] -rotate-6 scale-105 opacity-80" />
              <div className="absolute inset-2 rounded-full border border-dashed border-[#6D5EF8]/25 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full bg-white shadow-xl shadow-[#6D5EF8]/10" />

              {/* Outer Circular Glow Accent */}
              <div className="relative w-64 sm:w-80 md:w-88 aspect-square rounded-full p-2 bg-gradient-to-b from-white via-[#F5F3FF] to-white shadow-2xl shadow-indigo-100 border border-gray-100 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#F5F3FF] to-[#EEF6FF] flex items-end justify-center">
                  <Image
                    src={PORTFOLIO_DATA.personal.profilePhoto}
                    alt={PORTFOLIO_DATA.personal.name}
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover object-top scale-105 select-none pointer-events-none drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Soft Floating Badges (Apple/Linear style) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -left-4 sm:-left-6 top-1/4 glass-card px-4 py-2.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#6D5EF8] flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Focus</p>
                  <p className="text-xs font-bold text-[#111827]">Full Stack Dev</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-4 sm:-right-6 bottom-1/4 glass-card px-4 py-2.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  100+
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">LeetCode</p>
                  <p className="text-xs font-bold text-[#111827]">Problem Solving</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

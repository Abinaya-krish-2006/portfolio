"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiArrowUp } from "react-icons/hi";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-gray-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6D5EF8] to-[#9B8DFC] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                {PORTFOLIO_DATA.personal.initials}
              </div>
              <span className="font-bold text-lg text-[#111827]">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-sm">
              {PORTFOLIO_DATA.personal.role} • Crafting robust, scalable software solutions with modern web engineering.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-600">
            <a href="#home" className="hover:text-[#6D5EF8] transition-colors">
              Home
            </a>
            <a href="#journey" className="hover:text-[#6D5EF8] transition-colors">
              Journey
            </a>
            <a href="#skills" className="hover:text-[#6D5EF8] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#6D5EF8] transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#6D5EF8] transition-colors">
              Projects
            </a>
            <a href="#certificates" className="hover:text-[#6D5EF8] transition-colors">
              Certificates
            </a>
            <a href="#achievements" className="hover:text-[#6D5EF8] transition-colors">
              Achievements
            </a>
            <a href="#languages" className="hover:text-[#6D5EF8] transition-colors">
              Languages
            </a>
            <a href="#contact" className="hover:text-[#6D5EF8] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-gray-600 hover:text-[#6D5EF8] hover:border-[#6D5EF8]/30 transition-all shadow-2xs"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#F5F3FF] hover:bg-[#6D5EF8] text-[#6D5EF8] hover:text-white border border-[#6D5EF8]/20 transition-all shadow-2xs cursor-pointer"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <HiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed with <span className="text-[#6D5EF8]">Apple & Linear</span> aesthetics • Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

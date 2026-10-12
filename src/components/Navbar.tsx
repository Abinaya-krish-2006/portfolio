"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { HiMenu, HiX, HiDownload, HiUpload } from "react-icons/hi";
import { ResumeUpdateModal } from "./ResumeUpdateModal";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Languages", href: "#languages" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeVersion, setResumeVersion] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleOpenModal = () => setResumeModalOpen(true);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-resume-modal", handleOpenModal);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-resume-modal", handleOpenModal);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-xs border-b border-gray-100/90 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D5EF8] rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6D5EF8] to-[#9B8DFC] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                {PORTFOLIO_DATA.personal.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-base tracking-tight text-[#111827] group-hover:text-[#6D5EF8] transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase -mt-0.5">
                  Information Technology
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#6D5EF8] text-white shadow-xs"
                        : "text-gray-600 hover:text-[#111827] hover:bg-gray-100/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Upload Resume Button */}
              <button
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full bg-white hover:bg-[#F5F3FF] text-gray-700 hover:text-[#6D5EF8] border border-gray-200 hover:border-[#6D5EF8]/30 transition-all duration-200 shadow-2xs cursor-pointer group"
                title="Upload or update your resume"
              >
                <HiUpload className="text-[#6D5EF8] text-sm group-hover:-translate-y-0.5 transition-transform" />
                <span className="hidden md:inline">Update Resume</span>
              </button>

              {/* Download Resume Button */}
              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Abinaya_G_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#F5F3FF] text-[#6D5EF8] hover:bg-[#6D5EF8] hover:text-white border border-[#6D5EF8]/20 transition-all duration-200 shadow-xs group"
              >
                <HiDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="sm:hidden p-2 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700"
                title="Update Resume"
              >
                <HiUpload className="text-base text-[#6D5EF8]" />
              </button>
              <a
                href={PORTFOLIO_DATA.personal.resumePdf}
                download="Abinaya_G_Resume.pdf"
                className="sm:hidden p-2 text-xs font-semibold rounded-lg bg-[#F5F3FF] text-[#6D5EF8]"
                title="Download Resume"
              >
                <HiDownload className="text-base" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg px-5 py-4 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#6D5EF8] hover:bg-[#F5F3FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-[#F5F3FF] text-gray-800 text-sm font-semibold transition-colors"
                >
                  <HiUpload className="text-[#6D5EF8]" />
                  <span>Update / Upload Resume</span>
                </button>
                <a
                  href={PORTFOLIO_DATA.personal.resumePdf}
                  download="Abinaya_G_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#6D5EF8] text-white text-sm font-semibold shadow-xs"
                >
                  <HiDownload />
                  <span>Download Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Resume Update Center Modal */}
      <ResumeUpdateModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onUploadSuccess={() => {
          setResumeVersion(Date.now());
        }}
      />
    </>
  );
}

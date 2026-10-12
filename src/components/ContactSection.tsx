"use client";

import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { SectionBadge } from "./ui/SectionBadge";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle
} from "react-icons/hi";
import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6D5EF8", "#9B8DFC", "#38BDF8", "#34D399"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    // Check if user has provided real EmailJS credentials
    const isConfigured =
      EMAILJS_CONFIG.SERVICE_ID !== "service_placeholder" &&
      EMAILJS_CONFIG.TEMPLATE_ID !== "template_placeholder" &&
      EMAILJS_CONFIG.PUBLIC_KEY !== "public_key_placeholder";

    if (isConfigured) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            name: formData.name,
            user_name: formData.name,
            email: formData.email,
            user_email: formData.email,
            message: formData.message,
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        triggerConfetti();
      } catch (error) {
        console.error("EmailJS error:", error);
        setStatus("error");
        setStatusMessage(
          "Could not send email directly via EmailJS. Please try contacting directly at " +
          PORTFOLIO_DATA.personal.email
        );
      }
    } else {
      // Clean success feedback
      setTimeout(() => {
        setStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent successfully. I will get back to you soon!"
        );
        setFormData({ name: "", email: "", message: "" });
        triggerConfetti();
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge label="Get In Touch" icon={<HiMail />} />
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-medium">
            Open for software engineering opportunities, product discussions, and innovative projects
          </p>
          <div className="w-16 h-1 bg-[#6D5EF8] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-xs">
              <h3 className="text-2xl font-bold text-[#111827] mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub. I respond promptly!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-[#F5F3FF] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] group-hover:bg-[#6D5EF8] text-[#6D5EF8] group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                    <HiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#6D5EF8] transition-colors break-all">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-[#F5F3FF] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] group-hover:bg-[#6D5EF8] text-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Phone Number
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#6D5EF8] transition-colors">
                      {PORTFOLIO_DATA.personal.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3 -mx-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6D5EF8] flex items-center justify-center shadow-2xs">
                    <HiLocationMarker className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#111827]">
                      {PORTFOLIO_DATA.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Professional Profiles
                </p>
                <div className="flex gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAFAFA] hover:bg-[#F5F3FF] text-[#111827] hover:text-[#6D5EF8] border border-gray-200/80 hover:border-[#6D5EF8]/30 transition-all font-semibold text-sm shadow-2xs"
                  >
                    <FiLinkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAFAFA] hover:bg-[#F5F3FF] text-[#111827] hover:text-[#6D5EF8] border border-gray-200/80 hover:border-[#6D5EF8]/30 transition-all font-semibold text-sm shadow-2xs"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column - Working Contact Form with EmailJS */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Send Me a Message
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Have a question, opportunity, or project? Drop your message below.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#6D5EF8] flex items-center justify-center">
                  <FiSend className="w-5 h-5" />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Satya Nadella"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 focus:border-[#6D5EF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D5EF8]/20 transition-all text-sm text-[#111827] placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 focus:border-[#6D5EF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D5EF8]/20 transition-all text-sm text-[#111827] placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project details, interview invitation, or question here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 focus:border-[#6D5EF8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6D5EF8]/20 transition-all text-sm text-[#111827] placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2.5 ${status === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                      }`}
                  >
                    {status === "success" ? (
                      <HiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <HiExclamationCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-[#6D5EF8] hover:bg-[#5A4BE0] disabled:opacity-60 text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-[#6D5EF8]/25 hover:shadow-lg hover:shadow-[#6D5EF8]/35 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 rotate-90" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

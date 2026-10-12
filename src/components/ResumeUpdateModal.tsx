"use client";

import React, { useState, useRef } from "react";
import { HiX, HiUpload, HiDocumentText, HiCheckCircle, HiExclamationCircle, HiEye } from "react-icons/hi";
import confetti from "canvas-confetti";

interface ResumeUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess?: () => void;
}

export function ResumeUpdateModal({ isOpen, onClose, onUploadSuccess }: ResumeUpdateModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setStatus("error");
      setStatusMessage("Please select a PDF or image file first.");
      return;
    }

    setIsUploading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);

      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to upload file");
      }

      setStatus("success");
      setStatusMessage("Resume successfully updated! The download button is now synced with your new file.");
      setSelectedFile(null);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#6D5EF8", "#38BDF8", "#34D399"],
      });

      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "An error occurred while uploading.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#6D5EF8] flex items-center justify-center text-lg">
              <HiDocumentText />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111827]">
                Resume Update Center
              </h3>
              <p className="text-xs text-gray-500">
                Upload your updated resume anytime to automatically sync downloads
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Drag and Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 hover:border-[#6D5EF8] bg-[#FAFAFA] hover:bg-[#F5F3FF]/40 rounded-2xl p-8 text-center transition-all cursor-pointer group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="w-14 h-14 rounded-2xl bg-white shadow-xs mx-auto mb-4 flex items-center justify-center text-[#6D5EF8] group-hover:scale-110 transition-transform">
            <HiUpload className="w-7 h-7" />
          </div>

          <p className="text-sm font-bold text-gray-800 mb-1">
            {selectedFile ? selectedFile.name : "Click to select or drag & drop your resume"}
          </p>
          <p className="text-xs text-gray-400">
            Supports PDF, JPG, or PNG (Recommended: PDF)
          </p>

          {selectedFile && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Ready to upload ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
            </div>
          )}
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-4 p-4 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2.5 ${
              status === "success"
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

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#6D5EF8] hover:bg-[#5A4BE0] disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-md shadow-[#6D5EF8]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Syncing Resume...</span>
              </>
            ) : (
              <>
                <HiUpload className="w-4 h-4" />
                <span>Upload & Automatically Update</span>
              </>
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white border border-gray-200 hover:border-[#6D5EF8]/30 text-gray-700 text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-1.5 transition-colors"
          >
            <HiEye className="w-4 h-4 text-gray-500" />
            <span>View Current</span>
          </a>
        </div>
      </div>
    </div>
  );
}

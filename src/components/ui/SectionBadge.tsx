"use client";

import React from "react";

interface SectionBadgeProps {
  label: string;
  icon?: React.ReactNode;
}

export function SectionBadge({ label, icon }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F3FF] border border-[#6D5EF8]/20 text-[#6D5EF8] text-xs font-semibold tracking-wide uppercase shadow-xs">
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}

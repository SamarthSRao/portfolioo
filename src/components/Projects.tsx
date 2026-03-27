"use client";

import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Star } from "lucide-react";

const projects = [
  {
    title: "Jss Rooms",
    description: "Campus Connectivity & Event Management Platform with real-time chat and QR ticketing. Used by 400+ students during college fests.",
    tags: ["Go", "React 19", "PostgreSQL", "WebSockets", "Framer Motion"],
    link: "https://jssroom.space",
    stars: "400+ Users"
  },
  {
    title: "Inter Prep",
    description: "Collaborative interview preparation platform with category-based question banks and real-time progress tracking.",
    tags: ["Go", "Gin", "React 18", "PostgreSQL", "Tailwind CSS"],
    link: "https://prepterview.vercel.app",
    stars: "Live"
  },
  {
    title: "Eco-Quest",
    description: "Sustainable activity tracker incentivizing eco-friendly living through gamified milestones and leaderboards.",
    tags: ["Node.js", "Express", "MongoDB", "React 18", "JWT"],
    link: "https://github.com/SamarthSRao/eco-rewards",
    stars: "GitHub"
  }
];

export default function Projects({ onClose }: { onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState("PERSONAL");
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col overflow-hidden z-[50] pointer-events-auto"
      style={{
        width: "min(600px, -32px + 100vw)",
        height: "min(500px, -72px + 100vh)",
        borderRadius: "8px",
        border: "1px solid var(--window-border-focused)",
        boxShadow: "rgba(0, 0, 0, 0.9) 0px 40px 80px, rgb(0, 0, 0) 0px 0px 0px 0.5px",
        background: "var(--window-bg)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Title Bar */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex-none flex items-center h-7 px-4 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
      >
        <div className="flex items-center gap-1.5 z-10">
          <button
            onClick={onClose}
            className="w-2.5 h-2.5 rounded-full flex-none hover:opacity-80 transition-opacity border-none cursor-pointer"
            style={{ background: "rgb(255, 95, 87)" }}
          />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255, 255, 255, 0.08)" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255, 255, 255, 0.08)" }} />
        </div>
        <span
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.1em] pointer-events-none"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          Projects
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-6 py-6">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>
          Projects
        </h2>

        <div className="flex items-center gap-3 mb-2 border-b border-white/5">
          {["PERSONAL", "CLIENT WORK"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="pb-2 text-[10px] font-mono tracking-widest transition-colors relative"
              style={{ color: activeTab === tab ? "white" : "var(--text-faint)" }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-white"
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-1 pb-6">
          {projects.map((project, i) => (
            <div key={i} className="group border-b border-white/[0.03] pb-8 last:border-none">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold text-white text-[13px] tracking-tight">{project.title}</h4>
                  {project.stars && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5" style={{ color: "var(--text-faint)" }}>
                      <Star size={10} />
                      <span className="text-[10px] font-mono">{project.stars}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-[9px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-0">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
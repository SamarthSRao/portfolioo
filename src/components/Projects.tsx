"use client";

import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

export const projects = [
  {
    title: "Jss Rooms",
    description: "Campus Connectivity & Event Management Platform with real-time chat and QR ticketing. Used by 400+ students during college fests.",
    tags: ["Go", "React 19", "PostgreSQL", "WebSockets", "Framer Motion"],
    link: "https://jssroom.space/",
    stars: "400+ Users"
  },
  {
    title: "Inter Prep",
    description: "Collaborative interview preparation platform with category-based question banks and real-time progress tracking.",
    tags: ["Go", "Gin", "React 18", "PostgreSQL", "Tailwind CSS"],
    link: "https://prepterview.vercel.app/",
    stars: "Live"
  },
  {
    title: "Eco-Quest",
    description: "Sustainable activity tracker incentivizing eco-friendly living through gamified milestones and leaderboards.",
    tags: ["Node.js", "Express", "MongoDB", "React 18", "JWT"],
    link: "https://github.com/SamarthSRao/eco-rewards",
    stars: "GitHub"
  },
  {
    title: "reactorDb",
    description: "Custom Database Engine exploring database internals with B-Tree indexing and WAL.",
    tags: ["C++", "Databases"],
    link: "https://github.com/SamarthSRao/reactorDb",
    stars: "GitHub"
  },
  {
    title: "RSS Aggregator",
    description: "A custom RSS aggregator service for processing feeds.",
    tags: ["Go", "Backend"],
    link: "https://github.com/SamarthSRao/rss",
    stars: "GitHub"
  }
];

export default function Projects({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const [activeTab, setActiveTab] = useState("PERSONAL");
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 py-6'}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-5" style={{ color: "var(--text-muted)" }}>
        Projects
      </p>

      <div
        className="flex gap-5 mb-5"
        style={{ borderBottom: "1px solid var(--separator)" }}
      >
        {["PERSONAL", "CLIENT WORK"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="pb-2 text-[10px] font-mono tracking-widest transition-colors relative"
            style={{
              color: activeTab === tab ? "var(--text-primary)" : "var(--text-muted)",
              borderBottom: activeTab === tab ? "1px solid var(--accent)" : "1px solid transparent",
              marginBottom: -1,
            }}
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

      <div>
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-4"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[13px] font-semibold text-white group-hover:text-white/75 transition-colors">
                  {project.title}
                </span>
                {project.stars && (
                  <span
                    className="flex items-center gap-0.5 font-mono text-[10px]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    <Star size={9} className="fill-current" />
                    {project.stars}
                  </span>
                )}
              </div>

              <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                {project.tags.join(" · ")}
              </p>
            </div>
            <ArrowUpRight
              size={14}
              className="flex-none mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ color: "white" }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return <div className="w-full text-left">{content}</div>;
  }

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
        style={{ background: "var(--titlebar-bg)" }}
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
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}
"use client";

import { motion, useDragControls } from "framer-motion";
import { MapPin, Calendar as IconCalendar } from "lucide-react";

const experiences = [
  {
    company: "Exo Technologies",
    role: "Software Engineer",
    period: "Jun 2025 — Present",
    description: "Building Solana-based protocols and infrastructure solutions.",
    skills: ["Solana", "Rust", "TypeScript", "Anchor"]
  },
  {
    company: "Wildcard",
    role: "Full-Stack Blockchain Engineer",
    period: "Past",
    description: "Smart wallet infrastructure and multi-chain blockchain applications.",
    skills: ["Rust", "Solana", "EVM", "Next.js"]
  },
  {
    company: "Swifey AI",
    role: "Full-Stack Engineer",
    period: "Past",
    description: "Full-stack development across web, mobile, blockchain, and AI agents.",
    skills: ["FastAPI", "Node.js", "React", "Flutter", "Solana", "Rust"]
  },
  {
    company: "Veritas AO",
    role: "Founding Engineer",
    period: "Apr — Nov 2024",
    description: "Fair-launch token platform on Arweave's AO compute protocol.",
    skills: ["AO", "Lua", "TypeScript", "React"]
  }
];

export default function Experience({ onClose }: { onClose?: () => void }) {
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
        className="flex-none flex items-center h-9 px-3 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
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
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.1em] pointer-events-none"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          Experience
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="px-6 py-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-10" style={{ color: "var(--text-faint)" }}>
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="group border-b border-white/[0.03] pb-10 last:border-none">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight leading-tight mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>
                      <span>{exp.company}</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-white/50">
                      <IconCalendar size={10} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[12px] leading-relaxed mb-6 max-w-[95%]" style={{ color: "var(--text-secondary)" }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
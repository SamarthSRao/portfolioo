"use client";

import { motion, useDragControls } from "framer-motion";
import { ExternalLink, Mail, Github, Twitter, MapPin } from "lucide-react";

export default function Resume({ onClose }: { onClose?: () => void }) {
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
        width: "min(700px, -32px + 100vw)",
        height: "min(800px, -72px + 100vh)",
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
          Résumé — Chaitanya Bajpai
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="px-8 py-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Chaitanya Bajpai</h1>
              <p className="text-lg text-white/70 mb-4">Senior Rust / Solana Protocol & Systems Engineer</p>
              <div className="flex flex-wrap gap-4 text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail size={12} />
                  <span>cb7chaitanya@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github size={12} />
                  <span>cb7chaitanya</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Twitter size={12} />
                  <span>cbajpai7</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[11px] font-mono text-white/80">
              <ExternalLink size={12} />
              View on Notion
            </button>
          </div>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>Skills</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="w-32 flex-none text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>Protocol / Chain</span>
                <div className="flex flex-wrap gap-2">
                  {["Solana", "Anchor", "PDAs", "CPIs", "SPL Tokens", "AO Protocol", "Arweave", "EVM", "Solidity"].map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/70 border border-white/5">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-32 flex-none text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>Systems / Backend</span>
                <div className="flex flex-wrap gap-2">
                  {["Rust", "Actix Web", "Node.js", "TypeScript", "Go", "FastAPI", "Lua"].map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/70 border border-white/5">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-32 flex-none text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>Data / Infra</span>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "TimescaleDB", "Redis", "Docker", "AWS S3", "Indexer Architecture"].map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/70 border border-white/5">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-32 flex-none text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>Frontend / Mobile</span>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TailwindCSS", "Flutter"].map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/70 border border-white/5">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white tracking-tight">Exo Technologies</h3>
                    <span className="text-[11px]" style={{ color: "var(--text-faint)" }}>Senior Protocol Engineer</span>
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>Jun 2025 – Present</span>
                </div>
                <ul className="space-y-2 list-none p-0">
                  <li className="text-[12px] leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Auditing the Solana Record Service — an official Solana Foundation extension to the Solana Name Service (SNS)
                  </li>
                  <li className="text-[12px] leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Building indexing solutions and TypeScript SDKs for Doma's Solana DomainFi contracts
                  </li>
                  <li className="text-[12px] leading-relaxed flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Designed and implemented a two-step tokenomics program architecture for the SKR token launch
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

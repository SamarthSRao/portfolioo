"use client";

import { motion, useDragControls } from "framer-motion";
import { Twitter, Github, BookOpen } from "lucide-react";

export default function About({ onClose }: { onClose?: () => void }) {
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
        width: "min(500px, -32px + 100vw)",
        height: "min(440px, -72px + 100vh)",
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
          About
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="px-6 py-8 flex flex-col h-full" style={{ minHeight: "0px" }}>
          <div className="mb-5">
            <h1 className="font-semibold tracking-tight text-white leading-[0.92] mb-3" style={{ fontSize: "46px" }}>
              Chaitanya<br />Bajpai
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)" }}>
              Sr. Rust / Solana Protocol Engineer
            </p>
          </div>

          <div style={{ height: "1px", background: "var(--separator)", marginBottom: "20px" }} />

          <p className="text-[13px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
            Building systems at the intersection of distributed computing and on-chain finance.
            Protocols, indexers, smart contracts. Occasionally writes about Rust and the examined life.
          </p>

          <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: "1px solid var(--separator)" }}>
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-md overflow-hidden flex-none">
                <img
                  alt="Chaitanya Bajpai"
                  src="/pfp-1.webp"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://github.com/cb7chaitanya.png";
                  }}
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>cb7chaitanya</p>
                <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>Delhi · 22</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a href="https://x.com/cbajpai7" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" style={{ color: "var(--text-secondary)" }}>
                <Twitter size={15} />
              </a>
              <a href="https://github.com/cb7chaitanya" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" style={{ color: "var(--text-secondary)" }}>
                <Github size={15} />
              </a>
              <a href="https://medium.com/@cb7chaitanya" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" style={{ color: "var(--text-secondary)" }}>
                <BookOpen size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
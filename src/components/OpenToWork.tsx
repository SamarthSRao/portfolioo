"use client";

import { motion } from "framer-motion";

export default function OpenToWork() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{
        width: "232px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-3.5 py-3">
        <div className="flex items-center gap-2 pb-2.5 mb-2.5" style={{ borderBottom: "1px solid var(--separator)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: "rgb(74, 222, 128)" }}></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: "var(--text-secondary)" }}>Open to work</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-3 items-start">
            <span className="font-mono text-[9px] uppercase tracking-wider flex-none pt-px" style={{ color: "var(--text-faint)", width: "52px" }}>Building</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>Beagle Corp</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="font-mono text-[9px] uppercase tracking-wider flex-none pt-px" style={{ color: "var(--text-faint)", width: "52px" }}>Reading</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>The Phoenix project</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="font-mono text-[9px] uppercase tracking-wider flex-none pt-px" style={{ color: "var(--text-faint)", width: "52px" }}>Writing</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>Designing Data intenesive applications</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

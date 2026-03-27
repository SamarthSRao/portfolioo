"use client";

import { motion } from "framer-motion";

export default function VisitorCount() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{ 
        width: "160px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-4 py-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] mb-1.5" style={{ color: "var(--text-faint)" }}>Visitors</p>
        <p className="text-[28px] font-semibold leading-none text-white">2,075</p>
        <p className="font-mono text-[9px] mt-1.5" style={{ color: "var(--text-muted)" }}>total visits</p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{ 
        width: "240px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-4 py-3.5" style={{ minHeight: "74px" }}>
        <p className="text-[12px] leading-relaxed text-white/60">
          “Those sudden spikes of self-worth are reminders, not discoveries.”
        </p>
        <div className="flex items-center gap-1 mt-3">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="rounded-full transition-all duration-300"
              style={{ 
                width: i === 7 ? "12px" : "4px", 
                height: "3px", 
                background: i === 7 ? "var(--accent)" : "var(--accent-subtle)" 
              }} 
            />
          ))}
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] mt-2 text-white/20">
          — cb · writing
        </p>
      </div>
    </motion.div>
  );
}

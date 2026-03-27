"use client";

import { motion } from "framer-motion";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{ 
        width: "200px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-3 pt-3 pb-3">
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-[12px] font-semibold text-white">March</p>
          <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>2026</p>
        </div>
        <div className="grid grid-cols-7 mb-1">
          {days.map(d => (
            <div key={d} className="text-center font-mono text-[9px] py-0.5" style={{ color: "var(--text-faint)" }}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5">
          {dates.map(date => (
            <div 
              key={date} 
              className="flex items-center justify-center font-mono text-[10px]" 
              style={{ 
                height: "22px", 
                borderRadius: "4px",
                background: date === 27 ? "var(--accent-subtle)" : "transparent",
                color: date === 27 ? "var(--text-primary)" : "var(--text-secondary)",
                fontWeight: date === 27 ? 600 : 400,
                outline: date === 27 ? "1px solid var(--accent)" : "none",
                outlineOffset: "-1px"
              }}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

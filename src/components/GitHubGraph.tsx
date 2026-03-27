"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubGraph() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  
  // Contribution levels: 0 (empty), 1 (light), 2 (mid), 3 (dark), 4 (intense)
  const levels = [
    [0,1,3,1,3,0,0], [0,0,1,4,1,1,0], [0,10,14,8,0,4,0], [0,3,10,2,3,14,0], [3,4,19,6,4,0,0],
    [0,8,1,11,4,7,4], [2,13,17,7,1,12,0], [0,9,28,32,2,6,14], [4,8,10,18,19,0,9], [5,12,4,8,11,2,2],
    [0,5,17,7,0,0,0], [0,22,2,0,3,0,1], [0,0,2,0,8,5,0], [1,4,0,5,4,0,0], [0,2,1,0,1,0,0],
    [2,0,4,0,2,2,0], [0,4,2,1,0,0,0], [0,0,0,1,2,0,1], [0,0,0,0,2,5,0], [0,1,0,3,3,0,0],
    [0,0,0,1,3,2,0], [0,2,1,1,0,0,0], [0,0,0,1,1,0,0], [0,0,0,0,0,0,0], [0,0,0,0,3,0,1],
    [2,0,0,0,2,6,0], [0,0,0,2,0,4,3], [3,0,3,0,0,0,0], [0,0,0,0,2,1,2], [0,1,5,4,7,5,5],
    [6,12,16,2,1,0,0], [2,2,2,5,3,3,2], [0,3,1,0,0,3,0], [0,2,4,1,0,1,0], [0,1,0,0,1,0,0],
    [0,6,1,1,11,0,2], [0,3,4,4,1,0,0], [0,0,0,2,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0], [0,3,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [3,0,0,0,3,0,0],
    [0,0,0,0,0,0,1], [1,11,0,0,2,0,0], [0,3,0,0,0,0,0], [0,0,0,1,20,18,10], [11,4,4,1,7,31,2],
    [14,4,4,0,43,29,33], [24,71,45,2,1,8,0], [0,21,29,3,2,0,0]
  ];

  const getColor = (count: number) => {
    if (count === 0) return "var(--heatmap-empty)";
    if (count < 5) return "rgba(0, 200, 100, 0.25)";
    if (count < 15) return "rgba(0, 200, 100, 0.45)";
    if (count < 30) return "rgba(0, 200, 100, 0.7)";
    return "rgba(0, 200, 100, 0.95)";
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{ 
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-4 pt-3 pb-3">
        <div className="flex items-center justify-between mb-2.5 gap-8">
          <div className="flex items-center gap-1.5 text-white/30">
            <Github size={11} />
            <span className="text-[10px] font-medium text-white/60">cb7chaitanya</span>
          </div>
          <span className="text-[10px] text-white/40">1,184 contributions this year</span>
        </div>
        
        <div>
          <div className="relative h-3.5 mb-0.5 flex" style={{ width: "530px" }}>
            {months.map((m, i) => (
              <span key={i} className="text-[9px] text-white/30" style={{ position: "absolute", left: `${i * 42}px` }}>{m}</span>
            ))}
          </div>
          <div className="flex gap-[2px]">
            {levels.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.map((count, j) => (
                  <div 
                    key={j} 
                    title={`${count} contributions`}
                    className="w-[10px] h-[10px] rounded-[2px] transition-colors hover:scale-110" 
                    style={{ background: getColor(count) }} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

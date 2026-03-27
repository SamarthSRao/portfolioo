"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Loader2 } from "lucide-react";

interface ContributionDay {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface GitHubData {
  totalContributions: number;
  weeks: ContributionDay[][];
}

export default function GitHubGraph() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/SamarthSRao.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 bg-black/20 rounded-xl border border-white/5 min-w-[300px]">
        <Loader2 className="w-5 h-5 text-white/20 animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center p-8 bg-black/20 rounded-xl border border-white/5 min-w-[300px]">
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Failed to load GitHub activity</span>
      </div>
    );
  }

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
            <span className="text-[10px] font-medium text-white/60">SamarthSRao</span>
          </div>
          <span className="text-[10px] text-white/40">{data.totalContributions.toLocaleString()} contributions this year</span>
        </div>
        
        <div>
          <div className="relative h-3.5 mb-0.5 flex" style={{ width: "530px" }}>
            {months.map((m, i) => (
              <span key={i} className="text-[9px] text-white/30" style={{ position: "absolute", left: `${i * 42}px` }}>{m}</span>
            ))}
          </div>
          <div className="flex gap-[2px]">
            {data.weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.map((day, j) => (
                  <div 
                    key={j} 
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    className="w-[10px] h-[10px] rounded-[2px] transition-colors hover:scale-110" 
                    style={{ 
                        background: day.contributionCount === 0 ? "var(--heatmap-empty)" : day.color,
                        opacity: day.contributionCount === 0 ? 0.3 : 0.9
                    }} 
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

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Spotify() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Spotify fetch error", e);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.isPlaying;

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing pointer-events-auto"
      style={{ 
        width: "272px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: isPlaying ? "rgb(29, 185, 84)" : "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <a 
        href={isPlaying ? data.songUrl : "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-white/[0.02]"
      >
        <div className="relative w-10 h-10 flex-none rounded-[4px] overflow-hidden bg-white/5 border border-white/5">
          {isPlaying ? (
            <img src={data.albumImageUrl} alt={data.album} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/10">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.1 16.14c-.18.3-.54.36-.84.24-2.34-1.44-5.28-1.74-8.76-.96-.36.06-.66-.18-.72-.48-.06-.36.18-.66.48-.72 3.84-.9 7.08-.54 9.72 1.08.3.18.36.54.12.84zm1.26-3c-.24.36-.72.48-1.08.24-2.7-1.62-6.84-2.1-10.02-1.14-.42.12-.84-.12-.96-.54-.12-.42.12-.84.54-.96 3.66-1.08 8.28-.54 11.4 1.38.3.18.42.66.12 1.02zm.12-3.12C15.84 8.22 9.54 8.04 5.88 9.12c-.54.18-1.08-.12-1.26-.6-.18-.54.12-1.08.6-1.26 4.14-1.26 11.1-1.02 15.42 1.56.48.3.66.9.36 1.38-.24.48-.84.66-1.32.36z" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          {isPlaying ? (
            <>
              <p className="text-[11px] font-bold text-white truncate tracking-tight">{data.title}</p>
              <p className="font-mono text-[9px] text-white/40 truncate">{data.artist}</p>
            </>
          ) : (
            <p className="font-mono text-[10px] text-white/40">Not playing</p>
          )}
        </div>
        <div className="flex-none">
          <div className={`w-3 h-3 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-green-500/20 shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'bg-white/5'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-white/10'}`} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-7 z-[100] flex items-center justify-between px-4 select-none backdrop-blur-md"
      style={{
        background: "var(--menubar-bg)",
        borderBottom: "1px solid var(--window-border-unfocused)"
      }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255, 255, 255, 0.9)" }}>SAM</span>
        <span style={{ color: "rgba(255, 255, 255, 0.15)", fontSize: "10px" }}>|</span>
        <span className="font-mono text-[11px] tracking-wide" style={{ color: "rgba(255, 255, 255, 0.4)" }}>About</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>↑ 2,074</span>
        </div>
        <span style={{ color: "rgba(255, 255, 255, 0.35)" }}>{format(time, "EEE, MMM d")}</span>
        <span style={{ color: "rgba(255, 255, 255, 0.55)" }}>{format(time, "HH:mm")}</span>
      </div>
    </div>
  );
}

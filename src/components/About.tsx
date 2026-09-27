"use client";

import { useDragControls } from "framer-motion";
import { Twitter, Github } from "lucide-react";
import { X_URL } from "@/config/site";
import { StudioWindow } from "./desktop/StudioChrome";

export default function About({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 pt-7 pb-6'} flex flex-col h-full`} style={{ minHeight: "0px" }}>
      <div className="mb-5">
        <h1 className={isMobile ? "text-[42px] font-semibold tracking-tight text-white leading-[0.92] mb-3" : "studio-display"}>
          {isMobile ? <>Samarth<br />S</> : "\"SAMARTH S RAO\""}
        </h1>
        <p className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.14em]" : "studio-index"} style={isMobile ? { color: "var(--text-secondary)" } : { textAlign: "left" }}>
          Backend Developer · Engineer · Building Systems
        </p>
        {!isMobile && (
          <p className="studio-spec">
            <i aria-hidden="true" />
            BLR · 12.97°N · 77.59°E
          </p>
        )}
      </div>

      <div style={{ height: "1px", background: "var(--separator)", marginBottom: "20px" }} />

      <p className={`${isMobile ? 'text-[14px]' : 'text-[13px]'} leading-[1.75]`} style={{ color: "var(--text-secondary)" }}>
        currently learning how distributed systems work,
        exploring backend systems and database internals in depth.
        and sometimes vibecoding uis just for fun          </p>

      <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: "1px solid var(--separator)" }}>
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-md overflow-hidden flex-none border border-white/10">
            <img
              alt="Samarth S Rao"
              src="https://github.com/SamarthSRao.png"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>SamarthSRao</p>
            <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>Bengaluru · India</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="Samarth on X" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" style={{ color: "var(--text-secondary)" }}>
            <Twitter size={15} />
          </a>
          <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" style={{ color: "var(--text-secondary)" }}>
            <Github size={15} />
          </a>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return <div className="w-full text-left">{content}</div>;
  }

  return (
    <StudioWindow
      title="ABOUT"
      index="01"
      onClose={onClose}
      dragControls={dragControls}
      width="min(540px, calc(100vw - 48px))"
      height="min(480px, calc(100vh - 120px))"
    >
      {content}
    </StudioWindow>
  );
}
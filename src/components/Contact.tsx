"use client";

import { motion, useDragControls } from "framer-motion";
import { Mail, Calendar } from "lucide-react";

export default function Contact({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const contactItems = [
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: "hello@samarth.dev",
      url: "mailto:hello@samarth.dev",
    },
    {
      icon: <Calendar size={16} />,
      label: "Schedule a call",
      value: "cal.com/samarthsrao",
      url: "https://cal.com/samarthsrao",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X / Twitter",
      value: "@SamarthSRao",
      url: "https://twitter.com/SamarthSRao",
    },
  ];

  const content = (
    <div className={`flex flex-col h-full ${isMobile ? 'py-8' : 'px-8 py-10'}`}>
      <div className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: "var(--text-faint)" }}>
          Contact
        </p>
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold tracking-tight text-white mb-3`}>
          Let's Connect
        </h2>
        <p className={`${isMobile ? 'text-[15px]' : 'text-[14px]'} leading-relaxed`} style={{ color: "var(--text-secondary)" }}>
          Open to collaborations, freelance work, or just a conversation.
        </p>
      </div>

      <div style={{ height: "1px", background: "var(--separator)", marginBottom: "0px" }} />

      <div className="flex flex-col">
        {contactItems.map((item, i) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-5 group transition-colors border-b border-white/5 last:border-none"
          >
            <div className="flex items-center gap-4">
              <span style={{ color: "var(--text-secondary)" }} className="group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className={`${isMobile ? 'text-[15px]' : 'text-[14px]'} font-medium text-white/80 group-hover:text-white transition-colors`}>
                {item.label}
              </span>
            </div>
            <span className="font-mono text-[11px] text-white/20 group-hover:text-white/40 transition-colors">
              {item.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return <div className="w-full">{content}</div>;
  }

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
        width: "min(460px, -32px + 100vw)",
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
        className="flex-none flex items-center h-10 px-4 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
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
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.15em] pointer-events-none"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          Contact
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}
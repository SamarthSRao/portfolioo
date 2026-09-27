"use client";

import { useDragControls } from "framer-motion";
import { StudioWindow } from "./desktop/StudioChrome";
import { Mail, Calendar } from "lucide-react";
import { X_URL } from "@/config/site";

export default function Contact({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const contactItems = [
    {
      icon: <Mail size={15} />,
      label: "Email",
      value: "hello@samarth.dev",
      url: "mailto:hello@samarth.dev",
    },
    {
      icon: <Calendar size={15} />,
      label: "Schedule a call",
      value: "cal.com/samarthsrao",
      url: "https://cal.com/samarthsrao",
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X / Twitter",
      value: "@Samarthssrao",
      url: X_URL,
    },
  ];

  const content = (
    <div className={`flex flex-col h-full ${isMobile ? 'py-6 px-4' : 'px-6 py-6'}`}>
      <div className="mb-8">
        <p className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.14em] mb-2" : "studio-kicker"} style={isMobile ? { color: "var(--text-muted)" } : undefined}>
          {isMobile ? "Contact" : "\"CONTACT\""}
        </p>
        <h2 className="text-[22px] font-semibold text-white mb-1">
          Let&apos;s Connect
        </h2>
        <p className="text-[13px] mb-7" style={{ color: "var(--text-secondary)" }}>
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
            className="flex items-center justify-between py-4 group transition-colors"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
            }}
          >
            <div className="flex items-center gap-4">
              <span style={{ color: "var(--text-secondary)" }} className="group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className={`${isMobile ? 'text-[15px]' : 'text-[13px]'} font-medium text-white/70 group-hover:text-white transition-colors`}>
                {item.label}
              </span>
            </div>
            <span className="font-mono text-[10px] group-hover:text-white/50 transition-colors" style={{ color: "var(--text-faint)" }}>
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
    <StudioWindow title="CONTACT" index="05" onClose={onClose} dragControls={dragControls} width="min(480px, calc(100vw - 48px))">
      {content}
    </StudioWindow>
  );
}
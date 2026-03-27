"use client";

import { motion, useDragControls } from "framer-motion";
import { ExternalLink, Mail, Github, Twitter, MapPin } from "lucide-react";

export default function Resume({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-5 py-5'}`}>
          {/* Header */}
          <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-between items-start'} mb-8`}>
            <div>
              <h1 className={`${isMobile ? 'text-[32px]' : 'text-[20px]'} font-bold text-white tracking-tight`}>Samarth S Rao</h1>
              <p className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} text-white/70 mb-4`}>Backend Developer | Engineer | Building Systems</p>
              <div className="flex flex-col gap-2 text-[11px] font-mono" style={{ color: "var(--text-faint)" }}>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-1.5 underline">
                  <Mail size={12} />
                  <span>Samarthz0901@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github size={12} />
                  <span>SamarthSRao</span>
                </div>
              </div>
            </div>
            {!isMobile && (
              <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[11px] font-mono text-white/80">
                <Github size={12} />
                GitHub Profile
              </a>
            )}
          </div>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>Skills</h2>
            <div className="space-y-6">
              {[
                { label: "Backend", items: ["RESTful APIs", "Microservices", "gRPC", "JWT", "OAuth2", "WebSockets"] },
                { label: "Languages", items: ["Go", "Java", "TypeScript", "JavaScript", "SQL"] },
                { label: "Infrastructure", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Linux/Shell"] }
              ].map(group => (
                <div key={group.label} className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-4'}`}>
                  <span className={`${isMobile ? 'w-full' : 'w-32'} flex-none text-[11px] font-mono`} style={{ color: "var(--text-faint)" }}>{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span key={skill} className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-white/70 border border-white/5">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects as Experience */}
          <section className="mb-10">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>Featured Projects</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className={`${isMobile ? 'text-lg' : 'text-base'} font-bold text-white tracking-tight`}>Jss Rooms — Event Management</h3>
                  {!isMobile && <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>Industrial Design System</span>}
                </div>
                <ul className="space-y-2 list-none p-0">
                  <li className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} leading-relaxed flex gap-2`} style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Built a real-time collaboration platform used by 400+ students for campus activities.
                  </li>
                  <li className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} leading-relaxed flex gap-2`} style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Implemented digital ticketing with real-time QR code verification and WebSocket chat.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className={`${isMobile ? 'text-lg' : 'text-base'} font-bold text-white tracking-tight`}>Inter Prep — Interview Platform</h3>
                  {!isMobile && <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>Go & Gin</span>}
                </div>
                <ul className="space-y-2 list-none p-0">
                  <li className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} leading-relaxed flex gap-2`} style={{ color: "var(--text-secondary)" }}>
                    <span className="text-white/20">•</span>
                    Designed high-performance backend with Gin, featuring secure JWT-based authentication.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
  );

  if (isMobile) {
    return <div className="w-full text-left">{content}</div>;
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
        width: "min(600px, -32px + 100vw)",
        height: "min(700px, -72px + 100vh)",
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
        className="flex-none flex items-center h-7 px-3 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
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
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.1em] pointer-events-none"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          Résumé — Samarth S Rao
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}

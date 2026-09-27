"use client";

import { useDragControls } from "framer-motion";
import { ExternalLink, Mail, Github, MapPin } from "lucide-react";
import { StudioWindow } from "./desktop/StudioChrome";

export default function Resume({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-5 py-5'}`}>
      {/* Header */}
      <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-between items-start'} mb-8`}>
        <div>
          <h1 className={isMobile ? "text-[32px] font-bold text-white tracking-tight" : "studio-display"} style={isMobile ? undefined : { fontSize: "36px", marginBottom: "8px" }}>
            {isMobile ? "Samarth S Rao" : "\"SAMARTH S RAO\""}
          </h1>
          <p className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} text-white/70 mb-4`}>Backend Developer | Engineer | Distributed Systems</p>
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
          <div className="flex gap-2">
            <a href="/resume.docx" download className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[11px] font-mono text-white/80">
              <ExternalLink size={12} />
              Download
            </a>
            <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-[11px] font-mono text-white/80">
              <Github size={12} />
              GitHub
            </a>
          </div>
        )}
      </div>

      {/* Skills */}
      <section className="mb-10">
        <h2 className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.2em] mb-6" : "studio-kicker"} style={isMobile ? { color: "var(--text-faint)" } : undefined}>{isMobile ? "Skills" : "\"SKILLS\""}</h2>
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
        <h2 className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.2em] mb-6" : "studio-kicker"} style={isMobile ? { color: "var(--text-faint)" } : undefined}>{isMobile ? "Featured Projects" : "\"PROJECTS\""}</h2>
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
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className={`${isMobile ? 'text-lg' : 'text-base'} font-bold text-white tracking-tight`}>reactorDb</h3>
              {!isMobile && <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>Go · object store</span>}
            </div>
            <ul className="space-y-2 list-none p-0">
              <li className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} leading-relaxed flex gap-2`} style={{ color: "var(--text-secondary)" }}>
                <span className="text-white/20">•</span>
                Early-stage Git-style content-addressed object store: a blob type and a test so far, with a plan for objects, packfiles, and refs.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className={`${isMobile ? 'text-lg' : 'text-base'} font-bold text-white tracking-tight`}>RSS Aggregator</h3>
              {!isMobile && <span className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>Go & PostgreSQL</span>}
            </div>
            <ul className="space-y-2 list-none p-0">
              <li className={`${isMobile ? 'text-[14px]' : 'text-[12px]'} leading-relaxed flex gap-2`} style={{ color: "var(--text-secondary)" }}>
                <span className="text-white/20">•</span>
                A high-performance custom RSS aggregator service for processing feeds.
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
    <StudioWindow title="RÉSUMÉ" index="06" onClose={onClose} dragControls={dragControls} width="min(640px, calc(100vw - 48px))" height="min(680px, calc(100vh - 120px))">
      {content}
    </StudioWindow>
  );
}

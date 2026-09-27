"use client";

import { useDragControls } from "framer-motion";
import { StudioWindow } from "./desktop/StudioChrome";
import { MapPin, Calendar as IconCalendar } from "lucide-react";

export const experiences = [
  {
    company: "Surya Fintech",
    role: "Intern",
    period: "Present",
    description: "Backend Developer Intern working on financial technologies.",
    skills: ["Go", "Gin", "PostgreSQL", "WebSockets", "GORM"],
    link: ""
  },
  {
    company: "Beagle Corporation",
    role: "Freelancer / Intern",
    period: "Previous",
    description: "Freelancer working on AI assisted projects.",
    skills: ["AI", "React", "Node.js"],
    link: "https://beaglecorp.com/"
  }
];

export default function Experience({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 py-6'}`}>
      <p className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.14em] mb-5" : "studio-kicker"} style={isMobile ? { color: "var(--text-muted)" } : undefined}>
        {isMobile ? "Experience" : "\"EXPERIENCE\""}
      </p>

      <div>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group cursor-pointer py-4"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
            }}
          >
              <div className="flex items-baseline justify-between gap-4 mb-1.5">
                <div className="flex items-baseline gap-2 min-w-0">
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-white group-hover:text-white/80 transition-colors truncate hover:underline">
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-[14px] font-semibold text-white group-hover:text-white/80 transition-colors truncate">
                      {exp.company}
                    </span>
                  )}
                  <span
                    className="font-mono text-[10px] truncate"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.role}
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] flex-none"
                  style={{ color: "var(--text-faint)" }}
                >
                  {exp.period}
                </span>
              </div>

              <p className="text-[12px] mb-2" style={{ color: "var(--text-secondary)" }}>
                {exp.description}
              </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono"
                  style={{ color: "var(--text-faint)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return <div className="w-full text-left">{content}</div>;
  }

  return (
    <StudioWindow title="EXPERIENCE" index="02" onClose={onClose} dragControls={dragControls} width="min(640px, calc(100vw - 48px))" height="min(520px, calc(100vh - 120px))">
      {content}
    </StudioWindow>
  );
}
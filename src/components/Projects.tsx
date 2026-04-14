"use client";

import { motion, useDragControls } from "framer-motion";

const projects = [
  {
    title: "WAL-Kv",
    description: "A write-ahead log based key-value storage engine built in Go. Implements crash recovery, segment-based WAL flushing, and durable commit semantics from scratch.",
    tags: ["Go", "Storage Engine", "WAL", "Crash Recovery", "Durability"],
    link: "https://github.com/SamarthSRao/Wal-Kv",
    badge: "Systems",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/5"
  },
  {
    title: "sbloom",
    description: "A Bloom filter implementation in Go for probabilistic set membership testing. Uses multiple hash functions to achieve space-efficient false-positive-bounded lookups.",
    tags: ["Go", "Bloom Filter", "Probabilistic DS", "Hashing"],
    link: "https://github.com/SamarthSRao/sbloom",
    badge: "Data Structures",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/5"
  },
  {
    title: "Hackblog",
    description: "Full-stack blogging platform with AI-powered content generation. Features Docker Compose setup, REST API backend, and a React frontend deployed to AWS App Runner.",
    tags: ["Node.js", "React", "PostgreSQL", "Docker", "AWS", "Gemini AI"],
    link: "https://github.com/SamarthSRao/hackblog",
    badge: "Full Stack",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/5"
  },
  {
    title: "Jss Rooms",
    description: "Campus connectivity & event management platform with real-time chat and QR ticketing. Served 400+ concurrent students during college fests with Go-powered WebSocket goroutines.",
    tags: ["Go", "WebSockets", "PostgreSQL", "React 19", "Framer Motion"],
    link: "https://jssroom.space/",
    badge: "Live",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
  },
  {
    title: "Inter Prep",
    description: "Collaborative interview preparation platform with category-based question banks and real-time progress tracking. Built with Go/Gin for high-throughput query handling.",
    tags: ["Go", "Gin", "PostgreSQL", "React 18", "Tailwind CSS"],
    link: "https://prepterview.vercel.app/",
    badge: "Live",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
  },
  {
    title: "go-typing",
    description: "A terminal-based typing speed test written in pure Go. Measures WPM and accuracy in real-time, using raw terminal I/O and goroutine-based input processing.",
    tags: ["Go", "TUI", "Terminal", "Goroutines", "Raw I/O"],
    link: "https://github.com/SamarthSRao/go-typing",
    badge: "CLI",
    badgeColor: "text-white/40 border-white/10 bg-white/5"
  },
  {
    title: "Eco-Quest",
    description: "Sustainable activity tracker incentivizing eco-friendly living through gamified milestones and global leaderboards. Uses MongoDB oplog and Redis cache for score aggregation.",
    tags: ["Node.js", "Express", "MongoDB", "React 18", "JWT"],
    link: "https://github.com/SamarthSRao/eco-rewards",
    badge: "Open Source",
    badgeColor: "text-white/40 border-white/10 bg-white/5"
  },
];

export default function Projects({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 py-6'}`}>
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--text-faint)" }}>
        Projects
      </h2>

      <div className="space-y-1 pb-6">
        {projects.map((project, i) => (
          <div key={i} className="group border-b border-white/[0.03] pb-8 last:border-none">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2"
                >
                  <h4 className={`${isMobile ? 'text-lg' : 'text-base'} font-bold text-white tracking-tight group-hover/link:text-white/80 transition-colors`}>
                    {project.title}
                  </h4>
                </a>
              </div>
            </div>

            <p className={`${isMobile ? 'text-[14px]' : 'text-[11px]'} leading-relaxed mb-4`} style={{ color: "var(--text-secondary)" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.tags.map((tag, j) => (
                <span key={j} className="text-[10px] font-mono" style={{ color: "var(--text-faint)" }}>
                  {tag}
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
        height: "min(500px, -72px + 100vh)",
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
        className="flex-none flex items-center h-7 px-4 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
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
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.1em] pointer-events-none"
          style={{ color: "rgba(255, 255, 255, 0.45)" }}
        >
          Projects
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}
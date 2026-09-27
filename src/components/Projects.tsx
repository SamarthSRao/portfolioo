"use client";

import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { StudioWindow } from "./desktop/StudioChrome";

export const projects = [
  {
    title: "Hackblog",
    description: "A blog platform built with Next.js and deployed on AWS Amplify.",
    tags: ["Next.js", "Blog", "AWS Amplify"],
    link: "https://main.d2ncu76bbgdazq.amplifyapp.com/",
    stars: "Live"
  },
  {
    title: "WAL KV Store",
    description: "A Go write-ahead log writer. Appends set and delete entries with a CRC32 checksum, a mutex around each write, and fsync on every append.",
    tags: ["Go", "WAL"],
    link: "https://github.com/SamarthSRao/Wal-Kv",
    stars: "GitHub"
  },
  {
    title: "Jss Rooms",
    description: "Campus Connectivity & Event Management Platform with real-time chat and QR ticketing. Used by 400+ students during college fests.",
    tags: ["Go", "React 19", "PostgreSQL", "WebSockets", "Framer Motion"],
    link: "https://jssroom.space/",
    stars: "400+ Users"
  },
  {
    title: "Inter Prep",
    description: "Collaborative interview preparation platform with category-based question banks and real-time progress tracking.",
    tags: ["Go", "Gin", "React 18", "PostgreSQL", "Tailwind CSS"],
    link: "https://prepterview.vercel.app/",
    stars: "Live"
  },
  {
    title: "Eco-Quest",
    description: "Sustainable activity tracker incentivizing eco-friendly living through gamified milestones and leaderboards.",
    tags: ["Node.js", "Express", "MongoDB", "React 18", "JWT"],
    link: "https://github.com/SamarthSRao/eco-rewards",
    stars: "GitHub"
  },
  {
    title: "reactorDb",
    description: "An early-stage Git-style content-addressed object store. The code so far is a blob type and a test; the project plan covers objects, packfiles, and refs.",
    tags: ["Go", "Storage"],
    link: "https://github.com/SamarthSRao/reactorDb",
    stars: "GitHub"
  },
  {
    title: "RSS Aggregator",
    description: "A custom RSS aggregator service for processing feeds.",
    tags: ["Go", "Backend"],
    link: "https://github.com/SamarthSRao/rss",
    stars: "GitHub"
  },
  {
    title: "tcp_next",
    description: "A Postgres connection-pooling proxy. It accepts client connections and forwards simple queries to a fixed pool of backend connections.",
    tags: ["Go", "Postgres"],
    link: "https://github.com/SamarthSRao/tcp_next",
    stars: "GitHub"
  },
  {
    title: "sbloom",
    description: "Implementation of a Scalable Bloom Filter.",
    tags: ["Go", "Data Structures"],
    link: "https://github.com/SamarthSRao/sbloom",
    stars: "GitHub"
  }
];

export default function Projects({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const [activeTab, setActiveTab] = useState("PERSONAL");
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 py-6'}`}>
      <p className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.14em] mb-5" : "studio-kicker"} style={isMobile ? { color: "var(--text-muted)" } : undefined}>
        {isMobile ? "Projects" : "\"PROJECTS\""}
      </p>

      <div
        className="flex gap-5 mb-5"
        style={{ borderBottom: "1px solid var(--separator)" }}
      >
        {["PERSONAL", "CLIENT WORK"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="pb-2 text-[10px] font-mono tracking-widest transition-colors relative"
            style={{
              color: activeTab === tab ? "var(--text-primary)" : "var(--text-muted)",
              borderBottom: activeTab === tab ? "1px solid var(--accent)" : "1px solid transparent",
              marginBottom: -1,
            }}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-px bg-white"
              />
            )}
          </button>
        ))}
      </div>

      <div>
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-4"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[13px] font-semibold text-white group-hover:text-white/75 transition-colors">
                  {project.title}
                </span>
                {project.stars && (
                  <span
                    className="flex items-center gap-0.5 font-mono text-[10px]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    <Star size={9} className="fill-current" />
                    {project.stars}
                  </span>
                )}
              </div>

              <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                {project.tags.join(" · ")}
              </p>
            </div>
            <ArrowUpRight
              size={14}
              className="flex-none mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ color: "white" }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return <div className="w-full text-left">{content}</div>;
  }

  return (
    <StudioWindow title="PROJECTS" index="03" onClose={onClose} dragControls={dragControls} width="min(640px, calc(100vw - 48px))" height="min(540px, calc(100vh - 120px))">
      {content}
    </StudioWindow>
  );
}
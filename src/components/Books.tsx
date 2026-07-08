"use client";

import { motion, useDragControls } from "framer-motion";
import { BookOpen } from "lucide-react";

export const books = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    status: "Reading",
    description: "The big ideas behind reliable, scalable, and maintainable systems.",
  },
  {
    title: "Database Internals",
    author: "Alex Petrov",
    status: "Reading",
    description: "A deep dive into how distributed data systems work under the hood.",
  },
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    status: "Completed",
    description: "A craftsman's guide to software structure and design.",
  }
];

export default function Books({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();

  const content = (
    <div className={`${isMobile ? 'px-4 py-6' : 'px-6 py-6'}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-5" style={{ color: "var(--text-muted)" }}>
        Books
      </p>

      <div className="flex flex-col gap-5">
        {books.map((book, i) => (
          <div
            key={i}
            className="group py-4"
            style={{
              borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
              borderBottom: "1px solid var(--separator)",
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[14px] font-semibold text-white group-hover:text-white/75 transition-colors">
                  {book.title}
                </span>
                <span
                  className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono"
                  style={{ color: book.status === 'Reading' ? 'var(--accent)' : 'var(--text-faint)' }}
                >
                  {book.status}
                </span>
              </div>
              
              <p className="font-mono text-[11px] mb-2" style={{ color: "var(--text-faint)" }}>
                by {book.author}
              </p>

              <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                {book.description}
              </p>
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
        style={{ background: "var(--titlebar-bg)" }}
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
          Books
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}

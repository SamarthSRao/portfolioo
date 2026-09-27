"use client";

import { useDragControls } from "framer-motion";
import { StudioWindow } from "./desktop/StudioChrome";

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
      <p className={isMobile ? "font-mono text-[10px] uppercase tracking-[0.14em] mb-5" : "studio-kicker"} style={isMobile ? { color: "var(--text-muted)" } : undefined}>
        {isMobile ? "Books" : "\"BOOKS\""}
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
    <StudioWindow title="BOOKS" index="04" onClose={onClose} dragControls={dragControls} width="min(640px, calc(100vw - 48px))" height="min(520px, calc(100vh - 120px))">
      {content}
    </StudioWindow>
  );
}

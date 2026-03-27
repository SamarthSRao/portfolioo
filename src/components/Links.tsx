"use client";

import { motion } from "framer-motion";

export default function Links() {
  const links = [
    { title: "The Zen of Erlang", site: "Fred Hebert · systems", url: "https://ferd.ca/the-zen-of-erlang.html" },
    { title: "Fearless Concurrency", site: "The Rust Book · rust", url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html" },
    { title: "without.boats", site: "withoutboats · rust", url: "https://without.boats" },
    { title: "Meditations", site: "Marcus Aurelius · philosophy", url: "https://www.gutenberg.org/ebooks/2680" },
    { title: "Solana Program Library", site: "Solana Labs · solana", url: "https://spl.solana.com" },
  ];

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="select-none overflow-hidden rounded-xl border border-white/10 cursor-grab active:cursor-grabbing"
      style={{ 
        width: "240px",
        background: "var(--window-bg)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 32px"
      }}
    >
      <div className="px-3 py-2 border-b border-white/5 flex items-center">
        <div style={{ width: "24px", height: "2px", borderRadius: "1px", background: "rgba(255, 255, 255, 0.12)" }} />
      </div>
      <div className="px-3 pt-2.5 pb-1" style={{ borderBottom: "1px solid var(--separator)" }}>
        <p className="font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: "var(--text-faint)" }}>Links · worth reading</p>
      </div>
      <div>
        {links.map((link, i) => (
          <a 
            key={link.url}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between px-3 py-2 group hover:bg-white/5 transition-colors" 
            style={{ borderBottom: i === links.length - 1 ? "none" : "1px solid var(--item-separator)" }}
          >
            <div className="min-w-0">
              <p className="text-[11px] leading-tight truncate text-white/80 group-hover:text-white transition-colors">{link.title}</p>
              <p className="font-mono text-[9px] mt-0.5" style={{ color: "var(--text-faint)" }}>{link.site}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

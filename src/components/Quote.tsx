"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const QUOTES = [
  { text: "Those sudden spikes of self-worth are reminders, not discoveries.", author: "cb · writing" },
  { text: "Make it simple, but significant.", author: "Don Draper" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Good design is actually a lot harder to notice than poor design.", author: "Don Norman" },
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
  { text: "Design is intelligence made visible.", author: "Alina Wheeler" }
];

export default function Quote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
      <div className="px-4 py-3.5" style={{ minHeight: "84px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-[12px] leading-relaxed text-white/60">
              “{QUOTES[index].text}”
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] mt-2 text-white/20">
              — {QUOTES[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex items-center gap-1 mt-4">
          {QUOTES.map((_, i) => (
            <div 
              key={i} 
              className="rounded-full transition-all duration-300"
              style={{ 
                width: i === index ? "12px" : "4px", 
                height: "3px", 
                background: i === index ? "var(--accent)" : "var(--accent-subtle)" 
              }} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

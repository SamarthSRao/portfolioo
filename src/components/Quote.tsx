"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WidgetFrame } from "./desktop/StudioChrome";

const QUOTES = [
  { text: "Do you want it or do you like the idea of it?", author: "Writing" },
  { text: "Make it simple, but significant.", author: "Don Draper" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Good design is actually a lot harder to notice than poor design.", author: "Don Norman" },
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
  { text: "Design is intelligence made visible.", author: "Alina Wheeler" },
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
    <WidgetFrame label="NOTE" meta={`${String(index + 1).padStart(2, "0")} / ${String(QUOTES.length).padStart(2, "0")}`} width={280}>
      <div className="px-4 py-4" style={{ minHeight: "128px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-[15px] leading-snug font-medium" style={{ color: "var(--studio-ink)" }}>
              &quot;{QUOTES[index].text}&quot;
            </p>
            <p className="studio-index mt-3" style={{ textAlign: "left" }}>
              {QUOTES[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </WidgetFrame>
  );
}

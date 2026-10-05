"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { books, type Book } from "./Books";

const W = 168;
const H = 252;
const D = 36;

function caption(book: Book) {
  if (book.label) return book.label;
  const parts = book.author.trim().split(" ");
  return parts[parts.length - 1];
}

function Book3D({
  book,
  active,
  onSelect,
}: {
  book: Book;
  active: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);
  const lifted = hovered || active;

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative flex w-[190px] shrink-0 flex-col items-center border-0 bg-transparent p-0 text-left cursor-pointer"
      aria-label={`${book.title} by ${book.author}`}
    >
      <div className="relative" style={{ width: W + 28, height: H + 28, perspective: "1100px" }}>
        <motion.div
          className="absolute left-6 top-2"
          animate={{
            rotateY: lifted ? -14 : -34,
            y: lifted ? -22 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          style={{
            width: W,
            height: H,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: `translateZ(${D / 2}px)`,
              background: book.cover,
              boxShadow: "0 22px 40px rgba(0,0,0,0.45)",
            }}
          >
            {!coverFailed && (
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
                alt=""
                className="h-full w-full object-cover"
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalWidth < 20) setCoverFailed(true);
                }}
                onError={() => setCoverFailed(true)}
              />
            )}
            {coverFailed && (
              <div className="flex h-full w-full flex-col justify-between p-4" style={{ background: book.cover }}>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                  {book.status}
                </span>
                <span className="text-[15px] font-medium leading-snug text-white">
                  {book.title}
                </span>
              </div>
            )}
          </div>

          <div
            className="absolute top-0 left-0 flex items-center justify-center overflow-hidden"
            style={{
              width: D,
              height: H,
              background: `linear-gradient(90deg, rgba(0,0,0,0.35), transparent 18%, transparent 82%, rgba(255,255,255,0.12)), ${book.spine}`,
              transformOrigin: "left center",
              transform: "rotateY(-90deg)",
            }}
          >
            <span
              className="px-1 text-center text-[9px] font-medium uppercase tracking-[0.14em]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: book.lightSpine ? "rgba(0,0,0,0.62)" : "rgba(255,255,255,0.82)",
              }}
            >
              {book.title}
            </span>
          </div>

          <div
            className="absolute top-0 right-0"
            style={{
              width: D,
              height: H,
              background:
                "repeating-linear-gradient(90deg, #f7f1e6 0px, #f7f1e6 1px, #e4dccb 2px, #efe8da 3px)",
              transformOrigin: "right center",
              transform: "rotateY(90deg)",
            }}
          />
        </motion.div>
      </div>

      <div className="pointer-events-none relative -mt-1 h-4 w-full">
        <div className="absolute inset-x-0 top-0 h-[7px] bg-gradient-to-b from-[#4a3424] to-[#1a120c] shadow-[0_16px_28px_rgba(0,0,0,0.65)]" />
      </div>

      <div className="mt-3 w-full px-2 text-center">
        <p className="truncate text-[12px] text-white/85">{book.title}</p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
          {caption(book)}
        </p>
      </div>
    </button>
  );
}

export default function Shelf({ serifClass }: { serifClass: string }) {
  const [selected, setSelected] = useState<Book | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="h-[100dvh] w-screen overflow-y-auto overflow-x-hidden bg-[#0b0b0b] text-[#f3f1ea]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(255,244,220,0.08),transparent_62%)]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-5xl flex-col px-6 pb-24 pt-8 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
          >
            ← Home
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Shelf
          </span>
        </div>

        <header className="mt-16 max-w-xl">
          <h1 className={`${serifClass} text-[52px] leading-none tracking-tight text-white md:text-[68px]`}>
            on the shelf.
          </h1>
          <p className="mt-4 text-[15px] text-white/55">
            books I&apos;m reading, and ones I&apos;ve finished.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
            {books.length} books
          </p>
        </header>

        <div className="mt-16 pb-36">
          <div className="relative">
            <div className="flex flex-wrap items-end justify-center gap-x-1 gap-y-12 md:justify-start">
              {books.map((book) => (
                <Book3D
                  key={book.isbn}
                  book={book}
                  active={selected?.isbn === book.isbn}
                  onSelect={() =>
                    setSelected((current) => (current?.isbn === book.isbn ? null : book))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.aside
            key={selected.isbn}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-5 left-5 right-5 z-20 mx-auto max-w-md rounded-xl border border-white/15 bg-[#161616] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.7)] md:left-auto md:right-8"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: selected.status === "Reading" ? "#e8c07a" : "rgba(255,255,255,0.4)" }}
              >
                {selected.status}
              </span>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 hover:text-white"
              >
                Close
              </button>
            </div>
            <h2 className={`${serifClass} text-[28px] leading-tight text-white`}>{selected.title}</h2>
            <p className="mt-1 text-[13px] text-white/45">by {selected.author}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">{selected.description}</p>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

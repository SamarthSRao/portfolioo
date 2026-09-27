"use client";

import { useLayoutEffect, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import {
  DESKTOP_LAYOUT_CLASS,
  DESKTOP_LAYOUT_STORAGE_KEY,
  type DesktopLayoutMode,
} from "@/config/desktopLayout";

function readDesktopLayout(): DesktopLayoutMode {
  if (typeof document === "undefined") return "classic";
  return document.documentElement.classList.contains(DESKTOP_LAYOUT_CLASS)
    ? "mobile"
    : "classic";
}

export function applyDesktopLayout(mode: DesktopLayoutMode) {
  const root = document.documentElement;
  if (mode === "mobile") root.classList.add(DESKTOP_LAYOUT_CLASS);
  else root.classList.remove(DESKTOP_LAYOUT_CLASS);
  try {
    localStorage.setItem(DESKTOP_LAYOUT_STORAGE_KEY, mode);
  } catch {
    /* Storage can be unavailable in private browsing. The class still applies for this visit. */
  }
}

export default function LayoutToggle({ tone = "theme" }: { tone?: "theme" | "ink" }) {
  const [mode, setMode] = useState<DesktopLayoutMode>("classic");

  useLayoutEffect(() => {
    setMode(readDesktopLayout());
  }, []);

  const choose = (next: DesktopLayoutMode) => {
    applyDesktopLayout(next);
    setMode(next);
  };

  const compact = tone === "theme";

  return (
    <div
      role="group"
      aria-label="Layout style"
      className={`layout-toggle-${tone} inline-flex shrink-0 items-center rounded-full border p-px ${
        tone === "ink"
          ? "border-white/15 bg-black/30"
          : "border-[var(--widget-border)] bg-[var(--accent-subtle)]"
      }`}
    >
      <button
        type="button"
        aria-pressed={mode === "classic"}
        onClick={() => choose("classic")}
        className={`layout-opt-classic inline-flex items-center gap-1 rounded-full font-mono transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 ${
          compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1.5 text-[12px]"
        }`}
      >
        <Monitor size={compact ? 11 : 13} aria-hidden="true" />
        Desktop
      </button>
      <button
        type="button"
        aria-pressed={mode === "mobile"}
        onClick={() => choose("mobile")}
        className={`layout-opt-mobile inline-flex items-center gap-1 rounded-full font-mono transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 ${
          compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1.5 text-[12px]"
        }`}
      >
        <Smartphone size={compact ? 11 : 13} aria-hidden="true" />
        Mobile look
      </button>
    </div>
  );
}

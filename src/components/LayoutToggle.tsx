"use client";

import { useLayoutEffect, useState } from "react";
import {
  DESKTOP_LAYOUT_CLASS,
  DESKTOP_LAYOUT_STORAGE_KEY,
  type DesktopLayoutMode,
} from "@/config/desktopLayout";

function readDesktopLayout(): DesktopLayoutMode {
  if (typeof document === "undefined") return "classic";
  return document.documentElement.classList.contains(DESKTOP_LAYOUT_CLASS)
    ? "plain"
    : "classic";
}

export function applyDesktopLayout(mode: DesktopLayoutMode) {
  const root = document.documentElement;
  if (mode === "plain") root.classList.add(DESKTOP_LAYOUT_CLASS);
  else root.classList.remove(DESKTOP_LAYOUT_CLASS);
  try {
    localStorage.setItem(DESKTOP_LAYOUT_STORAGE_KEY, mode);
  } catch {
    /* Storage can be unavailable in private browsing. The class still applies for this visit. */
  }
}

export default function LayoutToggle({ tone = "theme" }: { tone?: "theme" | "plain" }) {
  const [mode, setMode] = useState<DesktopLayoutMode>("classic");

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(DESKTOP_LAYOUT_STORAGE_KEY);
      if (stored !== "classic") document.documentElement.classList.add(DESKTOP_LAYOUT_CLASS);
      else document.documentElement.classList.remove(DESKTOP_LAYOUT_CLASS);
    } catch {
      document.documentElement.classList.add(DESKTOP_LAYOUT_CLASS);
    }
    setMode(readDesktopLayout());
  }, []);

  const choose = (next: DesktopLayoutMode) => {
    applyDesktopLayout(next);
    setMode(next);
  };

  if (tone === "plain") {
    return (
      <>
        <button type="button" aria-pressed={mode === "classic"} onClick={() => choose("classic")}>
          Desktop
        </button>
        <button type="button" aria-pressed={mode === "plain"} onClick={() => choose("plain")}>
          Plain HTML
        </button>
      </>
    );
  }

  return (
    <div
      role="group"
      aria-label="Layout style"
      className="layout-toggle-theme inline-flex shrink-0 items-center whitespace-nowrap rounded-full border p-px border-[var(--widget-border)] bg-[var(--accent-subtle)]"
    >
      <button
        type="button"
        aria-pressed={mode === "classic"}
        onClick={() => choose("classic")}
        className="layout-opt-classic inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
      >
        Desktop
      </button>
      <button
        type="button"
        aria-pressed={mode === "plain"}
        onClick={() => choose("plain")}
        className="layout-opt-plain inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
      >
        Plain HTML
      </button>
    </div>
  );
}

/**
 * themes.ts
 * Single source of truth for theme swatches shown in ThemeWidget.
 * Each theme maps to a [data-theme="<key>"] block in globals.css.
 * "midnight" is the default — no data-theme attribute is set.
 */

export type ThemeKey = "midnight" | "amber" | "crimson" | "rust"

export interface ThemeItem {
  key: ThemeKey
  label: string
  description: string
  accentColor: string
  /** CSS gradient for the swatch preview. null = default midnight sleeve. */
  gradient: string | null
}

export const themes: ThemeItem[] = [
  {
    key: "midnight",
    label: "Default",
    description: "Midnight",
    accentColor: "rgba(255,255,255,0.6)",
    gradient: null,
  },
  {
    key: "amber",
    label: "Amber",
    description: "Amber · violet night",
    accentColor: "rgba(255,175,65,0.9)",
    gradient: "linear-gradient(150deg, #0a0418 0%, #2a1550 45%, #c8741c 100%)",
  },
  {
    key: "crimson",
    label: "Crimson",
    description: "Crimson · near-black",
    accentColor: "rgba(210,30,55,0.9)",
    gradient: "linear-gradient(150deg, #0a0103 0%, #3a0712 55%, #c21934 100%)",
  },
  {
    key: "rust",
    label: "Rust",
    description: "Rust · burnt orange",
    accentColor: "rgba(255,120,35,0.9)",
    gradient: "linear-gradient(150deg, #120600 0%, #3d1800 50%, #e66b1f 100%)",
  },
]

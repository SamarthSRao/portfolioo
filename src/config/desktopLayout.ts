/** Preference for the wide-screen layout. Kept in sync with the boot script. */
export const DESKTOP_LAYOUT_STORAGE_KEY = "sam-desktop-layout";
export const DESKTOP_LAYOUT_CLASS = "desktop-layout-plain";

export type DesktopLayoutMode = "classic" | "plain";

/** Runs before paint so a saved plain-HTML choice does not flash the classic desktop. */
export function desktopLayoutBootScript(): string {
  return `(function(){try{var v=localStorage.getItem(${JSON.stringify(DESKTOP_LAYOUT_STORAGE_KEY)});if(v==="plain"||v==="mobile"){document.documentElement.classList.add(${JSON.stringify(DESKTOP_LAYOUT_CLASS)});}}catch(e){}})();`;
}

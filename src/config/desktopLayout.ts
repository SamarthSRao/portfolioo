/** Preference for the wide-screen layout. Kept in sync with the boot script. */
export const DESKTOP_LAYOUT_STORAGE_KEY = "sam-desktop-layout";
export const DESKTOP_LAYOUT_CLASS = "desktop-layout-mobile";

export type DesktopLayoutMode = "classic" | "mobile";

/** Runs before paint so a saved mobile-aesthetic choice does not flash the classic desktop. */
export function desktopLayoutBootScript(): string {
  return `(function(){try{if(localStorage.getItem(${JSON.stringify(DESKTOP_LAYOUT_STORAGE_KEY)})==="mobile"){document.documentElement.classList.add(${JSON.stringify(DESKTOP_LAYOUT_CLASS)});}}catch(e){}})();`;
}

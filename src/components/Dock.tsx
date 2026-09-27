"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { X_URL } from "@/config/site";

interface DockProps {
  onToggleAbout: () => void;
  onToggleExperience: () => void;
  onToggleProjects: () => void;
  onToggleResume: () => void;
  onToggleContact: () => void;
  isAboutOpen?: boolean;
  isExperienceOpen?: boolean;
  isProjectsOpen?: boolean;
  isResumeOpen?: boolean;
  isContactOpen?: boolean;
  isBooksOpen?: boolean;
  onToggleBooks?: () => void;
}

export default function Dock({
  onToggleAbout,
  onToggleExperience,
  onToggleProjects,
  onToggleResume,
  onToggleContact,
  isAboutOpen,
  isExperienceOpen,
  isProjectsOpen,
  isResumeOpen,
  isContactOpen,
  isBooksOpen,
  onToggleBooks,
}: DockProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    { label: "About", action: onToggleAbout, active: isAboutOpen },
    { label: "Experience", action: onToggleExperience, active: isExperienceOpen },
    { label: "Projects", action: onToggleProjects, active: isProjectsOpen },
    { label: "Books", action: onToggleBooks, active: isBooksOpen },
    { label: "Contact", action: onToggleContact, active: isContactOpen },
    { label: "Résumé", action: onToggleResume, active: isResumeOpen },
    { label: "GitHub", action: () => window.open("https://github.com/SamarthSRao", "_blank") },
    { label: "X", action: () => window.open(X_URL, "_blank") },
  ];

  return (
    <nav className="studio-dock" aria-label="Sections">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="studio-dock-btn"
          onClick={item.action}
          aria-pressed={item.active ?? false}
        >
          &quot;{item.label}&quot;
        </button>
      ))}
      {mounted && (
        <button
          type="button"
          className="studio-dock-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          &quot;{theme === "dark" ? "Light" : "Dark"}&quot;
        </button>
      )}
    </nav>
  );
}

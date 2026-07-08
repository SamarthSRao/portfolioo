"use client";

import { useState } from "react";
import RamsMobileTheme from "./RamsMobileTheme";
import NamishMobileTheme from "./NamishMobileTheme";

export default function MobileLayoutSwitcher() {
  const [theme, setTheme] = useState<"rams" | "namish">("rams");

  const toggleTheme = () => {
    setTheme(prev => (prev === "rams" ? "namish" : "rams"));
  };

  if (theme === "namish") {
    return <NamishMobileTheme onToggle={toggleTheme} />;
  }

  return <RamsMobileTheme onToggle={toggleTheme} />;
}

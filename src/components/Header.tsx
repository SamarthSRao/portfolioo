"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import LayoutToggle from "./LayoutToggle";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="studio-menubar">
      <div className="flex items-center gap-4 min-w-0">
        <p className="studio-wordmark">&quot;SAMARTH S RAO&quot;</p>
        <LayoutToggle />
      </div>
      <div className="studio-spec-row">
        <span className="hidden xl:inline">BLR 12.97°N</span>
        <span className="hidden md:inline">{format(time, "dd MMM yyyy")}</span>
        <span>{format(time, "HH:mm")}</span>
        <span className="hidden lg:inline">Rev 01</span>
      </div>
    </header>
  );
}

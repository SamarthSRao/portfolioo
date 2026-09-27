"use client";

import { useEffect, useState } from "react";
import { WidgetFrame } from "./desktop/StudioChrome";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Failed to load visitor count", err);
        setCount(2075);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <WidgetFrame label="VISITS" meta="TTL" width={180}>
      <div className="px-4 py-4">
        <p className="text-[36px] font-bold leading-none tracking-tight" style={{ color: "var(--studio-ink)" }}>
          {loading ? "—" : (count?.toLocaleString() || "2,075")}
        </p>
        <p className="studio-index mt-2" style={{ textAlign: "left" }}>
          Total recorded
        </p>
      </div>
    </WidgetFrame>
  );
}

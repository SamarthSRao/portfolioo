"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { WidgetFrame } from "./desktop/StudioChrome";

interface ContributionDay {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface GitHubData {
  totalContributions: number;
  contributions: ContributionDay[][];
}

export default function GitHubGraph() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/SamarthSRao.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  if (loading) {
    return (
      <WidgetFrame label="GITHUB" meta="…">
        <div className="flex items-center justify-center p-8 min-w-[300px]">
          <Loader2 className="w-5 h-5 animate-spin" style={{ color: "var(--studio-faint)" }} />
        </div>
      </WidgetFrame>
    );
  }

  if (error || !data) {
    return (
      <WidgetFrame label="GITHUB" meta="ERR">
        <div className="px-4 py-6 studio-index">Activity unavailable</div>
      </WidgetFrame>
    );
  }

  return (
    <WidgetFrame label="GITHUB" meta={data.totalContributions.toLocaleString()}>
      <div className="px-4 pt-3 pb-3">
        <div className="flex items-center justify-between mb-2.5 gap-8">
          <span className="text-[12px] font-medium" style={{ color: "var(--studio-ink)" }}>SamarthSRao</span>
          <span className="studio-index">This year</span>
        </div>

        <div>
          <div className="relative h-3.5 mb-0.5 flex" style={{ width: "530px" }}>
            {months.map((m, i) => (
              <span key={i} className="text-[9px] text-white/30" style={{ position: "absolute", left: `${i * 42}px` }}>{m}</span>
            ))}
          </div>
          <div className="flex gap-[2px]">
            {data.contributions.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.map((day, j) => (
                  <div
                    key={j}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    className="w-[10px] h-[10px]"
                    style={{
                      background: day.contributionCount === 0 ? "var(--heatmap-empty)" : day.color,
                      opacity: day.contributionCount === 0 ? 0.3 : 0.9
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

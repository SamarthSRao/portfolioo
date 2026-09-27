"use client";

import { useEffect, useState } from "react";
import { WidgetFrame } from "./desktop/StudioChrome";

export default function Spotify() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Spotify fetch error", e);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const isPlaying = data?.isPlaying;

  return (
    <WidgetFrame label="SOUND" meta={isPlaying ? "Live" : "Idle"} width={300}>
      <a
        href={isPlaying ? data.songUrl : "https://open.spotify.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3"
      >
        <div
          className="relative h-11 w-11 flex-none overflow-hidden"
          style={{ border: "1px solid var(--studio-line)" }}
        >
          {isPlaying ? (
            <img src={data.albumImageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center studio-index">Off</div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          {isPlaying ? (
            <>
              <p className="truncate text-[13px] font-medium" style={{ color: "var(--studio-ink)" }}>
                {data.title}
              </p>
              <p className="studio-index mt-1 truncate" style={{ textAlign: "left" }}>
                {data.artist}
              </p>
            </>
          ) : (
            <p className="text-[13px]" style={{ color: "var(--studio-muted)" }}>
              Nothing playing
            </p>
          )}
        </div>
      </a>
    </WidgetFrame>
  );
}

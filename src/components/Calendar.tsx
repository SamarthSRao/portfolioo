"use client";

import { WidgetFrame } from "./desktop/StudioChrome";

export default function Calendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  const monthLabel = now.toLocaleString("en-US", { month: "long" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const cells = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <WidgetFrame label={monthLabel} meta={String(year)} width={240}>
      <div className="px-3 py-3">
        <div className="grid grid-cols-7 mb-1">
          {days.map((day, i) => (
            <div
              key={`${day}-${i}`}
              className="py-0.5 text-center"
              style={{ color: "var(--studio-faint)", fontFamily: "ui-monospace, monospace", fontSize: "10px" }}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((date, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-[11px]"
              style={{
                height: "24px",
                color: date === today ? "var(--studio-field)" : "var(--studio-ink)",
                background: date === today ? "var(--studio-ink)" : "transparent",
                fontWeight: date === today ? 700 : 400,
              }}
            >
              {date ?? ""}
            </div>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

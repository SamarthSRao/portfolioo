"use client";

import { WidgetFrame } from "./desktop/StudioChrome";

export default function OpenToWork() {
  const rows = [
    { label: "Building", value: "Beagle Corp" },
    { label: "Reading", value: "The Phoenix Project" },
    { label: "Writing", value: "Designing Data-Intensive Applications" },
  ];

  return (
    <WidgetFrame label="STATUS" meta="Open" width={280}>
      <div className="px-4 py-3">
        <p className="studio-spec mb-3">
          <i aria-hidden="true" />
          Available
        </p>
        <div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex gap-3 py-2"
              style={{ borderTop: "1px solid var(--studio-line)" }}
            >
              <span className="studio-index" style={{ width: "72px", textAlign: "left" }}>
                {row.label}
              </span>
              <span className="text-[13px]" style={{ color: "var(--studio-ink)" }}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </WidgetFrame>
  );
}

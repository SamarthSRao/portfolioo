"use client";

import { WidgetFrame } from "./desktop/StudioChrome";

export default function Links() {
  const links = [
    { title: "Databases were not meant for AI", site: "Arpit Bhayani · databases", url: "https://arpitbhayani.me/blogs/defensive-databases" },
    { title: "DDIA references", site: "git · rust", url: "https://github.com/SamarthSRao/ddia-references" },
    { title: "Sherlock Holmes", site: "Arthur Conan Doyle · mystery", url: "https://sherlock-holm.es/pdf/letter/1-sided/" },
    { title: "The Inner Game of Tennis", site: "W. Timothy Gallwey · psychology", url: "https://www.gutenberg.org/ebooks/2680" },
  ];

  return (
    <WidgetFrame label="READING" meta="04" width={280}>
      <div>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2.5 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            style={{ borderTop: "1px solid var(--studio-line)" }}
          >
            <p className="text-[13px] leading-tight" style={{ color: "var(--studio-ink)" }}>
              {link.title}
            </p>
            <p className="studio-index mt-1" style={{ textAlign: "left" }}>
              {link.site}
            </p>
          </a>
        ))}
      </div>
    </WidgetFrame>
  );
}

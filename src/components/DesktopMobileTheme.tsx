"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { projects } from "./Projects";
import { experiences } from "./Experience";
import { books } from "./Books";
import LayoutToggle from "./LayoutToggle";
import { X_URL } from "@/config/site";

type Page = "home" | "work" | "projects" | "books";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";

const homeProjects = projects.filter((project) => {
  const title = project.title.toLowerCase();
  return (
    title.includes("hackblog") ||
    title.includes("wal kv") ||
    title.includes("reactordb") ||
    title.includes("eco")
  );
});

function ExperienceCard({
  exp,
}: {
  exp: (typeof experiences)[number];
}) {
  const current = exp.period === "Present";
  return (
    <article className="rounded-xl border border-white/5 bg-[#111] p-5 transition-colors hover:border-white/10">
      <div className="mb-1 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {exp.link ? (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[15px] font-medium text-gray-200 hover:underline ${focusRing}`}
            >
              {exp.company}
            </a>
          ) : (
            <h3 className="text-[15px] font-medium text-gray-200">{exp.company}</h3>
          )}
          {current && (
            <span className="flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 font-mono text-[10px] text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Working
            </span>
          )}
        </div>
      </div>
      <p className="mb-3 text-[13px] text-gray-500">{exp.role}</p>
      <div className="font-mono text-xs text-gray-600">{exp.period}</div>
      <p className="mt-2 text-xs text-gray-500">{exp.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-gray-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-xl border border-white/5 bg-[#111] p-5 transition-colors hover:border-white/10 ${focusRing}`}
    >
      <p className="mb-1.5 text-[15px] font-medium text-gray-200 transition-colors group-hover:text-white">
        {project.title}
        {project.stars && (
          <span className="ml-1.5 text-xs font-normal text-gray-500">({project.stars})</span>
        )}
      </p>
      <p className="mb-3 font-sans text-[13px] leading-relaxed text-gray-500">{project.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function DesktopMobileTheme() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const go = (page: Page) => {
    setActivePage(page);
    const scroller = document.getElementById("desktop-mobile-scroll");
    scroller?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinkClass = (page: Page) =>
    `font-sans text-[15px] underline decoration-white/20 underline-offset-4 transition-colors hover:text-white ${focusRing} ${
      activePage === page ? "text-white" : "text-neutral-300"
    }`;

  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-[#0a0a0a] font-sans text-gray-200 selection:bg-white/10">
      <header className="z-20 shrink-0 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 lg:px-10">
          <button
            type="button"
            onClick={() => go("home")}
            className={`flex items-center gap-4 ${focusRing} rounded-sm`}
          >
            <img
              src="https://github.com/SamarthSRao.png"
              alt=""
              className="h-10 w-10 rounded-[4px] object-cover"
            />
            <span className="text-xl font-bold tracking-tight text-white">samarth</span>
          </button>

          <nav aria-label="Primary" className="order-3 flex w-full flex-wrap items-center gap-x-6 gap-y-2 lg:order-none lg:w-auto lg:flex-1">
            <button type="button" onClick={() => go("work")} aria-current={activePage === "work" ? "page" : undefined} className={navLinkClass("work")}>
              work
            </button>
            <button type="button" onClick={() => go("projects")} aria-current={activePage === "projects" ? "page" : undefined} className={navLinkClass("projects")}>
              projects
            </button>
            <button type="button" onClick={() => go("books")} aria-current={activePage === "books" ? "page" : undefined} className={navLinkClass("books")}>
              books
            </button>
            <a href="https://samarthsrao.blog" target="_blank" rel="noopener noreferrer" className={`font-sans text-[15px] text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
              blog
            </a>
            <a href="/resume.docx" download className={`font-sans text-[15px] text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
              resume
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <LayoutToggle tone="ink" />
            <span className="font-mono text-xs text-gray-500 tabular-nums" suppressHydrationWarning>
              {time}
            </span>
          </div>
        </div>
      </header>

      <div id="desktop-mobile-scroll" className="min-h-0 flex-1 overflow-y-auto">
        <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          {activePage === "home" && (
            <div>
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                <div className="lg:sticky lg:top-8 lg:col-span-5 lg:self-start">
                  <div className="space-y-4 font-sans text-[15px] leading-[1.6] text-neutral-400">
                    <p>
                      currently learning how distributed systems work,
                      exploring backend systems and database internals in depth.
                      and sometimes vibecoding uis just for fun
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-sans text-base text-neutral-200">
                    <a href="/resume.docx" download className={`underline decoration-white/30 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
                      resume
                    </a>
                    <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className={`underline decoration-white/30 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
                      github
                    </a>
                    <a href={X_URL} target="_blank" rel="noopener noreferrer" className={`underline decoration-white/30 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
                      x
                    </a>
                    <button type="button" onClick={() => go("books")} className={`underline decoration-white/30 underline-offset-4 transition-colors hover:text-white ${focusRing}`}>
                      books
                    </button>
                  </div>
                </div>

                <section className="lg:col-span-7" aria-labelledby="desktop-experience-heading">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 id="desktop-experience-heading" className="text-lg font-bold text-white">
                      Experience
                    </h2>
                    <button type="button" onClick={() => go("work")} className={`font-mono text-xs text-gray-500 transition-colors hover:text-white ${focusRing}`}>
                      View All →
                    </button>
                  </div>
                  <div className="grid gap-4">
                    {experiences.map((exp, i) => (
                      <ExperienceCard key={i} exp={exp} />
                    ))}
                  </div>
                </section>
              </div>

              <section className="mt-16" aria-labelledby="desktop-projects-heading">
                <div className="mb-5 flex items-center justify-between">
                  <h2 id="desktop-projects-heading" className="text-lg font-bold text-white">
                    Selected Projects
                  </h2>
                  <button type="button" onClick={() => go("projects")} className={`font-mono text-xs text-gray-500 transition-colors hover:text-white ${focusRing}`}>
                    View All →
                  </button>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {homeProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>

              <footer className="mt-16 border-t border-white/10 pt-10">
                <div className="flex items-end justify-between gap-6">
                  <div className="flex gap-4 text-gray-500">
                    <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="Samarth on X" className={`transition-colors hover:text-white ${focusRing}`}>
                      <Twitter size={18} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className={`transition-colors hover:text-white ${focusRing}`}>
                      <Linkedin size={18} />
                    </a>
                    <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" aria-label="Samarth on GitHub" className={`transition-colors hover:text-white ${focusRing}`}>
                      <Github size={18} />
                    </a>
                  </div>
                  <div className="text-right font-mono text-[10px] uppercase text-gray-600">
                    <p>© {new Date().getFullYear()} SSR.</p>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
              </footer>
            </div>
          )}

          {activePage !== "home" && (
            <div>
              <button
                type="button"
                onClick={() => go("home")}
                className={`mb-6 font-mono text-xs text-gray-500 transition-colors hover:text-white ${focusRing}`}
              >
                ← back
              </button>

              {activePage === "work" && (
                <section aria-labelledby="work-page-heading">
                  <h1 id="work-page-heading" className="mb-8 text-lg font-bold text-white">
                    Experience
                  </h1>
                  <div className="grid gap-5 lg:grid-cols-2">
                    {experiences.map((exp, i) => (
                      <ExperienceCard key={i} exp={exp} />
                    ))}
                  </div>
                </section>
              )}

              {activePage === "projects" && (
                <section aria-labelledby="projects-page-heading">
                  <h1 id="projects-page-heading" className="mb-8 text-lg font-bold text-white">
                    Projects
                  </h1>
                  <div className="grid gap-5 md:grid-cols-2">
                    {projects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </section>
              )}

              {activePage === "books" && (
                <section aria-labelledby="books-page-heading">
                  <h1 id="books-page-heading" className="mb-8 text-lg font-bold text-white">
                    Books
                  </h1>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {books.map((book) => (
                      <article
                        key={book.title}
                        className="rounded-xl border border-white/5 bg-[#111] p-5 transition-colors hover:border-white/10"
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h2 className="text-[15px] font-medium text-gray-200">{book.title}</h2>
                          <span className="shrink-0 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-gray-400">
                            {book.status}
                          </span>
                        </div>
                        <p className="mb-3 font-mono text-xs text-gray-500">by {book.author}</p>
                        <p className="text-[13px] leading-relaxed text-gray-500">{book.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

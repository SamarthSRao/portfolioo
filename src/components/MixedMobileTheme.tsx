"use client";

import React, { useState, useEffect } from "react";
import { List, X, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsComponent, { projects } from "./Projects";
import ExperienceComponent, { experiences } from "./Experience";

export default function MixedMobileTheme() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'work' | 'projects'>('home');
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  // Filter projects for the home page (WAL KV, reactorDb, Eco-Quest)
  const homeProjects = projects.filter(p => 
    p.title.toLowerCase().includes("wal kv") || 
    p.title.toLowerCase().includes("reactordb") || 
    p.title.toLowerCase().includes("eco")
  );

  return (
    <div className="bg-[#0a0a0a] h-[100dvh] w-screen text-gray-200 font-sans overflow-x-hidden overflow-y-auto selection:bg-white/10 relative">
      
      {/* 1. Minimal Top Navigation (Matching Namish) */}
      <nav className="flex items-center justify-between px-4 pt-8 pb-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActivePage('home')}>
          <img src="https://github.com/SamarthSRao.png" alt="Samarth S Rao" className="w-10 h-10 rounded-[4px] object-cover" />
          <span className="font-bold text-xl font-sans tracking-tight text-white">samarth</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(true)}
          className="text-gray-200 hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* 2. Sliding Sidebar Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#0c0c0c] border-l border-white/5 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <span className="font-mono text-sm tracking-tight text-white">menu</span>
                <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-5 flex-1 overflow-y-auto font-mono text-sm space-y-6">
                <div className="space-y-4">
                  <button onClick={() => { setActivePage('work'); setSidebarOpen(false); }} className="w-full flex items-center text-gray-400 hover:text-white transition-colors group">
                    <span className="text-gray-600 mr-2 group-hover:text-white transition-colors">{">"}</span> work
                  </button>
                  <button onClick={() => { setActivePage('projects'); setSidebarOpen(false); }} className="w-full flex items-center text-gray-400 hover:text-white transition-colors group">
                    <span className="text-gray-600 mr-2 group-hover:text-white transition-colors">{">"}</span> projects
                  </button>
                </div>
                <div className="w-full h-px bg-white/5 my-2"></div>
                <div className="space-y-4">
                  <a href="https://samarthsrao.blog" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                    <span className="text-gray-600 mr-2 group-hover:text-white transition-colors">{">"}</span> blog
                  </a>
                </div>
              </div>
              <div className="p-5 border-t border-white/5 text-xs text-gray-500 font-mono">
                {time}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Pages */}
      {activePage === 'home' && (
        <div className="px-4 py-2 pb-20">
          
          {/* Bio Section */}
          <div className="mb-10 mt-2">
            <div className="font-sans text-neutral-400 leading-[1.5] text-sm space-y-4">
              <p>
                currently learning how distributed systems work,
                exploring backend systems and database internals in depth.
                and sometimes vibecoding uis just for fun
              </p>
            </div>

            <div className="flex gap-5 mt-4 font-sans text-base text-neutral-200">
              <a href="#" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">resume</a>
              <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">github</a>
              <a href="https://twitter.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">x dot com</a>
            </div>
          </div>

          {/* Experience Overview Section */}
          <div className="mb-12" id="work">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold font-sans text-white">Experience</h2>
              <button onClick={() => setActivePage('work')} className="text-xs font-mono text-gray-500 hover:text-white transition-colors">View All →</button>
            </div>
            <div className="space-y-4">
              {experiences.slice(0, 1).map((exp, i) => (
                <div key={i} className="bg-[#111] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      {(exp as any).link ? (
                        <a href={(exp as any).link} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-200 text-[15px] hover:underline">
                          {exp.company}
                        </a>
                      ) : (
                        <h3 className="font-medium text-gray-200 text-[15px]">{exp.company}</h3>
                      )}
                      <span className="bg-green-500/10 text-green-400 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 border border-green-500/20">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Working
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] mb-3">{exp.role}</p>
                  <div className="text-xs text-gray-600 font-mono">{exp.period}</div>
                  <p className="text-xs text-gray-500 mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects Section */}
          <div className="mb-14" id="projects">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold font-sans text-white">Selected Projects</h2>
              <button onClick={() => setActivePage('projects')} className="text-xs font-mono text-gray-500 hover:text-white transition-colors">View All →</button>
            </div>
            <div className="flex flex-col gap-5">
              {homeProjects.map((project, i) => (
                <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group bg-[#111] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all flex flex-col p-5">
                   <p className="text-gray-200 font-medium text-[15px] mb-1.5 group-hover:text-white transition-colors">
                     {project.title} {project.stars && <span className="text-xs text-gray-500 font-normal">({project.stars})</span>}
                   </p>
                   <p className="text-[13px] text-gray-500 leading-relaxed font-sans mb-3">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap items-center gap-2 mt-auto">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400">{tag}</span>
                     ))}
                   </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-white/10 pt-10 pb-8 mt-10">
            <div className="flex justify-between items-end">
              <div className="flex gap-4 text-gray-500">
                <a href="https://twitter.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="https://github.com/SamarthSRao" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
              </div>
              <div className="text-[10px] text-gray-600 font-mono uppercase text-right">
                <p>© {new Date().getFullYear()} SSR.</p>
                <p>Bengaluru, India</p>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Work Page */}
      {activePage === 'work' && (
        <div className="pb-20">
          <div className="px-4 py-4 mb-2 flex items-center gap-3 border-b border-white/5">
            <button onClick={() => setActivePage('home')} className="text-gray-500 hover:text-white font-mono text-xs">← back</button>
          </div>
          <ExperienceComponent isMobile={true} />
        </div>
      )}

      {/* Projects Page */}
      {activePage === 'projects' && (
        <div className="pb-20">
          <div className="px-4 py-4 mb-2 flex items-center gap-3 border-b border-white/5">
            <button onClick={() => setActivePage('home')} className="text-gray-500 hover:text-white font-mono text-xs">← back</button>
          </div>
          <ProjectsComponent isMobile={true} />
        </div>
      )}

    </div>
  );
}

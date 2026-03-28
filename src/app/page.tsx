"use client";
export const runtime = 'edge';


import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header";
import Dock from "../components/Dock";
import About from "../components/About";
import Quote from "../components/Quote";
import Links from "../components/Links";
import Spotify from "../components/Spotify";
import OpenToWork from "../components/OpenToWork";
import Calendar from "../components/Calendar";
import GitHubGraph from "../components/GitHubGraph";
import VisitorCount from "../components/VisitorCount";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export default function Home() {
   const [showAbout, setShowAbout] = useState(true);
   const [showQuote, setShowQuote] = useState(true);
   const [showLinks, setShowLinks] = useState(true);
   const [showSpotify, setShowSpotify] = useState(true);
   const [showOpenToWork, setShowOpenToWork] = useState(true);
   const [showCalendar, setShowCalendar] = useState(true);
   const [showGraph, setShowGraph] = useState(true);
   const [showVisitors, setShowVisitors] = useState(true);
   const [showExperience, setShowExperience] = useState(false);
   const [showProjects, setShowProjects] = useState(false);
   const [showResume, setShowResume] = useState(false);

   const [activeWindow, setActiveWindow] = useState<string | null>(null);
   const [activeTab, setActiveTab] = useState("ABOUT");

   const getZIndex = (windowId: string) => {
      if (activeWindow === windowId) return "z-[100]";
      return "z-50";
   };

   const scrollToSection = (id: string) => {
      const el = document.getElementById(id.toLowerCase());
      if (el) {
         el.scrollIntoView({ behavior: 'smooth', block: 'start' });
         setActiveTab(id);
      }
   };

   const tabs = ["ABOUT", "EXPERIENCE", "PROJECTS", "WRITING", "CONTACT", "RÉSUMÉ"];

   return (
      <main className="relative min-h-[100dvh] w-screen bg-[#0b0b0b] overflow-x-hidden selection:bg-white/10 selection:text-white" style={{ color: "rgb(240, 240, 240)" }}>
         {/* Background Dot Grid */}
         <div className="absolute inset-0 desktop-bg opacity-40 pointer-events-none" />

         {/* DESKTOP LAYOUT */}
         <div className="hidden md:block absolute inset-0">
            <Header />
            <div className="absolute inset-0 pointer-events-none pt-7 pb-4">
               <AnimatePresence>
                  {showQuote && (
                     <div key="quote-layer" className="absolute" style={{ top: "48px", left: "24px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="z-10">
                           <Quote />
                        </motion.div>
                     </div>
                  )}
                  {showOpenToWork && (
                     <div key="work-layer" className="absolute" style={{ top: "48px", right: "24px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="z-10">
                           <OpenToWork />
                        </motion.div>
                     </div>
                  )}
                  {showLinks && (
                     <div key="links-layer" className="absolute" style={{ top: "228px", left: "24px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="z-20">
                           <Links />
                        </motion.div>
                     </div>
                  )}
                  {showCalendar && (
                     <div key="calendar-layer" className="absolute" style={{ top: "228px", right: "24px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="z-20">
                           <Calendar />
                        </motion.div>
                     </div>
                  )}
                  {showSpotify && (
                     <div key="spotify-layer" className="absolute" style={{ bottom: "72px", left: "20px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="z-30">
                           <Spotify />
                        </motion.div>
                     </div>
                  )}
                  {showGraph && (
                     <div key="github-layer" className="absolute" style={{ bottom: "80px", right: "24px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="z-30">
                           <GitHubGraph />
                        </motion.div>
                     </div>
                  )}
                  {showVisitors && (
                     <div key="visitors-layer" className="absolute" style={{ bottom: "80px", left: "320px", pointerEvents: "auto" }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-40">
                           <VisitorCount />
                        </motion.div>
                     </div>
                  )}
                  <div key="window-layers" className="fixed inset-0 pointer-events-none flex items-center justify-center z-[100]">
                     {showAbout && (
                        <div key="about-window" className={`absolute pointer-events-auto ${getZIndex("about")}`} onMouseDown={() => setActiveWindow("about")}>
                           <About onClose={() => setShowAbout(false)} />
                        </div>
                     )}
                     {showExperience && (
                        <div key="experience-window" className={`absolute pointer-events-auto ${getZIndex("experience")}`} onMouseDown={() => setActiveWindow("experience")}>
                           <Experience onClose={() => setShowExperience(false)} />
                        </div>
                     )}
                     {showProjects && (
                        <div key="projects-window" className={`absolute pointer-events-auto ${getZIndex("projects")}`} onMouseDown={() => setActiveWindow("projects")}>
                           <Projects onClose={() => setShowProjects(false)} />
                        </div>
                     )}
                     {showResume && (
                        <div key="resume-window" className={`absolute pointer-events-auto ${getZIndex("resume")}`} onMouseDown={() => setActiveWindow("resume")}>
                           <Resume onClose={() => setShowResume(false)} />
                        </div>
                     )}
                  </div>
               </AnimatePresence>
            </div>
            <Dock
               onToggleAbout={() => { setShowAbout(prev => !prev); if (!showAbout) setActiveWindow("about"); }}
               onToggleExperience={() => { setShowExperience(prev => !prev); if (!showExperience) setActiveWindow("experience"); }}
               onToggleProjects={() => { setShowProjects(prev => !prev); if (!showProjects) setActiveWindow("projects"); }}
               onToggleResume={() => { setShowResume(prev => !prev); if (!showResume) setActiveWindow("resume"); }}
               isAboutOpen={showAbout} isExperienceOpen={showExperience} isProjectsOpen={showProjects} isResumeOpen={showResume}
            />
         </div>

         {/* MOBILE LAYOUT */}
         <div className="md:hidden flex flex-col h-screen overflow-hidden relative z-10">
            <div className="flex-none px-6 pt-8 pb-4 border-b border-white/5 bg-[#0b0b0b]/80 backdrop-blur-md sticky top-0 z-50">
               <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-[10px] tracking-widest text-white/90">SSR</span>
                  <span className="font-mono text-[10px] text-white/40">{new Date().getHours().toString().padStart(2, '0')}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
               </div>
               <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide no-scrollbar -mx-6 px-6">
                  {tabs.map(tab => (
                     <button
                        key={tab}
                        onClick={() => scrollToSection(tab)}
                        className={`text-[10px] font-bold tracking-widest transition-all whitespace-nowrap pb-1 border-b-2 ${activeTab === tab ? 'text-white border-white' : 'text-white/30 border-transparent hover:text-white/60'}`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth space-y-20">
               <section id="about" className="scroll-mt-32">
                  <About isMobile />
               </section>

               <section id="experience" className="scroll-mt-32">
                  <Experience isMobile />
               </section>

               <section id="projects" className="scroll-mt-32">
                  <Projects isMobile />
               </section>

               <section id="résumé" className="scroll-mt-32">
                  <Resume isMobile />
               </section>

               <section id="writing" className="scroll-mt-32">
                  <div className="space-y-8 py-4">
                     <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Writing • Planned 2026</p>
                     <div className="space-y-6">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="group border-b border-white/5 pb-6">
                              <div className="flex justify-between items-start mb-2">
                                 <div className="h-4 w-48 bg-white/5 rounded animate-pulse" />
                                 <div className="h-3 w-12 bg-white/5 rounded animate-pulse" />
                              </div>
                              <div className="h-3 w-full bg-white/5 rounded animate-pulse opacity-50" />
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               <section id="contact" className="scroll-mt-32 pb-32">
                  <div className="py-12 border-t border-white/5 space-y-4">
                     <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Connect with me</p>
                     <a href="mailto:hello@samarth.dev" className="block text-2xl font-bold tracking-tight hover:text-white/80 transition-colors">hello@samarth.dev</a>
                  </div>
               </section>
            </div>
         </div>
      </main>
   );
}

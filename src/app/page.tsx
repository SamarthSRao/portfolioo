"use client";

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

   const getZIndex = (windowId: string) => {
     if (activeWindow === windowId) return "z-[100]";
     return "z-50";
   };

   return (
      <main className="relative h-screen w-screen bg-[#111111] overflow-hidden selection:bg-white/10 selection:text-white">
         {/* Background Dot Grid */}
         <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

         {/* Top Header */}
         <Header />

         {/* Draggable Components Container */}
         <div className="absolute inset-0 pointer-events-none pt-7 pb-4">
            <AnimatePresence>
               {/* Top Left: Quote */}
               {showQuote && (
                  <div className="absolute" style={{ top: "48px", left: "24px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="z-10"
                     >
                        <Quote />
                     </motion.div>
                  </div>
               )}

               {/* Top Right: Open To Work */}
               {showOpenToWork && (
                  <div className="absolute" style={{ top: "48px", right: "24px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="z-10"
                     >
                        <OpenToWork />
                     </motion.div>
                  </div>
               )}

               {/* Mid Left: Links */}
               {showLinks && (
                  <div className="absolute" style={{ top: "228px", left: "24px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="z-20"
                     >
                        <Links />
                     </motion.div>
                  </div>
               )}

               {/* Mid Right: Calendar */}
               {showCalendar && (
                  <div className="absolute" style={{ top: "228px", right: "24px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="z-20"
                     >
                        <Calendar />
                     </motion.div>
                  </div>
               )}

               {/* Bottom Left: Spotify */}
               {showSpotify && (
                  <div className="absolute" style={{ bottom: "72px", left: "20px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="z-30"
                     >
                        <Spotify />
                     </motion.div>
                  </div>
               )}

               {/* Bottom Right: GitHub Graph */}
               {showGraph && (
                  <div className="absolute" style={{ bottom: "80px", right: "24px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="z-30"
                     >
                        <GitHubGraph />
                     </motion.div>
                  </div>
               )}

               {/* Visitors */}
               {showVisitors && (
                  <div className="absolute" style={{ bottom: "80px", left: "320px", pointerEvents: "auto" }}>
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="z-40"
                     >
                        <VisitorCount />
                     </motion.div>
                  </div>
               )}

               {/* Window Layers */}
               <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-[100]">
                  {showAbout && (
                    <div className={`absolute pointer-events-auto ${getZIndex("about")}`} onMouseDown={() => setActiveWindow("about")}>
                      <About onClose={() => setShowAbout(false)} />
                    </div>
                  )}
                  {showExperience && (
                    <div className={`absolute pointer-events-auto ${getZIndex("experience")}`} onMouseDown={() => setActiveWindow("experience")}>
                      <Experience onClose={() => setShowExperience(false)} />
                    </div>
                  )}
                  {showProjects && (
                    <div className={`absolute pointer-events-auto ${getZIndex("projects")}`} onMouseDown={() => setActiveWindow("projects")}>
                      <Projects onClose={() => setShowProjects(false)} />
                    </div>
                  )}
                  {showResume && (
                    <div className={`absolute pointer-events-auto ${getZIndex("resume")}`} onMouseDown={() => setActiveWindow("resume")}>
                      <Resume onClose={() => setShowResume(false)} />
                    </div>
                  )}
               </div>

            </AnimatePresence>
         </div>

         {/* Navigation Dock */}
         <Dock 
            onToggleAbout={() => {
              setShowAbout(prev => !prev);
              if (!showAbout) setActiveWindow("about");
            }} 
            onToggleExperience={() => {
              setShowExperience(prev => !prev);
              if (!showExperience) setActiveWindow("experience");
            }}
            onToggleProjects={() => {
              setShowProjects(prev => !prev);
              if (!showProjects) setActiveWindow("projects");
            }}
            onToggleResume={() => {
              setShowResume(prev => !prev);
              if (!showResume) setActiveWindow("resume");
            }}
            isAboutOpen={showAbout}
            isExperienceOpen={showExperience}
            isProjectsOpen={showProjects}
            isResumeOpen={showResume}
         />
      </main>
   );
}

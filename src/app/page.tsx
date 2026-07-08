"use client";



import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
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
import Contact from "../components/Contact";
import MobileLayoutSwitcher from "../components/MobileLayoutSwitcher";

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
   const [showContact, setShowContact] = useState(false);

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
      }
   };

   const tabs = ["ABOUT", "EXPERIENCE", "PROJECTS", "WRITING", "CONTACT", "RÉSUMÉ"];

   // Mobile time state
   const [time, setTime] = useState("");
   useEffect(() => {
     const update = () => {
       const now = new Date()
       setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }))
     }
     update()
     const id = setInterval(update, 30_000)
     return () => clearInterval(id)
   }, [])

   // Mobile Intersection Observer for active tab
   useEffect(() => {
     const observers: IntersectionObserver[] = []
     tabs.forEach((id) => {
       const el = document.getElementById(id.toLowerCase())
       if (!el) return
       const obs = new IntersectionObserver(
         ([entry]) => { if (entry.isIntersecting) setActiveTab(id) },
         { threshold: 0.4 }
       )
       obs.observe(el)
       observers.push(obs)
     })
     return () => observers.forEach((o) => o.disconnect())
   }, [])

   const MOBILE_BORDER = "1px solid rgba(255,255,255,0.07)";

   return (
      <main className="relative min-h-[100dvh] w-screen bg-[var(--background)] overflow-x-hidden selection:bg-white/10 selection:text-white" style={{ color: "rgb(240, 240, 240)" }}>
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
                     {showContact && (
                        <div key="contact-window" className={`absolute pointer-events-auto ${getZIndex("contact")}`} onMouseDown={() => setActiveWindow("contact")}>
                           <Contact onClose={() => setShowContact(false)} />
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
               onToggleContact={() => { setShowContact(prev => !prev); if (!showContact) setActiveWindow("contact"); }}
               isAboutOpen={showAbout} isExperienceOpen={showExperience} isProjectsOpen={showProjects} isResumeOpen={showResume} isContactOpen={showContact}
            />
         </div>

         {/* MOBILE LAYOUT */}
         <div className="md:hidden">
            <MobileLayoutSwitcher />
         </div>
      </main>
   );
}

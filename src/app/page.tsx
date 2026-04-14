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
import SystemPulse from "../components/SystemPulse";

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
   const [showSystems, setShowSystems] = useState(false);

   const [activeWindow, setActiveWindow] = useState<string | null>(null);
   const [activeTab, setActiveTab] = useState("ABOUT");
   
   const mobileScrollRef = useRef<HTMLDivElement>(null);
   const tabsRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
      container: mobileScrollRef
   });

   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
   });

   const logoX = useTransform(scrollYProgress, [0, 1], [0, 16]);

   useEffect(() => {
      const container = mobileScrollRef.current;
      if (!container) return;

      const handleScroll = () => {
         const sections = tabs.map(tab => ({
            id: tab,
            el: document.getElementById(tab.toLowerCase())
         }));

         const currentSection = sections.find(section => {
            if (!section.el) return false;
            const rect = section.el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
         });

         if (currentSection && currentSection.id !== activeTab) {
            setActiveTab(currentSection.id);
            
            // Auto-scroll the tab bar
            const tabEl = document.getElementById(`tab-${currentSection.id}`);
            if (tabEl && tabsRef.current) {
               const container = tabsRef.current;
               const scrollLeft = tabEl.offsetLeft - (container.offsetWidth / 2) + (tabEl.offsetWidth / 2);
               container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
         }
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
   }, [activeTab]);

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

   const tabs = ["ABOUT", "EXPERIENCE", "PROJECTS", "SYSTEMS", "CONTACT", "RÉSUMÉ"];

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
                     {showSystems && (
                        <div key="systems-window" className={`absolute pointer-events-auto ${getZIndex("systems")}`} onMouseDown={() => setActiveWindow("systems")}>
                           <SystemPulse onClose={() => setShowSystems(false)} />
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
               onToggleSystems={() => { setShowSystems(prev => !prev); if (!showSystems) setActiveWindow("systems"); }}
               isAboutOpen={showAbout} isExperienceOpen={showExperience} isProjectsOpen={showProjects} isResumeOpen={showResume} isContactOpen={showContact} isSystemsOpen={showSystems}
            />
         </div>

         {/* MOBILE LAYOUT */}
         <div className="md:hidden flex flex-col h-[100dvh] overflow-hidden relative z-10">
            <div className="flex-none px-6 pt-8 pb-4 border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-md sticky top-0 z-50 overflow-hidden">
               {/* Progress Bar that moves left to right */}
               <motion.div 
                  className="absolute bottom-0 left-0 h-[1.5px] z-50"
                  style={{ 
                     scaleX, 
                     transformOrigin: "0%", 
                     width: "100%",
                     background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.8))"
                  }}
               />
               
               <div className="flex items-center justify-between mb-8">
                  <motion.span 
                     style={{ x: logoX }}
                     className="font-bold text-[10px] tracking-widest text-white/90"
                  >
                     SSR
                  </motion.span>
                  <span className="font-mono text-[10px] text-white/40">{new Date().getHours().toString().padStart(2, '0')}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
               </div>
               <div 
                  ref={tabsRef}
                  className="flex items-center gap-6 overflow-x-auto scrollbar-hide no-scrollbar -mx-6 px-6 relative"
               >
                  {tabs.map(tab => (
                     <button
                        key={tab}
                        id={`tab-${tab}`}
                        onClick={() => {
                           scrollToSection(tab);
                           setActiveTab(tab);
                        }}
                        className={`relative text-[10px] font-bold tracking-widest transition-all whitespace-nowrap pb-2 ${activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
                     >
                        {tab}
                        {activeTab === tab && (
                           <motion.div 
                              layoutId="activeTabMobile"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                           />
                        )}
                     </button>
                  ))}
               </div>
            </div>

            <div 
               ref={mobileScrollRef}
               className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth space-y-20"
            >
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

               <section id="systems" className="scroll-mt-32">
                  <SystemPulse isMobile />
               </section>

               <section id="contact" className="scroll-mt-32 pb-32">
                  <Contact isMobile />
               </section>
            </div>
         </div>
      </main>
   );
}

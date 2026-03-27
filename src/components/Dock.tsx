"use client";

import { useRef, useState } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform,
  AnimatePresence 
} from "framer-motion";
import { 
  User, 
  Briefcase, 
  CodeXml, 
  BookOpen, 
  Mail, 
  ScrollText, 
  SquareTerminal, 
  Cpu, 
  NotebookPen,
  Github
} from "lucide-react";

interface DockProps {
  onToggleAbout: () => void;
  onToggleExperience: () => void;
  onToggleProjects: () => void;
  onToggleResume: () => void;
  isAboutOpen?: boolean;
  isExperienceOpen?: boolean;
  isProjectsOpen?: boolean;
  isResumeOpen?: boolean;
}

function DockIcon({ 
  icon: Icon, 
  label, 
  action, 
  active,
  mouseX 
}: { 
  icon: any, 
  label: string, 
  action?: () => void, 
  active?: boolean,
  mouseX: any 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative flex flex-col items-center gap-1">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            className="absolute -top-10 left-1/2 px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider whitespace-nowrap pointer-events-none z-[110]"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={action}
        style={{ width, height }}
        className="rounded-xl flex items-center justify-center cursor-pointer transition-colors duration-200 active:scale-95"
        tabIndex={0}
        initial={false}
        animate={{
          background: active ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.05)",
          color: active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)"
        }}
      >
        <Icon size={24} strokeWidth={1.5} />
      </motion.div>
      <div 
        className="w-1 h-1 rounded-full transition-all duration-200" 
        style={{ background: active ? "white" : "transparent" }} 
      />
    </div>
  );
}

export default function Dock({ 
  onToggleAbout, 
  onToggleExperience, 
  onToggleProjects, 
  onToggleResume,
  isAboutOpen,
  isExperienceOpen,
  isProjectsOpen,
  isResumeOpen
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  const items = [
    { icon: User, label: "About", action: onToggleAbout, active: isAboutOpen },
    { icon: Briefcase, label: "Experience", action: onToggleExperience, active: isExperienceOpen },
    { icon: CodeXml, label: "Projects", action: onToggleProjects, active: isProjectsOpen },
    { icon: BookOpen, label: "Education" },
    { icon: Mail, label: "Contact" },
    { icon: ScrollText, label: "Résumé", action: onToggleResume, active: isResumeOpen },
    { icon: SquareTerminal, label: "Terminal" },
    { icon: Cpu, label: "Hardware" },
    { icon: NotebookPen, label: "Notes" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-3 pb-2 pt-2.5 rounded-2xl backdrop-blur-xl border border-white/10" 
        style={{ 
          background: "var(--dock-bg)", 
          boxShadow: "rgba(0, 0, 0, 0.7) 0px 8px 32px" 
        }}
      >
        {items.map((item, i) => (
          <DockIcon 
            key={i} 
            icon={item.icon} 
            label={item.label} 
            action={item.action} 
            active={item.active}
            mouseX={mouseX}
          />
        ))}
        
        <div className="h-8 self-center mx-1 rounded-full border-r border-white/10" style={{ width: "1px" }} />
        
        <DockIcon 
            icon={Github} 
            label="GitHub" 
            action={() => window.open("https://github.com/SamarthSRao", "_blank")}
            mouseX={mouseX}
        />

        <DockIcon 
            icon={() => (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )}
            label="Twitter"
            action={() => window.open("https://twitter.com/SamarthSRao", "_blank")}
            mouseX={mouseX}
        />
      </motion.div>
    </div>
  );
}

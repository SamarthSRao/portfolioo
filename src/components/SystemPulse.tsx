"use client";

import { motion, useDragControls, AnimatePresence } from "framer-motion";
import { Activity, Database, ShieldCheck, Share2, Cpu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const PROJECTS = [
    {
        name: "JSS ROOMS",
        subtitle: "Go · WebSockets · PostgreSQL",
        concept: "Consensus + Real-time",
        metric: "402",
        metricLabel: "Concurrent Users",
        color: "text-blue-400",
        dot: "bg-blue-400",
        border: "border-blue-400/40",
        bg: "bg-blue-400/5",
        logs: [
            "raft:  term 45 — leader elected on shard-A",
            "ws:    goroutine pool dispatching to 402 conns",
            "sync:  broadcast[chat_room_992] → all replicas",
            "hb:    user_3812 heartbeat ACK'd (2ms)",
            "quorum: 3/5 nodes confirmed msg[idx_9921]",
            "ws:    new conn from user_4001 → pool assigned",
            "raft:  follower lag detected — catch-up initiated",
        ],
        visual: "consensus"
    },
    {
        name: "INTER PREP",
        subtitle: "Go · Gin · PostgreSQL",
        concept: "WAL + Query Planner",
        metric: "12ms",
        metricLabel: "P99 Latency",
        color: "text-emerald-400",
        dot: "bg-emerald-400",
        border: "border-emerald-400/40",
        bg: "bg-emerald-400/5",
        logs: [
            "wal:   COMMIT txn_782 persisted to disk",
            "query: EXPLAIN ANALYZE — seq scan avoided",
            "gin:   middleware chain resolved in 4ms",
            "pool:  acquired conn from pg-pool (idle: 8)",
            "index: B-tree scan on questions_category_idx",
            "wal:   checkpoint completed — lsn 0/4A2910",
            "gin:   rate limiter reset for user_session_21",
        ],
        visual: "wal"
    },
    {
        name: "ECO QUEST",
        subtitle: "Node.js · MongoDB · JWT",
        concept: "Oplog + Cache Invalidation",
        metric: "94%",
        metricLabel: "Cache Hit Rate",
        color: "text-amber-400",
        dot: "bg-amber-400",
        border: "border-amber-400/40",
        bg: "bg-amber-400/5",
        logs: [
            "mongo: oplog tailed — 3 new writes applied",
            "cache: invalidating key leaderboard_top_10",
            "jwt:   token verified (alg: HS256, valid)",
            "lsm:   memtable flush → SST_L0 (64MB hit)",
            "worker: batch milestone update completed",
            "cache: miss on user_eco_score_221 — refetch",
            "mongo: replica-B caught up (lag: 0ms)",
        ],
        visual: "lsm"
    }
];

export default function SystemPulse({ onClose, isMobile }: { onClose?: () => void, isMobile?: boolean }) {
  const dragControls = useDragControls();
  const [projectIdx, setProjectIdx] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [logCursor, setLogCursor] = useState(0);
  const logRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeProject = PROJECTS[projectIdx];

  // Drip logs one-by-one
  useEffect(() => {
    setVisibleLogs([]);
    setLogCursor(0);
  }, [projectIdx]);

  useEffect(() => {
    if (logRef.current) clearInterval(logRef.current);
    logRef.current = setInterval(() => {
      setLogCursor(prev => {
        const next = (prev + 1) % activeProject.logs.length;
        setVisibleLogs(logs => [activeProject.logs[next], ...logs].slice(0, 5));
        return next;
      });
    }, 1200);
    return () => { if (logRef.current) clearInterval(logRef.current); };
  }, [projectIdx]);

  // Auto-rotate projects
  useEffect(() => {
    rotateRef.current = setInterval(() => {
      setProjectIdx(prev => (prev + 1) % PROJECTS.length);
    }, 8000);
    return () => { if (rotateRef.current) clearInterval(rotateRef.current); };
  }, []);

  // Manual tab click resets rotate timer
  const handleTabClick = (i: number) => {
    if (rotateRef.current) clearInterval(rotateRef.current);
    setProjectIdx(i);
    rotateRef.current = setInterval(() => {
      setProjectIdx(prev => (prev + 1) % PROJECTS.length);
    }, 8000);
  };

  const content = (
    <div className="flex flex-col bg-[#060606] font-mono select-none">

        {/* Project Tabs */}
        <div className="flex border-b border-white/5">
            {PROJECTS.map((p, i) => (
                <button
                    key={p.name}
                    onClick={() => handleTabClick(i)}
                    className={`flex-1 py-2.5 text-center transition-all border-r border-white/5 last:border-none relative ${i === projectIdx ? p.bg : 'hover:bg-white/[0.02]'}`}
                >
                    <p className={`text-[8px] font-bold uppercase tracking-wider transition-colors ${i === projectIdx ? p.color : 'text-white/15'}`}>
                        {p.name.split(' ')[0]}
                    </p>
                    {i === projectIdx && (
                        <motion.div layoutId="activeTab" className={`absolute bottom-0 left-0 right-0 h-px ${p.dot.replace('bg-', 'bg-')}`} />
                    )}
                </button>
            ))}
        </div>

        {/* Header Info */}
        <AnimatePresence mode="wait">
            <motion.div 
                key={activeProject.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="p-4 border-b border-white/5"
            >
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <p className={`text-[11px] font-bold ${activeProject.color}`}>{activeProject.name}</p>
                        <p className="text-[8px] text-white/25 mt-0.5">{activeProject.subtitle}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-[7px] uppercase tracking-widest border ${activeProject.border} ${activeProject.bg} ${activeProject.color}`}>
                        {activeProject.concept}
                    </div>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className={`text-[22px] font-bold tracking-tighter ${activeProject.color}`}>{activeProject.metric}</span>
                    <span className="text-[8px] text-white/25">{activeProject.metricLabel}</span>
                </div>
            </motion.div>
        </AnimatePresence>

        {/* Architecture Visual */}
        <div className="h-16 border-b border-white/5 flex items-center justify-center px-4 bg-black/30 relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`visual-${activeProject.name}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeProject.visual === "consensus" && <ConsensusVisual color={activeProject.color} />}
                    {activeProject.visual === "wal" && <WALVisual color={activeProject.color} />}
                    {activeProject.visual === "lsm" && <LSMVisual color={activeProject.color} />}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Live Log Stream */}
        <div className="p-4 bg-black/50 min-h-[148px]">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Database size={10} className="text-white/20" />
                    <span className="text-[7px] uppercase tracking-[0.25em] text-white/25">System Commit Log</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className={`w-1 h-1 rounded-full animate-pulse ${activeProject.dot}`} />
                    <span className="text-[7px] text-white/20 uppercase">Streaming</span>
                </div>
            </div>

            <div className="space-y-1.5">
                <AnimatePresence mode="popLayout">
                    {visibleLogs.map((log, i) => (
                        <motion.div
                            key={`${log}-${i}`}
                            initial={{ opacity: 0, height: 0, y: -8 }}
                            animate={{ opacity: 1 - i * 0.18, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex gap-2 font-mono text-[9px] overflow-hidden"
                        >
                            <span className={`${activeProject.color} opacity-40 shrink-0 w-12 truncate`}>
                                {log.split(':')[0]}
                            </span>
                            <span className="text-white/35 truncate">{log.split(':').slice(1).join(':')}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-1.5">
                <ShieldCheck size={8} className="text-white/20" />
                <span className="text-[7px] text-white/15 uppercase tracking-widest">Linearizable</span>
            </div>
            <span className="text-[7px] text-white/10">QUORUM: 2n+1</span>
        </div>
    </div>
  );

  if (isMobile) {
    return (
        <div className="py-6 space-y-6">
            <div className="flex items-center gap-3">
                <Activity size={16} className="text-blue-400" />
                <h2 className="text-[18px] font-bold tracking-tight text-white">System Internals</h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#060606]">
                {content}
            </div>
        </div>
    );
  }

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col overflow-hidden z-[50] pointer-events-auto"
      style={{
        width: "290px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(6,6,6,0.92)",
        backdropFilter: "blur(40px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.04)"
      }}
    >
      {/* Title Bar */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="flex-none flex items-center h-9 px-3 relative select-none cursor-grab active:cursor-grabbing border-b border-white/5"
      >
        <div className="flex items-center gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70 cursor-pointer hover:bg-red-500 transition-colors" onClick={onClose} />
          <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.4em] text-white/15">
          LOG_MANAGER
        </span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {content}
      </div>
    </motion.div>
  );
}

function ConsensusVisual({ color }: { color: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded border ${color === "text-blue-400" ? "border-blue-400/50 bg-blue-400/10" : "border-white/10 bg-white/5"} flex flex-col items-center justify-center gap-0.5`}>
                <Share2 size={13} className={color} />
                <span className={`text-[5px] font-bold uppercase ${color}`}>Leader</span>
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="w-10 h-0.5 bg-white/10" />
                <div className="w-10 h-0.5 bg-white/10" />
            </div>
            <div className="flex flex-col gap-1.5">
                <div className="w-7 h-7 rounded border border-white/10 bg-white/5 flex items-center justify-center">
                    <Cpu size={10} className="text-white/20" />
                </div>
                <div className="w-7 h-7 rounded border border-white/10 bg-white/5 flex items-center justify-center">
                    <Cpu size={10} className="text-white/20" />
                </div>
            </div>
        </div>
    );
}

function WALVisual({ color }: { color: string }) {
    return (
        <div className="flex flex-col gap-1 w-44">
            {[1, 0.65, 0.45].map((w, i) => (
                <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    style={{ width: `${w * 100}%`, originX: 0 }}
                    className={`h-1.5 rounded-full ${color === "text-emerald-400" ? "bg-emerald-400" : "bg-white"} opacity-${i === 0 ? 40 : i === 1 ? 25 : 15}`}
                />
            ))}
        </div>
    );
}

function LSMVisual({ color }: { color: string }) {
    const levels = [
        { w: "w-8",  label: "L0" },
        { w: "w-14", label: "L1" },
        { w: "w-20", label: "L2" },
        { w: "w-28", label: "L3" },
    ];
    return (
        <div className="flex flex-col gap-1 items-start">
            {levels.map((l, i) => (
                <div key={i} className="flex items-center gap-2">
                    <span className="text-[6px] text-white/20 w-4">{l.label}</span>
                    <div className={`h-2 ${l.w} rounded-sm ${color === "text-amber-400" ? "bg-amber-400" : "bg-white"} opacity-${40 - i * 10}`} />
                </div>
            ))}
        </div>
    );
}

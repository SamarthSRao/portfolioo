"use client";

import { motion } from "framer-motion";


export default function Contact({ onClose }: { onClose?: () => void }) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            whileDrag={{
                scale: 1.02,
                zIndex: 100,
            }}
            initial={{ zIndex: 10 }}
            className="w-[480px] h-[330px] flex flex-col relative overflow-hidden cursor-grab active:cursor-grabbing backdrop-blur-2xl"
            style={{
                backgroundColor: "#111111",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "rgba(0,0,0,0.9) 0px 40px 80px, rgb(0,0,0) 0px 0px 0px 0.5px",
            }}
        >
            <div className="flex-none flex items-center h-8 px-2 border-b border-white/[0.05] relative select-none">
                <div className="flex-none flex items-center gap-1.5 z-10">
                    <button
                        onClick={onClose}
                        className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors duration-150 cursor-pointer outline-none" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                </div>
                <p className="text-[9px] font-mono text-white/40 tracking-[0.2em] absolute left-1/2 -translate-x-1/2 uppercase pointer-events-none">
                    CONTACT
                </p>
            </div>
        </motion.div>
    )
}
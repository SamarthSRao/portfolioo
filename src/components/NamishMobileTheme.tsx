"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function NamishMobileTheme({ onToggle }: { onToggle: () => void }) {
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

  return (
    <div className="dark:bg-neutral-950 font-normal overflow-x-hidden dark:text-neutral-200 bg-neutral-100 flex flex-col w-screen min-h-[100dvh] text-neutral-900 font-mono text-sm" style={{ color: "#e5e5e5", background: "#0a0a0a" }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css" />
      </Head>

      <div className="flex flex-col w-full px-4 py-8 relative z-10">
        <div className="navbar mb-4 items-center flex w-full justify-between">
          <div className="flex items-center gap-4">
            <img src="https://github.com/SamarthSRao.png" alt="" className="h-10 w-10 rounded-sm" />
            <span className="font-bold text-xl font-sans tracking-tight">namishh</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Toggle - we use this to toggle back to Rams theme */}
            <button onClick={onToggle} className="text-xl cursor-pointer bg-white/10 px-2 py-1 rounded text-xs">
              Rams Mode
            </button>
            <i className="ph cursor-pointer text-2xl ph-list"></i>
          </div>
        </div>

        <div id="content" className="grow font-sans">
          <p className="mt-2 text-base leading-relaxed text-neutral-300">
            hey there 👋 ! i like <span className="underline decoration-neutral-500 underline-offset-4">nixos</span>,{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">neovim</span>,{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">minimalism</span> and{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">hypocrisy</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            i live in the cli, probably programming. i code mostly for the web but transitioning more towards{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">zig</span> and{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">gamedev</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            hacking around at <a href="#" className="text-blue-400 hover:underline">flora</a>. prev intern @ ai startup. open to new roles, mail at{" "}
            <a href="mailto:hey@namishh.com" className="text-blue-400 hover:underline">hey@namishh.com</a>
          </p>

          <div className="flex gap-5 mt-6 font-mono text-xs">
            <a href="#" className="underline decoration-neutral-600 underline-offset-4 hover:text-white transition-colors"><i className="ph-thin ph-file mr-1"></i>resume</a>
            <a href="https://github.com/SamarthSRao" className="underline decoration-neutral-600 underline-offset-4 hover:text-white transition-colors"><i className="ph-thin ph-github-logo mr-1"></i>github</a>
            <a href="https://x.com/SamarthSRao" className="underline decoration-neutral-600 underline-offset-4 hover:text-white transition-colors"><i className="ph-thin ph-x-logo mr-1"></i>x dot com</a>
          </div>

          <div className="mt-8 text-neutral-400 text-sm tracking-wide">some projects</div>
          
          <div className="flex flex-col gap-6 mt-4 w-full">
            <a href="https://github.com/namishh/ascendant" className="group flex flex-col">
              <div className="w-full h-48 bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="mt-3 text-neutral-200 font-medium">ascendant</p>
              <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                (unfinished) card game inspired by club penguin jutsu in zig
              </p>
            </a>
            
            <a href="https://kardbrew.studio" className="group flex flex-col">
              <div className="w-full h-48 bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="mt-3 text-neutral-200 font-medium">kardbrew</p>
              <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                infant indie game dev studio, creating games with löve.
              </p>
            </a>
          </div>

          <div className="mt-8 space-y-3 font-sans">
            <p className="text-neutral-300">
              <a href="https://github.com/namishh/holmes" className="text-blue-400 hover:underline">holmes</a> - starter kit for making your own cryptic hunts in golang
            </p>
            <p className="text-neutral-300">
              <a href="https://github.com/namishh/pixie" className="text-blue-400 hover:underline">pixie</a> - wasm lightroom-esque editor in rust and nextjs
            </p>
            <p className="text-neutral-300">
              <a href="https://github.com/namishh/nurture" className="text-blue-400 hover:underline">nurture</a> - basic ui library for widgets in löve2d
            </p>
          </div>

          <p className="mt-8 text-neutral-300">
             you can check out all of them <a href="#" className="text-blue-400 hover:underline">here</a>
          </p>

          <div className="mt-8 text-neutral-400 text-sm tracking-wide">
            cool people <i className="ph-fill ph-arrow-right align-middle ml-1"></i>
          </div>
          
          <div className="mt-4 mb-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-10 w-10 rounded-md bg-neutral-800 shrink-0 border border-neutral-700 animate-pulse"></div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 text-neutral-500 text-xs flex justify-between font-mono">
          <p>made out of ❤️ and boredom</p>
          <p>
            built with <a href="#" className="text-blue-400 hover:underline">actix</a>
          </p>
        </div>
      </div>
    </div>
  );
}

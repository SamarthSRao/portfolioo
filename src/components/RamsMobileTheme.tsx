"use client";

import React from "react";
import { Search, Moon, FileText, Github, Linkedin, Twitter, Youtube, Instagram, Mail, LayoutGrid, Terminal, Monitor, BookOpen, Film, Copy } from "lucide-react";

export default function RamsMobileTheme({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="bg-[#fcfcfc] min-h-[100dvh] w-screen text-gray-900 font-sans px-5 py-6 overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between mb-10 text-[15px] font-medium text-gray-500">
        <div className="flex gap-4">
          <a href="#" className="text-gray-800">Home</a>
          <a href="#experience" className="hover:text-gray-800 transition-colors">Work</a>
          <a href="#projects" className="hover:text-gray-800 transition-colors">Blog</a>
          <a href="#resume" className="hover:text-gray-800 transition-colors">Resume</a>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <Search size={18} strokeWidth={2} />
          {/* Theme toggle uses onToggle to switch to Namish */}
          <button onClick={onToggle} className="hover:text-black transition-colors focus:outline-none">
             <Moon size={18} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="mb-10">
        <div className="flex gap-5 items-start mb-4">
          <img 
            src="https://github.com/SamarthSRao.png" 
            alt="Samarth S Rao" 
            className="w-24 h-24 rounded-full border border-gray-200 object-cover"
          />
          <div className="pt-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Samarth S Rao</h1>
            <div className="text-gray-500 text-sm flex items-center gap-2">
              <span>Backend Dev · Engineer</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-gray-800">
                Email <Copy size={12} />
              </span>
              <span>👾</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-[15px] mb-5">
          Love to build scalable backends, learning distributed systems, and sometimes vibecoding UIs for fun.
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span>Last played — Some song · Artist</span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <Twitter size={18} />
          <Linkedin size={18} />
          <Github size={18} />
          <Youtube size={18} />
          <Instagram size={18} />
          <Mail size={18} />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-12" id="experience">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-semibold text-gray-900">Current Role</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Working
                </span>
              </div>
              <p className="text-gray-500 text-sm">SDE-1 (Backend)</p>
            </div>
            <div className="text-right text-sm text-gray-400">
              <p>Jan 24 – Present</p>
              <p>Bengaluru, IN</p>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 mb-0.5">Previous Company</h3>
              <p className="text-gray-500 text-sm">Backend Developer Intern</p>
            </div>
            <div className="text-right text-sm text-gray-400">
              <p>Aug 23 – Dec 23</p>
              <p>Bengaluru, IN</p>
            </div>
          </div>

          <button className="w-full py-2.5 mt-2 bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors">
            Show all work experiences
          </button>
        </div>
      </div>

      {/* Development Section */}
      <div className="mb-12" id="projects">
        <h2 className="text-xl font-bold mb-4">Development</h2>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer">
            <h3 className="font-semibold text-gray-900 mb-1">Gears</h3>
            <p className="text-gray-500 text-sm">Tools, devices, and software I use to get work done.</p>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer relative overflow-hidden">
            <h3 className="font-semibold text-gray-900 mb-1">Setup</h3>
            <p className="text-gray-500 text-sm">VSCode / Cursor configuration and extensions guide.</p>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl opacity-50">
               💤 🐈
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer">
            <h3 className="font-semibold text-gray-900 mb-1">Terminal</h3>
            <p className="text-gray-500 text-sm">Zsh, Starship, Fastfetch, and shell configuration.</p>
          </div>
        </div>
      </div>

      {/* Personal Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Personal</h2>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer">
            <h3 className="font-semibold text-gray-900 mb-1">Books</h3>
            <p className="text-gray-500 text-sm">Books that have influenced my thinking and growth.</p>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer">
            <h3 className="font-semibold text-gray-900 mb-1">Movies</h3>
            <p className="text-gray-500 text-sm">Films and shows that have inspired and entertained me.</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mb-16 border border-gray-100 bg-gray-50/50 rounded-xl p-6 relative">
        <div className="absolute -top-4 -left-2 text-[6rem] text-gray-200 font-serif leading-none select-none z-0">
          "
        </div>
        <p className="relative z-10 text-gray-600 italic text-lg leading-relaxed mb-4">
          You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.
        </p>
        <p className="text-right text-gray-500 text-sm">— Bhagavad Gita</p>
        <div className="absolute right-6 -bottom-6 text-2xl">
          🐈
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="border-t border-gray-200 pt-10 pb-16">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-wider text-gray-500 mb-4">NAVIGATE</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-500">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">Work</a>
            <a href="#" className="hover:text-gray-900">Blog</a>
            <a href="#" className="hover:text-gray-900">Resume</a>
            <a href="#" className="hover:text-gray-900">Projects</a>
            <a href="#" className="hover:text-gray-900">Gears</a>
            <a href="#" className="hover:text-gray-900">Setup</a>
            <a href="#" className="hover:text-gray-900">Terminal</a>
            <a href="#" className="hover:text-gray-900">Books</a>
            <a href="#" className="hover:text-gray-900">Movies</a>
            <a href="#" className="hover:text-gray-900">RSS FEED</a>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-xs font-semibold tracking-wider text-gray-500 mb-4">CONNECT</p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Youtube, Instagram, LayoutGrid, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Samarth S Rao. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

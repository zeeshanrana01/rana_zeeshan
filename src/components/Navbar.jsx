"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

export default function Navbar() {
  const { scrolled } = useScroll(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#resume" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className={`glass-panel rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-surface-900/95 border-slate-700/70 shadow-2xl' : ''}`}>
          <a href="#hero" className="text-white font-bold tracking-tight text-lg flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-surface-950 transition-colors font-mono text-xs">RZ</span>
            <span className="group-hover:text-brand-400 transition-colors">Rana Zeeshan</span>
          </a>
          <div className="hidden lg:flex items-center space-x-1 text-xs font-medium text-slate-300">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors">{link.label}</a>
            ))}
            <a href="#contact" className="ml-3 px-4 py-2 rounded-lg bg-brand-500 text-surface-950 font-semibold hover:bg-brand-400 transition-all shadow-sm shadow-brand-500/20">Contact</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white focus:outline-none">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="lg:hidden glass-panel rounded-2xl mt-2 p-5 shadow-2xl flex flex-col space-y-3 text-sm font-medium border border-slate-700/60">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-slate-300 hover:text-white transition-colors">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="pt-2 border-t border-slate-800 text-brand-400 font-semibold">Contact Me</a>
          </div>
        )}
      </div>
    </header>
  );
}
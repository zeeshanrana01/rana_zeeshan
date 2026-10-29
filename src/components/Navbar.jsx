"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { personalInfo } from '../data/personal';
import { WhatsAppIcon, GitHubIcon, LinkedInIcon } from './SocialLinks';

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
        <nav className={`glass-panel rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-surface-900/95 border-slate-700/70 shadow-2xl backdrop-blur-xl' : ''}`}>
          
          {/* Logo / Brand */}
          <a href="#hero" className="text-white font-bold tracking-tight text-lg flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-surface-950 transition-colors font-mono text-xs">
              RZ
            </span>
            <div className="flex flex-col">
              <span className="group-hover:text-brand-400 transition-colors leading-tight">Rana Zeeshan</span>
              <span className="text-[10px] font-mono text-brand-400 font-normal">AI Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 text-xs font-medium text-slate-300">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* GitHub Quick Link */}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Chat Action */}
            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-surface-950 transition-all flex items-center gap-1.5 font-mono text-xs font-semibold shadow-sm shadow-emerald-500/20"
              title="Direct Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Contact Button */}
            <a 
              href="#contact" 
              className="ml-2 px-4 py-2 rounded-lg bg-brand-500 text-surface-950 font-semibold hover:bg-brand-400 transition-all shadow-sm shadow-brand-500/20"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden glass-panel rounded-2xl mt-2 p-5 shadow-2xl flex flex-col space-y-3 text-sm font-medium border border-slate-700/60 bg-surface-900/95 backdrop-blur-xl">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className="text-slate-300 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Direct WhatsApp Button */}
            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center gap-2 font-mono text-xs font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Direct Chat on WhatsApp (+92-3074132838)</span>
            </a>

            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)} 
              className="pt-2 border-t border-slate-800 text-brand-400 font-semibold text-center"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";
import React, { useState } from 'react';
import { personalInfo } from '../data/personal';
import { WhatsAppIcon } from './SocialLinks';
import { X, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      <div className="hidden sm:flex items-center gap-2.5 glass-panel px-3.5 py-2 rounded-2xl border border-emerald-500/30 bg-surface-950/90 shadow-2xl backdrop-blur-xl animate-bounce-subtle">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <div className="text-[11px] font-mono leading-tight">
          <p className="text-white font-semibold flex items-center gap-1">
            <span>Direct WhatsApp</span>
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </p>
          <p className="text-emerald-400 font-medium">Online • Start Chat</p>
        </div>
      </div>

      {/* Main Floating Button */}
      <div className="relative group">
        <a
          href={personalInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40"
          title="Direct Chat with Rana Zeeshan on WhatsApp"
        >
          {/* Subtle Ambient Glow */}
          <span className="absolute -inset-1 rounded-2xl bg-emerald-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative z-10">
            <WhatsAppIcon className="w-7 h-7" />
          </span>
        </a>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setClosed(true);
          }}
          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-surface-900 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity shadow"
          title="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
}

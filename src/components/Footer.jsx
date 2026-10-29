import React from 'react';
import { personalInfo } from '../data/personal';
import SocialLinks, { WhatsAppIcon } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface-950/95 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold text-[10px]">
              RZ
            </span>
            <span className="text-white font-bold">{personalInfo.name.toUpperCase()}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-400">{personalInfo.title}</span>
        </div>

        {/* Social Icons Hub */}
        <SocialLinks variant="compact" />

        {/* Copyright & Direct WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-right text-[11px]">
          <a
            href={personalInfo.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp ({personalInfo.phone})</span>
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Rana Zeeshan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

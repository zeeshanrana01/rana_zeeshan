import React from 'react';
import { personalInfo } from '../data/personal';
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface-950 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">{personalInfo.name.toUpperCase()}</span>
          <span>•</span>
          <span>{personalInfo.title}</span>
        </div>
        <p>{personalInfo.location}</p>
      </div>
    </footer>
  );
}
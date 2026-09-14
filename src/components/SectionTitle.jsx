import React from 'react';
export default function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-brand-400 font-mono text-xs uppercase tracking-widest">{number}</span>
        <div className="h-[1px] bg-slate-800 flex-1 max-w-xs"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 text-sm mt-2 max-w-xl">{subtitle}</p>}
    </div>
  );
}
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="03. History" title="Professional Experience" subtitle="Verified track record across data operations and web development." />
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface-900 border-2 ring-4 ring-surface-900 ${exp.isLatest ? 'border-brand-400' : 'border-slate-600'}`} />
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${exp.isLatest ? 'bg-brand-500/10 text-brand-400 border-brand-500/20' : 'bg-slate-800 text-slate-300 border-slate-700'}`}>{exp.period}</span>
              </div>
              <p className="text-brand-400 font-mono text-sm mb-4">{exp.role}</p>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {exp.responsibilities.map((task, taskIdx) => <li key={taskIdx}>{task}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
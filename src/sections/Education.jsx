import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="04. Academics" title="Education" subtitle="All five academic qualifications presented chronologically." />
      <div className="space-y-4">
        {educationList.map((edu, idx) => (
          <div key={idx} className={`glass-panel rounded-2xl p-6 sm:p-7 ${edu.isHighest ? 'border-l-4 border-l-brand-400' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                {edu.isHighest && <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/30 mb-2 font-medium">Highest Qualification</span>}
                <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
              </div>
              <div className={`font-mono text-sm font-medium ${edu.isHighest ? 'text-brand-400' : 'text-slate-400'}`}>{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
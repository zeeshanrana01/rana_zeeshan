import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <SectionTitle number="07. Overview" title="Resume" subtitle="Structured summary for recruiters and technical hiring teams." />
        <div className="mb-10 sm:mb-12">
          <Button href={personalInfo.resumePath} download="Rana-Zeeshan-Resume.pdf" variant="primary">
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </Button>
        </div>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div><h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3><p className="text-brand-400 font-mono text-sm">{personalInfo.title}</p></div>
          <div className="text-xs font-mono text-slate-400 space-y-1"><p>Email: {personalInfo.email}</p><p>Phone: {personalInfo.phone}</p><p>Location: {personalInfo.location}</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Experience</h4><p className="text-sm text-white font-medium">3+ Years IT Operations & Dev</p><p className="text-xs text-slate-400">The Urban Unit (2025–2026)<br />Freelance Web Developer (2023–2024)</p></div>
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Education</h4><p className="text-sm text-white font-medium">MS – Computer Science</p><p className="text-xs text-slate-400">University of Okara (2022–2024)<br />MSc IT, BSc CS, FSc, Matric</p></div>
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Primary Core</h4><p className="text-sm text-white font-medium">Web & IT Support</p><p className="text-xs text-slate-400">React.js, WordPress, Hardware Installation, Networking</p></div>
        </div>
      </div>
    </section>
  );
}
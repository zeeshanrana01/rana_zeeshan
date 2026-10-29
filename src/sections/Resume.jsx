"use client";
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';
import { 
  Download, 
  Eye, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Maximize2 
} from 'lucide-react';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'summary'

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Header and Quick Action Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <SectionTitle 
          number="07. Overview" 
          title="Curriculum Vitae" 
          subtitle="Explore the interactive live preview directly in your browser or download the verified PDF copy." 
        />
        
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button 
            href={personalInfo.resumePath} 
            target="_blank" 
            variant="outline"
            className="border-brand-500/30 text-brand-400 hover:text-white"
          >
            <Eye className="w-4 h-4" />
            <span>Watch / View in Tab</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Button>

          <Button 
            href={personalInfo.resumePath} 
            download="Rana-Zeeshan-Resume.pdf" 
            variant="primary"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </Button>
        </div>
      </div>

      {/* Tab Switcher: Live Document Viewer vs Structured Highlights */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'preview'
              ? 'bg-brand-500 text-surface-950 font-bold shadow-md shadow-brand-500/20'
              : 'glass-panel text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Interactive PDF Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'summary'
              ? 'bg-brand-500 text-surface-950 font-bold shadow-md shadow-brand-500/20'
              : 'glass-panel text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Structured Key Highlights</span>
        </button>
      </div>

      {/* Tab 1: Live Interactive PDF Preview */}
      {activeTab === 'preview' && (
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
          {/* Mock Window Title Bar */}
          <div className="bg-surface-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-slate-300 ml-2 truncate">
                Rana-Zeeshan-Resume.pdf
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2 py-0.5 rounded">
                Verified Document
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-400 hover:text-brand-400 transition-colors px-2 py-1 rounded hover:bg-slate-800/60"
                title="Open fullscreen in new tab"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </a>
              <a
                href={personalInfo.resumePath}
                download="Rana-Zeeshan-Resume.pdf"
                className="flex items-center gap-1 text-slate-400 hover:text-brand-400 transition-colors px-2 py-1 rounded hover:bg-slate-800/60"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF iframe */}
          <div className="relative w-full bg-slate-900 min-h-[600px] sm:min-h-[850px]">
            <iframe
              src={`${personalInfo.resumePath}#toolbar=0&navpanes=0`}
              className="w-full h-[600px] sm:h-[850px] border-none bg-slate-900"
              title="Rana Zeeshan CV Preview"
            />
          </div>

          {/* Mobile / Fallback Helper footer */}
          <div className="bg-surface-900/90 px-4 py-3 border-t border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Viewing on a mobile device or browser without inline PDF support?</span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:underline inline-flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open PDF Directly
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={personalInfo.resumePath}
                download="Rana-Zeeshan-Resume.pdf"
                className="text-brand-400 hover:underline inline-flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                Direct Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Structured Key Highlights */}
      {activeTab === 'summary' && (
        <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-8 border border-slate-800">
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-brand-400 font-mono text-sm">{personalInfo.title}</p>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1">
              <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-brand-400">{personalInfo.email}</a></p>
              <p>Phone: <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-brand-400">{personalInfo.phone}</a></p>
              <p>Location: {personalInfo.location}</p>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Professional Summary</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary.join(' ')}
            </p>
          </div>

          {/* Grid of Key Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-800/80">
            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Award className="w-4 h-4 text-brand-400" />
                <span>Certifications</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                  <span>Microsoft Azure AI Apps & Agents Associate</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                  <span>AWS Solutions Architect – Associate (Score: 874)</span>
                </li>
              </ul>
            </div>

            {/* Target Roles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Briefcase className="w-4 h-4 text-brand-400" />
                <span>Target Roles</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.targetRoles?.map((role) => (
                  <span key={role} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-900 border border-slate-800 text-slate-300">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span>Education</span>
              </div>
              <p className="text-sm text-white font-medium">MS – Computer Science</p>
              <p className="text-xs text-slate-400">
                University of Okara (2022–2024)<br />
                MSc IT, BSc CS, FSc, Matric
              </p>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Globe className="w-4 h-4 text-brand-400" />
                <span>Languages</span>
              </div>
              <p className="text-xs text-slate-300">
                {personalInfo.languages?.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

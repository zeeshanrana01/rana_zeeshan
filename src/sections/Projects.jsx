"use client";
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { projectPlaceholders } from '../data/projects';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Layers, 
  Bot, 
  Mic, 
  Scan, 
  ShieldCheck 
} from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'Agentic & GenAI', label: 'Agentic & GenAI', icon: <Bot className="w-3.5 h-3.5" /> },
    { id: 'Voice AI', label: 'Voice AI', icon: <Mic className="w-3.5 h-3.5" /> },
    { id: 'Computer Vision', label: 'Computer Vision', icon: <Scan className="w-3.5 h-3.5" /> },
    { id: 'Full-Stack AI Platform', label: 'Full-Stack AI', icon: <Code2 className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = filter === 'all' 
    ? projectPlaceholders 
    : projectPlaceholders.filter((p) => p.badge.toLowerCase().includes(filter.toLowerCase()) || (p.badge === filter));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60 relative">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <SectionTitle 
          number="05. Showcase" 
          title="Featured AI & Cloud Projects" 
          subtitle="Engineered production architectures across Multi-Model AI Chat, Real-Time Voice Agents, LangChain Autonomous Systems, and Computer Vision." 
        />
        <div className="mb-10 md:mb-12 text-xs font-mono text-slate-400 flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span>Verified GitHub Repositories</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/60">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
              filter === cat.id
                ? 'bg-brand-500 text-surface-950 font-bold shadow-md shadow-brand-500/20'
                : 'glass-panel text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div 
            key={proj.id} 
            className="group glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 relative border border-slate-800 bg-surface-900/90 shadow-xl"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20 font-semibold">
                  {proj.badge}
                </span>

                <div className="flex items-center gap-2 text-slate-400">
                  {proj.stats && (
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-surface-950 border border-slate-800">
                      {proj.stats}
                    </span>
                  )}
                  <a 
                    href={proj.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" 
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors leading-snug">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                {proj.description}
              </p>
            </div>

            {/* Bottom Tech Tags & GitHub Button */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                {proj.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 rounded-md bg-surface-950 text-slate-400 border border-slate-800 group-hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 transition-colors font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                {proj.liveUrl !== "#" && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 p-6 glass-panel rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-950/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-white shrink-0">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">More Projects & Research on GitHub</h4>
            <p className="text-xs text-slate-400 font-mono">Explore all open-source repositories and scripts at github.com/zeeshanrana01</p>
          </div>
        </div>

        <a
          href="https://github.com/zeeshanrana01"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all flex items-center gap-2 border border-slate-700 shrink-0"
        >
          <span>Visit GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
}

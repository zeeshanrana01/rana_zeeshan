import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projectPlaceholders } from '../data/projects';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <SectionTitle 
          number="05. Showcase" 
          title="Selected AI & Software Projects" 
          subtitle="Engineering implementations across Computer Vision, Retrieval-Augmented Generation, and Real-Time Voice Agents." 
        />
        <div className="mb-10 md:mb-12 text-xs font-mono text-slate-400 flex items-center gap-2 shrink-0">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>Core AI Projects</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectPlaceholders.map((proj) => (
          <div key={proj.id} className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">{proj.badge}</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="View Source on GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  {proj.liveUrl !== "#" && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-300">
              {proj.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-surface-900 border border-slate-800">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

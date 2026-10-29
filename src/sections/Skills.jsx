import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/skills';
import { Bot, Code, Scan, Mic, Cloud } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (name) => {
    switch (name) {
      case "AI Engineering & GenAI":
        return <Bot className="w-5 h-5 text-brand-400" />;
      case "Programming & Web":
        return <Code className="w-5 h-5 text-teal-400" />;
      case "Computer Vision":
        return <Scan className="w-5 h-5 text-cyan-400" />;
      case "Voice & Conversational AI":
        return <Mic className="w-5 h-5 text-amber-400" />;
      case "Cloud & Development":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="02. Competencies" title="Core Technical Skills" subtitle="Core proficiencies aligned with modern AI engineering, computer vision, voice agents, and cloud architectures." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group) => (
          <div key={group.category} className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5">
              {getCategoryIcon(group.category)}
            </div>
            <h3 className="text-lg font-bold text-white mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs rounded-md bg-surface-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

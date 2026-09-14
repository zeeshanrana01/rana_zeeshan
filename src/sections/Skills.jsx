import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/skills';
import { Code, Server, FileSpreadsheet, Blocks, Users, Laptop } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (name) => {
    switch (name) {
      case "Web Development": return <Code className="w-5 h-5 text-brand-400" />;
      case "CMS / Frameworks": return <Laptop className="w-5 h-5 text-teal-400" />;
      case "IT Support": return <Server className="w-5 h-5 text-cyan-400" />;
      case "Productivity Tools": return <FileSpreadsheet className="w-5 h-5 text-blue-400" />;
      case "Additional Skills": return <Blocks className="w-5 h-5 text-amber-400" />;
      case "Soft Skills": return <Users className="w-5 h-5 text-emerald-400" />;
      default: return <Code className="w-5 h-5 text-brand-400" />;
    }
  };
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="02. Competencies" title="Skills & Technologies" subtitle="Categorized capabilities without fabricated ratings or percentages." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group) => (
          <div key={group.category} className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-transform">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5">{getCategoryIcon(group.category)}</div>
            <h3 className="text-lg font-bold text-white mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs rounded-md bg-surface-900 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
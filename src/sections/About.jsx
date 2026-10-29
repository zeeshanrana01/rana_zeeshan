"use client";
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  Bot, 
  Cloud, 
  Code2, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Workflow, 
  Zap, 
  Globe2 
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('ai');

  const pillars = [
    {
      id: 'ai',
      label: 'AI / ML & Agentic Systems',
      icon: <Bot className="w-4 h-4" />,
      tagline: 'Designing Autonomous Multi-Agent Workflows & Applied AI Systems',
      description: 'Specializing in Azure AI services, custom agentic frameworks, and contextual LLM applications. Translating complex business logic into reliable, self-directed AI workflows with strict guardrails, memory, and semantic tool calling.',
      techStack: ['Azure AI Apps & Agents', 'Autonomous Tool Calling', 'Prompt Orchestration', 'RAG Pipelines', 'Python', 'FastAPI'],
      metrics: 'Agentic Workflows & Model Integration'
    },
    {
      id: 'cloud',
      label: 'AWS Cloud Architecture',
      icon: <Cloud className="w-4 h-4" />,
      tagline: 'Enterprise-Grade Resilient & High-Performing Cloud Infrastructures',
      description: 'AWS Certified Solutions Architect with proven competency in architecting secure, decoupled, and cost-optimized distributed systems. Experienced in cloud storage lifecycle, VPC networking, fault-tolerant compute, and resilient deployment pipelines.',
      techStack: ['VPC & Cloud Networking', 'Decoupled Systems', 'Cost Optimization', 'High Availability', 'IAM & Security', 'AWS S3 & EC2'],
      metrics: '874 / 1000 Exam Score'
    },
    {
      id: 'web',
      label: 'Full-Stack & Web3 Environments',
      icon: <Code2 className="w-4 h-4" />,
      tagline: 'High-Speed Web Interfaces & Interactive Trading Dashboards',
      description: 'Over 3 years of hands-on web engineering using Next.js, React, and modern JavaScript. Experienced in building real-time data visualizers, trading platform layouts, e-commerce architectures, and responsive digital ecosystems.',
      techStack: ['Next.js (App Router)', 'React.js', 'Tailwind CSS', 'Web3 & Blockchain Basics', 'RESTful APIs', 'Modern JavaScript'],
      metrics: '3+ Years Field & Freelance Delivery'
    }
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-brand-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <SectionTitle 
        number="01. Identity & Engineering" 
        title="About My Technical Background" 
        subtitle="Bridging Autonomous AI Agents, Enterprise Cloud Architecture, and High-Speed Frontend Web Ecosystems."
      />

      {/* Top 3 Quick Stats Counter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-bold font-mono text-white">3+ Years</span>
            <p className="text-xs text-slate-400 font-mono">IT & Web Systems Delivery</p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-bold font-mono text-white">Certified</span>
            <p className="text-xs text-slate-400 font-mono">Azure AI & AWS Architect</p>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4 hover:border-brand-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-bold font-mono text-white">Full-Stack</span>
            <p className="text-xs text-slate-400 font-mono">Next.js, React & Web3 Basics</p>
          </div>
        </div>
      </div>

      {/* Main Interactive Matrix Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Narrative & Educational Foundation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-400 pb-2 border-b border-slate-800">
              <Terminal className="w-4 h-4" />
              <span>CORE_ENGINEERING_PROFILE.md</span>
            </div>

            <p>
              I come from a rigorous Computer Science and Information Technology foundation, holding both a <strong className="text-white">Master of Science in Computer Science (MS CS)</strong> and an <strong className="text-white">MSc in IT</strong>.
            </p>

            <p>
              My work converges at the intersection of <strong className="text-brand-400">Agentic AI</strong> and <strong className="text-brand-400">Cloud Systems Architecture</strong>. Having achieved global credentials including <strong className="text-white">Microsoft Certified: Azure AI Apps and Agents Developer</strong> and <strong className="text-white">AWS Certified Solutions Architect – Associate (Score: 874)</strong>, I specialize in engineering dependable, resilient cloud backends that fuel intelligent models.
            </p>

            <p>
              Simultaneously, my background features over 3 years of frontend engineering with <strong className="text-white">Next.js, React, HTML5, CSS3, and JavaScript</strong>, building responsive business engines and dynamic Web3/crypto trading style platforms with high performance.
            </p>
          </div>

          {/* Core Philosophy Badges */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface-900 border border-slate-800 flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-brand-400" />
              <span className="text-slate-300">Scalable & Resilient</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-900 border border-slate-800 flex items-center gap-2.5">
              <Workflow className="w-4 h-4 text-brand-400" />
              <span className="text-slate-300">Agentic Orchestration</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-900 border border-slate-800 flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-brand-400" />
              <span className="text-slate-300">Full-Stack Precision</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-900 border border-slate-800 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span className="text-slate-300">Continuous Mastery</span>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Domain Switcher (AI vs AWS vs Web3) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Domain Tab Selector */}
          <div className="flex rounded-2xl glass-panel p-1.5 border border-slate-800 gap-1">
            {pillars.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-brand-500 text-surface-950 font-bold shadow-lg shadow-brand-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Active Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-brand-500/30 shadow-2xl relative min-h-[380px] flex flex-col justify-between transition-all duration-500 animate-in fade-in">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                  {currentPillar.metrics}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {currentPillar.label}
              </h3>

              <p className="text-xs font-mono text-brand-400 mb-5">
                {currentPillar.tagline}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {currentPillar.description}
              </p>
            </div>

            {/* Micro Tech Tags */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">Engineered Tooling</span>
              <div className="flex flex-wrap gap-2">
                {currentPillar.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-surface-900 border border-slate-800 text-slate-300 hover:border-brand-500/50 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Eye, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Bot, 
  Radio 
} from 'lucide-react';
import Button from '../components/Button';
import SocialLinks, { WhatsAppIcon } from '../components/SocialLinks';
import { personalInfo } from '../data/personal';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text & Credentials */}
        <div className="lg:col-span-7">
          
          {/* Status HUD Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-brand-400 text-xs font-mono mb-6 border border-brand-500/20 bg-surface-950/60 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">SYSTEM: ACTIVE</span>
            <span className="text-slate-600">•</span>
            <span>Azure AI Developer & AWS Solutions Architect</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            {personalInfo.name.toUpperCase()}
          </h1>

          <p className="text-xl sm:text-2xl text-brand-400 font-mono font-medium mb-6 flex items-center gap-2 flex-wrap">
            <span>{personalInfo.title}</span>
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            {personalInfo.summary[0]} {personalInfo.summary[1]}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            {/* Primary WhatsApp Chat CTA */}
            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-surface-950 shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-surface-950" />
              <span>Direct Chat on WhatsApp</span>
            </a>

            {/* Watch / View CV */}
            <Button href={personalInfo.resumePath} target="_blank" variant="outline" className="border-brand-500/30 text-brand-400 hover:text-white">
              <Eye className="w-4 h-4" />
              <span>Watch / View CV</span>
            </Button>

            {/* Download CV */}
            <Button href={personalInfo.resumePath} download="Rana-Zeeshan-Resume.pdf" variant="outline">
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Download CV</span>
            </Button>

            {/* View Projects */}
            <Button href="#projects" variant="outline">
              <span>Selected Works</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Enterprise Social Command Hub */}
          <div className="mb-8 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>Direct Verified Channels</span>
            </div>
            <SocialLinks />
          </div>

          {/* Quick Contact Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-400 transition-colors truncate">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="truncate">{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right: AR Holographic Portrait Card & AI Status HUD */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
          <div className="relative group">
            
            {/* Ambient Pulse Behind Portrait */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 via-emerald-500/20 to-blue-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Profile Frame */}
            <div className="relative rounded-3xl p-2 bg-surface-900/90 border border-brand-500/30 backdrop-blur-xl shadow-2xl">
              
              {/* Profile Image */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/60 bg-surface-850">
                <Image
                  src="/images/profile.jpg"
                  alt="Rana Zeeshan - AI Engineer"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle AR Corner Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-400"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-400"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-400"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-400"></div>

                {/* Cyber Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none opacity-40"></div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2.5 rounded-xl border border-brand-500/30 shadow-xl flex items-center gap-2.5 bg-surface-950/90">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
                <div className="text-[11px] font-mono leading-tight">
                  <p className="text-white font-bold">AWS & Azure</p>
                  <p className="text-brand-400">Certified Professional</p>
                </div>
              </div>

              {/* Floating AI Status Pill */}
              <div className="absolute -top-3 -right-3 glass-panel px-3 py-1.5 rounded-xl border border-emerald-500/30 shadow-xl flex items-center gap-2 bg-surface-950/90 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Open for Work</span>
              </div>

            </div>
          </div>

          {/* Mini Enterprise Telemetry Card */}
          <div className="w-full max-w-sm glass-panel rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-brand-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>AI_STACK_TELEMETRY</span>
              </span>
              <span className="text-[10px] bg-brand-500/10 text-brand-400 px-2 py-0.5 rounded border border-brand-500/20">v2.4</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div>
                <span className="text-slate-500 block">GENAI / AGENTS</span>
                <span className="text-white font-semibold">LangChain • Ollama</span>
              </div>
              <div>
                <span className="text-slate-500 block">VOICE & VISION</span>
                <span className="text-white font-semibold">LiveKit • YOLO</span>
              </div>
              <div>
                <span className="text-slate-500 block">CLOUD INFRA</span>
                <span className="text-white font-semibold">Azure AI • AWS SAA</span>
              </div>
              <div>
                <span className="text-slate-500 block">DIRECT COMMS</span>
                <span className="text-emerald-400 font-semibold">WhatsApp 24/7</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

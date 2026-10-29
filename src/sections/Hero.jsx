import React from 'react';
import Image from 'next/image';
import { ArrowRight, FileText, Mail, Phone, MapPin, Linkedin, ShieldCheck, Eye } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text & Credentials */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-brand-400 text-xs font-mono mb-6 border border-brand-500/20">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            Azure AI Apps & Agents Developer | AWS Solutions Architect
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            {personalInfo.name.toUpperCase()}
          </h1>

          <p className="text-xl sm:text-2xl text-brand-400 font-mono font-medium mb-6">
            {personalInfo.title}
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            {personalInfo.summary[0]} {personalInfo.summary[1]}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button href="#certifications" variant="primary">
              <span>View Certifications</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button href={personalInfo.resumePath} target="_blank" variant="outline">
              <Eye className="w-4 h-4 text-brand-400" />
              <span>Watch / View CV</span>
            </Button>

            <Button href={personalInfo.resumePath} download="Rana-Zeeshan-Resume.pdf" variant="outline">
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Download CV</span>
            </Button>

            <Button href={personalInfo.social?.linkedin} target="_blank" variant="outline">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </Button>
          </div>

          {/* Quick Contact Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 font-mono">
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
              <a href={`tel:${personalInfo.phone}`} className="hover:text-brand-400 transition-colors">
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

        {/* Right: AR Holographic Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Ambient Pulse Behind Portrait */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700"></div>

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
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2.5 rounded-xl border border-brand-500/30 shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
                <div className="text-[11px] font-mono leading-tight">
                  <p className="text-white font-bold">AWS & Azure</p>
                  <p className="text-brand-400">Certified Professional</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
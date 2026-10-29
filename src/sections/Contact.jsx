"use client";
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';
import SocialLinks, { WhatsAppIcon, LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from '../components/SocialLinks';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Radio, 
  Clock 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = encodeURIComponent(`AI Project / Engineering Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <SectionTitle 
        number="08. Connect" 
        title="Direct Communication Channels" 
        subtitle="Connect instantly via WhatsApp, explore social profiles, or transmit a direct project inquiry." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct WhatsApp Card & Verified Social Hub */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Featured WhatsApp Direct Chat Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-surface-900/90 to-surface-900/90 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Fastest Response Channel</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant</span>
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>Direct WhatsApp Chat</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Have an AI project, job opening, or technical requirement? Message me directly on WhatsApp for real-time discussion.
            </p>

            <a
              href={personalInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-surface-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-surface-950" />
              <span>Start WhatsApp Chat ({personalInfo.phone})</span>
            </a>
          </div>

          {/* Contact Details Card */}
          <div className="glass-panel rounded-2xl p-6 space-y-5 border border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-brand-400 transition-colors break-all">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
              <span>Verified Social Profiles</span>
            </div>
            <SocialLinks />
          </div>

        </div>

        {/* Right Column: Direct Transmission Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl bg-surface-900/90">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">Direct Message Transmission</h3>
              <p className="text-xs font-mono text-slate-400">Direct inbox dispatch to Rana Zeeshan</p>
            </div>
            <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
              SECURE_DISPATCH
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Your Full Name / Organization
              </label>
              <input 
                type="text" 
                id="name" 
                required 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                placeholder="e.g. John Doe, Hiring Manager / Founder" 
                className="w-full px-4 py-3 rounded-xl bg-surface-950 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors font-sans placeholder:text-slate-600" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Your Business / Contact Email
              </label>
              <input 
                type="email" 
                id="email" 
                required 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                placeholder="john@company.com" 
                className="w-full px-4 py-3 rounded-xl bg-surface-950 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors font-sans placeholder:text-slate-600" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                Project Scope / Message
              </label>
              <textarea 
                id="message" 
                rows={5} 
                required 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                placeholder="Provide details regarding your AI initiative, LangChain/Ollama agent, cloud infrastructure, or role..." 
                className="w-full px-4 py-3 rounded-xl bg-surface-950 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors resize-none font-sans placeholder:text-slate-600" 
              />
            </div>

            <Button type="submit" variant="primary" className="w-full py-3.5">
              <Send className="w-4 h-4" />
              <span>Transmit Message via Email</span>
            </Button>

            {submitted && (
              <div className="p-4 rounded-xl text-xs font-mono text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Email client initialized. Please hit send in your email client.</span>
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}

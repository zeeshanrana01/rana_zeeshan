"use client";
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="08. Connect" title="Get In Touch" subtitle="Direct channel for website projects, IT support consults, or full-time opportunities." />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0"><Mail className="w-5 h-5" /></div>
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Email</h4><a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-semibold text-white hover:text-brand-400 transition-colors break-all">{personalInfo.email}</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0"><Phone className="w-5 h-5" /></div>
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</h4><a href={`tel:${personalInfo.phone}`} className="text-sm sm:text-base font-semibold text-white hover:text-brand-400 transition-colors">{personalInfo.phone}</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0"><MapPin className="w-5 h-5" /></div>
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Location</h4><p className="text-sm sm:text-base font-semibold text-white">{personalInfo.location}</p></div>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h4 className="text-xs font-mono text-slate-400 uppercase mb-4">Profiles (Configurable Placeholders)</h4>
            <div className="flex flex-wrap items-center gap-3">
              <a href={personalInfo.social.linkedin} className="px-4 py-2.5 rounded-xl bg-surface-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 hover:border-slate-700 transition-colors"><Linkedin className="w-4 h-4 text-blue-400" /><span>LinkedIn [Placeholder]</span></a>
              <a href={personalInfo.social.github} className="px-4 py-2.5 rounded-xl bg-surface-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 hover:border-slate-700 transition-colors"><Github className="w-4 h-4 text-slate-200" /><span>GitHub [Placeholder]</span></a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
              <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
              <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
              <textarea id="message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Enter details regarding your web project or technical requirement..." className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-slate-800 focus:border-brand-500 focus:outline-none text-white text-sm transition-colors resize-none" />
            </div>
            <Button type="submit" variant="primary" className="w-full"><Send className="w-4 h-4" /><span>Send Direct Message</span></Button>
            {submitted && (
              <div className="p-3 rounded-xl text-xs font-mono text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /><span>Email client opened! Click Send in your mail app.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
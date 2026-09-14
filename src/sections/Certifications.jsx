"use client";
import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { certificationsList } from '../data/certifications';
import { ExternalLink, ShieldCheck, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inspectCert, setInspectCert] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const total = certificationsList.length;

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused || inspectCert) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, inspectCert]);

  // Spatial 3D offset calculation
  const getCardStyle = (index) => {
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      // Active center card
      return "z-30 scale-100 opacity-100 translate-x-0 rotate-y-0 border-brand-400 shadow-[0_0_50px_rgba(20,184,166,0.25)] pointer-events-auto";
    } else if (diff === 1 || (diff === -(total - 1))) {
      // Right card
      return "z-10 scale-[0.82] opacity-40 translate-x-[55%] sm:translate-x-[65%] rotate-y-[-12deg] blur-[1px] pointer-events-auto hover:opacity-75";
    } else if (diff === total - 1 || diff === -1) {
      // Left card
      return "z-10 scale-[0.82] opacity-40 -translate-x-[55%] sm:-translate-x-[65%] rotate-y-[12deg] blur-[1px] pointer-events-auto hover:opacity-75";
    } else {
      // Hidden background cards
      return "z-0 scale-75 opacity-0 pointer-events-none";
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60 relative overflow-hidden">
      
      {/* Background Cyber Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <SectionTitle 
        number="02. Verified Credentials" 
        title="International Certifications" 
        subtitle="3D interactive showcase of officially verified credentials in Cloud Architecture, AI Agent Development, and Web Engineering."
      />

      {/* 3D Carousel Stage */}
      <div 
        className="relative min-h-[580px] sm:min-h-[520px] flex items-center justify-center [perspective:1200px] mt-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {certificationsList.map((cert, index) => {
          const isCurrent = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => {
                if (!isCurrent) setActiveIndex(index);
              }}
              className={`absolute w-full max-w-[340px] sm:max-w-[480px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer rounded-3xl p-6 glass-panel border bg-surface-900/95 select-none ${getCardStyle(index)}`}
            >
              {/* Holographic Header Bar */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                  <span className="text-[11px] font-mono text-brand-400 font-semibold tracking-wider uppercase">
                    {cert.badgeType}
                  </span>
                </div>

                {cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Verify on official issuer portal"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Certificate Image Frame */}
              <div 
                className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-5 bg-surface-950 border border-slate-700/80 group flex items-center justify-center shadow-inner"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Inspect Overlay (Center Card Only) */}
                {isCurrent && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectCert(cert);
                    }}
                    className="absolute inset-0 bg-surface-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-xs"
                  >
                    <Eye className="w-4 h-4 text-brand-400" />
                    <span>Click to Inspect Full Document</span>
                  </button>
                )}
              </div>

              {/* Card Meta Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-brand-400 mb-3">{cert.issuer}</p>

                {cert.score && (
                  <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Exam Score: <strong>{cert.score}</strong></span>
                  </div>
                )}

                <div className="space-y-1 text-xs text-slate-400 font-mono mb-5">
                  <p>Issue Date: <span className="text-slate-200">{cert.issueDate}</span></p>
                  {cert.validationNumber && (
                    <p className="truncate">Validation: <span className="text-slate-200">{cert.validationNumber}</span></p>
                  )}
                  {cert.certNumber && (
                    <p className="truncate">Cert ID: <span className="text-slate-200">{cert.certNumber}</span></p>
                  )}
                </div>

                {/* Badges & Button */}
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1">
                    {cert.highlights.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-950 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {isCurrent && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectCert(cert);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-surface-950 font-bold text-xs font-mono transition flex items-center gap-1 shrink-0 shadow-md shadow-brand-500/20"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Actions & Circular Indicators */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          aria-label="Previous Certificate"
          className="w-12 h-12 rounded-2xl glass-panel border border-brand-500/30 text-white hover:text-brand-400 hover:border-brand-400 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2.5">
          {certificationsList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Jump to certificate ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeIndex === i 
                  ? 'w-9 bg-brand-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]' 
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Certificate"
          className="w-12 h-12 rounded-2xl glass-panel border border-brand-500/30 text-white hover:text-brand-400 hover:border-brand-400 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Modal (High z-index) */}
      {inspectCert && (
        <div 
          onClick={() => setInspectCert(null)}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full bg-surface-900 rounded-3xl border border-brand-500/50 shadow-2xl p-4 sm:p-6 flex flex-col"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 truncate pr-4">
                <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
                <h4 className="text-sm sm:text-base font-semibold text-white font-mono truncate">
                  {inspectCert.title}
                </h4>
              </div>

              <button 
                onClick={() => setInspectCert(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full max-h-[72vh] overflow-auto rounded-2xl bg-surface-950 flex items-center justify-center p-3 border border-slate-800">
              <img
                src={inspectCert.image}
                alt={inspectCert.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
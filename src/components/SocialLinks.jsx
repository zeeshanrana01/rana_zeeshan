import React from 'react';
import { personalInfo } from '../data/personal';

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.95 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.72C7.63 10.9 8.49 12.03 8.61 12.19C8.73 12.35 10.3 14.77 12.7 15.81C13.27 16.05 13.72 16.2 14.06 16.31C14.64 16.5 15.17 16.47 15.58 16.41C16.05 16.34 17.02 15.82 17.22 15.26C17.42 14.7 17.42 14.22 17.36 14.12C17.3 14.03 17.15 13.97 16.92 13.86C16.69 13.75 15.58 13.2 15.37 13.13C15.17 13.05 15.02 13.01 14.87 13.24C14.72 13.47 14.29 13.97 14.16 14.12C14.03 14.27 13.9 14.29 13.68 14.18C13.45 14.06 12.73 13.83 11.87 13.06C11.21 12.47 10.76 11.75 10.63 11.53C10.51 11.3 10.62 11.18 10.73 11.06C10.84 10.96 10.97 10.78 11.09 10.65C11.2 10.5 11.25 10.4 11.32 10.25C11.4 10.1 11.36 9.97 11.3 9.86C11.25 9.75 10.82 8.7 10.64 8.27C10.46 7.84 10.28 7.9 10.14 7.89C10.02 7.89 9.87 7.88 9.72 7.88C9.57 7.88 9.32 7.94 9.11 8.16C8.91 8.39 8.35 8.91 8.35 9.97C8.35 11.03 9.12 12.05 9.23 12.19" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function SocialLinks({ variant = "default", className = "" }) {
  const links = [
    {
      name: "LinkedIn",
      url: personalInfo.social.linkedin,
      icon: <LinkedInIcon className="w-4 h-4" />,
      colorClass: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
      accent: "#0A66C2"
    },
    {
      name: "GitHub",
      url: personalInfo.social.github,
      icon: <GitHubIcon className="w-4 h-4" />,
      colorClass: "hover:border-slate-400/50 hover:bg-slate-400/10 hover:text-white",
      accent: "#f0f6fc"
    },
    {
      name: "WhatsApp",
      url: personalInfo.social.whatsapp,
      icon: <WhatsAppIcon className="w-4 h-4" />,
      colorClass: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 border-emerald-500/30 text-emerald-400 bg-emerald-500/5",
      accent: "#25D366",
      isHighlight: true
    },
    {
      name: "Instagram",
      url: personalInfo.social.instagram,
      icon: <InstagramIcon className="w-4 h-4" />,
      colorClass: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400",
      accent: "#E4405F"
    },
    {
      name: "Facebook",
      url: personalInfo.social.facebook,
      icon: <FacebookIcon className="w-4 h-4" />,
      colorClass: "hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400",
      accent: "#1877F2"
    }
  ];

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${link.name} - Rana Zeeshan`}
            className={`w-9 h-9 rounded-xl glass-panel border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 active:scale-95 ${link.colorClass}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group px-3.5 py-2 rounded-xl glass-panel border border-slate-800/80 text-xs font-mono text-slate-300 flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${link.colorClass}`}
        >
          <span className="transition-transform group-hover:scale-110">
            {link.icon}
          </span>
          <span className="font-medium">{link.name}</span>
          {link.isHighlight && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          )}
        </a>
      ))}
    </div>
  );
}

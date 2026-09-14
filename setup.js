const fs = require("fs");
const path = require("path");

console.log("🚀 Creating Rana Zeeshan's Next.js Portfolio Project...");

const files = {
  // 1. package.json
  "package.json": `{
  "name": "rana-zeeshan-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.441.0",
    "next": "^14.2.10",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11"
  }
}`,

  // 2. next.config.mjs
  "next.config.mjs": `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;`,

  // 3. tailwind.config.mjs
  "tailwind.config.mjs": `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        surface: {
          950: "#060911",
          900: "#090d16",
          850: "#0d1322",
          800: "#0f172a",
          700: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};`,

  // 4. postcss.config.mjs
  "postcss.config.mjs": `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,

  // 5. .gitignore
  ".gitignore": `node_modules
.next
out
dist
.env*.local
.vscode
.DS_Store`,

  // 6. Favicon
  "public/favicon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="24" fill="#090d16"/>
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="#14b8a6" stroke-width="4" stroke-opacity="0.3"/>
  <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-weight="700" font-size="40" fill="#14b8a6">RZ</text>
</svg>`,

  // 7. Global CSS
  "src/app/globals.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #090d16;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #14b8a6;
}

.ambient-glow {
  background-color: #090d16;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.12) 0%, transparent 65%),
    radial-gradient(circle at 100% 40%, rgba(13, 148, 136, 0.05) 0%, transparent 50%);
  background-attachment: fixed;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.glass-panel:hover {
  border-color: rgba(20, 184, 166, 0.35);
}`,

  // 8. Data Files
  "src/data/personal.js": `export const personalInfo = {
  name: "Rana Zeeshan",
  title: "IT Professional | Web Developer | Tech Support",
  phone: "+92-3074132838",
  email: "zeeshanrana2014@gmail.com",
  location: "Changa Manga, Tehsil Pattoki, Punjab, Pakistan",
  summary: [
    "I am a detail-oriented and dedicated IT professional with 3+ years of hands-on experience in web development, IT support, and accounting roles.",
    "I have experience designing responsive e-commerce and portfolio websites, troubleshooting hardware and software issues, and supporting office IT infrastructure.",
    "I have strong communication skills and a passion for learning and growth in the technology field."
  ],
  interests: [
    { title: "Book Reading", desc: "Deepening analytical understanding and conceptual learning" },
    { title: "Technology", desc: "Exploring computing advancements and technical systems" },
    { title: "Badminton", desc: "Maintaining physical agility and sharp tactical focus" }
  ],
  socialPlaceholders: {
    github: "#",
    linkedin: "#"
  },
  resumePath: "/resume/Rana-Zeeshan-Resume.pdf"
};`,

  "src/data/skills.js": `export const skillCategories = [
  { category: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { category: "CMS / Frameworks", skills: ["WordPress", "Bootstrap"] },
  { category: "IT Support", skills: ["Computer Hardware Installation", "Software Troubleshooting", "Networking"] },
  { category: "Productivity Tools", skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"] },
  { category: "Additional Skills", skills: ["Blockchain Basics"] },
  { category: "Soft Skills", skills: ["Problem Solving", "Communication", "Teamwork"] }
];`,

  "src/data/experience.js": `export const experiences = [
  {
    company: "The Urban Unit",
    role: "Punjab Socio Economy Registry (PSER)",
    period: "2025 – 2026",
    isLatest: true,
    responsibilities: [
      "Collected and recorded household data accurately using digital devices",
      "Ensured data verification and validation",
      "Maintained confidentiality of sensitive information",
      "Submitted daily reports to the District Manager"
    ]
  },
  {
    company: "Freelance Web Developer",
    role: "Independent Contractor",
    period: "2023 – 2024",
    isLatest: false,
    responsibilities: [
      "Developed responsive business profile websites",
      "Developed e-commerce websites for local and international clients",
      "Worked with HTML, CSS, JavaScript, React.js and WordPress",
      "Created customized portfolio websites for individuals and businesses"
    ]
  }
];`,

  "src/data/education.js": `export const educationList = [
  { degree: "MS – Computer Science", institution: "University of Okara, Okara", period: "2022 – 2024", isHighest: true },
  { degree: "MSc – Information Technology", institution: "University of Education Township, Lahore", period: "2020 – 2022", isHighest: false },
  { degree: "BSc – Computer Science", institution: "University of the Punjab, Lahore", period: "2017 – 2019", isHighest: false },
  { degree: "FSc – Pre-Engineering", institution: "Govt. Post Graduate College, Pattoki", period: "2015 – 2017", isHighest: false },
  { degree: "Matric – Science", institution: "Govt. Boys High School, Changa Manga", period: "2013 – 2015", isHighest: false }
];`,

  "src/data/services.js": `export const servicesList = [
  { title: "Responsive Website Development", desc: "Cross-device responsive designs ensuring optimal layout and performance across mobile, tablet, and desktop screens." },
  { title: "Business Website Development", desc: "Modern web presence tailored to companies wanting to showcase their credentials, services, and profile clearly." },
  { title: "E-commerce Website Development", desc: "Online commerce stores with smooth product displays, shopping cart flows, and client checkout solutions." },
  { title: "Portfolio Website Development", desc: "Custom-built portfolios for individuals and professionals to effectively establish their personal brand." },
  { title: "WordPress Website Development", desc: "WordPress CMS installation, customization, and content structuring for straightforward client management." },
  { title: "IT Support & Troubleshooting", desc: "Hardware assembly, operating system fixes, software installation, and office network troubleshooting." }
];`,

  "src/data/projects.js": `export const projectPlaceholders = [
  { id: "project-01", title: "[Project Name: E-Commerce Web Solution]", description: "Configurable placeholder for responsive e-commerce websites built for local/international clients with item listings, store layout, and cart experience.", technologies: ["React.js", "JavaScript", "CSS"], githubUrl: "#", liveUrl: "#", badge: "E-Commerce" },
  { id: "project-02", title: "[Project Name: Business Profile Platform]", description: "Configurable placeholder for corporate business profile websites providing informative brand portfolios and mobile-first responsive architecture.", technologies: ["WordPress", "HTML", "Bootstrap"], githubUrl: "#", liveUrl: "#", badge: "Business Website" },
  { id: "project-03", title: "[Project Name: Customized Client Portfolio]", description: "Configurable placeholder for customized modern portfolio websites designed for individual clients and professionals.", technologies: ["HTML", "CSS", "JavaScript"], githubUrl: "#", liveUrl: "#", badge: "Portfolio" },
  { id: "project-04", title: "[Project Name: Tech Support Management Portal]", description: "Configurable placeholder for office IT support, computer hardware cataloging, and infrastructure troubleshooting documentation.", technologies: ["React.js", "Networking", "Hardware Support"], githubUrl: "#", liveUrl: "#", badge: "IT Support" }
];`,

  // 9. Hooks
  "src/hooks/useScroll.js": `"use client";
import { useState, useEffect } from 'react';
export function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  return { scrolled, scrollProgress };
}`,

  "src/hooks/useMousePosition.js": `"use client";
import { useState, useEffect } from 'react';
export function useMousePosition() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return { ...position, isPointer };
}`,

  // 10. Components
  "src/components/Navbar.jsx": `"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

export default function Navbar() {
  const { scrolled } = useScroll(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#resume" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className={\`glass-panel rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 \${scrolled ? 'bg-surface-900/95 border-slate-700/70 shadow-2xl' : ''}\`}>
          <a href="#hero" className="text-white font-bold tracking-tight text-lg flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-surface-950 transition-colors font-mono text-xs">RZ</span>
            <span className="group-hover:text-brand-400 transition-colors">Rana Zeeshan</span>
          </a>
          <div className="hidden lg:flex items-center space-x-1 text-xs font-medium text-slate-300">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors">{link.label}</a>
            ))}
            <a href="#contact" className="ml-3 px-4 py-2 rounded-lg bg-brand-500 text-surface-950 font-semibold hover:bg-brand-400 transition-all shadow-sm shadow-brand-500/20">Contact</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white focus:outline-none">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="lg:hidden glass-panel rounded-2xl mt-2 p-5 shadow-2xl flex flex-col space-y-3 text-sm font-medium border border-slate-700/60">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-slate-300 hover:text-white transition-colors">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="pt-2 border-t border-slate-800 text-brand-400 font-semibold">Contact Me</a>
          </div>
        )}
      </div>
    </header>
  );
}`,

  "src/components/Button.jsx": `import React from 'react';
export default function Button({ children, variant = 'primary', href, onClick, className = '', download, type = 'button' }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-400 text-surface-950 font-semibold shadow-lg shadow-brand-500/20 active:scale-[0.98]",
    outline: "glass-panel text-white hover:bg-slate-800/80 active:scale-[0.98]"
  };
  const combined = \`\${baseClasses} \${variants[variant]} \${className}\`;
  if (href) return <a href={href} className={combined} download={download}>{children}</a>;
  return <button type={type} onClick={onClick} className={combined}>{children}</button>;
}`,

  "src/components/SectionTitle.jsx": `import React from 'react';
export default function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-brand-400 font-mono text-xs uppercase tracking-widest">{number}</span>
        <div className="h-[1px] bg-slate-800 flex-1 max-w-xs"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 text-sm mt-2 max-w-xl">{subtitle}</p>}
    </div>
  );
}`,

  "src/components/CustomCursor.jsx": `"use client";
import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
export default function CustomCursor() {
  const { x, y, isPointer } = useMousePosition();
  return (
    <div
      className={\`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 rounded-full border \${isPointer ? 'w-10 h-10 border-brand-400 bg-brand-400/10 scale-110' : 'w-6 h-6 border-slate-500/40 bg-transparent'}\`}
      style={{ transform: \`translate3d(\${x}px, \${y}px, 0) translate(-50%, -50%)\`, display: x === -100 ? 'none' : 'block' }}
    />
  );
}`,

  "src/components/ScrollProgress.jsx": `"use client";
import React from 'react';
import { useScroll } from '../hooks/useScroll';
export default function ScrollProgress() {
  const { scrollProgress } = useScroll();
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[100]">
      <div className="h-full bg-brand-500 transition-all duration-75" style={{ width: \`\${scrollProgress}%\` }} />
    </div>
  );
}`,

  "src/components/Footer.jsx": `import React from 'react';
import { personalInfo } from '../data/personal';
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface-950 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">{personalInfo.name.toUpperCase()}</span>
          <span>•</span>
          <span>{personalInfo.title}</span>
        </div>
        <p>{personalInfo.location}</p>
      </div>
    </footer>
  );
}`,

  // 11. Sections
  "src/sections/Hero.jsx": `import React from 'react';
import { ArrowRight, FileText, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-brand-400 text-xs font-mono mb-6 border border-brand-500/20">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          Available for Web Development & Tech Support
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">{personalInfo.name.toUpperCase()}</h1>
        <p className="text-xl sm:text-2xl text-brand-400 font-mono font-medium mb-6">{personalInfo.title}</p>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">{personalInfo.summary[0]} {personalInfo.summary[1]}</p>
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Button href="#projects" variant="primary"><span>View My Work</span><ArrowRight className="w-4 h-4" /></Button>
          <Button href={personalInfo.resumePath} download="Rana-Zeeshan-Resume.pdf" variant="outline"><FileText className="w-4 h-4 text-brand-400" /><span>Download Resume</span></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0"><Mail className="w-4 h-4" /></div>
            <a href={\`mailto:\${personalInfo.email}\`} className="hover:text-brand-400 transition-colors truncate">{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0"><Phone className="w-4 h-4" /></div>
            <a href={\`tel:\${personalInfo.phone}\`} className="hover:text-brand-400 transition-colors">{personalInfo.phone}</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-brand-400 border border-slate-700/50 shrink-0"><MapPin className="w-4 h-4" /></div>
            <span className="truncate">{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  "src/sections/About.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/personal';
import { BookOpen, Cpu, Activity, Sparkles } from 'lucide-react';

export default function About() {
  const iconMap = {
    "Book Reading": <BookOpen className="w-4 h-4" />,
    "Technology": <Cpu className="w-4 h-4" />,
    "Badminton": <Activity className="w-4 h-4" />
  };
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="01. Overview" title="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed">
          {personalInfo.summary.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 font-mono text-xs">
            {["Web Development", "IT Support", "Technical Troubleshooting", "Office IT Infrastructure", "Problem Solving", "Continuous Learning"].map((pillar, idx) => (
              <div key={pillar} className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-slate-300">
                <span className="text-brand-400 block mb-1">0{idx + 1}</span> {pillar}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-brand-400" /> Hobbies & Interests</h3>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">Activities supporting analytical focus, physical health, and continuous learning:</p>
          <div className="space-y-3">
            {personalInfo.interests.map((item) => (
              <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl bg-surface-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">{iconMap[item.title]}</div>
                <div><h4 className="text-sm font-medium text-white">{item.title}</h4><p className="text-xs text-slate-400">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  "src/sections/Skills.jsx": `import React from 'react';
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
}`,

  "src/sections/Experience.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="03. History" title="Professional Experience" subtitle="Verified track record across data operations and web development." />
      <div className="relative pl-6 sm:pl-10 border-l border-slate-800 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className={\`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface-900 border-2 ring-4 ring-surface-900 \${exp.isLatest ? 'border-brand-400' : 'border-slate-600'}\`} />
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className={\`px-3 py-1 rounded-full text-xs font-mono border \${exp.isLatest ? 'bg-brand-500/10 text-brand-400 border-brand-500/20' : 'bg-slate-800 text-slate-300 border-slate-700'}\`}>{exp.period}</span>
              </div>
              <p className="text-brand-400 font-mono text-sm mb-4">{exp.role}</p>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                {exp.responsibilities.map((task, taskIdx) => <li key={taskIdx}>{task}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,

  "src/sections/Education.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="04. Academics" title="Education" subtitle="All five academic qualifications presented chronologically." />
      <div className="space-y-4">
        {educationList.map((edu, idx) => (
          <div key={idx} className={\`glass-panel rounded-2xl p-6 sm:p-7 \${edu.isHighest ? 'border-l-4 border-l-brand-400' : ''}\`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                {edu.isHighest && <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/30 mb-2 font-medium">Highest Qualification</span>}
                <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
              </div>
              <div className={\`font-mono text-sm font-medium \${edu.isHighest ? 'text-brand-400' : 'text-slate-400'}\`}>{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,

  "src/sections/Projects.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projectPlaceholders } from '../data/projects';
import { Github, ExternalLink, Info } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
        <SectionTitle number="05. Showcase" title="Selected Work" subtitle="Configurable placeholders structured for easy insertion of deployed projects." />
        <div className="mb-10 md:mb-12 text-xs font-mono text-slate-400 flex items-center gap-2 shrink-0">
          <Info className="w-4 h-4 text-brand-400" /> Placeholders Ready For Data
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectPlaceholders.map((proj) => (
          <div key={proj.id} className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">{proj.badge}</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <a href={proj.githubUrl} className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                  <a href={proj.liveUrl} className="hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
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
}`,

  "src/sections/Services.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { servicesList } from '../data/services';
import { Smartphone, Building2, ShoppingCart, UserCheck, Layout, Wrench } from 'lucide-react';

export default function Services() {
  const icons = [
    <Smartphone key="1" className="w-8 h-8 text-brand-400 mb-4" />,
    <Building2 key="2" className="w-8 h-8 text-brand-400 mb-4" />,
    <ShoppingCart key="3" className="w-8 h-8 text-brand-400 mb-4" />,
    <UserCheck key="4" className="w-8 h-8 text-brand-400 mb-4" />,
    <Layout key="5" className="w-8 h-8 text-brand-400 mb-4" />,
    <Wrench key="6" className="w-8 h-8 text-brand-400 mb-4" />
  ];
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <SectionTitle number="06. Solutions" title="Services" subtitle="Direct technical deliverables based on documented practical experience." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((item, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-6">
            {icons[idx]}
            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`,

  "src/sections/Resume.jsx": `import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personal';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <SectionTitle number="07. Overview" title="Resume" subtitle="Structured summary for recruiters and technical hiring teams." />
        <div className="mb-10 sm:mb-12">
          <Button href={personalInfo.resumePath} download="Rana-Zeeshan-Resume.pdf" variant="primary">
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </Button>
        </div>
      </div>
      <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div><h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3><p className="text-brand-400 font-mono text-sm">{personalInfo.title}</p></div>
          <div className="text-xs font-mono text-slate-400 space-y-1"><p>Email: {personalInfo.email}</p><p>Phone: {personalInfo.phone}</p><p>Location: {personalInfo.location}</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Experience</h4><p className="text-sm text-white font-medium">3+ Years IT Operations & Dev</p><p className="text-xs text-slate-400">The Urban Unit (2025–2026)<br />Freelance Web Developer (2023–2024)</p></div>
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Education</h4><p className="text-sm text-white font-medium">MS – Computer Science</p><p className="text-xs text-slate-400">University of Okara (2022–2024)<br />MSc IT, BSc CS, FSc, Matric</p></div>
          <div className="space-y-2"><h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Primary Core</h4><p className="text-sm text-white font-medium">Web & IT Support</p><p className="text-xs text-slate-400">React.js, WordPress, Hardware Installation, Networking</p></div>
        </div>
      </div>
    </section>
  );
}`,

  "src/sections/Contact.jsx": `"use client";
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
    const subject = encodeURIComponent(\`Portfolio Inquiry from \${formData.name}\`);
    const body = encodeURIComponent(\`Name: \${formData.name}\\nEmail: \${formData.email}\\n\\nMessage:\\n\${formData.message}\`);
    window.location.href = \`mailto:\${personalInfo.email}?subject=\${subject}&body=\${body}\`;
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
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Email</h4><a href={\`mailto:\${personalInfo.email}\`} className="text-sm sm:text-base font-semibold text-white hover:text-brand-400 transition-colors break-all">{personalInfo.email}</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0"><Phone className="w-5 h-5" /></div>
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Phone & WhatsApp</h4><a href={\`tel:\${personalInfo.phone}\`} className="text-sm sm:text-base font-semibold text-white hover:text-brand-400 transition-colors">{personalInfo.phone}</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0"><MapPin className="w-5 h-5" /></div>
              <div><h4 className="text-xs font-mono text-slate-400 uppercase">Location</h4><p className="text-sm sm:text-base font-semibold text-white">{personalInfo.location}</p></div>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h4 className="text-xs font-mono text-slate-400 uppercase mb-4">Profiles (Configurable Placeholders)</h4>
            <div className="flex flex-wrap items-center gap-3">
              <a href={personalInfo.socialPlaceholders.linkedin} className="px-4 py-2.5 rounded-xl bg-surface-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 hover:border-slate-700 transition-colors"><Linkedin className="w-4 h-4 text-blue-400" /><span>LinkedIn [Placeholder]</span></a>
              <a href={personalInfo.socialPlaceholders.github} className="px-4 py-2.5 rounded-xl bg-surface-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-2 hover:border-slate-700 transition-colors"><Github className="w-4 h-4 text-slate-200" /><span>GitHub [Placeholder]</span></a>
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
}`,

  // 12. App Pages
  "src/app/layout.jsx": `import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: 'Rana Zeeshan | IT Professional & Web Developer',
  description: 'Portfolio of Rana Zeeshan - IT Professional, Web Developer, and Tech Support Specialist based in Punjab, Pakistan.',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`scroll-smooth \${inter.variable} \${jetbrainsMono.variable}\`}>
      <body className="bg-surface-900 text-slate-300 font-sans antialiased selection:bg-brand-500 selection:text-surface-950 overflow-x-hidden min-h-screen ambient-glow">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}`,

  "src/app/page.jsx": `import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Services />
      <Resume />
      <Contact />
    </>
  );
}`,
};

// Create empty placeholder directories
const emptyDirs = [
  "public/resume",
  "public/images",
  "src/assets/icons",
  "src/assets/illustrations",
  "src/assets/fonts",
];

emptyDirs.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// Write all generated files
Object.entries(files).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content, "utf8");
  console.log("✔ Created: " + filePath);
});

console.log(
  "\\n🎉 All folders, data files, and components created successfully!",
);

import React from 'react';
export default function Button({ children, variant = 'primary', href, onClick, className = '', download, type = 'button', target, rel, ...props }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-400 text-surface-950 font-semibold shadow-lg shadow-brand-500/20 active:scale-[0.98]",
    outline: "glass-panel text-white hover:bg-slate-800/80 active:scale-[0.98]"
  };
  const combined = `${baseClasses} ${variants[variant]} ${className}`;
  if (href) {
    const computedRel = rel || (target === '_blank' ? 'noopener noreferrer' : undefined);
    return <a href={href} className={combined} download={download} target={target} rel={computedRel} {...props}>{children}</a>;
  }
  return <button type={type} onClick={onClick} className={combined} {...props}>{children}</button>;
}
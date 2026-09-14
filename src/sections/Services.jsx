import React from 'react';
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
}
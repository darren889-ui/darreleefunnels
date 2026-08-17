import React from 'react';
import { Search, LayoutGrid, Rocket, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const ThreePillars: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'The Leak Audit',
      icon: Search,
      badge: 'Diagnostics',
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      description:
        'We review how people experience your page. What they see first. What they understand next. Where the momentum stops. Because small leaks cost real opportunities.',
      deliverables: ['Heatmap friction analysis', 'Hero hook audit', 'Mobile responsiveness stress test']
    },
    {
      number: '02',
      title: 'Strategic Re-Design',
      icon: LayoutGrid,
      badge: 'Architecture',
      color: 'from-indigo-500/20 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      description:
        'We rebuild the funnel with intention. Clear message. Clean structure. Strong visual flow. So visitors understand your value instantly without cognitive overload.',
      deliverables: ['High-contrast visual hierarchy', 'Direct-response copy framework', 'Custom Figma prototype']
    },
    {
      number: '03',
      title: 'Optimization & Scale',
      icon: Rocket,
      badge: 'Conversion Engine',
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      description:
        'Everything now works together. The message. The structure. The call to action. Turning paid and organic attention into qualified, high-ticket client inquiries.',
      deliverables: ['<1.2s Page speed tuning', 'A/B split testing setup', 'CRM & automation integration']
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-[#050814] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 mb-3 inline-block">
          The 3-Step Conversion Framework
        </span>
        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          From Leaking Revenue to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            SCALABLE GROWTH
          </span>
        </h2>

        {/* Designer Core Philosophy */}
        <div className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-16 space-y-2">
          <p>I don't just focus on how a page looks. I focus on <strong className="text-white">how it works</strong>.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm sm:text-base text-slate-300 font-medium pt-1">
            <span>• How the message flows</span>
            <span>• How the layout guides attention</span>
            <span>• How each section builds trust</span>
          </div>
          <p className="pt-2 font-['Outfit'] font-extrabold text-lg sm:text-xl text-blue-400 uppercase tracking-wide">
            Because a funnel should do one thing well: TURN VISITORS INTO CLIENTS.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative rounded-3xl p-8 bg-gradient-to-b ${pillar.color} bg-[#080d22] border ${pillar.borderColor} shadow-xl hover:border-blue-400/60 transition-all hover:scale-[1.02] flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-blue-500/40 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-blue-400 block mb-2">
                    {pillar.badge}
                  </span>

                  <h3 className="font-['Outfit'] font-bold text-2xl text-white mb-4 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {pillar.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

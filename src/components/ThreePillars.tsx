import React from 'react';
import { Search, LayoutGrid, Layers, Rocket } from 'lucide-react';

export const ThreePillars: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Audit — Understand the Current Funnel',
      icon: Search,
      badge: 'Diagnostics',
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      description:
        'We review your page and funnel to find what works, what doesn’t, and where leads drop off.'
    },
    {
      number: '02',
      title: 'Design or Redesign — Create the Right Strategy',
      icon: LayoutGrid,
      badge: 'Architecture',
      color: 'from-indigo-500/20 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      description:
        'We build landing pages that clearly communicate your offer and drive conversions.'
    },
    {
      number: '03',
      title: 'Build — Bring the Design to Life',
      icon: Layers,
      badge: 'Development',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      description:
        'We turn the approved design into a fully functional landing page and funnel, making sure everything works smoothly and frictionless checkout flows.'
    },
    {
      number: '04',
      title: 'Launch & Scale',
      icon: Rocket,
      badge: 'Conversion Engine',
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      description:
        'Once setup is complete, launch your system, drive consistent leads and revenue, and scale the best strategies.'
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-[#050814] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 mb-3 inline-block">
          The 4-Step Conversion Framework
        </span>
        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          Turning Lost Revenue into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            Sustainable Growth
          </span>
        </h2>

        {/* Designer Core Philosophy */}
        <div className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-16 space-y-2">
          <p>Great design catches the eye, but strategic messaging closes the deal.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm sm:text-base text-slate-300 font-medium pt-1">
            <span>• Targeted Messaging</span>
            <span>• Guide users seamlessly toward a single goal.</span>
            <span>• Embed social proof and clarity to overcome hesitation.</span>
          </div>
          <p className="pt-2 font-['Outfit'] font-extrabold text-lg sm:text-xl text-blue-400 uppercase tracking-wide">
            A high-converting page isn't an art project—it is a revenue-generating tool.
          </p>
        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${pillar.color} bg-[#080d22] border ${pillar.borderColor} shadow-xl hover:border-blue-400/60 transition-all hover:scale-[1.02] flex flex-col group`}
              >
                {/* Top Bar with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-blue-500/40 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-blue-400 block mb-2">
                  {pillar.badge}
                </span>

                <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-white mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

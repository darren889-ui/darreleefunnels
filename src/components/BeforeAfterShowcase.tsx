import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, XCircle, TrendingUp, Sparkles, Eye, ArrowRight, ExternalLink } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/portfolioData';
import { BeforeAfterCase } from '../types';

interface BeforeAfterShowcaseProps {
  onSelectCase: (caseStudy: BeforeAfterCase) => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onSelectCase }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="before-after" className="py-24 bg-[#030612] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
          <ArrowLeftRight className="w-4 h-4" />
          <span>Real Client Redesign Teardowns</span>
        </div>

        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          Before and After{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            Redesign
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          See how strategic visual hierarchy, authority framing, and conversion psychology transform standard templates into high-performing client magnets.
        </p>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 text-left">
          {BEFORE_AFTER_CASES.map((item) => {
            const sliderPos = sliderPositions[item.id] !== undefined ? sliderPositions[item.id] : 50;

            return (
              <div
                key={item.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#090f2b] to-[#050817] border border-blue-500/20 hover:border-blue-500/50 p-5 sm:p-7 shadow-2xl transition-all flex flex-col justify-between"
              >
                {/* Header Information */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                      {item.niche}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-white group-hover:text-blue-300 transition-colors">
                    {item.client}: {item.headline}
                  </h3>
                </div>

                {/* Visual Showcase / Redesign Display with Scrollable View */}
                {(item.images && item.images.length > 0) || item.image ? (
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-blue-500/30 hover:border-blue-400 mb-6 shadow-2xl group/img transition-all duration-300">
                    {/* Mockup Frame Bar */}
                    <div className="px-3.5 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                        Interactive Redesign Preview {item.images && item.images.length > 1 ? `(${item.images.length} Pages)` : ''}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[9px] font-bold">
                        Live
                      </span>
                    </div>

                    {/* Scrollable Frame */}
                    <div className="h-72 sm:h-80 overflow-y-auto custom-scrollbar relative bg-slate-950 scroll-smooth">
                      {item.images && item.images.length > 0 ? (
                        item.images.map((imgSrc, imgIdx) => (
                          <img
                            key={imgIdx}
                            src={imgSrc}
                            alt={`${item.client} redesign page ${imgIdx + 1}`}
                            className="w-full h-auto min-h-full object-cover object-top block"
                            referrerPolicy="no-referrer"
                          />
                        ))
                      ) : (
                        <img
                          src={item.image}
                          alt={`${item.client} redesign`}
                          className="w-full h-auto min-h-full object-cover object-top block"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>

                    {/* Bottom Floating Hint */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-2 pointer-events-none">
                      <div className="px-2.5 py-1 rounded-full bg-slate-950/85 border border-blue-500/40 text-blue-300 text-[10px] font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1">
                        <span>Scroll up/down to explore ↓</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 mb-6 shadow-inner">
                    {/* Visual Header Mockup */}
                    <div className="p-3 bg-slate-900 flex items-center justify-between border-b border-slate-800 text-[11px] font-mono">
                      <span className="text-red-400 font-bold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> BEFORE
                      </span>
                      <span className="text-slate-400 hidden sm:inline">Comparison Breakdown</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> AFTER (EvelynFunnel)
                      </span>
                    </div>

                    {/* Redesign Visual Split View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800">
                      {/* Before Card */}
                      <div className="p-4 bg-slate-950/95 flex flex-col justify-between relative min-h-[220px]">
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-red-400 text-[10px] font-mono font-bold uppercase">
                          Before: Cluttered
                        </div>
                        <div className="mt-8 space-y-2">
                          <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
                          <div className="h-2 w-full bg-slate-900 rounded"></div>
                          <div className="h-2 w-5/6 bg-slate-900 rounded"></div>
                          <div className="h-2 w-2/3 bg-slate-900 rounded"></div>
                        </div>
                        <ul className="mt-4 space-y-1.5">
                          {item.beforePain.slice(0, 2).map((pain, i) => (
                            <li key={i} className="text-[11px] text-red-300/80 flex items-start gap-1.5 leading-tight">
                              <span className="text-red-500 shrink-0">✕</span>
                              <span>{pain}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* After Card (High-Converting Redesign) */}
                      <div className="p-4 bg-gradient-to-b from-blue-950/40 to-slate-950 flex flex-col justify-between relative min-h-[220px] border-t sm:border-t-0 sm:border-l border-blue-500/30">
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold uppercase flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                          <span>After: Optimized</span>
                        </div>
                        <div className="mt-8 space-y-2">
                          <div className="h-4 w-5/6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
                          <div className="h-2 w-full bg-blue-950/80 rounded"></div>
                          <div className="inline-block py-1 px-3 bg-blue-600 rounded text-[10px] font-bold text-white shadow">
                            Get Instant Access →
                          </div>
                        </div>
                        <ul className="mt-4 space-y-1.5">
                          {item.afterGain.slice(0, 2).map((gain, i) => (
                            <li key={i} className="text-[11px] text-emerald-300 flex items-start gap-1.5 leading-tight">
                              <span className="text-emerald-400 shrink-0">✓</span>
                              <span>{gain}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Actions & Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectCase(item)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/50 hover:bg-blue-900/60 border border-blue-500/30 hover:border-blue-400 flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

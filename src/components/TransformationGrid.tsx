import React from 'react';
import { CheckCircle2, MessageCircle, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { TRANSFORMATION_ITEMS } from '../data/portfolioData';

interface TransformationGridProps {
  onOpenAuditModal: () => void;
}

export const TransformationGrid: React.FC<TransformationGridProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="py-24 bg-[#030612] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 mb-3 inline-block">
          The 30-Day Outlook
        </span>

        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          Imagine This:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            What if 30 days from today...
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Here is what happens to your daily business operations once your offer is backed by an authority-building, high-converting funnel.
        </p>

        {/* 6 Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          {TRANSFORMATION_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#090e28] to-[#050817] border border-blue-500/20 hover:border-blue-500/50 shadow-xl transition-all hover:scale-[1.02] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-['Outfit'] font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Highlight Impact Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950/80 via-indigo-950 to-blue-950/80 border border-blue-500/40 shadow-2xl max-w-4xl mx-auto text-center overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-cyan-400 block mb-3">
              THE ULTIMATE SHIFT
            </span>

            <h3 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              "YOU STOP CHASING.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                THEY START CHOOSING.
              </span>
              "
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Let's build the funnel that positions you as the premium, go-to leader in your market.
            </p>

            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Me A Message On Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

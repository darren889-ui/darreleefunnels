import React from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#030612] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Redesign Sprint</span>
          </div>

          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Let's Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              High-Converting Funnel
            </span>
          </h2>
        </div>

        {/* Direct Message Channels */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#090f2b] to-[#050817] border border-blue-500/30 shadow-2xl text-left">
            {/* Direct Reach Buttons */}
            <div>
              <a
                href="https://m.me/darren88.lee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-lg">Free Consultation</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

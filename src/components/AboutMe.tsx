import React from 'react';
import { User, Sparkles, MessageCircle, Award, CheckCircle2, Zap, GraduationCap, Clock, TrendingUp } from 'lucide-react';

interface AboutMeProps {
  onOpenAuditModal: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="about" className="py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Picture Placeholder with Verified Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#080d24] border border-blue-500/40 px-10 sm:px-12 pt-24 sm:pt-28 pb-12 sm:pb-14 text-center max-w-md sm:max-w-[440px] w-full shadow-2xl mt-4">
                {/* Profile Avatar Frame 1 */}
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto -mt-10 sm:-mt-12 mb-5 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 via-indigo-950/60 to-slate-950 border-2 border-blue-400/50 shadow-2xl flex items-center justify-center">
                  <img
                    src="https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81b4a0fe4291bd10b6e769.png"
                    alt="Darren Lee Profile"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Profile Secondary Image Frame 2 */}
                <div className="relative w-52 h-80 sm:w-60 sm:h-80 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 via-indigo-950/60 to-slate-950 border-2 border-blue-400/50 shadow-2xl flex items-center justify-center">
                  <img
                    src="https://assets.cdn.filesafe.space/k9A0GKh9i6ERv324l4ms/media/6a81bdf8cf50f900f211fba7.png"
                    alt="Darren Lee Profile Secondary"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-['Outfit'] font-black text-2xl text-white mb-1">
                  Darren Lee
                </h3>
                <p className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
                  Landing Page & Funnel Designer
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Behind the Architecture</span>
            </div>

            <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Darren Lee!
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I create strategic, conversion-focused landing pages and funnels that combine compelling messaging, great design, and seamless user experience to guide your audience from interest to action.
              </p>
              <p>
                Whether you are <strong className="text-white"> launching an offer, generating leads, or selling a product</strong>, I design funnels that are built to convert—not just look good.
              </p>
              <p className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-blue-200 font-medium">
                I don’t just design pages,<strong className="text-white">but design experiences that move people to take action.</strong>
              </p>
            </div>

            {/* Fast Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xl font-black text-white font-mono block">150+</span>
                <span className="text-[11px] text-slate-400">Funnels Delivered</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xl font-black text-emerald-400 font-mono block">+180%</span>
                <span className="text-[11px] text-slate-400">Avg. CVR Lift</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xl font-black text-blue-400 font-mono block">7-14</span>
                <span className="text-[11px] text-slate-400">Day Sprints</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xl font-black text-amber-400 font-mono block">100%</span>
                <span className="text-[11px] text-slate-400">Satisfaction</span>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Me A Message on Messenger</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

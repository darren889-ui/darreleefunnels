import React from 'react';
import { AlertTriangle, XCircle, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

interface DiagnosticProps {
  onOpenAuditModal: () => void;
}

export const FunnelLeakDiagnostic: React.FC<DiagnosticProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="diagnostic" className="py-24 bg-[#030611] relative overflow-hidden border-t border-b border-blue-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Problem Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>Conversion Bottleneck Analysis</span>
            </div>

            <h2 className="font-['Outfit'] font-black text-[29px] sm:text-[40px] lg:text-[50px] text-white tracking-tight leading-[1.1]">
              Are people dropping out{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
                before they ever buy?
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-white">Is this where you’re at?</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  You’re investing in paid traffic.
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  You’re also managing the systems and fulfillment that keep everything running.
                </li>
              </ul>
              <p className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-slate-200 text-sm sm:text-base">
                Look, if your page doesn't win people over the second they land on it, you're basically spending your own money to send clients straight to your competition.
              </p>
            </div>

            {/* Quote Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900/60 border border-blue-500/30 text-center sm:text-left">
              <p className="text-base sm:text-lg font-bold text-blue-200 mb-1">
                "If folks have to guess what you do, they aren't going to buy—<span className="text-red-400 font-extrabold underline decoration-red-400/50 underline-offset-4">they're just going to walk away</span>."
              </p>
              <p className="text-xs text-slate-400">
                Every friction point on your page costs you high-ticket clients.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Funnel Leak Illustration & Diagram */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#090e24] to-[#040714] border border-blue-500/30 shadow-2xl">
              {/* Funnel Diagram SVG Representation */}
              <div className="relative flex flex-col items-center justify-center space-y-3 py-4">
                {/* Traffic Top */}
                <div className="w-full text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-300 text-xs font-mono font-bold tracking-wider">
                    ▼ 100% RAW VISITOR TRAFFIC (Ads, Social, SEO)
                  </span>
                </div>

                {/* Leak Stage 1 */}
                <div className="relative w-full max-w-md bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/40 rounded-xl p-3 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-xs font-bold text-white">Top of Funnel (Hero Section)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                    <XCircle className="w-3 h-3" /> TOO MUCH TEXT
                  </span>
                </div>

                {/* Drip arrow */}
                <div className="text-red-500/60 text-xs font-mono">↓ 42% Visitors Drop Off</div>

                {/* Leak Stage 2 */}
                <div className="relative w-[85%] max-w-sm bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/40 rounded-xl p-3 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                    <span className="text-xs font-bold text-white">Middle of Funnel (Offer & Proof)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                    <XCircle className="w-3 h-3" /> CONFUSING FLOW
                  </span>
                </div>

                {/* Drip arrow */}
                <div className="text-red-500/60 text-xs font-mono">↓ 35% Visitors Drop Off</div>

                {/* Leak Stage 3 */}
                <div className="relative w-[70%] max-w-xs bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/40 rounded-xl p-3 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-xs font-bold text-white">Bottom (Action & Checkout)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                    <XCircle className="w-3 h-3" /> MISSING CLEAR CTA
                  </span>
                </div>

                {/* Leak Stage 4 */}
                <div className="relative w-[50%] max-w-[220px] bg-red-950/60 border border-red-500/50 rounded-xl p-2.5 text-center shadow-lg">
                  <span className="text-[11px] font-mono text-red-300 font-bold block">
                    ❌ SLOW LOAD TIME (&gt;3.5s)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Pain Points vs The Solution Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Pain points */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-red-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-red-400 font-bold uppercase text-xs tracking-wider">
                <XCircle className="w-5 h-5" />
                <span>You May Be Experiencing This If:</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-red-950 border border-red-500/40 text-red-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-white block text-sm sm:text-base">Your brand does NOT STAND OUT</strong>
                    <span className="text-xs sm:text-sm text-slate-400">Visitors can’t differentiate you from cheaper competitors in the first 3 seconds.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-red-950 border border-red-500/40 text-red-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-white block text-sm sm:text-base">Visitors leave WITHOUT taking action</strong>
                    <span className="text-xs sm:text-sm text-slate-400">High bounce rates and high ad costs drain your marketing budget with zero ROI.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-red-950 border border-red-500/40 text-red-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <strong className="text-white block text-sm sm:text-base">Your CONVERSIONS are too low</strong>
                    <span className="text-xs sm:text-sm text-slate-400">You are working twice as hard to get half the clients you deserve.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-950/60 to-[#060c24] border border-blue-500/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold uppercase text-xs tracking-wider">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>The darrenleefunnels Transformation:</span>
              </div>
              <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-white mb-4 leading-tight">
                I turn your leaking funnel into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  HIGH-CONVERTING
                </span>{' '}
                brand asset.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Capturing high-value clients effortlessly through strategic visual hierarchy, razor-sharp messaging, and frictionless booking experiences.
              </p>
            </div>

            <div className="pt-4 border-t border-blue-500/30">
              <a
                href="https://m.me/darren88.lee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Free Funnel Audit & Proposal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

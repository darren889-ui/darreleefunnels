import React, { useState } from 'react';
import { User, Sparkles, MessageCircle, Award, CheckCircle2, Zap, GraduationCap, Clock, TrendingUp } from 'lucide-react';

interface AboutMeProps {
  onOpenAuditModal: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenAuditModal }) => {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

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
              <div className="relative rounded-3xl bg-[#080d24] border border-blue-500/40 px-8 sm:px-10 py-10 sm:py-12 text-center max-w-md sm:max-w-[440px] w-full shadow-2xl mt-4">
                {/* Profile Avatar Frame 1 */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-5 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 via-indigo-950/60 to-slate-950 border-2 border-blue-400/50 shadow-2xl flex items-center justify-center">
                  {!img1Error ? (
                    <img
                      src="https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/pro-photo.png"
                      alt="Darren Lee Profile"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setImg1Error(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-slate-950 text-blue-300 p-4">
                      <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mb-2 shadow-inner">
                        <User className="w-10 h-10 text-blue-400" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Darren Lee</span>
                    </div>
                  )}
                </div>

                {/* Profile Secondary Image Frame 2 (if present) */}
                <div className="relative w-48 h-64 sm:w-56 sm:h-68 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/40 via-indigo-950/60 to-slate-950 border-2 border-blue-400/50 shadow-2xl flex items-center justify-center">
                  {!img2Error ? (
                    <img
                      src="https://raw.githubusercontent.com/darren889-ui/profile-image/68d4bc8fbe4d868208bfff3182e9702bb99559cd/Certificate-DARREN%20LEE-24jun2026.png"
                      alt="Darren Lee Certificate"
                      className="w-full h-full object-contain bg-slate-950"
                      referrerPolicy="no-referrer"
                      onError={() => setImg2Error(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-950 to-slate-950 text-indigo-300 p-4">
                      <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center mb-3 shadow-inner">
                        <Sparkles className="w-8 h-8 text-indigo-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 max-w-[200px] leading-snug">Conversion Funnel & Landing Page Specialist</span>
                    </div>
                  )}
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

            <div>
              <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-2">
                Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">Darren Lee</span>.
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I help coaches, consultants, experts, and online businesses turn traffic into high-value clients and revenue.
              </p>
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

            {/* Direct Action Button */}
            <div className="pt-4">
              <a
                href="https://m.me/darren88.lee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get A Free Audit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

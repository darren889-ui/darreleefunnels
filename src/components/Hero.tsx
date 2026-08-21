import React from 'react';
import { Sparkles, MessageCircle, ArrowDown, CheckCircle2, TrendingUp, Zap, Layers, Flame, Cpu, Globe, Box, ShoppingBag } from 'lucide-react';
import { HERO_PLATFORMS } from '../data/portfolioData';

interface HeroProps {
  onOpenAuditModal: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onExploreClick }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#050814]">
      {/* Custom Background Image - crystal clear high definition layer with 8% brightness boost */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://raw.githubusercontent.com/darren889-ui/profile-image/6aa946bb95ce60ae2f6abc08ae230d02d0f61ebe/hiro-page-port.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center brightness-[1.08]"
          referrerPolicy="no-referrer"
        />
        {/* Minimal subtle vignette for edge blending while keeping center artwork 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#050814]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-inner">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Strategic Landing Pages & Funnels Build</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-['Outfit'] font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6 drop-shadow-lg">
          Turn Clicks Into{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            CLIENTS
            <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-[6px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-60"></span>
          </span>{' '}
          Instantly
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow-md">
          Strategic landing pages and funnels built to turn everyday clicks into your next{' '}
          <span className="text-white font-semibold underline decoration-blue-500/60 underline-offset-4">
            high-value clients
          </span>
          .
        </p>

        {/* Primary CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            id="hero-primary-cta"
            href="https://m.me/darren88.lee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <MessageCircle className="w-5 h-5 fill-white text-blue-600" />
            <span> Get a Free Audit</span>
          </a>
        </div>

        {/* Visual Showcase Fan of High-Converting Funnels */}
        <div className="relative max-w-6xl mx-auto mb-16 px-2">
          {/* Fan Mockup Grid */}
          <div className="relative rounded-2xl p-4 sm:p-8 bg-transparent border-0 shadow-none">
            {/* Visual Funnel Cards Fan */}
            <div className="max-w-md mx-auto">
              {/* Card 4: High Ticket Business */}
              <div className="group relative rounded-xl overflow-hidden bg-transparent border-0 shadow-none">
                <div className="h-44 sm:h-56 bg-transparent p-3 text-left flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Designed & Built on" Tech Stack Bar */}
        <div className="pt-4 border-t border-slate-800/80">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-slate-400 mb-6">
            Designed & Built on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
            {HERO_PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all text-slate-300 hover:text-white"
              >
                {platform.name === 'HighLevel' && <Layers className="w-4 h-4 text-blue-400" />}
                {platform.name === 'ClickFunnels' && <Flame className="w-4 h-4 text-orange-400" />}
                {platform.name === 'Systeme.io' && <Cpu className="w-4 h-4 text-sky-400" />}
                {platform.name === 'WordPress' && <Globe className="w-4 h-4 text-indigo-400" />}
                {platform.name === 'Webflow' && <Box className="w-4 h-4 text-cyan-400" />}
                {platform.name === 'Shopify' && <ShoppingBag className="w-4 h-4 text-emerald-400" />}
                <span className="font-semibold text-xs tracking-wide">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

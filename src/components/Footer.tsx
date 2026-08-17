import React from 'react';
import { ArrowUp, Heart, Sparkles, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02040b] border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-['Outfit'] font-black text-2xl tracking-tight text-white">
                darrenlee<span className="text-blue-500">funnels</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Strategic Funnel & Landing Page Design
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs font-medium">
            <a href="#diagnostic" className="hover:text-blue-400 transition-colors">
              Funnel Audit
            </a>
            <a href="#pillars" className="hover:text-blue-400 transition-colors">
              Framework
            </a>
            <a href="#before-after" className="hover:text-blue-400 transition-colors">
              Before & After
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Portfolio
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills & Stack
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About Darren
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-600">
          <p>
            © {new Date().getFullYear()} DarrenleeFunnels. All rights reserved. Conversion by Design.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>HighLevel Certified</span>
            <span>•</span>
            <span>ClickFunnels 2.0</span>
            <span>•</span>
            <span>7–14 Day Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

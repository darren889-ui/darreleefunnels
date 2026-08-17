import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funnel Audit', href: '#diagnostic' },
    { name: 'Process', href: '#pillars' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills & Stack', href: '#skills' },
    { name: 'About Me', href: '#about' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050814]/90 backdrop-blur-md border-b border-blue-500/15 py-3 shadow-2xl shadow-blue-950/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="font-['Outfit'] font-black text-[19px] sm:text-[23px] tracking-tight text-white group-hover:text-blue-400 transition-colors">
              darrenlee<span className="text-blue-500">funnels</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
              PRO
            </span>
          </div>
          <span className="text-[10px] tracking-wider font-semibold lowercase text-slate-400 -mt-0.5 group-hover:text-slate-300 transition-colors">
            strategic landing pages & funnels build
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for March / April</span>
          </div>

          <button
            id="nav-cta-button"
            onClick={onOpenAuditModal}
            className="relative group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-blue-200" />
            <span>Send Message</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b19] border-b border-blue-500/20 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for March / April Projects</span>
          </div>

          <div className="grid grid-cols-2 gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Me A Message</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

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
          </div>
          <span className="text-[10px] tracking-wider font-semibold lowercase text-slate-400 -mt-0.5 group-hover:text-slate-300 transition-colors">
            strategic landing page & funnel build
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
            <a
              href="https://m.me/darren88.lee"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Me A Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

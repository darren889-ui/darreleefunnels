/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FunnelLeakDiagnostic } from './components/FunnelLeakDiagnostic';
import { ThreePillars } from './components/ThreePillars';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AboutMe } from './components/AboutMe';
import { TransformationGrid } from './components/TransformationGrid';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { MessageCircle, X, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ProjectItem, BeforeAfterCase } from './types';

export default function App() {
  const [selectedModalItem, setSelectedModalItem] = useState<ProjectItem | BeforeAfterCase | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [quickMessageSent, setQuickMessageSent] = useState<boolean>(false);
  const [quickMsg, setQuickMsg] = useState({ name: '', email: '', message: '' });

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
    setQuickMessageSent(false);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickMessageSent(true);
    setTimeout(() => {
      setIsAuditModalOpen(false);
      setQuickMessageSent(false);
      setQuickMsg({ name: '', email: '', message: '' });
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Header */}
      <Navbar onOpenAuditModal={handleOpenAuditModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenAuditModal={handleOpenAuditModal}
          onExploreClick={() => scrollToSection('diagnostic')}
        />

        {/* 2. Is Your Funnel Leaking Revenue? Interactive Diagnostic */}
        <FunnelLeakDiagnostic onOpenAuditModal={handleOpenAuditModal} />

        {/* 3. 3-Pillars Framework: From Leaking Revenue to Scalable Growth */}
        <ThreePillars />

        {/* 4. Before & After Redesign Teardowns */}
        <BeforeAfterShowcase onSelectCase={(caseStudy) => setSelectedModalItem(caseStudy)} />

        {/* 5. A Glimpse of My Work / Projects Grid */}
        <ProjectsGrid
          onSelectProject={(project) => setSelectedModalItem(project)}
          onOpenAuditModal={handleOpenAuditModal}
        />

        {/* 6. Skills & Tech Stack Matrix */}
        <SkillsMatrix />

        {/* 7. About Me (Evelyn Kong) Section */}
        <AboutMe onOpenAuditModal={handleOpenAuditModal} />

        {/* 8. Imagine This: 30-Day Transformation Grid */}
        <TransformationGrid onOpenAuditModal={handleOpenAuditModal} />

        {/* 9. FAQ Section */}
        <FaqSection onOpenAuditModal={handleOpenAuditModal} />

        {/* 10. Contact & Audit Request Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAuditModal={handleOpenAuditModal} />

      {/* Detailed Project / Case Study Lightbox Modal */}
      {selectedModalItem && (
        <ProjectModal
          item={selectedModalItem}
          onClose={() => setSelectedModalItem(null)}
          onOpenAuditModal={handleOpenAuditModal}
        />
      )}

      {/* Quick Direct Message / Audit Modal */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#090f2c] border border-blue-500/50 p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAuditModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {quickMessageSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-sm text-slate-300">
                  Thank you! Darren will reply directly to your email within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Direct Inquiry & Audit Request</span>
                </div>

                <h3 className="font-['Outfit'] font-black text-2xl text-white mb-2">
                  Send A Message to Darren
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Tell me briefly about your business, current funnel bottleneck, or timeline.
                </p>

                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={quickMsg.name}
                      onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={quickMsg.email}
                      onChange={(e) => setQuickMsg({ ...quickMsg, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="I need a high-converting landing page for my coaching/SaaS offer..."
                      value={quickMsg.message}
                      onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-blue-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all text-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fast 24-hr turnaround • 100% confidential</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Bottom Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenAuditModal}
          className="group relative flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-2xl shadow-blue-600/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4" />
          <span>Get Free Audit</span>
        </button>
      </div>
    </div>
  );
}

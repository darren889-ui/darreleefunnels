import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenAuditModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAuditModal }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 2]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1] mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Questions
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about the funnel design sprint process, pricing, timelines, and deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/60 border border-blue-500/20 overflow-hidden transition-colors hover:border-blue-500/40"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Outfit'] font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900/80 border border-blue-500/30 text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="font-bold text-white text-base">Have a specific question about your offer?</h4>
            <p className="text-xs text-slate-400">Let's talk through your funnel architecture and tech requirements directly.</p>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Evelyn Directly</span>
          </button>
        </div>
      </div>
    </section>
  );
};

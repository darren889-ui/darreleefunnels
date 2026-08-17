import React from 'react';
import { X, Sparkles, TrendingUp, CheckCircle2, XCircle, ArrowRight, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { ProjectItem, BeforeAfterCase } from '../types';

interface ProjectModalProps {
  item: ProjectItem | BeforeAfterCase | null;
  onClose: () => void;
  onOpenAuditModal: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onOpenAuditModal }) => {
  if (!item) return null;

  const isBeforeAfter = 'beforePain' in item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#080d24] border border-blue-500/40 p-6 sm:p-8 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBeforeAfter ? (
          /* Before / After Case Study Teardown */
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase font-bold text-blue-400">
                {(item as BeforeAfterCase).niche}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                {(item as BeforeAfterCase).metric}
              </span>
            </div>

            <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-white mb-4 pr-10">
              {(item as BeforeAfterCase).client}: {(item as BeforeAfterCase).headline}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {(item as BeforeAfterCase).details}
            </p>

            {/* Redesign Image Preview if available */}
            {((item as BeforeAfterCase).images && (item as BeforeAfterCase).images!.length > 0) ? (
              <div className="rounded-2xl overflow-hidden mb-8 border border-blue-500/30 max-h-[550px] overflow-y-auto custom-scrollbar bg-slate-950">
                {(item as BeforeAfterCase).images!.map((imgSrc, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={imgSrc}
                    alt={`${(item as BeforeAfterCase).client} redesign breakdown page ${imgIdx + 1}`}
                    className="w-full h-auto object-cover object-top block"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            ) : ((item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg) ? (
              <div className="rounded-2xl overflow-hidden mb-8 border border-blue-500/30 max-h-[550px] overflow-y-auto custom-scrollbar bg-slate-950">
                <img
                  src={(item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg}
                  alt={`${(item as BeforeAfterCase).client} redesign breakdown`}
                  className="w-full h-auto object-cover object-top block"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : null}

            {/* Tags & Action */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(item as BeforeAfterCase).tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenAuditModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get A Similar Redesign</span>
              </button>
            </div>
          </div>
        ) : (
          /* Portfolio Project Teardown */
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase font-bold text-blue-400">
                {(item as ProjectItem).categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                {(item as ProjectItem).conversionLift}
              </span>
            </div>

            <h3 className="font-['Outfit'] font-black text-2xl sm:text-3xl text-white mb-4 pr-10">
              {(item as ProjectItem).title}
            </h3>

            {/* Image Preview Banner with Scrollable View */}
            <div className="rounded-2xl overflow-hidden mb-6 border border-slate-800 max-h-[500px] overflow-y-auto custom-scrollbar bg-slate-950">
              <img
                src={(item as ProjectItem).fullImage}
                alt={(item as ProjectItem).title}
                className="w-full h-auto object-cover object-top block"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {(item as ProjectItem).overview}
            </p>

            {/* Results Row */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              {(item as ProjectItem).results.map((res, i) => (
                <div key={i} className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/30">
                  <span className="text-xs text-slate-400 block font-medium mb-0.5">{res.label}</span>
                  <span className="text-base sm:text-lg font-black text-white font-mono">{res.value}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Built on <strong className="text-white">{(item as ProjectItem).platform}</strong>
              </span>

              <button
                onClick={() => {
                  onClose();
                  onOpenAuditModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Style For Your Brand</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

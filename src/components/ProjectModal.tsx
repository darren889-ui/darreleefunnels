import React from 'react';
import { X } from 'lucide-react';
import { ProjectItem, BeforeAfterCase } from '../types';

interface ProjectModalProps {
  item: ProjectItem | BeforeAfterCase | null;
  onClose: () => void;
  onOpenAuditModal?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isBeforeAfter = 'beforePain' in item;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#080d24] border border-blue-500/40 p-4 sm:p-6 shadow-2xl my-8 text-left max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-20 cursor-pointer shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Design Preview Container */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/20 overflow-y-auto custom-scrollbar bg-slate-950 max-h-[82vh]">
          {isBeforeAfter ? (
            ((item as BeforeAfterCase).images && (item as BeforeAfterCase).images!.length > 0) ? (
              (item as BeforeAfterCase).images!.map((imgSrc, imgIdx) => (
                <img
                  key={imgIdx}
                  src={imgSrc}
                  alt={`${(item as BeforeAfterCase).client} redesign page ${imgIdx + 1}`}
                  className="w-full h-auto object-cover object-top block"
                  referrerPolicy="no-referrer"
                />
              ))
            ) : (item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg ? (
              <img
                src={(item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg}
                alt={`${(item as BeforeAfterCase).client} redesign`}
                className="w-full h-auto object-cover object-top block"
                referrerPolicy="no-referrer"
              />
            ) : null
          ) : (
            ((item as ProjectItem).images && (item as ProjectItem).images!.length > 0) ? (
              (item as ProjectItem).images!.map((imgSrc, imgIdx) => (
                <img
                  key={imgIdx}
                  src={imgSrc}
                  alt={`${(item as ProjectItem).title} page ${imgIdx + 1}`}
                  className="w-full h-auto object-cover object-top block"
                  referrerPolicy="no-referrer"
                />
              ))
            ) : (
              <img
                src={(item as ProjectItem).fullImage || (item as ProjectItem).thumbnail}
                alt={(item as ProjectItem).title}
                className="w-full h-auto object-cover object-top block"
                referrerPolicy="no-referrer"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

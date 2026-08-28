import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { ProjectItem, BeforeAfterCase } from '../types';

interface ProjectModalProps {
  item: ProjectItem | BeforeAfterCase | null;
  onClose: () => void;
  onOpenAuditModal?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isBeforeAfter = 'beforePain' in item;
  const projectItem = !isBeforeAfter ? (item as ProjectItem) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#080d24] border border-blue-500/40 p-4 sm:p-6 shadow-2xl my-8 text-left max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between mb-3 px-1">
          {projectItem?.liveUrl ? (
            <a
              href={projectItem.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 text-xs font-semibold transition-all"
            >
              <span>Visit Live Web App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div />
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shadow-lg ml-auto"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Design Preview Container */}
        <div className="rounded-2xl overflow-hidden border border-blue-500/20 overflow-y-auto custom-scrollbar bg-slate-950 max-h-[82vh] flex-1">
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
          ) : projectItem?.iframeUrl ? (
            <div className="w-full h-[75vh] min-h-[500px]">
              <iframe
                src={projectItem.iframeUrl}
                title={projectItem.title}
                className="w-full h-full border-0 bg-slate-950"
              />
            </div>
          ) : (
            (projectItem?.images && projectItem.images.length > 0) ? (
              projectItem.images.map((imgSrc, imgIdx) => (
                <img
                  key={imgIdx}
                  src={imgSrc}
                  alt={`${projectItem.title} page ${imgIdx + 1}`}
                  className="w-full h-auto object-cover object-top block"
                  referrerPolicy="no-referrer"
                />
              ))
            ) : (
              <img
                src={projectItem?.fullImage || projectItem?.thumbnail}
                alt={projectItem?.title}
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

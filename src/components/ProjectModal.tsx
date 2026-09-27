import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { ProjectItem, BeforeAfterCase } from '../types';

interface ProjectModalProps {
  item: ProjectItem | BeforeAfterCase | null;
  onClose: () => void;
  onOpenAuditModal?: () => void;
}

const formatImageUrl = (url?: string) => {
  if (!url) return '';
  if (url.includes('github.com') && url.includes('/blob/')) {
    return url.replace('https://github.com/', 'https://raw.githubusercontent.com/').replace('/blob/', '/');
  }
  return url;
};

const getFallbackUrl = (src?: string) => {
  if (!src) return '';
  if (src.startsWith('/images/')) {
    const filename = src.replace('/images/', '');
    if (filename === 'b4-af-hair-salon.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/79862914f5ff6ed914f44d96ae1468102ede0389/b4%26af-hair%20salon.png';
    if (filename === 'childcare-aware.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/79862914f5ff6ed914f44d96ae1468102ede0389/childcare%20Aware.png';
    if (filename === 'e-coach-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/79862914f5ff6ed914f44d96ae1468102ede0389/E-coach-b4%26af-20sep26.png';
    if (filename === 'vo-hero-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/79862914f5ff6ed914f44d96ae1468102ede0389/Vo-Hero-b4%26af.png';
    if (filename === 'tuition-hero-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/87be8a5588886741c16068f1116a0582d0aca9c4/tuition-hero-b4%26af-20sep26.png';
    if (filename === 'inspire-fitness-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/87be8a5588886741c16068f1116a0582d0aca9c4/inspire%20fitness-b4%26af-23sep26.png';
    if (filename === 'ai-consultant-lp.png') return 'https://raw.githubusercontent.com/darren889-ui/profile-image/46386ed5d801b250a36ca14cd09f4089d2289c2e/ai%20consultatant%20LP1.png';
    return `https://raw.githubusercontent.com/darren889-ui/darreleefunnels/79862914f5ff6ed914f44d96ae1468102ede0389/${encodeURI(filename)}`;
  }
  return src;
};

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
                  src={formatImageUrl(imgSrc)}
                  alt={`${(item as BeforeAfterCase).client} redesign page ${imgIdx + 1}`}
                  className="w-full h-auto object-cover object-top block"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallback = getFallbackUrl(imgSrc);
                    if (fallback && fallback !== imgSrc) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
              ))
            ) : (item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg ? (
              <img
                src={formatImageUrl((item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg)}
                alt={`${(item as BeforeAfterCase).client} redesign`}
                className="w-full h-auto object-cover object-top block"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = ((item as BeforeAfterCase).image || (item as BeforeAfterCase).afterImg);
                  const fallback = getFallbackUrl(target);
                  if (fallback && fallback !== target) {
                    e.currentTarget.src = fallback;
                  }
                }}
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

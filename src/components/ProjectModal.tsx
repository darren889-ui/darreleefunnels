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
    if (filename === 'emily-life-coach.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/50fd1178ef8143df6351615e86b3dc61a4fb2a08/Emily%20Life%20coach.png';
    if (filename === 'ana-wellness-coach-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/1cc3d3f5b20ef53ad0c0cd622ea364f6d1913270/ana%20wellness%20coach%20b4%26af.png';
    if (filename === 'pure-glo-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/50fd1178ef8143df6351615e86b3dc61a4fb2a08/pure%20Glo%20b4%26af.png';
    if (filename === 'jessica-fitness-coach-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/50fd1178ef8143df6351615e86b3dc61a4fb2a08/Jessica%20fitness%20coach%20b4%26af.png';
    if (filename === 'florist-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/7edc61c0025f57aac57ab63efe2148c02b539e92/florist-b4%26af.png';
    if (filename === 'yoga-studio-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/50fd1178ef8143df6351615e86b3dc61a4fb2a08/yoga%20studio%20b4%26af.png';
    if (filename === 'car-wash-polish-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/50fd1178ef8143df6351615e86b3dc61a4fb2a08/car%20wash%26polish%20b4%26af.png';
    if (filename === 'home-fix-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/bd18ad43add8c0365b8da62c4b70f59f21b41eca/home%20fix-b4%26af.png';
    if (filename === 'roof-repair-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/bd18ad43add8c0365b8da62c4b70f59f21b41eca/roof%20repair-b4%26af.png';
    if (filename === 'digital-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/3e290aade630ca05e2d1ea739cbd8a95a45a46d0/Digital-b4%26af.png';
    if (filename === 'online-name-brand-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/7edc61c0025f57aac57ab63efe2148c02b539e92/on%20line-name%20brand-b4%26af.png';
    if (filename === 'cake-golden-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/7edc61c0025f57aac57ab63efe2148c02b539e92/cake-Golden-b4%26%26af.png';
    if (filename === 'wedding-shop-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/14d2ba3d3d26247166321392d0a0980d39159da6/wedding%20shop%20b4%26af.png';
    if (filename === 'nyc-food-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/1cc3d3f5b20ef53ad0c0cd622ea364f6d1913270/nyc-food%20b4%26af.png';
    if (filename === 'hr-coach-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/1cc3d3f5b20ef53ad0c0cd622ea364f6d1913270/HR%20coach-b4%26af.png';
    if (filename === 'kaizen-sushi-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/1c2b5f14d3ae0bf640e9eeb442c5d4c88d62cbe6/kaizen%20sushi-b4%26af.png';
    if (filename === 'volt-fitness-b4-af.png') return 'https://raw.githubusercontent.com/darren889-ui/darreleefunnels/1c2b5f14d3ae0bf640e9eeb442c5d4c88d62cbe6/volt-finess-b4%26af.png';
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

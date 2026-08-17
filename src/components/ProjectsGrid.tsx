import React, { useState } from 'react';
import { Layers, Sparkles, ExternalLink, ArrowRight, MessageCircle, TrendingUp, Check, Eye } from 'lucide-react';
import { GLIMPSE_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenAuditModal: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject, onOpenAuditModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Funnels' },
    { id: 'saas', label: 'SaaS & AI' },
    { id: 'coaching', label: 'High-Ticket Coaching' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'business', label: 'Business & Consulting' },
    { id: 'finance', label: 'Finance & Wealth' },
    { id: 'course', label: 'Courses & Info' }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? GLIMPSE_PROJECTS
      : GLIMPSE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#050814] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Layers className="w-4 h-4" />
          <span>Curated Portfolio</span>
        </div>

        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          A Glimpse of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            My Work
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Explore production funnels built for high-growth businesses. Each page is engineered with custom visual hierarchy, direct-response storytelling, and seamless technical execution.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Grid matching reference image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#080d22] border border-blue-500/20 hover:border-blue-500/60 p-6 sm:p-8 shadow-2xl transition-all hover:scale-[1.01] flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest font-black text-blue-400 block">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      {project.designerTag}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.conversionLift}
                  </span>
                </div>

                {/* Visual Funnel Representation Mockup Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 mb-6 group-hover:border-blue-500/40 transition-colors shadow-inner">
                  {/* Browser Bar */}
                  <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="truncate max-w-[200px]">{project.platform}</span>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Eye className="w-3 h-3" /> Preview
                    </div>
                  </div>

                  {/* Thumbnail Banner with Scrollable View */}
                  <div
                    className="relative h-72 sm:h-80 overflow-y-auto custom-scrollbar bg-slate-950 scroll-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-auto min-h-full object-cover object-top block"
                      referrerPolicy="no-referrer"
                    />

                    {/* Bottom Floating Hint */}
                    <div className="sticky bottom-2 right-2 float-right mr-2 pointer-events-none z-10">
                      <div className="px-2.5 py-1 rounded-full bg-slate-950/85 border border-blue-500/40 text-blue-300 text-[10px] font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1">
                        <span>Scroll up/down to explore ↓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom action */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-blue-400 font-bold group-hover:text-blue-300">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Built on {project.platform}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Special "Your Brand Here" Card matching the reference design */}
          <div
            onClick={onOpenAuditModal}
            className="group cursor-pointer rounded-3xl bg-gradient-to-b from-[#0e163d] via-[#09102c] to-[#050814] border-2 border-dashed border-blue-500/50 hover:border-blue-400 p-8 shadow-2xl transition-all hover:scale-[1.01] flex flex-col justify-between text-center relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Silhouette Placeholder Graphic matching image */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-b from-blue-600/30 to-indigo-900/40 border border-blue-400/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 rounded-full bg-slate-950/80 border border-blue-400/60 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest font-black text-cyan-400 block mb-2">
                YOUR NEXT PROJECT
              </span>

              <h3 className="font-['Outfit'] font-black text-3xl text-white mb-3">
                Your Future High-Value Clients Are Waiting
              </h3>

              <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed mb-6">
                Let's design a custom, high-converting funnel tailored to your exact offer, audience psychology, and revenue targets.
              </p>
            </div>

            <div className="pt-4 border-t border-blue-500/30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenAuditModal();
                }}
                className="w-full py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Your Funnel Build Slot</span>
              </button>
            </div>
          </div>
        </div>

        {/* Directional Arrow CTA Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-300">
              <span>READY TO SEE YOUR BRAND HERE?</span>
            </div>
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Me A Message On Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

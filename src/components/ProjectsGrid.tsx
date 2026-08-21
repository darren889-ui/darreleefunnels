import React from 'react';
import { ArrowRight, MessageCircle, Eye } from 'lucide-react';
import { GLIMPSE_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenAuditModal?: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
          A Glimpse of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            My Work
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          High-performance landing pages and funnels engineered for coaches, consultants, SaaS founders, course creators, and agency owners.
        </p>

        {/* 2-Column Grid matching reference image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 text-left">
          {GLIMPSE_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#080d22] border border-blue-500/20 hover:border-blue-500/60 p-6 sm:p-8 shadow-2xl transition-all hover:scale-[1.01] flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Visual Funnel Representation Mockup Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 mb-6 group-hover:border-blue-500/40 transition-colors shadow-inner">
                  {/* Browser Bar */}
                  <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <Eye className="w-3 h-3" /> Preview
                    </div>
                  </div>

                  {/* Thumbnail Banner with Scrollable View */}
                  <div
                    className="relative h-72 sm:h-80 overflow-y-auto custom-scrollbar bg-slate-950 scroll-smooth"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.images && project.images.length > 0 ? (
                      project.images.map((imgSrc, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={imgSrc}
                          alt={`${project.title} page ${imgIdx + 1}`}
                          className="w-full h-auto min-h-full object-cover object-top block"
                          referrerPolicy="no-referrer"
                        />
                      ))
                    ) : (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-auto min-h-full object-cover object-top block"
                        referrerPolicy="no-referrer"
                      />
                    )}

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
                <div className="flex items-center justify-end text-xs text-blue-400 font-bold group-hover:text-blue-300">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Full View <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Directional Arrow CTA Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-blue-300">
              <span>READY TO SEE YOUR BRAND HERE?</span>
            </div>
            <a
              href="https://m.me/darren88.lee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all cursor-pointer text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Let's Discuss Your Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

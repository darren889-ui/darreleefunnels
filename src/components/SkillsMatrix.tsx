import React, { useState } from 'react';
import { Cpu, Workflow, Palette, BarChart3, CheckCircle2, Zap, Award, Layers, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#030612] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technical & Conversion Capabilities</span>
          </div>

          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Tech Stack
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive matrix combining direct-response conversion psychology, modern visual aesthetics, and rock-solid platform execution.
          </p>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-b from-blue-950/70 to-[#080e28] border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
              <h4 className={`text-sm font-bold leading-tight ${activeCategoryIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                {cat.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Category Skills Detailed Display */}
        <div className="rounded-3xl bg-gradient-to-b from-[#080e28] to-[#040714] border border-blue-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-950/80 border border-blue-500/40 text-blue-400">
                {getCategoryIcon(SKILL_CATEGORIES[activeCategoryIndex].iconName)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {SKILL_CATEGORIES[activeCategoryIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {SKILL_CATEGORIES[activeCategoryIndex].description}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold self-start md:self-auto">
              <ShieldCheck className="w-3.5 h-3.5" /> Production Tested
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-white text-base">{skill.name}</span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-950 border border-blue-500/40 text-blue-300 uppercase">
                    {skill.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span>Proficiency</span>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

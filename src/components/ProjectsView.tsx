import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { CheckCircle2, MapPin, Building, ArrowRight, X } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsViewProps {
  onOpenQuote: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuote }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
      <div className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Engineering Portfolio</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Our Projects & Engineering Work.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Explore our engineering projects, equipment installations and technology solutions across different industries in Bangladesh.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-[#0199F7] hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="h-52 bg-black overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-[#0199F7] font-semibold"><Building className="w-3.5 h-3.5" />{proj.industry}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{proj.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#0199F7] transition-colors">{proj.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{proj.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#0199F7]">
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#05070f] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left relative text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white rounded-lg bg-black border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0199F7] uppercase tracking-wider">{activeProject.industry} • {activeProject.location}</span>
              <h2 className="text-2xl font-black text-white">{activeProject.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.description}</p>
            </div>

            <div className="h-64 rounded-xl overflow-hidden bg-black border border-white/10">
              <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="space-y-3 p-4 bg-black border border-white/10 rounded-xl">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Project Scope & Execution</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProject.scope}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Equipment & Technology Involved</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.equipment.map((eq, idx) => (
                  <span key={idx} className="px-3 py-1 bg-black border border-white/10 rounded-lg text-xs text-slate-300 font-medium">
                    {eq}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Status: {activeProject.status}
              </span>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow-lg shadow-[#0199F7]/30 cursor-pointer"
              >
                Discuss Similar Project
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

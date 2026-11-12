import bgPng from "../assets/bg.png";
import React from 'react';
import { SOLUTIONS } from '../data/mockData';
import { Check, ArrowRight } from 'lucide-react';
import { MacWindowHeader } from './MacWindowHeader';

interface SolutionsViewProps {
  onOpenQuote: () => void;
  setCurrentView: (view: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onOpenQuote, setCurrentView }) => {
  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
      {/* Header */}
      <div className="relative bg-black text-white py-20 lg:py-24 border-b border-white/10 overflow-hidden">
        {/* User custom background art: bg.png */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={bgPng} 
            alt="Page Background" 
            className="w-full h-full object-cover object-center opacity-65 select-none"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Engineering Verticals</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Integrated Engineering & Technology Solutions.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            FIVONIX delivers specialized equipment, systems and application engineering across five core vertical sectors in Bangladesh.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SOLUTIONS.map((sol, idx) => (
          <div key={sol.id} className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden space-y-0">
            <MacWindowHeader title={`VERTICAL_0${idx + 1}`} />
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0199F7]">Vertical 0{idx + 1}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{sol.title}</h2>
                <p className="text-sm font-semibold text-slate-400">{sol.tagline}</p>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all shrink-0 cursor-pointer"
              >
                Request Solution Proposal
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{sol.description}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Services & Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {sol.services.map((srv, sIdx) => (
                  <div key={sIdx} className="p-3 bg-black border border-white/10 rounded-lg flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#0199F7] shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setCurrentView('products')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0199F7] hover:underline cursor-pointer"
              >
                <span>Browse Related Equipment Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>

    </div>
  );
};

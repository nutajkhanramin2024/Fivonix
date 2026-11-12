import React from 'react';
import { SOLUTIONS } from '../data/mockData';
import { Check, ArrowRight } from 'lucide-react';

interface SolutionsViewProps {
  onOpenQuote: () => void;
  setCurrentView: (view: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onOpenQuote, setCurrentView }) => {
  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
      {/* Header */}
      <div className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
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
          <div key={sol.id} className="bg-[#05070f] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0199F7]">Vertical 0{idx + 1}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{sol.title}</h2>
                <p className="text-sm font-semibold text-slate-400">{sol.tagline}</p>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow-lg shadow-[#0199F7]/30 transition-all shrink-0 cursor-pointer"
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
        ))}
      </div>

    </div>
  );
};

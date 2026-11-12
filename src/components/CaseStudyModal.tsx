import React from 'react';
import { X, CheckCircle2, Cpu, Calendar, Building, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, onClose, onOpenQuote }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-blue-900/60 rounded-3xl p-6 sm:p-8  space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-blue-900/40">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex items-center gap-3 text-xs text-blue-400 font-semibold">
              <span className="px-3 py-1 rounded-full bg-blue-950/90 border border-blue-800 uppercase tracking-wider">
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Building className="w-3.5 h-3.5" />
                {item.client}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Calendar className="w-3.5 h-3.5" />
                {item.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{item.title}</h2>
          </div>
        </div>

        {/* Overview & Challenge / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3 p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">The Challenge</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.challenge}</p>
          </div>
          <div className="space-y-3 p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400">Our Solution</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Impact & Results</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {item.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-200">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Technology Stack Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-blue-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl  shadow-blue-600/30 flex items-center gap-2 transition-all"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

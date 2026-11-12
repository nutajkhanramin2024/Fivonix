import bgPng from "../assets/bg.png";
import React from 'react';
import { MANUFACTURERS } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';
import { MacWindowHeader } from './MacWindowHeader';

export const BrandsView: React.FC = () => {
  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
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
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Global Technology Partners</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Global Technology. Local Engineering Support.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Explore technology manufacturers and equipment providers across our engineering divisions.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MANUFACTURERS.map((m) => (
            <div key={m.id} className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between">
              <MacWindowHeader title={m.category} />
              <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-white font-mono px-3.5 py-1.5 bg-black border border-white/10 rounded-lg">{m.logo}</span>
                  <span className="px-2.5 py-1 rounded bg-[#0199F7]/15 text-[#0199F7] text-[10px] font-bold uppercase tracking-wider">
                    {m.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{m.overview}</p>
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">Core Categories</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {m.productCategories.map((cat, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-black border border-white/10 text-[10px] text-slate-300 font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Technology Partner</span>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

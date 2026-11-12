import React, { useState } from 'react';
import { ArrowRight, X, Check, Building, Calendar, Cpu } from 'lucide-react';
import { PORTFOLIO } from '../data/mockData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenContact: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'enterprise' | 'branding'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Portfolio & Case Studies</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Recent Client Deliverables
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Explore our selected case studies demonstrating technical execution and business impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'web', label: 'Web Apps' },
            { id: 'mobile', label: 'Mobile' },
            { id: 'enterprise', label: 'Enterprise' },
            { id: 'branding', label: 'Branding' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                activeCategory === tab.id
                  ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                  : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1D4ED8]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#F6F8FB] border border-[#E2E8F0] rounded-[10px] overflow-hidden hover:border-[#1D4ED8] hover: transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] text-[#64748B] font-medium">{item.client} • {item.year}</span>
                  <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#1D4ED8]">Read Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#1D4ED8]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8  space-y-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-1 text-[#64748B] hover:text-[#0F172A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#64748B] font-medium">
                <span className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5" />
                  {selectedItem.client}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedItem.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">{selectedItem.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{selectedItem.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#F6F8FB] border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">The Challenge</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{selectedItem.challenge}</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F6F8FB] border border-[#E2E8F0] space-y-2">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Our Solution</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{selectedItem.solution}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Results & Impact</h4>
              <div className="space-y-2">
                {selectedItem.results.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#475569]">
                    <Check className="w-4 h-4 text-[#1D4ED8]" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#1D4ED8]" />
                <span>Tech Stack</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedItem.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-[#F6F8FB] border border-[#E2E8F0] text-xs font-mono text-[#0F172A]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-semibold text-[#475569] bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenContact();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#2563EB]"
              >
                Start Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

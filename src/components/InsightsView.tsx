import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { ArrowRight, Calendar, Clock, X, Search } from 'lucide-react';

interface InsightsViewProps {
  onOpenQuote: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onOpenQuote }) => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [search, setSearch] = useState('');

  const filteredArticles = ARTICLES.filter(art => 
    art.title.toLowerCase().includes(search.toLowerCase()) || 
    art.summary.toLowerCase().includes(search.toLowerCase()) ||
    art.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
      <div className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Knowledge Centre</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Knowledge That Powers Better Decisions.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Explore technical articles, equipment selection guides, industry updates and practical resources.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Search */}
        <div className="max-w-md relative">
          <input
            type="text"
            placeholder="Search articles and guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#05070f] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div 
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-[#0199F7] hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="h-52 bg-black overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span className="text-[#0199F7] font-semibold">{art.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#0199F7] transition-colors">{art.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{art.summary}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#0199F7]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#05070f] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-left relative text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white rounded-lg bg-black border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0199F7] uppercase tracking-wider">{activeArticle.category} • {activeArticle.date}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{activeArticle.title}</h2>
            </div>

            <div className="h-64 sm:h-80 rounded-xl overflow-hidden bg-black border border-white/10">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              {activeArticle.content.map((par, pIdx) => (
                <p key={pIdx}>{par}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0199F7]" />
                Published by FIVONIX Technical Editorial Team
              </span>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow-lg shadow-[#0199F7]/30 cursor-pointer"
              >
                Discuss Technical Requirements
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Client Testimonials</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Authentic feedback from business leaders and founders we have partnered with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-[#F6F8FB] border border-[#E2E8F0] rounded-[10px] p-6 space-y-6 relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-slate-300">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-[#E2E8F0]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">{item.name}</h4>
                  <p className="text-[11px] text-[#64748B]">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

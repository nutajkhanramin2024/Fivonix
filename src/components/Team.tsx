import React from 'react';
import { Linkedin } from 'lucide-react';
import { TEAM } from '../data/mockData';

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-[#F6F8FB] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Leadership Team</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Meet Our Experts
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Experienced engineering and product leadership guiding every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div 
              key={member.id}
              className="bg-white border border-[#E2E8F0] rounded-[10px] overflow-hidden "
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/90 text-[#1D4ED8] hover:bg-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-[#0F172A]">{member.name}</h3>
                <p className="text-xs font-medium text-[#1D4ED8]">{member.role}</p>
                <p className="text-[11px] text-[#475569] leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

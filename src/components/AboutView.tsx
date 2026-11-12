import bgPng from "../assets/bg.png";
import React from 'react';
import { Target, Award } from 'lucide-react';
import { TEAM } from '../data/mockData';

interface AboutViewProps {
  onOpenQuote: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
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
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">About FIVONIX</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Engineering Knowledge. Technology. Progress.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            FIVONIX is an engineering and technology solutions company focused on supporting institutions, industries and organizations with specialized equipment, technical consultation and project-oriented solutions.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#05070f] border border-white/10 rounded-2xl p-8  space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0199F7]/15 text-[#0199F7] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To make advanced engineering technologies and specialized equipment more accessible through practical solutions, technical knowledge and dependable project support.
            </p>
          </div>

          <div className="bg-[#05070f] border border-white/10 rounded-2xl p-8  space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#0199F7]/15 text-[#0199F7] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To become a trusted engineering and technology solutions partner for institutions and industries in Bangladesh and beyond.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#05070f] border border-white/10 rounded-2xl p-8 sm:p-10  space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Core Principles</span>
            <h2 className="text-2xl font-extrabold text-white">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Engineering Excellence', desc: 'Commitment to rigorous technical standards in every installation and consultation.' },
              { title: 'Technical Integrity', desc: 'Honest, specification-driven guidance and transparent equipment recommendations.' },
              { title: 'Customer Commitment', desc: 'Supporting clients from initial concept through commissioning and after-sales service.' },
              { title: 'Innovation', desc: 'Bringing world-class scientific instruments and renewable technologies to Bangladesh.' },
              { title: 'Long-Term Partnerships', desc: 'Building lasting relationships with universities, hospitals, and industrial enterprises.' },
              { title: 'Responsible Technology', desc: 'Promoting energy efficiency, medical safety, and sustainable infrastructure.' }
            ].map((v, idx) => (
              <div key={idx} className="p-5 bg-black border border-white/10 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Leadership</span>
            <h2 className="text-2xl font-extrabold text-white">Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden ">
                <div className="h-56 bg-black overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#0199F7]">{member.role}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

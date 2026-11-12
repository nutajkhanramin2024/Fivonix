import bgPng from "../assets/bg.png";
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { MacWindowHeader } from './MacWindowHeader';

interface IndustriesViewProps {
  onOpenQuote: () => void;
  setCurrentView: (view: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onOpenQuote, setCurrentView }) => {
  const industries = [
    {
      id: 'universities',
      title: 'Universities & Polytechnics',
      desc: 'Build modern teaching and research facilities with specialized engineering equipment, laboratory systems and educational technologies.',
      challenges: ['Outdated teaching apparatus', 'Lack of practical instrumentation', 'Strict institutional procurement compliance'],
      solutions: ['Mechanical & electrical engineering labs', 'Physics and chemistry analytical instruments', 'Turnkey laboratory installation']
    },
    {
      id: 'hospitals',
      title: 'Hospitals & Medical Colleges',
      desc: 'Support healthcare infrastructure with medical equipment, advanced imaging technologies and specialized clinical solutions.',
      challenges: ['Upgrading radiology and imaging departments', 'Ensuring radiation safety compliance', 'Reliable maintenance and lifecycle support'],
      solutions: ['Digital radiography and C-arm systems', 'Nuclear medicine SPECT imaging', 'Operating theatre equipment']
    },
    {
      id: 'research',
      title: 'Research Institutes',
      desc: 'Access advanced scientific instruments and technologies that support experimental research, materials analysis and scientific discovery.',
      challenges: ['High-precision requirements for materials characterization', 'Advanced microscopy and cleanroom infrastructure'],
      solutions: ['Field Emission Scanning Electron Microscopes (FESEM)', 'Advanced FTIR spectrometers', 'Specialized analytical workstations']
    },
    {
      id: 'manufacturing',
      title: 'Industry & Manufacturing',
      desc: 'Improve industrial capabilities through renewable energy, laboratory technologies, process equipment and specialized engineering solutions.',
      challenges: ['High industrial electricity tariffs', 'Sustainability and decarbonization mandates'],
      solutions: ['Industrial rooftop and ground-mounted solar EPC', 'Energy storage integration', 'Quality control laboratory equipment']
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      desc: 'Explore technical equipment and engineering solutions designed around institutional requirements, procurement specifications and project objectives.',
      challenges: ['Complex public procurement specifications', 'Transparent multi-vendor bidding compliance'],
      solutions: ['Turnkey project management', 'Comprehensive technical documentation', 'Verified global manufacturer partnerships']
    }
  ];

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
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Industry Solutions</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Solutions Designed Around Your Industry.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Every institution has different technical requirements. FIVONIX works to understand application specifics before recommending tailored solutions.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {industries.map((ind, idx) => (
          <div key={ind.id} className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden space-y-0">
            <MacWindowHeader title={`SECTOR_0${idx + 1}`} />
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#0199F7]">Sector 0{idx + 1}</span>
                <h2 className="text-2xl font-extrabold text-white">{ind.title}</h2>
              </div>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all shrink-0 cursor-pointer"
              >
                Request Consultation
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{ind.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-black border border-white/10 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Common Technical Challenges</h4>
                <ul className="space-y-2">
                  {ind.challenges.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0199F7] shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-black border border-white/10 rounded-xl space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Relevant FIVONIX Solutions</h4>
                <ul className="space-y-2">
                  {ind.solutions.map((s, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#0199F7] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('products')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0199F7] hover:underline cursor-pointer"
              >
                <span>View Recommended Products for {ind.title}</span>
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

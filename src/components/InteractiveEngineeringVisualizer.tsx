import React, { useState } from 'react';
import { Sun, FlaskConical, Stethoscope, Atom, Radio, ArrowRight, CheckCircle2, Cpu, Zap, Activity } from 'lucide-react';
import beyondPossibilitiesBg from '../assets/beyond_possibilities_bg.jpg';

interface DisciplineData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  icon: any;
  metric: string;
  efficiency: string;
  keyTechnologies: string[];
  operationalRole: string;
  standardCompliance: string;
  sampleEquipment: string;
}

export const InteractiveEngineeringVisualizer: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [activeId, setActiveId] = useState<string>('solar');

  const disciplines: DisciplineData[] = [
    {
      id: 'solar',
      name: 'Solar & Renewable Energy',
      tagline: 'High-yield photovoltaic arrays, intelligent inverters & BESS integration',
      category: 'Renewable Power Architecture',
      icon: Sun,
      metric: '500kW - 20MW+',
      efficiency: '21.5% Cell Efficiency',
      keyTechnologies: [
        'Tier-1 Monocrystalline PERC/TOPCon Modules',
        'Smart Grid-tied Inverters with AFCI Protection',
        'IoT Telemetry & Automated SCADA Monitoring',
        'Industrial Ground-Mount & Rooftop Mounting'
      ],
      operationalRole: 'Generates clean kilowatt-hours directly on industrial facilities, reducing reliance on the national grid.',
      standardCompliance: 'IEC 61215 / IEC 61730 certified',
      sampleEquipment: 'Industrial Rooftop Solar System 500kWp'
    },
    {
      id: 'lab',
      name: 'Scientific & Laboratory Equipment',
      tagline: 'Precision spectroscopy, thermal analysis & university research labs',
      category: 'Analytical Instrumentation',
      icon: FlaskConical,
      metric: 'Sub-ppm Sensitivity',
      efficiency: '> 50,000:1 SNR',
      keyTechnologies: [
        'FTIR & UV-Vis Molecular Spectrophotometers',
        'Chromatography Systems (HPLC / GC-MS)',
        'Universal Mechanical Materials Testing Benches',
        'Fume Hoods & Modular Laboratory Furniture'
      ],
      operationalRole: 'Provides researchers and students with cutting-edge analytical accuracy for chemical, physical, and biological experiments.',
      standardCompliance: 'GLP / ISO 17025 compliant',
      sampleEquipment: 'Advanced FTIR Spectrometer System'
    },
    {
      id: 'nuclear',
      name: 'Nuclear Medicine & Imaging',
      tagline: 'SPECT molecular imaging, gamma cameras & radioprotection systems',
      category: 'Nuclear Diagnostics',
      icon: Radio,
      metric: '140 keV Energy Peak',
      efficiency: '< 9.5% FWHM Resolution',
      keyTechnologies: [
        'Dual-Head Variable-Angle SPECT Detectors',
        'Low-Dose CT Attenuation Correction Modules',
        'Automated Radiopharmacy Synthesis Isolators',
        'Lead-Shielded Transport & Waste Enclosures'
      ],
      operationalRole: 'Enables early oncology and cardiology detection through physiological radiotracer distribution imaging.',
      standardCompliance: 'IAEA Safety Standards / AERB compliant',
      sampleEquipment: 'Dual-Head Variable-Angle SPECT System'
    },
    {
      id: 'medical',
      name: 'Medical Equipment',
      tagline: 'High-frequency digital radiography, C-arm units & surgical suites',
      category: 'Clinical Hospital Systems',
      icon: Stethoscope,
      metric: '50kW - 80kW Generator',
      efficiency: '< 3s Acquisition',
      keyTechnologies: [
        'Cesium Iodide (CsI) Flat-Panel DR Detectors',
        'Motorized Iso-centric C-Arm Fluoroscopy',
        'Modular Surgical Operating Theatre Integration',
        'High-Resolution Diagnostic Ultrasound'
      ],
      operationalRole: 'Delivers clear diagnostic imaging and surgical visualization for tertiary hospitals and medical colleges.',
      standardCompliance: 'CE Medical Device / FDA 510(k) standards',
      sampleEquipment: 'High-Frequency Digital Radiography System'
    },
    {
      id: 'nano',
      name: 'Nanotechnology & Advanced Research',
      tagline: 'Atomic resolution electron microscopy, thin-film deposition & cleanrooms',
      category: 'Nano-Scale Engineering',
      icon: Atom,
      metric: '1.0 nm @ 15kV',
      efficiency: '1,000,000x Magnification',
      keyTechnologies: [
        'Field Emission Scanning Electron Microscopes (FESEM)',
        'Atomic Force Microscopes with Piezo Scanners',
        'Magnetron Sputtering & Plasma Etching Reactors',
        'Cleanroom ISO Class 5 Modular Enclosures'
      ],
      operationalRole: 'Enables atomic-scale surface characterization and microelectronic device prototyping for materials science institutes.',
      standardCompliance: 'ISO 14644 Cleanroom Class 5',
      sampleEquipment: 'Field Emission Scanning Electron Microscope'
    }
  ];

  const active = disciplines.find(d => d.id === activeId) || disciplines[0];

  return (
    <div className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-12 border-b border-white/10 overflow-hidden">
      {/* User's custom background art for Beyond Products. Into Possibilities. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={beyondPossibilitiesBg} 
          alt="Beyond Products Background" 
          className="w-full h-full object-cover object-center opacity-70 select-none"
        />
        {/* Subtle balanced gradient overlay to ensure technical UI and text remain crisp and 100% legible */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/75" />
      </div>

      <div className="w-full max-w-[1400px] 2xl:max-w-[1536px] mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0199F7]/20 border border-[#0199F7]/30 text-[#0199F7] text-xs font-bold tracking-wider">
            <span>INTERACTIVE TECHNICAL VISUALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Beyond Products. Into Possibilities.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Select an engineering vertical to inspect how FIVONIX integrates application engineering, global technology, and certified commissioning.
          </p>
        </div>

        {/* Central Visualization Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive 5-Node Selector Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
              // SELECT ENGINEERING VERTICAL
            </span>

            {disciplines.map((d, idx) => {
              const isSelected = d.id === activeId;
              const Icon = d.icon;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#0199F7]/15 border-[#0199F7] /20 scale-[1.02]'
                      : 'bg-[#05070f] border-white/10 hover:border-white/25 hover:bg-[#080d1e]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#0199F7] text-white'
                        : 'bg-white/5 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#0199F7]">0{idx + 1}</span>
                        <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {d.name}
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{d.category}</p>
                    </div>
                  </div>

                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isSelected ? 'bg-[#0199F7] scale-125' : 'bg-slate-700'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep Telemetry & Technical Specification Inspector */}
          <div className="lg:col-span-7 bg-[#05070f] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between  relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0199F7]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0199F7]">
                    SYSTEM TELEMETRY // {active.category}
                  </span>
                  <h3 className="text-2xl font-black text-white">{active.name}</h3>
                </div>
                <div className="flex items-center gap-2 bg-black border border-white/15 px-3 py-1.5 rounded-lg text-xs font-mono text-[#0199F7]">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-[#0199F7]" />
                  <span>ONLINE & COMMISSIONED</span>
                </div>
              </div>

              {/* Tagline & Operational Role */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-200">{active.tagline}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{active.operationalRole}</p>
              </div>

              {/* Technical Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-black border border-white/10 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Target Scale</span>
                  <div className="text-sm font-black text-white">{active.metric}</div>
                </div>
                <div className="p-3 bg-black border border-white/10 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Benchmark</span>
                  <div className="text-sm font-black text-[#0199F7]">{active.efficiency}</div>
                </div>
                <div className="p-3 bg-black border border-white/10 rounded-xl space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Compliance</span>
                  <div className="text-xs font-bold text-slate-300 truncate">{active.standardCompliance}</div>
                </div>
              </div>

              {/* Key Technologies */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                  Core Engineering Modules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.keyTechnologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-black border border-white/10 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0199F7] shrink-0" />
                      <span className="truncate">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-slate-400">
                Representative System: <span className="text-white font-semibold">{active.sampleEquipment}</span>
              </div>
              <button
                onClick={onExplore}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg  transition-all flex items-center gap-2"
              >
                <span>View Specifications in Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

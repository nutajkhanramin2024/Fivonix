import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown, Compass, Shield, Wrench, Headphones, Building2, Stethoscope, Microscope, Factory, Landmark, Sparkles } from 'lucide-react';
import { ThreeHeroCenterpiece } from './ThreeHeroCenterpiece';
import { InteractiveEngineeringVisualizer } from './InteractiveEngineeringVisualizer';
import { CelestialHorizonGlow } from './CelestialHorizonGlow';
import { MacWindowHeader, MacDots } from './MacWindowHeader';
import { SOLUTIONS, PRODUCTS, PROJECTS, ARTICLES, FAQ_ITEMS } from '../data/mockData';
import techRibbonBg from '../assets/technology_ribbon.jpg';
import quantumOrbBg from '../assets/quantum_orb.jpg';
import bgPng from '../assets/bg.png';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  onOpenQuote: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentView, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);

  // Background artwork paths imported as static modules
  const ribbonBg = techRibbonBg;
  const mobiusOrb = quantumOrbBg;

  const divisions = [
    {
      id: 'solar',
      num: '01',
      title: 'Solar & Renewable Energy',
      tagline: 'Clean Power Infrastructure',
      desc: 'Commercial, industrial and institutional renewable energy EPC, high-efficiency rooftop PV arrays and storage integration.',
      img: 'https://images.unsplash.com/photo-1509391365360-8695311f93f6?auto=format&fit=crop&w=800&q=80',
      specs: '500kW - 20MW+ Capacity'
    },
    {
      id: 'laboratory',
      num: '02',
      title: 'Scientific & Laboratory Equipment',
      tagline: 'Academic & Research Labs',
      desc: 'Analytical spectroscopy, materials testing benches, chemical chromatography and university educational laboratories.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      specs: 'Sub-ppm Analytical Precision'
    },
    {
      id: 'nuclear',
      num: '03',
      title: 'Nuclear Medicine & Imaging',
      tagline: 'Advanced Diagnostic Physics',
      desc: 'Dual-head SPECT systems, gamma cameras, quality assurance phantoms and certified radiation shielding.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      specs: 'Variable Angle Dual Detectors'
    },
    {
      id: 'medical',
      num: '04',
      title: 'Medical Equipment',
      tagline: 'Healthcare Technology',
      desc: 'High-frequency digital radiography, surgical C-arm fluoroscopy, clinical laboratories and hospital operating theatre setups.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      specs: 'Low-Dose High-Speed Imaging'
    },
    {
      id: 'nanotechnology',
      num: '05',
      title: 'Nanotechnology & Advanced Research',
      tagline: 'Atomic Resolution Engineering',
      desc: 'Field emission electron microscopy (FESEM), atomic force microscopy, thin-film plasma deposition and cleanrooms.',
      img: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      specs: '1.0 nm Sub-Nanometer Resolution'
    }
  ];

  const stages = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Technical Feasibility & Requirements',
      desc: 'We examine your operational scope, site conditions, institutional compliance, and equipment specifications before making recommendations.',
      deliverable: 'Application Engineering Assessment & Technical Roadmap'
    },
    {
      step: '02',
      title: 'ENGINEER',
      subtitle: 'System Architecture & Procurement',
      desc: 'We identify optimal configurations, liaise with global manufacturers, and structure procurement according to international engineering standards.',
      deliverable: 'Bill of Materials & Verified Specification Compliance'
    },
    {
      step: '03',
      title: 'DELIVER',
      subtitle: 'Installation & Technical Commissioning',
      desc: 'Our specialized local engineering teams coordinate physical delivery, precision placement, electrical/civil integration, and calibrated testing.',
      deliverable: 'Turnkey Commissioning & Acceptance Sign-off'
    },
    {
      step: '04',
      title: 'SUPPORT',
      subtitle: 'Lifecycle Maintenance & Training',
      desc: 'We conduct technical operator training for university faculties and hospital teams, backed by preventative maintenance protocols.',
      deliverable: '24/7 Response SLA & Dedicated Spare Parts Channel'
    }
  ];

  const industriesList = [
    {
      title: 'Education',
      subtitle: 'Universities & Polytechnics',
      desc: 'Modern teaching and research laboratories with specialized engineering apparatus and educational systems.',
      icon: Building2,
      stat: 'Turnkey Labs'
    },
    {
      title: 'Healthcare',
      subtitle: 'Hospitals & Medical Colleges',
      desc: 'Equipping radiology, oncology, surgery, and diagnostics with certified clinical imaging systems.',
      icon: Stethoscope,
      stat: 'Clinical Imaging'
    },
    {
      title: 'Research',
      subtitle: 'Scientific Research Institutes',
      desc: 'Enabling experimental discoveries with atomic-scale electron microscopes and precision spectrometers.',
      icon: Microscope,
      stat: 'Nanotech R&D'
    },
    {
      title: 'Manufacturing',
      subtitle: 'Industry & Manufacturing',
      desc: 'Lowering power tariffs and industrial emissions with multi-megawatt rooftop solar PV arrays.',
      icon: Factory,
      stat: 'Solar EPC'
    },
    {
      title: 'Infrastructure',
      subtitle: 'Government & Public Sector',
      desc: 'Execution of institutional engineering projects with transparent procurement specifications.',
      icon: Landmark,
      stat: 'Institutional Scale'
    }
  ];

  return (
    <div className="space-y-0 text-slate-300 bg-black selection:bg-[#0199F7] selection:text-white">
      
      {/* =========================================================================
          HERO — UNFORGETTABLE 3D IMMERSIVE EXPERIENCE
          ========================================================================= */}
      <section className="relative min-h-[88vh] lg:min-h-screen bg-black text-white flex items-center overflow-hidden border-b border-white/10">
        
        {/* User's custom background art overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={ribbonBg} 
            alt="Hero Background Art" 
            className="w-full h-full object-cover object-center opacity-30 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0199F7]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            
            {/* Left: Headline & Actions */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0199F7]/15 border border-[#0199F7]/30 text-[#0199F7] text-xs font-mono font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0199F7] animate-ping" />
                <span>ENGINEERING THE POSSIBLE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[66px] font-black tracking-tight leading-[1.08] text-white text-balance">
                We Engineer<br />
                <span className="text-[#0199F7]">What Comes</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0199F7] via-cyan-300 to-white">
                  Next.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
                From advanced scientific technologies to renewable energy and healthcare infrastructure, FIVONIX connects engineering expertise with the technologies shaping tomorrow.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentView('solutions')}
                  className="px-8 py-4 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>EXPLORE OUR CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 text-xs font-bold text-white bg-[#0199F7]/20 hover:bg-[#0199F7]/30 border border-[#0199F7]/40 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
                >
                  START A PROJECT
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
                <div>
                  <div className="text-2xl font-black text-white font-mono">5+</div>
                  <div className="text-xs text-slate-400 font-medium">Core Verticals</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0199F7] font-mono">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Verified Systems</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-mono">EPC</div>
                  <div className="text-xs text-slate-400 font-medium">Turnkey Execution</div>
                </div>
              </div>
            </div>

            {/* Right: Custom 3D Interactive Centerpiece — spacious, unconstrained, centered */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center">
              <ThreeHeroCenterpiece />
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 1 — THE BIG IDEA (Cinematic Full-Width Black Section)
          ========================================================================= */}
      <section className="relative py-32 bg-black text-white border-b border-white/10 overflow-hidden">
        {/* User's custom background art overlay — explicitly visible and high fidelity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={techRibbonBg} 
            alt="FIVONIX Interconnected Technology Waves" 
            className="w-full h-full object-cover object-center opacity-85 select-none"
          />
          {/* Subtle balanced vignette to guarantee text legibility while keeping the graphic vividly visible */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-widest block">
            // THE BIG IDEA
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
            Technology Is Only Powerful When It Moves the World Forward.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            At FIVONIX, we bridge the divide between theoretical science and practical execution. From powering textile factories with industrial solar energy to equipping university cleanrooms with atomic-resolution electron microscopes, we make complex engineering dependable.
          </p>
          
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setCurrentView('about')}
              className="px-6 py-3.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Our Engineering Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE ENGINEER (Interactive Visual Panels with Celestial Glow)
          ========================================================================= */}
      <section className="relative py-28 bg-black text-white border-b border-white/10 overflow-hidden">
        
        {/* Top atmospheric glow dome (inspired by reference image) */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#0199F7]/18 via-[#01134C]/25 to-transparent blur-[110px] pointer-events-none rounded-full" />
        
        {/* Lateral planetary sphere rim glow (mirroring the right panel of the user's reference design) */}
        <div className="absolute -right-44 top-1/4 w-[480px] h-[480px] rounded-full border border-cyan-400/20 bg-gradient-to-br from-[#0199F7]/12 via-[#01134C]/20 to-transparent blur-[1px] pointer-events-none  hidden lg:block" />
        <div className="absolute -right-24 top-1/3 w-72 h-72 rounded-full bg-cyan-400/15 blur-[80px] pointer-events-none hidden lg:block" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 relative">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0199F7]/10 border border-[#0199F7]/30 text-[#0199F7] text-[11px] font-mono font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>ENGINEERING VERTICALS // CORE INFRASTRUCTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Five Disciplines. One Engineering Vision.
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Specialized technology divisions engineered for modern industry, academia, and healthcare.
              </p>
            </div>
            
            <button
              onClick={() => setCurrentView('solutions')}
              className="px-6 py-3 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg  /30 transition-all shrink-0 cursor-pointer flex items-center gap-2 group"
            >
              <span>View Full Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 5 Disciplines Cards with Precision Under-Glow (matches illuminated 3D steps in user's reference) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div) => {
              const isHovered = hoveredDivision === div.id;
              return (
                <div key={div.id} className="relative flex flex-col group/card">
                  {/* Card Container */}
                  <div
                    onMouseEnter={() => setHoveredDivision(div.id)}
                    onMouseLeave={() => setHoveredDivision(null)}
                    onClick={() => setCurrentView('solutions')}
                    className={`bg-[#050814]/90 backdrop-blur-md border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between relative z-10  ${
                      isHovered 
                        ? 'border-cyan-400/80 -translate-y-2.5 ' 
                        : 'border-white/10 hover:border-[#0199F7]/50'
                    }`}
                  >
                    <MacWindowHeader title={`VERTICAL_${div.num}`} />
                    <div className="relative h-60 overflow-hidden bg-black">
                      <img 
                        src={div.img} 
                        alt={div.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/40 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded bg-black/90 text-white font-mono text-xs font-bold border border-white/15">
                          {div.num}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#0199F7] text-white font-bold">
                          {div.specs}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">{div.tagline}</span>
                        <h3 className="text-xl font-black text-white group-hover/card:text-[#0199F7] transition-colors">
                          {div.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                          {div.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#0199F7]">
                        <span>Explore Vertical</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 text-cyan-300' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Illuminated Step Under-Glow (identical to the glowing steps in user's image) */}
                  <div className="relative -mt-1 mx-auto w-[88%] h-4 pointer-events-none z-0">
                    {/* Concentrated slit light bar */}
                    <div 
                      className={`w-full h-[2px] bg-gradient-to-r from-transparent via-[#0199F7] to-transparent transition-all duration-500 ${
                        isHovered ? 'via-cyan-300 scale-x-110 opacity-100 ' : 'opacity-40'
                      }`} 
                    />
                    {/* Diffused turquoise ground emission wash */}
                    <div 
                      className={`w-full h-7 bg-[#0199F7]/25 blur-lg transition-all duration-500 transform -translate-y-1 ${
                        isHovered ? 'bg-cyan-400/45 blur-xl scale-125' : 'opacity-50'
                      }`} 
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Signature Planetary Horizon Arc Glow */}
        <CelestialHorizonGlow className="pt-20 -mb-6 pointer-events-none" />

      </section>

      {/* =========================================================================
          SECTION 3 — THE TECHNOLOGY (Interactive Technical Visualizer)
          ========================================================================= */}
      <InteractiveEngineeringVisualizer onExplore={() => setCurrentView('products')} />

      {/* =========================================================================
          SECTION 4 — OUR APPROACH (Four-Stage Process with Interactive Step Matrix)
          ========================================================================= */}
      <section className="py-24 bg-black text-white border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-wider">
              ENGINEERING METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From Complex Challenges to Practical Solutions.
            </h2>
            <p className="text-sm text-slate-400">
              Our structured 4-phase lifecycle ensures technical fidelity, smooth procurement, and certified handover.
            </p>
          </div>

          {/* Progress Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 space-y-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0199F7]/15 border-[#0199F7] /20'
                      : 'bg-[#05070f] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-mono font-black ${isActive ? 'text-[#0199F7]' : 'text-slate-600'}`}>
                      {st.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#0199F7] animate-ping' : 'bg-slate-700'}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{st.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-1">{st.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="bg-[#05070f] border border-white/10 rounded-2xl p-8 sm:p-10  grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-widest">
                PHASE {stages[activeStage].step} DEEP-DIVE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {stages[activeStage].title} // {stages[activeStage].subtitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stages[activeStage].desc}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Primary Deliverable: <strong className="text-white">{stages[activeStage].deliverable}</strong></span>
              </div>
            </div>

            <div className="md:col-span-4 bg-black border border-white/10 rounded-xl p-6 text-center space-y-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Standard Execution
              </span>
              <div className="text-3xl font-black text-[#0199F7] font-mono">
                {activeStage === 0 && 'Weeks 1-2'}
                {activeStage === 1 && 'Weeks 3-4'}
                {activeStage === 2 && 'Weeks 5-8'}
                {activeStage === 3 && 'Continuous'}
              </div>
              <p className="text-xs text-slate-400">
                Coordinated with international factory QA and on-site engineers in Bangladesh.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /25 cursor-pointer"
              >
                Discuss Technical Milestones
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — INDUSTRIES (Engineering Across Every Critical Industry)
          ========================================================================= */}
      <section className="relative py-24 bg-black text-white border-b border-white/10 overflow-hidden">
        {/* User's custom background art: bg.png */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={bgPng} 
            alt="Industries Background" 
            className="w-full h-full object-cover object-center opacity-65 select-none"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-wider">
                TARGET CUSTOMERS & MARKETS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Engineering Across Every Critical Industry.
              </h2>
              <p className="text-sm text-slate-400">
                Tailored equipment architectures serving public and private institutions across Bangladesh.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('industries')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /25 transition-all shrink-0 cursor-pointer"
            >
              Explore All Industries
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentView('industries')}
                  className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0199F7] hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between group "
                >
                  <MacWindowHeader title={`MARKET_0${idx + 1}`} />
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#0199F7]/15 text-[#0199F7] flex items-center justify-center font-bold">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black text-[#0199F7] border border-white/10 font-bold">
                          {ind.stat}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#0199F7] transition-colors">
                          {ind.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-400">{ind.subtitle}</p>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2">
                          {ind.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#0199F7]">
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — PRODUCTS (The Right Technology Changes Everything)
          ========================================================================= */}
      <section className="relative py-24 bg-black text-white border-b border-white/10 overflow-hidden">
        {/* User's custom background art: techRibbonBg */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={techRibbonBg} 
            alt="Products Background" 
            className="w-full h-full object-cover object-center opacity-60 select-none"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-wider">
                PRODUCT DISCOVERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                The Right Technology Changes Everything.
              </h2>
              <p className="text-sm text-slate-400">
                Browse precision instruments, renewable solar modules, and clinical imaging systems with verified factory warranties.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('products')}
              className="px-6 py-3 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((prod) => (
              <div 
                key={prod.id}
                onClick={() => setCurrentView('products')}
                className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0199F7] transition-all cursor-pointer flex flex-col justify-between group "
              >
                <MacWindowHeader title={prod.categoryLabel} />
                <div className="h-56 bg-black overflow-hidden relative">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded bg-black/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/15">
                      {prod.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#0199F7] font-semibold">{prod.manufacturer}</span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#0199F7] transition-colors">{prod.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{prod.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-300">Price: Request a Quote</span>
                    <span className="text-xs font-bold text-[#0199F7] flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION (Frequently Asked Technical Questions)
          ========================================================================= */}
      <section className="relative py-24 bg-black text-white border-b border-white/10 overflow-hidden">
        {/* User's custom background art: quantumOrbBg */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={quantumOrbBg} 
            alt="FAQ Background" 
            className="w-full h-full object-cover object-center opacity-55 select-none"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
        </div>

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-wider">QUESTIONS & ANSWERS</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#05070f] border border-white/10 rounded-xl overflow-hidden ">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-sm text-white cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/10 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA (Have Something Ambitious in Mind?) with Reference Glow
          ========================================================================= */}
      <section className="relative py-32 bg-black text-white text-center border-t border-white/10 overflow-hidden">
        {/* User's custom background art */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={ribbonBg} 
            alt="CTA Background Ribbon" 
            className="w-full h-full object-cover object-center opacity-40 select-none"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
        </div>

        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 pb-10">
          <span className="text-xs font-mono font-bold text-[#0199F7] uppercase tracking-widest block">
            // COLLABORATION & INQUIRY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Have Something Ambitious in Mind?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's turn your technical requirements into a solution. Our engineering team helps organizations select, procure, and commission specialized technologies across Bangladesh.
          </p>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-9 py-4 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              START A CONVERSATION
            </button>
            <button
              onClick={() => setCurrentView('contact')}
              className="px-9 py-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

import React from 'react';

interface CelestialHorizonGlowProps {
  className?: string;
  variant?: 'bottom' | 'top' | 'ambient';
}

export const CelestialHorizonGlow: React.FC<CelestialHorizonGlowProps> = ({ 
  className = '', 
  variant = 'bottom' 
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Deep atmospheric glow reservoir */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Core incandescent focal bloom */}
        <div className="w-[85%] max-w-[1100px] h-32 md:h-44 bg-gradient-to-r from-transparent via-[#0199F7]/35 to-transparent blur-[70px] rounded-full transform -translate-y-4" />
        
        {/* Cyan atmospheric flare */}
        <div className="w-[60%] max-w-[800px] h-20 md:h-28 bg-gradient-to-r from-transparent via-cyan-400/40 via-white/20 to-transparent blur-[40px] rounded-full transform -translate-y-2" />
        
        {/* Deep navy base expansion */}
        <div className="w-full max-w-[1300px] h-48 bg-[#01134C]/50 blur-[90px] rounded-full transform translate-y-6" />
      </div>

      {/* SVG Precision Curvature Arc (Matches the user's reference planetary rim) */}
      <div className="relative w-full max-w-[1400px] mx-auto">
        <svg 
          viewBox="0 0 1200 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Main atmospheric rim gradient */}
            <linearGradient id="horizonRimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0199F7" stopOpacity="0" />
              <stop offset="15%" stopColor="#0199F7" stopOpacity="0.3" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#0199F7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0199F7" stopOpacity="0" />
            </linearGradient>

            {/* Diffused atmospheric body fill */}
            <linearGradient id="horizonBodyFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="25%" stopColor="#0199F7" stopOpacity="0.18" />
              <stop offset="65%" stopColor="#01134C" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
            </linearGradient>

            {/* Atmosphere multi-pass blur filters */}
            <filter id="celestialSoftGlow" x="-30%" y="-100%" width="160%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="24" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="intenseRimGlow" x="-20%" y="-150%" width="140%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="sharpGlow" />
              <feMerge>
                <feMergeNode in="sharpGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Planetary body volume below the curve */}
          <path
            d="M -100 180 Q 600 28 1300 180 L 1300 240 L -100 240 Z"
            fill="url(#horizonBodyFill)"
          />

          {/* Deep atmospheric wide haze path */}
          <path
            d="M -50 180 Q 600 28 1250 180"
            stroke="url(#horizonRimGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#celestialSoftGlow)"
            opacity="0.75"
          />

          {/* Mid-range cyan atmospheric ion layer */}
          <path
            d="M -20 180 Q 600 28 1220 180"
            stroke="url(#horizonRimGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#intenseRimGlow)"
            opacity="0.9"
          />

          {/* Crisp, razor-sharp white-hot planetary horizon line */}
          <path
            d="M 50 180 Q 600 28 1150 180"
            stroke="url(#horizonRimGradient)"
            strokeWidth="1.75"
            strokeLinecap="round"
            opacity="1"
          />
        </svg>

        {/* Ambient technical coordinate marks mirroring the reference editorial design */}
        <div className="flex items-center justify-between px-6 pt-2 text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
            HORIZON // SYSTEM_COORDINATES: 23.8103° N
          </span>
          <span className="hidden sm:inline-block">SPECTRAL FLUX // 480nm ATMOSPHERIC DISPERSION</span>
          <span>ORBITAL SECTOR // 05 DISCIPLINES</span>
        </div>
      </div>
    </div>
  );
};

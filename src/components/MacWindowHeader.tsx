import React from 'react';

interface MacWindowHeaderProps {
  title?: string;
  className?: string;
}

export const MacWindowHeader: React.FC<MacWindowHeaderProps> = ({ title, className = '' }) => {
  return (
    <div className={`px-4 py-2.5 bg-white/[0.05] border-b border-white/10 flex items-center justify-between select-none ${className}`}>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-red-500/40 inline-block shadow-sm" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-yellow-500/40 inline-block shadow-sm" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-green-500/40 inline-block shadow-sm" />
      </div>
      {title && (
        <span className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider uppercase truncate max-w-[200px]">
          {title}
        </span>
      )}
      <div className="w-10" />
    </div>
  );
};

export const MacDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-red-500/40 inline-block shadow-sm" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-yellow-500/40 inline-block shadow-sm" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-green-500/40 inline-block shadow-sm" />
  </div>
);

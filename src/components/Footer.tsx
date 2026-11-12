import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { CelestialHorizonGlow } from './CelestialHorizonGlow';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  return (
    <footer className="relative bg-black text-slate-400 pt-20 pb-0 border-t border-white/10 overflow-hidden">
      {/* Signature Soft Blue Ambient Glow at the Footer Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] max-w-full h-44 bg-gradient-to-b from-[#0199F7]/15 via-[#01134C]/20 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-28 -right-20 w-96 h-96 rounded-full bg-[#0199F7]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-[#01134C]/25 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0199F7] flex items-center justify-center text-white font-bold text-sm tracking-wider">
                FX
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                FIVONIX
              </span>
            </div>
            <p className="text-sm font-semibold text-[#0199F7]">
              Engineering Tomorrow. Enabling Progress.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              FIVONIX delivers engineering, scientific equipment and technology solutions for institutions, hospitals, universities and industries across Bangladesh.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0199F7] shrink-0" />
                <span>Gulshan-2, Dhaka 1212, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0199F7] shrink-0" />
                <span>contact@fivonix.com.bd</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0199F7] shrink-0" />
                <span>+880 1700-000000</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => setCurrentView('solutions')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Solar & Renewable Energy</button></li>
              <li><button onClick={() => setCurrentView('solutions')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Scientific & Laboratory</button></li>
              <li><button onClick={() => setCurrentView('solutions')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Nuclear Medicine</button></li>
              <li><button onClick={() => setCurrentView('solutions')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Medical Equipment</button></li>
              <li><button onClick={() => setCurrentView('solutions')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Nanotechnology</button></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => setCurrentView('about')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">About Us</button></li>
              <li><button onClick={() => setCurrentView('projects')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Projects</button></li>
              <li><button onClick={() => setCurrentView('industries')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Industries</button></li>
              <li><button onClick={() => setCurrentView('brands')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Brands</button></li>
              <li><button onClick={() => setCurrentView('insights')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Insights</button></li>
              <li><button onClick={() => setCurrentView('contact')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => setCurrentView('products')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Product Catalogue</button></li>
              <li><button onClick={() => setCurrentView('insights')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Buying Guides</button></li>
              <li><button onClick={() => setCurrentView('insights')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Technical Resources</button></li>
              <li><button onClick={() => setCurrentView('about')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">FAQs</button></li>
              <li><button onClick={() => setCurrentView('contact')} className="hover:text-[#0199F7] transition-colors text-left cursor-pointer">Request a Quote</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 FIVONIX. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

        {/* Planetary Horizon Glow at the ABSOLUTE BOTTOM of the Footer across ALL pages */}
        <div className="pt-4 pb-0 relative overflow-hidden pointer-events-none">
          <CelestialHorizonGlow className="-mb-8" />
        </div>

      </div>
    </footer>
  );
};

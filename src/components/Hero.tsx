import React from 'react';
import { ArrowRight, CheckCircle, Code, Shield, Server } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="pt-32 pb-20 bg-[#0B1F3A] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-blue-200 text-xs font-medium">
              <span>Trusted IT & Software Agency in Bangladesh</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.15]">
              Engineering reliable software and web systems for modern businesses.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Fivonix delivers robust web development, mobile applications, and enterprise software solutions designed for scalability, performance, and security.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#2563EB] transition-colors flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-300">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-300">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-300">Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right: Clean Product Mockup Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6  space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <span className="text-xs font-mono text-slate-400">fivonix-system-v2.1</span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-3">
                  <Code className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Full-Stack Web & Mobile Apps</h3>
                    <p className="text-xs text-slate-400">React, Next.js, Flutter, Node.js</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-3">
                  <Server className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Cloud Infrastructure & ERP</h3>
                    <p className="text-xs text-slate-400">AWS, Secure Databases, Automation</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Enterprise Security & QA</h3>
                    <p className="text-xs text-slate-400">Rigorous Testing & Code Quality</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                <span>Status: Operational</span>
                <span className="text-blue-400 font-mono">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

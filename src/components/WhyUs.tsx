import React, { useState } from 'react';
import { ShieldCheck, Cpu, Clock, Headphones, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const WhyUs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="about" className="py-24 bg-[#F6F8FB] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">About Fivonix</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Engineered For Reliability & Scale
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            We operate with absolute transparency, rigorous code standards, and structured project management to ensure successful outcomes.
          </p>
        </div>

        {/* 4 Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />,
              title: 'Enterprise Security',
              desc: 'Rigorous security practices, secure coding standards, and data protection compliance.'
            },
            {
              icon: <Cpu className="w-5 h-5 text-[#1D4ED8]" />,
              title: 'Modern Architecture',
              desc: 'Built using production-grade frameworks and scalable cloud infrastructure.'
            },
            {
              icon: <Clock className="w-5 h-5 text-[#1D4ED8]" />,
              title: 'On-Time Delivery',
              desc: 'Structured sprint planning and milestone tracking to meet launch deadlines.'
            },
            {
              icon: <Headphones className="w-5 h-5 text-[#1D4ED8]" />,
              title: 'Dedicated Support',
              desc: 'Continuous monitoring, maintenance, and technical support after deployment.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 space-y-3 ">
              <div className="w-10 h-10 rounded-lg bg-[#EAF1FB] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F172A]">{item.title}</h3>
              <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-[#E2E8F0]">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0F172A]">Frequently Asked Questions</h3>
            <p className="text-xs text-[#64748B]">Clear answers regarding our processes and collaboration models.</p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-[#E2E8F0] rounded-[10px] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-semibold text-[#0F172A]">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#64748B] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-0 text-xs text-[#475569] leading-relaxed border-t border-[#E2E8F0] mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

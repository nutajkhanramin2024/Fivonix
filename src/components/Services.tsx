import React, { useState } from 'react';
import { Globe, Smartphone, Server, Layout, TrendingUp, Cloud, X, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#1D4ED8]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1D4ED8]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#1D4ED8]" />;
      default: return <Globe className="w-5 h-5 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Comprehensive IT & Software Solutions
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            We provide structured, high-quality development and consulting services tailored to modern business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-[#F6F8FB] border border-[#E2E8F0] rounded-[10px] p-6 hover:border-[#1D4ED8] hover: transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#EAF1FB] flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0F172A]">{service.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{service.shortDesc}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold">
                <span className="text-[#64748B]">Starting at {service.startingPrice}</span>
                <span className="text-[#1D4ED8] flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div 
            className="w-full max-w-xl bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8  space-y-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-1 text-[#64748B] hover:text-[#0F172A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Service Overview</span>
              <h3 className="text-2xl font-bold text-[#0F172A]">{selectedService.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{selectedService.fullDesc}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[#F6F8FB] border border-[#E2E8F0]">
              <div>
                <p className="text-xs text-[#64748B]">Starting Price</p>
                <p className="text-base font-bold text-[#0F172A]">{selectedService.startingPrice}</p>
              </div>
              <div>
                <p className="text-xs text-[#64748B]">Estimated Timeline</p>
                <p className="text-base font-bold text-[#0F172A]">{selectedService.deliveryTime}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Key Features & Deliverables</h4>
              <div className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#475569]">
                    <Check className="w-4 h-4 text-[#1D4ED8]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-[#475569] bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#2563EB]"
              >
                Inquire About Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

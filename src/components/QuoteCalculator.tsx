import React, { useState } from 'react';
import { Calculator, Check, Send } from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'enterprise' | 'marketing'>('web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'responsive']);
  const [timeline, setTimeline] = useState<'standard' | 'fast' | 'urgent'>('standard');
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const featuresList = [
    { id: 'auth', name: 'User Authentication & Profiles', price: 200 },
    { id: 'payment', name: 'Payment Gateway Integration', price: 350 },
    { id: 'admin', name: 'Advanced Admin Dashboard', price: 450 },
    { id: 'chat', name: 'Customer Support Messaging', price: 300 },
    { id: 'api', name: 'Custom Third-Party API Integration', price: 400 },
    { id: 'seo', name: 'SEO & Performance Optimization', price: 250 }
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculateEstimate = () => {
    let basePrice = 800;
    if (projectType === 'mobile') basePrice = 1500;
    if (projectType === 'enterprise') basePrice = 2500;
    if (projectType === 'marketing') basePrice = 600;

    const featuresTotal = selectedFeatures.reduce((acc, featId) => {
      const feat = featuresList.find(f => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    let timelineMultiplier = 1;
    if (timeline === 'fast') timelineMultiplier = 1.25;
    if (timeline === 'urgent') timelineMultiplier = 1.5;

    const total = Math.round((basePrice + featuresTotal) * timelineMultiplier);
    return {
      min: total,
      max: Math.round(total * 1.3)
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert('Please enter your name and email.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-24 bg-[#F6F8FB] border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Project Estimator</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Calculate Estimated Investment
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Configure your project parameters below for a transparent ballpark estimate and instant inquiry submission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Options */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8 space-y-8 ">
            
            {/* 1. Project Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'web', label: 'Web App' },
                  { id: 'mobile', label: 'Mobile App' },
                  { id: 'enterprise', label: 'Enterprise ERP' },
                  { id: 'marketing', label: 'Digital Marketing' }
                ].map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors border ${
                      projectType === type.id
                        ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                        : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1D4ED8]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Features */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                2. Select Required Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featuresList.map(feat => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#EAF1FB] border-[#1D4ED8] text-[#0F172A]'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs font-medium">{feat.name}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#1D4ED8] text-white' : 'bg-slate-100 text-transparent'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Timeline */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                3. Desired Timeline
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard' },
                  { id: 'fast', label: 'Fast Track' },
                  { id: 'urgent', label: 'Urgent' }
                ].map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id as any)}
                    className={`py-2.5 px-2 rounded-lg text-xs font-semibold transition-colors border text-center ${
                      timeline === t.id
                        ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                        : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#1D4ED8]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Summary & Form */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8 space-y-6 ">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EAF1FB] text-[#1D4ED8]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">Estimate Summary</h3>
                <p className="text-xs text-[#64748B]">Ballpark project investment</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#F6F8FB] border border-[#E2E8F0] text-center space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">Estimated Range</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()} USD
              </div>
            </div>

            {submitted ? (
              <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <h4 className="text-sm font-bold text-emerald-900">Inquiry Sent Successfully</h4>
                <p className="text-xs text-emerald-700">
                  Thank you {clientName}. Our team will review your specifications and reply via email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-lg hover:bg-emerald-200"
                >
                  Reset Estimator
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Send Estimate to Email</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1D4ED8]"
                  />
                  <input
                    type="email"
                    placeholder="Business Email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1D4ED8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

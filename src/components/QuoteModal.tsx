import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    solution: 'Solar & Renewable Energy',
    projectScope: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-[#05070f] border border-white/15 rounded-2xl p-6 sm:p-8  space-y-6 text-left relative text-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white rounded-lg bg-black border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">FIVONIX Proposal Request</span>
          <h2 className="text-2xl font-black text-white">Request a Quote</h2>
          <p className="text-xs text-slate-400">Provide your project details for formal technical & commercial evaluation.</p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Quote Request Received</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you {form.name}. Our engineering estimation team will review your requirements and provide a formal proposal to {form.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] rounded-lg shadow mt-2"
            >
              Close & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white">Full Name *</label>
                <input
                  type="text"
                  placeholder="Dr. Ahmed Hossain"
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white">Organization *</label>
                <input
                  type="text"
                  placeholder="Hospital / University"
                  required
                  value={form.organization}
                  onChange={(e) => setForm({...form, organization: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white">Email *</label>
                <input
                  type="email"
                  placeholder="ahmed@org.bd"
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white">Phone *</label>
                <input
                  type="tel"
                  placeholder="+880 1700-000000"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Primary Solution / Area</label>
              <select
                value={form.solution}
                onChange={(e) => setForm({...form, solution: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-[#0199F7]"
              >
                <option>Solar & Renewable Energy</option>
                <option>Scientific & Laboratory Equipment</option>
                <option>Nuclear Medicine & Imaging</option>
                <option>Medical Equipment</option>
                <option>Nanotechnology & Advanced Research</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white">Project Scope & Technical Details *</label>
              <textarea
                rows={4}
                placeholder="Specify equipment models, quantities, installation timeline or project parameters..."
                required
                value={form.projectScope}
                onChange={(e) => setForm({...form, projectScope: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow flex items-center justify-center gap-2"
            >
              <span>Submit Request For Quote</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

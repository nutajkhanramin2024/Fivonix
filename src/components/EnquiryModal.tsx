import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiryBasket: Product[];
  setEnquiryBasket: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  enquiryBasket,
  setEnquiryBasket
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: 'Bangladesh',
    location: '',
    requirements: '',
    message: ''
  });

  if (!isOpen) return null;

  const removeItem = (id: string) => {
    setEnquiryBasket(enquiryBasket.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#05070f] border border-white/15 rounded-2xl p-6 sm:p-8  space-y-6 text-left relative text-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white rounded-lg bg-black border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-[#0199F7]/15 text-[#0199F7]">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white">Product Enquiry List</h2>
            <p className="text-xs text-slate-400">Review selected items and submit your quote enquiry</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Enquiry Submitted Successfully</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you {form.name}! Your enquiry for {enquiryBasket.length} item(s) has been received. Our technical team will send a formal quotation to {form.email}.
            </p>
            <button
              onClick={() => {
                setEnquiryBasket([]);
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] rounded-lg shadow mt-2"
            >
              Close & Return
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {enquiryBasket.length === 0 ? (
              <div className="py-12 text-center space-y-3 text-slate-400 text-xs">
                <p>Your enquiry basket is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-[#0199F7] bg-slate-800 rounded-lg hover:bg-slate-700"
                >
                  Browse Catalogue
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {enquiryBasket.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs">
                      <div>
                        <strong className="text-white block">{item.name}</strong>
                        <span className="text-slate-400 text-[10px]">{item.manufacturer} • Price: Request a Quote</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-red-400 hover:bg-red-950/50 rounded"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Institution & Project Details</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                    <input
                      type="text"
                      placeholder="Organization / University *"
                      required
                      value={form.organization}
                      onChange={(e) => setForm({...form, organization: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Project Location (e.g. Dhaka)"
                      value={form.location}
                      onChange={(e) => setForm({...form, location: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                    <input
                      type="text"
                      placeholder="Job Title / Department"
                      value={form.jobTitle}
                      onChange={(e) => setForm({...form, jobTitle: e.target.value})}
                      className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Technical specifications, quantities or special requirements..."
                    value={form.requirements}
                    onChange={(e) => setForm({...form, requirements: e.target.value})}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry List</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

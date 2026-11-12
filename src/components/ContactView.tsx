import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    department: 'Solar & Renewable Energy',
    subject: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-black min-h-screen space-y-16 text-slate-300">
      
      <div className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Contact FIVONIX</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Let's Discuss Your Next Project.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Whether you are planning a new laboratory, upgrading hospital infrastructure, evaluating renewable energy opportunities or looking for specialized engineering equipment, our team is ready to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#05070f] border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
              <h3 className="text-base font-bold text-white">Headquarters & Office</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0199F7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Office Address</strong>
                    <span>Gulshan-2, Dhaka 1212, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0199F7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Inquiries</strong>
                    <span>contact@fivonix.com.bd</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0199F7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Phone / WhatsApp</strong>
                    <span>+880 1700-000000</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                <p>Business Hours: Sunday – Thursday, 9:00 AM – 6:00 PM (BST).</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#05070f] border border-white/10 rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Enquiry Submitted Successfully</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you {formData.name}. Our technical team has received your message and will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Dr. Rahman Khan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Organization / Institution *</label>
                    <input
                      type="text"
                      placeholder="University of Dhaka"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Email Address *</label>
                    <input
                      type="email"
                      placeholder="rahman@university.edu.bd"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+880 1700-000000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Department / Industry</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#0199F7]"
                    >
                      <option>Solar & Renewable Energy</option>
                      <option>Scientific & Laboratory Equipment</option>
                      <option>Nuclear Medicine & Imaging</option>
                      <option>Medical Equipment</option>
                      <option>Nanotechnology & Advanced Research</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Project Location</label>
                    <input
                      type="text"
                      placeholder="Dhaka, Bangladesh"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">Message & Technical Requirements *</label>
                  <textarea
                    rows={5}
                    placeholder="Describe your equipment specifications, project scope or inquiry details..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow-lg shadow-[#0199F7]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Project Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

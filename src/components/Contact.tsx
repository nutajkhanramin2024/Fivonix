import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '$1,000 - $3,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Start Your Project With Fivonix
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Reach out to discuss your project requirements or schedule a consultation with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F6F8FB] border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-bold text-[#0F172A]">Office & Inquiries</h3>

              <div className="space-y-4 text-xs text-[#475569]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5">Location</strong>
                    <span>Gulshan-2, Dhaka 1212, Bangladesh</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5">Email</strong>
                    <span>contact@fivonix.com.bd</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block mb-0.5">Phone / WhatsApp</strong>
                    <span>+880 1700-000000</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <p className="text-xs text-[#64748B]">
                  Office hours: Sunday – Thursday, 9:00 AM – 6:00 PM (BST).
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#F6F8FB] border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <h3 className="text-lg font-bold text-[#0F172A]">Message Sent Successfully</h3>
                <p className="text-xs text-[#475569] max-w-sm mx-auto">
                  Thank you {formData.name}. We have received your message and will respond within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#1D4ED8] bg-[#EAF1FB] rounded-lg hover:bg-blue-100 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A]">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A]">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A]">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#1D4ED8]"
                    >
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Enterprise Software</option>
                      <option>UI/UX Design</option>
                      <option>Digital Marketing & SEO</option>
                      <option>Cloud & DevOps</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0F172A]">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-[#0F172A] text-xs focus:outline-none focus:border-[#1D4ED8]"
                    >
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A]">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project scope and objectives..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
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

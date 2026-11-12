import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import { Product } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  enquiryBasket: Product[];
  onOpenEnquiry: () => void;
  onOpenQuote: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  enquiryBasket,
  onOpenEnquiry,
  onOpenQuote,
  searchTerm,
  setSearchTerm
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar (Full Width Edge to Edge) */}
      <div className="bg-black text-slate-400 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-white/10 w-full">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span>Email: <strong className="text-white">contact@fivonix.com.bd</strong></span>
            <span>Phone: <strong className="text-white">+880 1700-000000</strong></span>
            <span className="hidden md:inline">Gulshan-2, Dhaka 1212, Bangladesh</span>
          </div>
          <div className="flex items-center gap-4 text-[#0199F7] font-medium">
            <span>Engineering Tomorrow. Enabling Progress.</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Full Width Edge to Edge) */}
      <header className={`sticky top-0 z-40 transition-all duration-300 bg-black/90 backdrop-blur-md w-full ${
        isScrolled ? 'border-b border-white/15  py-3' : 'py-4 border-b border-white/10'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0199F7] flex items-center justify-center text-white font-black text-lg tracking-wider /30 group-hover:scale-105 transition-transform">
              FX
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                FIVONIX
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#0199F7] font-bold mt-0.5">
                Technology Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
            <button 
              onClick={() => setCurrentView('home')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'home' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Home
            </button>

            <button 
              onClick={() => setCurrentView('solutions')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'solutions' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Solutions
            </button>

            <button 
              onClick={() => setCurrentView('products')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'products' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Products
            </button>

            <button 
              onClick={() => setCurrentView('industries')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'industries' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Industries
            </button>

            <button 
              onClick={() => setCurrentView('brands')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'brands' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Brands
            </button>

            <button 
              onClick={() => setCurrentView('projects')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'projects' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Projects
            </button>

            <button 
              onClick={() => setCurrentView('insights')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'insights' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Insights
            </button>

            <button 
              onClick={() => setCurrentView('about')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'about' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              About Us
            </button>

            <button 
              onClick={() => setCurrentView('contact')}
              className={`hover:text-white transition-colors py-1 ${currentView === 'contact' ? 'text-white border-b-2 border-[#0199F7]' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Actions: Search, Enquiry Basket & Request a Quote */}
          <div className="flex items-center gap-3">
            
            {/* Quick Search */}
            <div className="relative hidden sm:block">
              <input 
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setCurrentView('products')}
                className="w-40 lg:w-48 pl-9 pr-3 py-2 bg-slate-900/90 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0199F7] transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Enquiry Basket Badge */}
            <button
              onClick={onOpenEnquiry}
              className="relative p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#0199F7] text-white transition-colors flex items-center justify-center"
              title="Enquiry Basket"
            >
              <ShoppingBag className="w-5 h-5 text-slate-200" />
              {enquiryBasket.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0199F7] text-white text-[10px] font-bold flex items-center justify-center ">
                  {enquiryBasket.length}
                </span>
              )}
            </button>

            {/* Request a Quote Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg /30 transition-all"
            >
              REQUEST A QUOTE
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#0199F7]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-6 space-y-3 ">
            <button 
              onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-white/10"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentView('solutions'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Solutions
            </button>
            <button 
              onClick={() => { setCurrentView('products'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Products Catalogue
            </button>
            <button 
              onClick={() => { setCurrentView('industries'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Industries
            </button>
            <button 
              onClick={() => { setCurrentView('brands'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Brands & Partners
            </button>
            <button 
              onClick={() => { setCurrentView('projects'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Projects
            </button>
            <button 
              onClick={() => { setCurrentView('insights'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              Insights
            </button>
            <button 
              onClick={() => { setCurrentView('about'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2 border-b border-slate-800"
            >
              About Us
            </button>
            <button 
              onClick={() => { setCurrentView('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left text-sm font-bold text-white py-2"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                className="w-full py-3 text-xs font-bold text-white bg-[#0199F7] rounded-lg shadow"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

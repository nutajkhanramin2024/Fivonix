import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Check, X } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ProductsViewProps {
  enquiryBasket: Product[];
  setEnquiryBasket: React.Dispatch<React.SetStateAction<Product[]>>;
  onOpenEnquiry: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  enquiryBasket,
  setEnquiryBasket,
  onOpenEnquiry,
  searchTerm,
  setSearchTerm
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prod.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesManufacturer = selectedManufacturer === 'all' || prod.manufacturer === selectedManufacturer;
    return matchesSearch && matchesCategory && matchesManufacturer;
  });

  const addToBasket = (prod: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!enquiryBasket.some(item => item.id === prod.id)) {
      setEnquiryBasket([...enquiryBasket, prod]);
    }
    onOpenEnquiry();
  };

  return (
    <div className="py-16 bg-black min-h-screen space-y-12 text-slate-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">Catalogue & Equipment</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Explore Our Product Catalogue.
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Discover scientific instruments, medical equipment, laboratory systems, renewable energy technologies and specialized engineering products from global manufacturers.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#05070f] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search equipment, instruments, manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0199F7]"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-3 bg-black border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#0199F7]"
              >
                <option value="all">All Categories</option>
                <option value="solar">Solar & Renewable Energy</option>
                <option value="laboratory">Scientific & Laboratory</option>
                <option value="nuclear">Nuclear Medicine</option>
                <option value="medical">Medical Equipment</option>
                <option value="nanotechnology">Nanotechnology</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedManufacturer}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
                className="w-full py-3 px-3 bg-black border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#0199F7]"
              >
                <option value="all">All Manufacturers</option>
                <option value="Fivonix Energy Systems">Fivonix Energy Systems</option>
                <option value="SpectraTech Labs">SpectraTech Labs</option>
                <option value="MedImaging Global">MedImaging Global</option>
                <option value="NuclearTech Medical">NuclearTech Medical</option>
                <option value="NanoScope Instruments">NanoScope Instruments</option>
              </select>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => {
            const inBasket = enquiryBasket.some(item => item.id === prod.id);
            return (
              <div
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                className="bg-[#05070f] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-[#0199F7] hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative h-52 bg-black overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded bg-black/90 text-white text-[10px] font-bold uppercase tracking-wider border border-white/15">
                      {prod.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#0199F7]">{prod.manufacturer}</span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#0199F7] transition-colors">{prod.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{prod.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Price: Request a Quote</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => addToBasket(prod, e)}
                        className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                          inBasket
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-[#0199F7] hover:bg-blue-600 text-white shadow-md shadow-[#0199F7]/30'
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{inBasket ? 'In Basket' : 'Enquire'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#05070f] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left relative text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="h-64 sm:h-80 rounded-xl overflow-hidden bg-black border border-white/10">
                <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-[#0199F7] uppercase tracking-wider">{activeProduct.manufacturer}</span>
                  <h2 className="text-2xl font-black text-white mt-1">{activeProduct.name}</h2>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeProduct.overview}</p>
                <div className="p-3 bg-black border border-white/10 rounded-lg">
                  <span className="text-xs font-bold text-white">Price: Request a Quote</span>
                </div>
                <button
                  onClick={() => {
                    addToBasket(activeProduct);
                    setActiveProduct(null);
                  }}
                  className="w-full py-3.5 text-xs font-bold text-white bg-[#0199F7] hover:bg-blue-600 rounded-lg shadow-lg shadow-[#0199F7]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Enquiry Basket</span>
                </button>
              </div>
            </div>

            {/* Specifications & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Features</h4>
                <ul className="space-y-2">
                  {activeProduct.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#0199F7] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Technical Specifications</h4>
                <div className="border border-white/10 rounded-lg overflow-hidden text-xs">
                  {Object.entries(activeProduct.specifications).map(([key, val], idx) => (
                    <div key={idx} className={`flex justify-between p-2.5 ${idx % 2 === 0 ? 'bg-black' : 'bg-[#0a0f1d]'}`}>
                      <span className="font-semibold text-slate-300">{key}</span>
                      <span className="text-slate-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

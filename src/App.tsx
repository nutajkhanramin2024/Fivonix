import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { SolutionsView } from './components/SolutionsView';
import { ProductsView } from './components/ProductsView';
import { IndustriesView } from './components/IndustriesView';
import { BrandsView } from './components/BrandsView';
import { ProjectsView } from './components/ProjectsView';
import { InsightsView } from './components/InsightsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { EnquiryModal } from './components/EnquiryModal';
import { QuoteModal } from './components/QuoteModal';
import { Product } from './types';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [enquiryBasket, setEnquiryBasket] = useState<Product[]>([]);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-[#0199F7] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar 
          currentView={currentView}
          setCurrentView={setCurrentView}
          enquiryBasket={enquiryBasket}
          onOpenEnquiry={() => setEnquiryOpen(true)}
          onOpenQuote={() => setQuoteOpen(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main>
          {currentView === 'home' && (
            <HomeView 
              setCurrentView={setCurrentView} 
              onOpenQuote={() => setQuoteOpen(true)} 
            />
          )}
          {currentView === 'solutions' && (
            <SolutionsView 
              onOpenQuote={() => setQuoteOpen(true)} 
              setCurrentView={setCurrentView} 
            />
          )}
          {currentView === 'products' && (
            <ProductsView 
              enquiryBasket={enquiryBasket}
              setEnquiryBasket={setEnquiryBasket}
              onOpenEnquiry={() => setEnquiryOpen(true)}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          )}
          {currentView === 'industries' && (
            <IndustriesView 
              onOpenQuote={() => setQuoteOpen(true)}
              setCurrentView={setCurrentView}
            />
          )}
          {currentView === 'brands' && (
            <BrandsView />
          )}
          {currentView === 'projects' && (
            <ProjectsView 
              onOpenQuote={() => setQuoteOpen(true)}
            />
          )}
          {currentView === 'insights' && (
            <InsightsView 
              onOpenQuote={() => setQuoteOpen(true)}
            />
          )}
          {currentView === 'about' && (
            <AboutView 
              onOpenQuote={() => setQuoteOpen(true)}
            />
          )}
          {currentView === 'contact' && (
            <ContactView />
          )}
        </main>
      </div>

      <Footer setCurrentView={setCurrentView} />

      <EnquiryModal 
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        enquiryBasket={enquiryBasket}
        setEnquiryBasket={setEnquiryBasket}
      />

      <QuoteModal 
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
    </ErrorBoundary>
  );
}


import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Printer } from 'lucide-react';
import StorySection from '@/components/StorySection';
import MenuSection from '@/components/MenuSection';
import DrinksSection from '@/components/DrinksSection';
import NavigationDots from '@/components/NavigationDots';
import { Button } from '@/components/ui/button';

const PAGES = [
  { id: 'story', component: StorySection },
  { id: 'menu', component: MenuSection },
  { id: 'drinks', component: DrinksSection },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES.length - 1));
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const CurrentPageComponent = PAGES[currentPage].component;
  
  return (
    <div className="min-h-screen bg-muted py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-center print-button">
          <h2 className="font-serif text-2xl text-rivi-burgundy">RIVI Menükarte</h2>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-rivi-gold text-rivi-burgundy hover:bg-rivi-gold/10"
            onClick={handlePrint}
          >
            <Printer size={18} />
            <span>Als PDF drucken</span>
          </Button>
        </div>
        
        <div className="print:hidden">
          <CurrentPageComponent />
        </div>
        
        <div className="hidden print:block">
          <StorySection />
          <MenuSection />
          <DrinksSection />
        </div>
        
        <div className="print:hidden navigation-controls">
          <NavigationDots 
            activePage={currentPage} 
            totalPages={PAGES.length} 
            onChangePage={setCurrentPage} 
          />
          
          <div className="mt-4 flex justify-between">
            <Button
              variant="ghost"
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-1 text-rivi-burgundy"
            >
              <ArrowLeft size={16} />
              <span>Zurück</span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={goToNextPage}
              disabled={currentPage === PAGES.length - 1}
              className="flex items-center gap-1 text-rivi-burgundy"
            >
              <span>Weiter</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Music, MessageCircle } from 'lucide-react';
import StorySection from '@/components/StorySection';
import NavigationDots from '@/components/NavigationDots';
import { Button } from '@/components/ui/button';
import UpcomingEvents from '@/components/UpcomingEvents';

const PAGES = [
  { id: 'story', component: StorySection, title: 'Our Story' },
  { id: 'events', component: UpcomingEvents, title: 'Upcoming Events' },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES.length - 1));
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  
  const CurrentPageComponent = PAGES[currentPage].component;
  
  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-8 px-4 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-center print-button">
          <h2 className="font-serif text-3xl text-rivi-gold">das-RIVI</h2>
        </div>
        
        <div className="print:hidden">
          <CurrentPageComponent />
        </div>
        
        <div className="hidden print:block">
          <StorySection />
          <UpcomingEvents />
        </div>
        
        <div className="print:hidden navigation-controls mt-10">
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
              className="flex items-center gap-1 text-rivi-gold hover:text-white hover:bg-rivi-burgundy/20"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={goToNextPage}
              disabled={currentPage === PAGES.length - 1}
              className="flex items-center gap-1 text-rivi-gold hover:text-white hover:bg-rivi-burgundy/20"
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

import React from 'react';
import { useTranslation } from 'react-i18next';
// Remove unused imports if necessary after removing buttons
// import { Calendar, Music, MessageCircle } from 'lucide-react'; 
import StorySection from '@/components/StorySection';
import UpcomingEvents from '@/components/UpcomingEvents';
// Remove i18n import if no longer needed
// import i18n from '@/i18n'; 
// Remove Button import if no longer needed
// import { Button } from '@/components/ui/button'; 

const Index = () => {
  const { t } = useTranslation();

  // Remove the changeLanguage function
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-8 px-4 relative">
      {/* Remove the language button container */}
      {/* <div className="fixed top-4 right-4 flex gap-2 z-50"> ... </div> */}

      <div className="max-w-4xl mx-auto bg-black bg-opacity-80 shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 p-6 sm:p-10 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-rivi-gold mb-2">{t('homepageTitle')}</h2>
          <p className="text-lg text-white/80 italic">{t('homepageSubtitle')}</p>
        </div>
        
        <StorySection />
        
        <UpcomingEvents />
        
        <p className="text-center italic mt-12 text-rivi-gold">
          {t('homepageWelcome')}
        </p>
      </div>
    </div>
  );
};

export default Index;

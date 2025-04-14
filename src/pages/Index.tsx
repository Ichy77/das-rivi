
import React from 'react';
import { useTranslation } from 'react-i18next';
import StorySection from '@/components/StorySection';
import UpcomingEvents from '@/components/UpcomingEvents';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-6 px-2 sm:px-4 overflow-x-hidden w-full box-border">
      <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="page-container bg-black bg-opacity-80 shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 p-3 sm:p-6 md:p-10 rounded-lg w-full box-border">
          <div className="text-center mb-5 md:mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-rivi-gold mb-2">{t('homepageTitle')}</h2>
            <p className="text-xs sm:text-sm md:text-lg text-white/80 italic">{t('homepageSubtitle')}</p>
            <div className="mt-2 md:mt-5 flex justify-center">
              <div className="h-0.5 w-12 sm:w-24 bg-rivi-gold"></div>
            </div>
          </div>
          
          <StorySection />
          
          <UpcomingEvents />
          
          <p className="text-center italic mt-6 md:mt-12 text-rivi-gold text-xs sm:text-sm md:text-base">
            {t('homepageWelcome')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

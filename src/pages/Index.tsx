import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Music, MessageCircle } from 'lucide-react';
import StorySection from '@/components/StorySection';
import UpcomingEvents from '@/components/UpcomingEvents';
import i18n from '@/i18n';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-8 px-4 relative">
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <Button 
          variant={i18n.language === 'en' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => changeLanguage('en')}
          className={`transition-all
            ${i18n.language === 'en' 
              ? 'bg-rivi-gold text-black hover:bg-rivi-gold/90 shadow-md' 
              : 'text-rivi-gold/70 border-rivi-gold/50 hover:bg-rivi-gold/10 hover:text-white'}
          `}
        >
          EN
        </Button>
        <Button 
          variant={i18n.language === 'de' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => changeLanguage('de')}
          className={`transition-all
            ${i18n.language === 'de' 
              ? 'bg-rivi-gold text-black hover:bg-rivi-gold/90 shadow-md' 
              : 'text-rivi-gold/70 border-rivi-gold/50 hover:bg-rivi-gold/10 hover:text-white'}
          `}
        >
          DE
        </Button>
      </div>

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

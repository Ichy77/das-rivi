import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Music, Utensils, GlassWater, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/contexts/AudioContext';
import i18n from '@/i18n';

const EventDetail = () => {
  const { t } = useTranslation();
  const { isPlaying, togglePlayPause } = useAudio();

  const handleIconClick = (event: React.MouseEvent) => {
    togglePlayPause();
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-8 px-4">
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

      <div className="max-w-4xl mx-auto">
        <Button 
          asChild 
          variant="ghost" 
          className="mb-8 text-rivi-gold hover:text-white hover:bg-rivi-burgundy/20 flex items-center gap-2"
        >
          <Link to="/">
            <ArrowLeft size={16} />
            {t('backButton')}
          </Link>
        </Button>
        
        <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in p-6 sm:p-10 rounded-lg">
          <div className="text-center mb-10 relative">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-rivi-gold mb-3">{t('pageTitle')}</h1>
            <button 
                onClick={handleIconClick}
                className="absolute top-0 right-0 mt-1 mr-1 bg-rivi-burgundy p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-rivi-gold focus:ring-offset-2 focus:ring-offset-black/80 hover:bg-rivi-burgundy/80 transition-colors" 
                aria-label={isPlaying ? t('pauseMusicLabel') : t('playMusicLabel')}
              >
                {isPlaying ? <Pause size={20} className="text-rivi-gold" /> : <Music size={20} className="text-rivi-gold" />}
              </button>
            <p className="text-base md:text-lg text-white italic">{t('subtitle')}</p>
            <div className="mt-5 flex justify-center">
              <div className="h-0.5 w-24 bg-rivi-gold"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3">
              <Calendar size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">{t('dateLabel')}</h3>
                <p className="text-white/80">{t('dateValue')}</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3">
              <Clock size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">{t('timeLabel')}</h3>
                <p className="text-white/80">{t('timeValue')}</p>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Paulusplatz+7,+40237+Düsseldorf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black bg-opacity-70 p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-3 hover:bg-rivi-burgundy/20 hover:border-rivi-gold/40 transition-all"
            >
              <MapPin size={24} className="text-rivi-gold" />
              <div>
                <h3 className="text-rivi-gold font-medium">{t('locationLabel')}</h3>
                <p className="text-white/80">{t('locationValue')}</p>
              </div>
            </a>
          </div>
          
          <div className="prose max-w-none text-white">
            <h2 className="text-rivi-gold font-serif text-2xl mb-4">{t('joinUsTitle')}</h2>
            
            <p className="mb-4">
              {t('joinUsParagraph')}
            </p>
            
            <div className="flex items-start gap-3 mb-4">
              <Music size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">{t('soundsTitle')}</h3>
                <p className="text-white/80">
                  {t('soundsParagraph')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-4">
              <Utensils size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">{t('foodTitle')}</h3>
                <p className="text-white/80">
                 {t('foodParagraph')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-6">
              <GlassWater size={24} className="text-rivi-gold mt-1" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xl">{t('drinksTitle')}</h3>
                <p className="text-white/80">
                  {t('drinksParagraph')}
                </p>
              </div>
            </div>
            
            <div className="elegant-divider">
              <span className="px-4 font-serif text-rivi-gold">✦</span>
            </div>
            
            <p className="text-center italic mt-6 text-rivi-gold">
              {t('noGifts')}
            </p>
            
            <p className="text-center mt-6">
              {t('lookingForward')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

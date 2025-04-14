
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Music, Utensils, GlassWater, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/contexts/AudioContext';

const EventDetail = () => {
  const { t } = useTranslation();
  const { isPlaying, togglePlayPause } = useAudio();

  const handleIconClick = (event: React.MouseEvent) => {
    togglePlayPause();
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-90 text-white py-6 px-2 sm:px-4 overflow-x-hidden w-full box-border">
      <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <Button 
          asChild 
          variant="ghost" 
          className="mb-5 sm:mb-8 text-rivi-gold hover:text-white hover:bg-rivi-burgundy/20 flex items-center gap-2"
        >
          <Link to="/">
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{t('backButton')}</span>
          </Link>
        </Button>
        
        <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in p-3 sm:p-6 md:p-10 rounded-lg w-full box-border">
          <div className="text-center mb-5 md:mb-10 relative">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-medium text-rivi-gold mb-2 sm:mb-3">{t('pageTitle')}</h1>
            <button 
                onClick={handleIconClick}
                className="absolute top-0 right-0 mt-1 mr-1 bg-rivi-burgundy p-1.5 sm:p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-rivi-gold focus:ring-offset-2 focus:ring-offset-black/80 hover:bg-rivi-burgundy/80 transition-colors" 
                aria-label={isPlaying ? t('pauseMusicLabel') : t('playMusicLabel')}
              >
                {isPlaying ? <Pause size={16} className="text-rivi-gold" /> : <Music size={16} className="text-rivi-gold" />}
              </button>
            <p className="text-xs sm:text-sm md:text-lg text-white italic">{t('subtitle')}</p>
            <div className="mt-2 md:mt-5 flex justify-center">
              <div className="h-0.5 w-12 sm:w-24 bg-rivi-gold"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3 md:gap-6 mb-5 md:mb-8">
            <div className="bg-black bg-opacity-70 p-2.5 md:p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-2 md:gap-3">
              <Calendar size={16} className="text-rivi-gold flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{t('dateLabel')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{t('dateValue')}</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-70 p-2.5 md:p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-2 md:gap-3">
              <Clock size={16} className="text-rivi-gold flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{t('timeLabel')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{t('timeValue')}</p>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Paulusplatz+7,+40237+Düsseldorf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black bg-opacity-70 p-2.5 md:p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-2 md:gap-3 hover:bg-rivi-burgundy/20 hover:border-rivi-gold/40 transition-all"
            >
              <MapPin size={16} className="text-rivi-gold flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{t('locationLabel')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{t('locationValue')}</p>
              </div>
            </a>
          </div>
          
          <div className="prose max-w-none text-white">
            <h2 className="text-rivi-gold font-serif text-base sm:text-xl md:text-2xl mb-2 md:mb-4">{t('joinUsTitle')}</h2>
            
            <p className="mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
              {t('joinUsParagraph')}
            </p>
            
            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
              <Music size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{t('soundsTitle')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  {t('soundsParagraph')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
              <Utensils size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{t('foodTitle')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                 {t('foodParagraph')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 md:gap-3 mb-5 md:mb-6">
              <GlassWater size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{t('drinksTitle')}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  {t('drinksParagraph')}
                </p>
              </div>
            </div>
            
            <div className="elegant-divider">
              <span className="px-2 sm:px-4 font-serif text-rivi-gold">✦</span>
            </div>
            
            <p className="text-center italic mt-4 sm:mt-6 text-rivi-gold text-xs sm:text-sm md:text-base">
              {t('noGifts')}
            </p>
            
            <p className="text-center mt-3 sm:mt-6 text-xs sm:text-sm md:text-base">
              {t('lookingForward')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

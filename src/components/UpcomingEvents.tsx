import React from 'react';
import { Calendar, Clock, MapPin, Music, Play, Pause } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useAudio } from '@/contexts/AudioContext';
import { useTranslation } from 'react-i18next';

const UpcomingEvents = () => {
  const { t } = useTranslation();
  const { isPlaying, togglePlayPause } = useAudio();

  const handleIconClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    togglePlayPause();
  };

  return (
    <div className="mt-10 mx-auto max-w-xl">
      <Link to="/events/richy-turns-29" className="block hover:no-underline">
        <Card className="bg-black bg-opacity-70 border-rivi-gold/30 text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-rivi-gold text-2xl">{t('pageTitle')}</CardTitle>
                <CardDescription className="text-white/70 mt-1">{t('subtitle')}</CardDescription>
              </div>
              <button 
                onClick={handleIconClick}
                className="bg-rivi-burgundy p-2 rounded-full z-10 relative focus:outline-none focus:ring-2 focus:ring-rivi-gold focus:ring-offset-2 focus:ring-offset-black/80 hover:bg-rivi-burgundy/80 transition-colors" 
                aria-label={isPlaying ? t('pauseMusicLabel') : t('playMusicLabel')}
              >
                {isPlaying ? <Pause size={20} className="text-rivi-gold" /> : <Music size={20} className="text-rivi-gold" />}
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={16} className="text-rivi-gold" />
                <span>{t('upcomingEventsDate')}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={16} className="text-rivi-gold" />
                <span>{t('timeValue')}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-rivi-gold" />
                <span>{t('locationValue')}</span>
              </div>
            </div>
            
            <p className="text-white/80 mt-4 text-sm line-clamp-3">
              {t('upcomingEventsDescription')}
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default UpcomingEvents;

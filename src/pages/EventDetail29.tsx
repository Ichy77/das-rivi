import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Music, Utensils, GlassWater, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/contexts/AudioContext';

const legacyCopy = {
  de: {
    pageTitle: 'Richy wird 29',
    backButton: 'Zurück zur Startseite',
    subtitle: 'Nur für geladene Gäste',
    dateLabel: 'Datum',
    dateValue: '10. Mai 2025',
    timeLabel: 'Uhrzeit',
    timeValue: 'Beginn um 17 Uhr',
    locationLabel: 'Ort',
    locationValue: 'the RIVI, Düsseldorf',
    joinUsTitle: 'Feier mit uns',
    joinUsParagraph:
      'Es ist wieder soweit - Richys Geburtstag steht an und wir verwandeln das RIVI für eine Feier, die sich mit dem Tag wandelt. Erlebe die RIVI-Energie - wo gute Gesellschaft und großartige Musik unter der Sonne zusammenkommen.',
    soundsTitle: 'Die Musik',
    soundsParagraph:
      'Ausgewählte House-Tracks, die sich von entspannten Nachmittags-Grooves zu energiegeladenen Abend-Beats steigern. Der perfekte Soundtrack für Gespräche und Feierlichkeiten.',
    foodTitle: 'Das Essen',
    foodParagraph:
      'Gourmet-Grillköstlichkeiten, direkt auf unserer Terrasse zubereitet. Klassische BBQ-Favoriten, passend zu unserer lockeren Atmosphäre.',
    drinksTitle: 'Die Getränke',
    drinksParagraph:
      'Erfrischende Weine, kühles Bier und eine Auswahl an alkoholfreien Optionen sorgen dafür, dass die gute Stimmung nicht abreißt.',
    noGifts: 'Keine Geschenke nötig - bring einfach deine gute Energie und Feierlaune mit!',
    lookingForward: 'Wir freuen uns darauf, eine weitere Reise um die Sonne mit dir zu feiern.',
    playMusicLabel: 'Musik abspielen',
    pauseMusicLabel: 'Musik pausieren',
  },
  en: {
    pageTitle: 'Richy turns 29',
    backButton: 'Back to Home',
    subtitle: 'Guest List Only',
    dateLabel: 'Date',
    dateValue: 'May 10th 2025',
    timeLabel: 'Time',
    timeValue: 'Starting at 5 PM',
    locationLabel: 'Location',
    locationValue: 'the RIVI, Düsseldorf',
    joinUsTitle: 'Join Us for the Celebration',
    joinUsParagraph:
      "It's that time of year again - Richy's birthday is here and we're transforming the RIVI for a celebration that evolves with the day. Experience the RIVI energy - where good company and great music blend under the sun.",
    soundsTitle: 'The Sounds',
    soundsParagraph:
      'Curated house tracks that build from relaxed afternoon grooves to more energetic evening beats. The perfect soundtrack to conversations and celebrations.',
    foodTitle: 'The Food',
    foodParagraph:
      'Gourmet grilled delights prepared right on our terrace. The classic BBQ favorites that match our easy-going atmosphere.',
    drinksTitle: 'The Drinks',
    drinksParagraph:
      'Refreshing wines, chilled beers, and a selection of non-alcoholic options to keep the good times flowing.',
    noGifts: 'No gifts necessary - just bring your good energy and ready-to-celebrate spirit!',
    lookingForward: 'Looking forward to celebrating another trip around the sun with you.',
    playMusicLabel: 'Play music',
    pauseMusicLabel: 'Pause music',
  },
} as const;

const EventDetail29 = () => {
  const { i18n } = useTranslation();
  const { isPlaying, togglePlayPause } = useAudio();
  const copy = i18n.language.startsWith('de') ? legacyCopy.de : legacyCopy.en;

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
            <span className="text-xs sm:text-sm">{copy.backButton}</span>
          </Link>
        </Button>

        <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in p-3 sm:p-6 md:p-10 rounded-lg w-full box-border">
          <div className="text-center mb-5 md:mb-10 relative">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-serif font-medium text-rivi-gold mb-2 sm:mb-3">{copy.pageTitle}</h1>
            <button
              onClick={togglePlayPause}
              className="absolute top-0 right-0 mt-1 mr-1 bg-rivi-burgundy p-1.5 sm:p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-rivi-gold focus:ring-offset-2 focus:ring-offset-black/80 hover:bg-rivi-burgundy/80 transition-colors"
              aria-label={isPlaying ? copy.pauseMusicLabel : copy.playMusicLabel}
            >
              {isPlaying ? <Pause size={16} className="text-rivi-gold" /> : <Music size={16} className="text-rivi-gold" />}
            </button>
            <p className="text-xs sm:text-sm md:text-lg text-white italic">{copy.subtitle}</p>
            <div className="mt-2 md:mt-5 flex justify-center">
              <div className="h-0.5 w-12 sm:w-24 bg-rivi-gold"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-6 mb-5 md:mb-8">
            <div className="bg-black bg-opacity-70 p-2.5 md:p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-2 md:gap-3">
              <Calendar size={16} className="text-rivi-gold flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{copy.dateLabel}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.dateValue}</p>
              </div>
            </div>

            <div className="bg-black bg-opacity-70 p-2.5 md:p-4 rounded-lg border border-rivi-gold/20 flex items-center gap-2 md:gap-3">
              <Clock size={16} className="text-rivi-gold flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{copy.timeLabel}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.timeValue}</p>
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
                <h3 className="text-rivi-gold font-medium text-xs sm:text-sm md:text-base">{copy.locationLabel}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.locationValue}</p>
              </div>
            </a>
          </div>

          <div className="prose max-w-none text-white">
            <h2 className="text-rivi-gold font-serif text-base sm:text-xl md:text-2xl mb-2 md:mb-4">{copy.joinUsTitle}</h2>

            <p className="mb-3 md:mb-4 text-xs sm:text-sm md:text-base">{copy.joinUsParagraph}</p>

            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
              <Music size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{copy.soundsTitle}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.soundsParagraph}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
              <Utensils size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{copy.foodTitle}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.foodParagraph}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-3 mb-5 md:mb-6">
              <GlassWater size={16} className="text-rivi-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-rivi-gold font-medium text-sm sm:text-lg md:text-xl">{copy.drinksTitle}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{copy.drinksParagraph}</p>
              </div>
            </div>

            <div className="elegant-divider">
              <span className="px-2 sm:px-4 font-serif text-rivi-gold">✦</span>
            </div>

            <p className="text-center italic mt-4 sm:mt-6 text-rivi-gold text-xs sm:text-sm md:text-base">{copy.noGifts}</p>

            <p className="text-center mt-3 sm:mt-6 text-xs sm:text-sm md:text-base">{copy.lookingForward}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail29;

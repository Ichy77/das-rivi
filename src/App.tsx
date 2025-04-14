import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import { AudioProvider } from "./contexts/AudioContext";
import RiviLogo from "@/components/RiviLogo";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import FirstVisitMusicModal from './components/FirstVisitMusicModal';

const queryClient = new QueryClient();

// Define the audio source URL here
const audioSrc = 'https://storage.googleapis.com/airtablebackup/music_das_rivi.mp3';

const App = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFirstVisitModal, setShowFirstVisitModal] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (!visited) {
      setShowFirstVisitModal(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const handleCloseFirstVisitModal = () => {
    localStorage.setItem('hasVisited', 'true');
    setShowFirstVisitModal(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AudioProvider initialAudioSrc={audioSrc}>
          <Toaster />
          <Sonner />
          <RiviLogo />
          <FirstVisitMusicModal isOpen={showFirstVisitModal} onClose={handleCloseFirstVisitModal} />
          <div className={`absolute top-4 right-4 flex gap-1.5 sm:gap-2 z-50 md:fixed transition-opacity duration-300 md:opacity-100 ${isScrolled ? 'opacity-0 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`}>
            <Button 
              variant={i18n.language === 'en' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => changeLanguage('en')}
              className={`text-xs sm:text-sm transition-all px-2 py-1 sm:px-3 sm:py-1.5 h-auto
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
              className={`text-xs sm:text-sm transition-all px-2 py-1 sm:px-3 sm:py-1.5 h-auto
                ${i18n.language === 'de' 
                  ? 'bg-rivi-gold text-black hover:bg-rivi-gold/90 shadow-md' 
                  : 'text-rivi-gold/70 border-rivi-gold/50 hover:bg-rivi-gold/10 hover:text-white'}
              `}
            >
              DE
            </Button>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events/richy-turns-29" element={<EventDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AudioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

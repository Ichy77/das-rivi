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

const queryClient = new QueryClient();

// Define the audio source URL here
const audioSrc = 'https://storage.googleapis.com/airtablebackup/music_das_rivi.mp3';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AudioProvider initialAudioSrc={audioSrc}>
        <Toaster />
        <Sonner />
        <RiviLogo />
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

export default App;

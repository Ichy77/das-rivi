import React, { createContext, useState, useRef, useContext, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlayPause: () => void;
  // Optional: Add functions to load specific tracks if needed later
  // playTrack: (src: string) => void; 
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
  initialAudioSrc: string; // Pass the initial source URL
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children, initialAudioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState(initialAudioSrc); // Store src in state

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ensure the source is set before playing, especially if it changes
        if (audioRef.current.currentSrc !== audioSrc) {
           audioRef.current.src = audioSrc;
           // Optional: Load if you change src often, might not be needed if src is constant
           // audioRef.current.load(); 
        }
        audioRef.current.play().catch(error => {
          // Handle potential play errors (e.g., user interaction required)
          console.error("Audio play failed:", error);
          setIsPlaying(false); // Reset state if play fails
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to handle audio ending
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  // Optional: Add function to change the track
  // const playTrack = (src: string) => {
  //   setAudioSrc(src);
  //   setIsPlaying(false); // Reset playing state before changing src
  //   // Use a timeout or useEffect to ensure src is updated before playing
  //   setTimeout(() => {
  //       if(audioRef.current) {
  //         audioRef.current.src = src; // Ensure src is updated in the element
  //         audioRef.current.load(); // Important to load the new source
  //         audioRef.current.play().catch(error => console.error("Audio play failed:", error));
  //         setIsPlaying(true);
  //       }
  //   }, 0);
  // };

  const value = {
    isPlaying,
    togglePlayPause,
    // playTrack, // Uncomment if you add the function
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
      {/* Render the single audio element here */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onEnded={handleAudioEnded}
        onPlay={() => setIsPlaying(true)} // Sync state if played externally
        onPause={() => setIsPlaying(false)} // Sync state if paused externally
        preload="metadata" 
        style={{ display: 'none' }} // Keep it hidden
      />
    </AudioContext.Provider>
  );
}; 
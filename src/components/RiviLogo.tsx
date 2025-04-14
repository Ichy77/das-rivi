
import React from 'react';

const RiviLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="w-24 h-24 border-2 border-rivi-gold rounded-full flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.4)]" style={{ animation: 'glow 3s infinite' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <span className="font-serif text-3xl font-bold text-rivi-burgundy relative z-10">R</span>
        <span className="font-serif text-3xl font-bold text-rivi-gold relative z-10 mx-0.5">I</span>
        <span className="font-serif text-3xl font-bold text-rivi-burgundy relative z-10">V</span>
        <span className="font-serif text-3xl font-bold text-rivi-gold relative z-10">I</span>
        
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="audio-wave">
            <span className="h-2"></span>
            <span className="h-3"></span>
            <span className="h-4"></span>
            <span className="h-3"></span>
            <span className="h-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiviLogo;

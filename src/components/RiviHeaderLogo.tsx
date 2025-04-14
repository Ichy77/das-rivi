
import React from 'react';

export const RiviHeaderLogo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-12 h-12 border border-rivi-gold rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_10px_rgba(212,175,55,0.3)]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <span className="font-serif text-lg font-bold text-rivi-burgundy relative z-10">R</span>
        <span className="font-serif text-lg font-bold text-rivi-gold relative z-10 mx-0.5">I</span>
        <span className="font-serif text-lg font-bold text-rivi-burgundy relative z-10">V</span>
        <span className="font-serif text-lg font-bold text-rivi-gold relative z-10">I</span>
      </div>
      <div className="text-rivi-gold font-serif text-2xl">RIVI</div>
    </div>
  );
};


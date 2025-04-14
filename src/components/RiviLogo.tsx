import React from 'react';

const RiviLogo = () => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="w-16 h-16 border border-rivi-gold rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_10px_rgba(212,175,55,0.3)]" style={{ animation: 'glow 3s infinite' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <span className="font-serif text-xl font-bold text-rivi-burgundy relative z-10">R</span>
        <span className="font-serif text-xl font-bold text-rivi-gold relative z-10 mx-0.5">I</span>
        <span className="font-serif text-xl font-bold text-rivi-burgundy relative z-10">V</span>
        <span className="font-serif text-xl font-bold text-rivi-gold relative z-10">I</span>
      </div>
    </div>
  );
};

export default RiviLogo;


import React from 'react';
import RiviLogo from './RiviLogo';
import PageTitle from './PageTitle';

const StorySection = () => {
  return (
    <div className="page-container bg-black bg-opacity-80 text-white shadow-[0_0_15px_rgba(212,175,55,0.3)] border border-rivi-gold/20 animate-fade-in">
      <RiviLogo />
      <PageTitle mainTitle="das-RIVI" subtitle="Where Stories Blend & Vibes Resonate" />
      
      <div className="prose max-w-none text-white">
        <p className="mb-4">
          Welcome to das-RIVI – the vibrant intersection of two distinct life journeys, now transformed into Düsseldorf's most intimate scene-treff. 
          More than walls and furnishings, das-RIVI is where music pulses, conversations flow, and memories are crafted.
        </p>
        
        <p className="mb-4">
          It all starts with Richard, born in Westphalia's Lippstadt soil and nurtured in Münster's academic atmosphere. 
          A spirit defined by reliability and curiosity, with an ear for the perfect beat and an eye for the finer things.
        </p>
        
        <p className="mb-4">
          Then there's Ivonne, whose journey began in Anrath's charming streets by the Lower Rhine. Her quest for knowledge 
          carried her through Augsburg and Bonn, culminating in Vienna's imperial embrace – a city that nurtures both intellect and sensory pleasure.
        </p>
        
        <p className="mb-4">
          It was in Vienna's rhythmic heart where their paths converged. Years of shared exploration, intellectual exchange, 
          and appreciation for beauty followed – laying the foundation for what das-RIVI would ultimately become.
        </p>
        
        <p className="mb-4">
          For eight moons now, we've been writing our next chapter in Düsseldorf, comfortably close to Ivonne's Anrath roots. 
          Here, our collected impressions melt into something fresh: das-RIVI – the harmony of Westphalian clarity and Rhenish joie de vivre, 
          refined with Viennese elegance and an openness to what comes next.
        </p>
        
        <p className="mb-4">
          Each gathering at das-RIVI is a tribute to this journey – a mosaic of sounds, flavors, memories, and new connections, served with warmth.
        </p>
        
        <p className="text-center italic mt-8 text-rivi-gold">
          Welcome to our space. Welcome to the vibe.
        </p>
      </div>
    </div>
  );
};

export default StorySection;


import React from 'react';
import RiviLogo from './RiviLogo';
import PageTitle from './PageTitle';

const StorySection = () => {
  return (
    <div className="page-container animate-fade-in">
      <RiviLogo />
      <PageTitle mainTitle="RIVI" subtitle="Eine Geschichte zweier Wege, ein gemeinsamer Genuss" />
      
      <div className="prose max-w-none text-rivi-dark">
        <p className="mb-4">
          Unsere kulinarische Reise beginnt nicht erst auf dem Teller, sondern in den Biografien, die uns heute an diesem Tisch vereinen. 
          RIVI ist die Essenz einer besonderen Verbindung, ein Destillat aus Erlebnissen, Orten und gemeinsamen Momenten.
        </p>
        
        <p className="mb-4">
          Da ist Richard, dessen Wurzeln tief in der westfälischen Erde Lippstadts verankert sind, 
          dessen akademischer Weg ihn jedoch ins lebendige Münster führte. Ein Geist, geprägt von Beständigkeit und Neugier.
        </p>
        
        <p className="mb-4">
          Und da ist Ivonne, gestartet im charmanten Anrath am Niederrhein. Ihre Wissbegierde trug sie durch Studienjahre 
          in Augsburg und Bonn, gipfelnd in einer prägenden Promotionszeit im kaiserlichen Wien – einer Stadt, 
          die nicht nur den Geist, sondern auch die Sinne nährt.
        </p>
        
        <p className="mb-4">
          Genau dort, in der Walzermetropole Wien, kreuzten sich ihre Pfade. Es folgten Jahre des gemeinsamen Entdeckens, 
          des intellektuellen Austauschs und der Freude am Schönen – eine Zeit, die den Grundstein für RIVI legte.
        </p>
        
        <p className="mb-4">
          Seit nunmehr acht Monden schreiben wir unser nächstes Kapitel in Düsseldorf, in wohltuender Nähe zu Ivonnes Heimat Anrath. 
          Hier verschmelzen die gesammelten Eindrücke zu etwas Neuem: RIVI – die Harmonie westfälischer Klarheit und rheinischer Lebensfreude, 
          verfeinert durch Wiener Eleganz und die Offenheit für das Kommende.
        </p>
        
        <p className="mb-4">
          Dieser Abend ist eine kleine Hommage an diese Reise. Ein Mosaik aus Aromen und Erinnerungen, serviert mit Herzlichkeit.
        </p>
        
        <p className="text-center italic mt-8">
          Willkommen bei RIVI.
        </p>
      </div>
    </div>
  );
};

export default StorySection;

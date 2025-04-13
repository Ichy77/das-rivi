
import React from 'react';
import RiviLogo from './RiviLogo';
import PageTitle from './PageTitle';

const MenuSection = () => {
  return (
    <div className="page-container animate-fade-in">
      <RiviLogo />
      <PageTitle mainTitle="Menü des Abends" subtitle="Eine Komposition in drei Akten" />
      
      <div className="space-y-8">
        <div>
          <h3 className="menu-title text-xl mb-3">I. Mediterrane Ouvertüre</h3>
          <p className="text-rivi-dark">
            Eine Hommage an die Sonne des Südens: Geröstetes Landbrot, sorgfältig zubereitet, bildet die Bühne für eine Essenz sonnengereifter Tomaten,
            fein abgeschmeckt und parfümiert mit einem Hauch von Knoblauch und frischem Basilikum. 
            Veredelt durch einen Schleier reinsten, kaltgepressten Olivenöls – ein Auftakt, der die Sinne weckt.
          </p>
        </div>
        
        <div className="elegant-divider">
          <span className="px-4 font-serif text-rivi-gold">✦</span>
        </div>
        
        <div>
          <h3 className="menu-title text-xl mb-3">II. Intermezzo della Casa</h3>
          <p className="text-rivi-dark mb-4">
            Ein kuratiertes Meisterwerk italienischer Backkunst, bezogen von passionierten Pizzaioli, die ihr Handwerk verstehen. 
            Für Sie haben wir eine Auswahl getroffen, die höchsten Ansprüchen genügt und direkt an unsere Tafel geliefert wird. 
            Erleben Sie Ihre persönliche Komposition authentischer Aromen.
          </p>
          <p className="text-rivi-dark">
            Entdecken Sie die Manufaktur unseres Vertrauens:<br />
            <a 
              href="https://pizzaciaorath.de/delivery" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-rivi-burgundy hover:text-rivi-gold underline transition-colors"
            >
              https://pizzaciaorath.de/delivery
            </a>
          </p>
        </div>
        
        <div className="elegant-divider">
          <span className="px-4 font-serif text-rivi-gold">✦</span>
        </div>
        
        <div>
          <h3 className="menu-title text-xl mb-3">III. Süße Symphonie zum Ausklang</h3>
          <p className="text-rivi-dark">
            Ein Finale, das die Frische des Sommers zelebriert: Eine Trilogie erlesener, handverlesener Beeren – sonnengeküsste Erdbeeren, 
            samtige Himbeeren und tiefblaue Heidelbeeren – ruht auf einem zartschmelzenden Bett eisgekühlter Crème Glacée, 
            dezent parfümiert mit edler Bourbon-Vanille. Ein harmonisches Spiel von Textur, Temperatur und natürlicher Süße.
          </p>
        </div>
        
        <p className="text-center italic text-rivi-dark mt-10">
          Wir wünschen einen genussvollen Abend.
        </p>
      </div>
    </div>
  );
};

export default MenuSection;

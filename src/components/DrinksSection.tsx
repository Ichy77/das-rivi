
import React from 'react';
import RiviLogo from './RiviLogo';
import PageTitle from './PageTitle';

const DrinksSection = () => {
  return (
    <div className="page-container animate-fade-in">
      <RiviLogo />
      <PageTitle mainTitle="Getränkebegleitung" />
      
      <div className="space-y-8">
        <div>
          <h3 className="menu-title text-xl mb-4">Kaffeevariationen</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Espresso</span>
              <span className="text-sm italic text-rivi-dark">Der Klassiker, intensiv und belebend</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Espresso Macchiato</span>
              <span className="text-sm italic text-rivi-dark">Ein Hauch von Milchschaum auf kräftigem Espresso</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Cappuccino</span>
              <span className="text-sm italic text-rivi-dark">Harmonie aus Espresso, heißer Milch und cremigem Schaum</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Latte Macchiato</span>
              <span className="text-sm italic text-rivi-dark">Geschichtete Verführung aus Milch, Espresso und Schaum</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Kaffee Crème</span>
              <span className="text-sm italic text-rivi-dark">Aromatischer Kaffee, sanft abgerundet</span>
            </li>
          </ul>
        </div>
        
        <div className="elegant-divider">
          <span className="px-4 font-serif text-rivi-gold">✦</span>
        </div>
        
        <div>
          <h3 className="menu-title text-xl mb-4">Erfrischungen & Begleiter</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Bionade</span>
              <span className="text-sm italic text-rivi-dark">Ingwer-Orange, belebend und natürlich</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Schöfferhofer Grapefruit</span>
              <span className="text-sm italic text-rivi-dark">Prickelndes Weizenbier-Mix mit fruchtiger Note</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-2">
            <p className="font-medium">Mineralwasser – Still oder Sprudelnd</p>
            <p className="font-medium">Coca-Cola / Coca-Cola Zero</p>
            <p className="font-medium">Apfelschorle</p>
            <p className="font-medium">Orangensaft</p>
          </div>
          
          <p className="mt-4 text-rivi-dark italic">Sowie eine Auswahl weiterer gekühlter Getränke nach Gusto.</p>
        </div>
        
        <p className="text-center italic text-rivi-dark mt-10">
          Lassen Sie es sich wohl ergehen.
        </p>
      </div>
    </div>
  );
};

export default DrinksSection;

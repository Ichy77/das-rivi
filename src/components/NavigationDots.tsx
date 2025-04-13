
import React from 'react';

interface NavigationDotsProps {
  activePage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ activePage, totalPages, onChangePage }) => {
  return (
    <div className="flex justify-center mt-6 mb-2 space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChangePage(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            activePage === index ? 'bg-rivi-burgundy scale-125' : 'bg-rivi-gold opacity-50 hover:opacity-75'
          }`}
          aria-label={`Gehe zu Seite ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

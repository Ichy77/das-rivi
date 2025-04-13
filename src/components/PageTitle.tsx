
import React from 'react';

interface PageTitleProps {
  mainTitle: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ mainTitle, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-serif font-medium text-rivi-burgundy mb-2">{mainTitle}</h1>
      {subtitle && <p className="text-sm md:text-base text-rivi-dark italic">{subtitle}</p>}
      <div className="mt-4 flex justify-center">
        <div className="h-0.5 w-16 bg-rivi-gold"></div>
      </div>
    </div>
  );
};

export default PageTitle;

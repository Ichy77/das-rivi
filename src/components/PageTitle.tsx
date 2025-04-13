
import React from 'react';

interface PageTitleProps {
  mainTitle: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ mainTitle, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-serif font-medium text-rivi-burgundy mb-3">{mainTitle}</h1>
      {subtitle && <p className="text-base md:text-lg text-rivi-dark italic">{subtitle}</p>}
      <div className="mt-5 flex justify-center">
        <div className="h-0.5 w-24 bg-rivi-gold"></div>
      </div>
    </div>
  );
};

export default PageTitle;

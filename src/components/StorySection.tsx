import React from 'react';
import { useTranslation } from 'react-i18next';

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <div className="prose max-w-none text-white/90 mx-auto lg:max-w-3xl mb-10">
      <p className="mb-4">
        {t('storyIntro')}
      </p>
      
      <p className="mb-4">
        {t('storyRIVI')}
      </p>
      
      <p className="mb-4">
        {t('storyVienna')}
      </p>
      
      <p className="mb-4">
        {t('storyDusseldorf')}
      </p>
      
      <p className="mb-4">
        {t('storyConclusion')}
      </p>
    </div>
  );
};

export default StorySection;

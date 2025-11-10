
import React from 'react';

interface SectionTitleProps {
  backgroundText: string;
  foregroundText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ backgroundText, foregroundText }) => {
  return (
    <div className="relative h-24 flex items-center justify-center my-8">
      <h2 className="font-oswald text-6xl md:text-8xl font-bold text-gray-200 dark:text-zinc-800 tracking-widest uppercase text-center">
        {backgroundText}
      </h2>
      <h3 className="absolute font-oswald text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 tracking-wider uppercase text-center">
        {foregroundText}
      </h3>
    </div>
  );
};

export default SectionTitle;

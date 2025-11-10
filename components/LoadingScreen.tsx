import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 bg-white dark:bg-[#0D1A26] flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="https://github.com/boldbrick-web/assets/blob/main/logo%20red.png?raw=true"
            alt="Bold Brick Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
          />
        </div>
        
        {/* Minimal Loading Animation */}
        <div className="mb-8">
          <div className="w-12 h-12 border-2 border-zinc-200 dark:border-zinc-700 border-t-[#B9A470] rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-zinc-400 dark:text-zinc-500 text-sm font-light tracking-wide">
          Loading the Future
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
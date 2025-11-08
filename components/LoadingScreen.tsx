import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 bg-zinc-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center fade-in-up">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-[#B9A470] tracking-wider">
            BOLD BRICK
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-light tracking-widest mt-2">
            REAL ESTATE TOKENIZATION
          </p>
        </div>
        
        {/* Loading Animation */}
        <div className="relative mb-6">
          {/* Outer rotating ring */}
          <div className="w-16 h-16 border-4 border-zinc-700 border-t-[#B9A470] rounded-full animate-spin mx-auto"></div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#B9A470] rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-zinc-500 text-sm animate-pulse">
          Loading Experience...
        </p>
        
        {/* Progress dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-[#B9A470] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-[#B9A470] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-[#B9A470] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Subtle progress bar */}
        <div className="w-48 h-1 bg-zinc-800 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#B9A470] to-yellow-400 rounded-full loading-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
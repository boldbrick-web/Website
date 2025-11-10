import React from 'react';
import { GridIcon, ChevronsUpDownIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 h-full w-32 z-30 flex flex-col items-center justify-between p-2 bg-white dark:bg-zinc-900 shadow-lg hidden md:flex transition-colors duration-300">
      <div className="flex flex-col items-center">
        <button 
          className="p-2 bg-transparent border-0 cursor-pointer mb-4 hover:scale-110 hover:rotate-180 transition-all duration-300"
          onClick={() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Go to top"
        >
          <GridIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
        </button>
        
        <div className="flex items-center justify-center w-full mt-12 mb-6">
          <img 
            src="https://github.com/boldbrick-web/assets/blob/main/logo%20red.png?raw=true"
            alt="Bold Brick Logo"
            className="w-24 h-24 object-contain transform -rotate-90 cursor-pointer no-hover-effect"
            style={{ 
              minWidth: '96px', 
              minHeight: '96px',
              maxWidth: '120px',
              maxHeight: '120px'
            }}
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>

      <nav className="flex flex-col items-center space-y-10">
        <a 
          href="https://www.instagram.com/vijeesh6246?igsh=ZGk3bDZiZzJlN3ox" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-oswald text-sm tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#B9A470] transition-colors duration-300 vertical-text no-hover-effect"
        >
          INSTAGRAM
        </a>
        <a 
          href="https://facebook.com/boldbrick" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-oswald text-sm tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#B9A470] transition-colors duration-300 vertical-text no-hover-effect"
        >
          FACEBOOK
        </a>
        <a 
          href="https://wa.me/919400925507" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-oswald text-sm tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#B9A470] transition-colors duration-300 vertical-text no-hover-effect"
        >
          WHATSAPP
        </a>
      </nav>

      <button 
        className="p-2 bg-transparent border-0 cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }}
        aria-label="Scroll to bottom"
      >
        <ChevronsUpDownIcon className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
      </button>
    </header>
  );
};

export default Header;
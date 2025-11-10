import React, { useState, useEffect } from 'react';
import { GridIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

interface MobileMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconColor, setIconColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', color: 'text-white' },
        { id: 'introduction', color: 'text-zinc-800' },
        { id: 'stats', color: 'text-zinc-800' },
        { id: 'tokenization', color: 'text-zinc-800' },
        { id: 'engineering', color: 'text-zinc-800' },
        { id: 'vision-mission', color: 'text-zinc-800' },
        { id: 'security', color: 'text-zinc-800' },
        { id: 'contact', color: 'text-zinc-800' }
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setIconColor(section.color);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Menu Button - Always visible on mobile */}
      <button
        className={`fixed top-4 right-4 z-50 md:hidden bg-transparent border-0 cursor-pointer hover:scale-110 transition-all duration-200 ${iconColor}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <GridIcon className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 w-64 h-full bg-zinc-900/95 backdrop-blur-md z-50 md:hidden">
            <div className="flex flex-col h-full p-6 pt-4">
              <button 
                className="self-end mb-8 bg-transparent border-0 cursor-pointer text-white hover:text-[#B9A470] text-3xl leading-none transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
              
              <nav className="flex flex-col space-y-6 mb-8">
                <a 
                  href="#hero" 
                  className="font-oswald text-white hover:text-[#B9A470] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </a>
                <a 
                  href="#introduction" 
                  className="font-oswald text-white hover:text-[#B9A470] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT US
                </a>
                <a 
                  href="#tokenization" 
                  className="font-oswald text-white hover:text-[#B9A470] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  TOKENIZATION
                </a>
                <a 
                  href="#engineering" 
                  className="font-oswald text-white hover:text-[#B9A470] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  DEVELOPMENT
                </a>
                <a 
                  href="#contact" 
                  className="font-oswald text-white hover:text-[#B9A470] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </a>
              </nav>
              
              <div className="border-t border-zinc-700 pt-6 mb-6">
                <p className="font-oswald text-xs text-zinc-400 mb-4">FOLLOW US</p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/vijeesh6246?igsh=ZGk3bDZiZzJlN3ox" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B9A470]">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/boldbrick" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B9A470]">
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/919400925507" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B9A470]">
                    <WhatsAppIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="border-t border-zinc-700 pt-6">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-3 text-white hover:text-[#B9A470] transition-colors w-full"
                >
                  {isDarkMode ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="font-oswald text-sm">LIGHT MODE</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      <span className="font-oswald text-sm">DARK MODE</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;

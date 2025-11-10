
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Stats from './components/Stats';
import Tokenization from './components/Tokenization';
import Engineering from './components/Engineering';
import VisionMission from './components/VisionMission';
import Security from './components/Security';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // Simulate loading time for images and content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    // Also check if images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        // All images loaded, but still respect minimum loading time
        setTimeout(() => setIsLoading(false), Math.max(0, 2500 - Date.now()));
      }
    };

    images.forEach(img => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', checkImagesLoaded);
      }
    });

    return () => {
      clearTimeout(timer);
      images.forEach(img => {
        img.removeEventListener('load', checkImagesLoaded);
        img.removeEventListener('error', checkImagesLoaded);
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div className={`bg-[#F0F0F0] dark:bg-[#0D1A26] text-zinc-800 dark:text-zinc-100 transition-all duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Dark Mode Toggle Button - Desktop only, mobile in menu */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block fixed top-4 right-4 z-50 p-2 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5 text-zinc-700 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <Header />
        <MobileMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="pl-0 md:pl-32">
          <main>
            <Hero />
            <AboutUs />
            <Stats />
            <Tokenization />
            <Engineering />
            <VisionMission />
            <Security />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

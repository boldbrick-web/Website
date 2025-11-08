
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

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <div className={`bg-[#F0F0F0] text-zinc-800 transition-opacity duration-500 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        <Header />
        <MobileMenu />
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

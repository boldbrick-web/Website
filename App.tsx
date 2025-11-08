
import React from 'react';
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
  return (
    <div className="bg-[#F0F0F0] text-zinc-800">
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
  );
};

export default App;


import React from 'react';
import { MapPinIcon, PhoneIcon, GlobeIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: "url('https://github.com/boldbrick-web/assets/blob/main/Background.jpg?raw=true')" }}>
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Mobile Logo */}
      <div className="absolute top-4 left-4 md:hidden z-20">
        <img 
          src="https://github.com/boldbrick-web/assets/blob/main/logo%20white.png?raw=true"
          alt="Bold Brick Logo"
          className="h-8 object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="font-oswald font-bold text-5xl md:text-7xl tracking-wider">
          BOLD INNOVATION. SOLID <span className="text-red-600">TRUST</span>.
        </h2>
        <h3 className="font-oswald font-light text-3xl md:text-5xl tracking-wider mt-2">
          The Global Future of Real Estate.
        </h3>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          We are the integrated platform building the bridge between traditional property development and digital asset ownership, making real estate investment smarter, faster, and more inclusive.
        </p>
        <button 
          className="mt-8 px-10 py-3 bg-[#B9A470] text-zinc-800 font-oswald tracking-widest hover:bg-opacity-90 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          onClick={() => {
            document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          DISCOVER MORE
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <MapPinIcon className="w-4 h-4 text-[#B9A470]" />
            <span>Palakkad, Kerala</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <PhoneIcon className="w-4 h-4 text-[#B9A470]" />
              <a href="tel:+919846618429" className="hover:text-[#B9A470] transition-colors duration-300">
                +91 98466 18429
              </a>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <PhoneIcon className="w-4 h-4 text-[#B9A470]" />
              <a href="tel:+919400925507" className="hover:text-[#B9A470] transition-colors duration-300">
                +91 94009 25507
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <GlobeIcon className="w-4 h-4 text-[#B9A470]" />
            <a href="mailto:boldbrickwebsite@gmail.com" className="hover:text-[#B9A470] transition-colors duration-300">
              boldbrickwebsite@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

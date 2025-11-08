
import React from 'react';
import SectionTitle from './SectionTitle';

const AboutUs: React.FC = () => {
  return (
    <section id="introduction" className="py-20 px-4 container mx-auto">
      <SectionTitle backgroundText="INTRODUCTION" foregroundText="INTEGRATED ADVANTAGE" />
      
      <div className="max-w-3xl mx-auto mt-12">
        <div className="space-y-6 text-zinc-600 text-left">
          <p>
            Established in 2025, Bold Brick is a pioneering, next-generation real estate development and tokenization platform based in India. As both a developer and technology innovator, we identify, design, and deliver high-value real estate projects while leveraging blockchain-based tokenization to democratize access.
          </p>
          <p>
            We are not simply constructing buildings; we are building a future where anyone, anywhere, can own a piece of real estate and share in its growth.
          </p>
          <div className="pt-4">
            <button 
              className="inline-block font-oswald tracking-widest text-red-600 border-b-2 border-[#B9A470] pb-1 hover:text-[#B9A470] hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-transparent border-0 border-b-2"
              onClick={() => {
                alert('Learn more about our tokenization process:\n\n• Fractional ownership through blockchain\n• Secure digital asset management\n• Transparent investment tracking\n• Global accessibility');
              }}
            >
              DISCOVER TOKENIZATION &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

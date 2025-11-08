
import React, { useState } from 'react';
import { DiamondIcon } from './Icons';
import LegalModal from './LegalModal';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="https://github.com/boldbrick-web/assets/blob/main/logo%20red%20understroke.png?raw=true"
                alt="Bold Brick Logo"
                className="w-40 h-40 object-contain no-hover-effect"
              />
              <p className="text-xs text-zinc-500 mt-1">© 2025 BOLD BRICK. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 my-8 md:my-0">
              <button 
                className="text-xs text-zinc-500 hover:text-zinc-900 bg-transparent border-0 cursor-pointer transition-colors duration-300"
                onClick={() => setShowTerms(true)}
              >
                Terms of Service
              </button>
              <button 
                className="text-xs text-zinc-500 hover:text-zinc-900 bg-transparent border-0 cursor-pointer transition-colors duration-300"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </button>
            </div>
            <div className="flex items-center space-x-2 text-xs text-zinc-500">
              <DiamondIcon className="w-5 h-5" />
              <span>Innovating Real Estate Investment</span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)}
        title="TERMS OF SERVICE"
      >
        <TermsOfService />
      </LegalModal>

      <LegalModal 
        isOpen={showPrivacy} 
        onClose={() => setShowPrivacy(false)}
        title="PRIVACY POLICY"
      >
        <PrivacyPolicy />
      </LegalModal>
    </>
  );
};

export default Footer;

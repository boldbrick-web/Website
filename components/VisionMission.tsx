import React from 'react';
import SectionTitle from './SectionTitle';
import { TargetIcon, RocketIcon, HeartIcon, ShieldIcon, StarIcon, UsersIcon } from './Icons';

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 px-4 bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionTitle backgroundText="FOUNDATION" foregroundText="VISION, MISSION & VALUES" />
        
        {/* Company Story */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h3 className="font-oswald text-3xl font-bold text-zinc-800 mb-6">Built on Bold Innovation and Solid Trust</h3>
          <p className="text-zinc-600 text-lg mb-4">
            Established in 2025, Bold Brick is a forward-thinking real estate development and tokenization platform based in India. 
          </p>
          <p className="text-zinc-600 text-lg">
            Our simple belief—that the future of real estate should be transparent, accessible, and borderless—drives our 
            commitment to merging bold innovation with solid trust.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="text-center">
            <TargetIcon className="w-16 h-16 text-[#B9A470] mx-auto mb-6" />
            <h4 className="font-oswald text-2xl font-bold text-zinc-800 mb-4">Our Vision</h4>
            <h5 className="font-oswald text-xl text-zinc-700 mb-4">Redefining Real Estate Ownership</h5>
            <p className="text-zinc-600">
              Our Vision is to redefine real estate ownership by merging innovation, transparency, and accessibility—empowering 
              every individual to own a piece of the future. We envision a world where property investment is no longer limited 
              by capital or geography.
            </p>
          </div>
          <div className="text-center">
            <RocketIcon className="w-16 h-16 text-[#B9A470] mx-auto mb-6" />
            <h4 className="font-oswald text-2xl font-bold text-zinc-800 mb-4">Our Mission</h4>
            <h5 className="font-oswald text-xl text-zinc-700 mb-4">Democratizing Wealth Creation</h5>
            <p className="text-zinc-600">
              Our Mission is to build bold, future-ready developments and democratize real estate investment through blockchain-driven 
              tokenization. We focus on developing high-quality, sustainable real estate assets across India and fostering investor 
              confidence through transparency, compliance, and reliability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#F0F0F0] dark:bg-zinc-800 p-12 rounded-lg transition-colors duration-300">
          <h4 className="font-oswald text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-12">Our Corporate Ethos</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <RocketIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Innovation</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Embracing bold ideas and cutting-edge technology to transform real estate investment.</p>
            </div>
            <div className="text-center p-6">
              <ShieldIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Transparency</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Operating with complete honesty and clarity in all our business practices.</p>
            </div>
            <div className="text-center p-6">
              <UsersIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Accessibility</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Ensuring real estate wealth is within everyone's reach, not just the privileged few.</p>
            </div>
            <div className="text-center p-6">
              <HeartIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Integrity</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Grounded in ethics and trust, maintaining the highest standards of conduct.</p>
            </div>
            <div className="text-center p-6">
              <StarIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Excellence</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Committed to quality and long-term value in every project we undertake.</p>
            </div>
            <div className="text-center p-6">
              <TargetIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400 mx-auto mb-4" />
              <h5 className="font-oswald text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Empowerment</h5>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">Enabling meaningful participation in real estate investment for all investors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
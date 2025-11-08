import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { BuildingIcon, CheckCircleIcon, SettingsIcon, FileTextIcon } from './Icons';
import ProposalModal from './ProposalModal';

const Engineering: React.FC = () => {
  const [showProposalModal, setShowProposalModal] = useState(false);

  return (
    <>
    <section id="engineering" className="py-20 px-4 bg-[#F0F0F0]">
      <div className="container mx-auto">
        <SectionTitle backgroundText="DEVELOPMENT" foregroundText="ENGINEERING & CONSTRUCTION" />
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="font-oswald text-3xl font-bold text-zinc-800 mb-4">Solid Foundations, Future-Ready Developments</h3>
          <p className="text-zinc-600 text-lg">
            Our mission is dual: to build bold, future-ready developments and to develop high-quality, 
            sustainable real estate assets across India.
          </p>
        </div>

        {/* Asset Creation Capabilities */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://github.com/boldbrick-web/assets/blob/main/engineering.jpg?raw=true" alt="Construction Excellence" className="w-full h-auto object-cover rounded-lg shadow-xl no-hover-effect" />
          </div>
          <div>
            <h4 className="font-oswald text-2xl font-bold text-zinc-800 mb-6">Integrated Project Management & Excellence</h4>
            <p className="text-zinc-600 mb-6">
              We maintain rigorous control over the asset lifecycle, ensuring the highest standards 
              through our vertically integrated approach.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FileTextIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-zinc-800">Strategic Planning & Design</h5>
                  <p className="text-zinc-600 text-sm">Integrating modern, sustainable principles for superior long-term value.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-zinc-800">Permits & Regulatory Management</h5>
                  <p className="text-zinc-600 text-sm">Ensuring strict adherence to all local and national regulatory frameworks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SettingsIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-zinc-800">Precision Engineering & Construction</h5>
                  <p className="text-zinc-600 text-sm">Our commitment to excellence drives superior, long-lasting asset delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white p-12 rounded-lg shadow-lg mb-20">
          <div className="text-center mb-12">
            <h4 className="font-oswald text-3xl font-bold text-zinc-800 mb-4">The Bold Brick Standard: Integrity in Development</h4>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              Every project we undertake is grounded in ethics and trust. Our vertically integrated structure 
              ensures assets are designed specifically for optimal tokenization yield and investor confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <BuildingIcon className="w-16 h-16 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-2">Quality Assurance</h5>
              <p className="text-zinc-600 text-sm">Rigorous quality control at every stage of development.</p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="w-16 h-16 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-2">Sustainability Focus</h5>
              <p className="text-zinc-600 text-sm">Environmental responsibility integrated into every project.</p>
            </div>
            <div className="text-center">
              <SettingsIcon className="w-16 h-16 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-2">Innovation Integration</h5>
              <p className="text-zinc-600 text-sm">Future-ready technology and smart building solutions.</p>
            </div>
          </div>
        </div>

        {/* Tokenization Synergy */}
        <div className="text-center">
          <h4 className="font-oswald text-3xl font-bold text-zinc-800 mb-6">The Source of Value: Quality Assurance</h4>
          <p className="text-zinc-600 text-lg max-w-3xl mx-auto mb-8">
            The developments we build and the assets we select are the verifiable foundation of our tokenization platform. 
            We ensure asset quality from the ground up to secure investor confidence in the underlying digital asset.
          </p>
          <button 
            className="px-10 py-3 bg-[#B9A470] text-zinc-800 font-oswald tracking-widest hover:bg-opacity-90 transition-colors"
            onClick={() => setShowProposalModal(true)}
          >
            REQUEST DEVELOPMENT PROPOSAL
          </button>
        </div>
      </div>

      <ProposalModal 
        isOpen={showProposalModal} 
        onClose={() => setShowProposalModal(false)}
      />
    </section>
    </>
  );
};

export default Engineering;
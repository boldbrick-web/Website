import React from 'react';
import SectionTitle from './SectionTitle';
import VideoPlayer from './VideoPlayer';
import { ShieldCheckIcon, LayersIcon, GlobeIcon, TrendingUpIcon } from './Icons';

const Tokenization: React.FC = () => {
  return (
    <section id="tokenization" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <SectionTitle backgroundText="INNOVATION" foregroundText="REAL ESTATE TOKENIZATION" />
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="font-oswald text-3xl font-bold text-zinc-800 mb-4">Secure. Fractional. Liquid.</h3>
          <p className="text-zinc-600 text-lg">
            Our mission is to democratize real estate investment through blockchain-driven tokenization, 
            making property ownership fractional, secure, and liquid.
          </p>
        </div>

        {/* Strategic Imperative */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h4 className="font-oswald text-2xl font-bold text-zinc-800 mb-6">Resolving Traditional Investment Constraints</h4>
            <p className="text-zinc-600 mb-4">
              Traditional real estate investment is conventionally constrained by high capital requirements, 
              inherent illiquidity, and limitations imposed by capital or geography.
            </p>
            <p className="text-zinc-600">
              Bold Brick utilizes blockchain technology to revolutionize property investment, providing 
              global investors with a verifiable digital stake in high-value assets.
            </p>
          </div>
          <div>
            <video 
              src="https://raw.githubusercontent.com/boldbrick-web/assets/main/real%20estate%20tokenization.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto object-cover rounded"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* About Tokenization Video Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <VideoPlayer src="https://raw.githubusercontent.com/boldbrick-web/assets/main/About%20Tockenisazation.mp4" />
          <div>
            <h4 className="font-oswald text-2xl font-bold text-zinc-800 mb-6">About Tokenization</h4>
            <p className="text-zinc-600 mb-4">
              Tokenization transforms real estate into digital assets, enabling fractional ownership and seamless trading on blockchain platforms.
            </p>
            <p className="text-zinc-600">
              Through our innovative platform, investors can access premium real estate opportunities with lower capital requirements, enhanced liquidity, and complete transparency in every transaction.
            </p>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="mb-20">
          <h4 className="font-oswald text-3xl font-bold text-center text-zinc-800 mb-12">The Four Pillars of Investor Value</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <LayersIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-3">Fractional Ownership</h5>
              <p className="text-zinc-600 text-sm">
                We enable investors to participate in the property market with smaller capital outlay.
              </p>
            </div>
            <div className="text-center p-6">
              <TrendingUpIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-3">Enhanced Liquidity</h5>
              <p className="text-zinc-600 text-sm">
                Investors gain the freedom to own and trade digital shares (tokens) of real-world assets with ease and security.
              </p>
            </div>
            <div className="text-center p-6">
              <GlobeIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-3">Operational Transparency</h5>
              <p className="text-zinc-600 text-sm">
                We maintain honesty and clarity from initial project development to final token issuance.
              </p>
            </div>
            <div className="text-center p-6">
              <ShieldCheckIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
              <h5 className="font-oswald text-xl font-bold text-zinc-800 mb-3">Security & Integrity</h5>
              <p className="text-zinc-600 text-sm">
                Ownership is recorded on an immutable ledger, enhancing security and minimizing fraud risk.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Mechanism */}
        <div className="bg-[#0D1A26] text-white p-12 rounded-lg">
          <h4 className="font-oswald text-3xl font-bold text-center mb-8">Mechanism of Value Transfer: From Brick to Block</h4>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#B9A470] rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-800 font-oswald font-bold text-xl">1</div>
              <h5 className="font-oswald text-lg font-bold mb-2">Asset Development</h5>
              <p className="text-zinc-300 text-sm">Our proprietary system oversees the legal and technical steps from developing the underlying asset.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#B9A470] rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-800 font-oswald font-bold text-xl">2</div>
              <h5 className="font-oswald text-lg font-bold mb-2">Token Minting</h5>
              <p className="text-zinc-300 text-sm">Smart contracts automate the tokenization process, ensuring compliance and security.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#B9A470] rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-800 font-oswald font-bold text-xl">3</div>
              <h5 className="font-oswald text-lg font-bold mb-2">Income Distribution</h5>
              <p className="text-zinc-300 text-sm">Audited smart contracts enable automated, compliant income distribution to token holders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenization;
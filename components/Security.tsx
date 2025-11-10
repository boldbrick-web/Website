import React from 'react';
import SectionTitle from './SectionTitle';
import { ShieldCheckIcon, LockIcon, FileTextIcon, GlobeIcon } from './Icons';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 px-4 bg-[#0D1A26] dark:bg-zinc-950 text-white transition-colors duration-300">
      <div className="container mx-auto">
        <div className="relative h-24 flex items-center justify-center my-8">
          <h2 className="font-oswald text-6xl md:text-8xl font-bold text-zinc-700/30 dark:text-zinc-600/30 tracking-widest uppercase text-center">
            COMPLIANCE
          </h2>
          <h3 className="absolute font-oswald text-3xl md:text-4xl font-bold text-white dark:text-white tracking-wider uppercase text-center">
            SECURITY & COMPLIANCE
          </h3>
        </div>
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="font-oswald text-3xl font-bold text-white dark:text-zinc-100 mb-4">Regulatory Excellence & Investor Protection</h3>
          <p className="text-zinc-300 dark:text-zinc-400 text-lg">
            Bold Brick operates under the highest standards of regulatory compliance, ensuring investor protection 
            and maintaining transparency in all tokenization activities.
          </p>
        </div>

        {/* KYC/AML Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h4 className="font-oswald text-2xl font-bold text-white dark:text-zinc-100 mb-6">KYC/AML Compliance Framework</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-white dark:text-zinc-100">Identity Verification</h5>
                  <p className="text-zinc-300 dark:text-zinc-400 text-sm">Comprehensive KYC procedures ensure all investors are properly verified and compliant.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <LockIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-white dark:text-zinc-100">Anti-Money Laundering</h5>
                  <p className="text-zinc-300 dark:text-zinc-400 text-sm">Robust AML protocols monitor and prevent illicit financial activities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileTextIcon className="w-6 h-6 text-[#B9A470] mt-1 shrink-0" />
                <div>
                  <h5 className="font-oswald font-bold text-white dark:text-zinc-100">Regulatory Reporting</h5>
                  <p className="text-zinc-300 dark:text-zinc-400 text-sm">Regular compliance reporting to relevant financial authorities and regulators.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-8 rounded-lg">
            <h5 className="font-oswald text-xl font-bold text-white dark:text-zinc-100 mb-4">Compliance Standards</h5>
            <ul className="space-y-2 text-zinc-300 dark:text-zinc-400">
              <li>• Reserve Bank of India (RBI) Guidelines</li>
              <li>• Securities and Exchange Board of India (SEBI) Regulations</li>
              <li>• Prevention of Money Laundering Act (PMLA)</li>
              <li>• Foreign Exchange Management Act (FEMA)</li>
              <li>• International AML/CFT Standards</li>
            </ul>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white/5 dark:bg-white/3 rounded-lg">
            <ShieldCheckIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
            <h5 className="font-oswald text-lg font-bold text-white dark:text-zinc-100 mb-2">Blockchain Security</h5>
            <p className="text-zinc-300 dark:text-zinc-400 text-sm">Immutable ledger technology ensures transaction integrity and ownership verification.</p>
          </div>
          <div className="text-center p-6 bg-white/5 dark:bg-white/3 rounded-lg">
            <LockIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
            <h5 className="font-oswald text-lg font-bold text-white dark:text-zinc-100 mb-2">Data Encryption</h5>
            <p className="text-zinc-300 dark:text-zinc-400 text-sm">End-to-end encryption protects all sensitive investor and transaction data.</p>
          </div>
          <div className="text-center p-6 bg-white/5 dark:bg-white/3 rounded-lg">
            <FileTextIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
            <h5 className="font-oswald text-lg font-bold text-white dark:text-zinc-100 mb-2">Smart Contract Audits</h5>
            <p className="text-zinc-300 dark:text-zinc-400 text-sm">Regular third-party audits ensure smart contract security and functionality.</p>
          </div>
          <div className="text-center p-6 bg-white/5 dark:bg-white/3 rounded-lg">
            <GlobeIcon className="w-12 h-12 text-[#B9A470] mx-auto mb-4" />
            <h5 className="font-oswald text-lg font-bold text-white dark:text-zinc-100 mb-2">Global Standards</h5>
            <p className="text-zinc-300 dark:text-zinc-400 text-sm">Adherence to international security and compliance frameworks.</p>
          </div>
        </div>

        {/* Investment Protection */}
        <div className="bg-[#B9A470] text-zinc-800 p-12 rounded-lg text-center">
          <h4 className="font-oswald text-3xl font-bold mb-6">Investor Protection Guarantee</h4>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Every tokenized asset is backed by real, verified property with clear legal title. Our escrow services 
            and insurance partnerships provide additional layers of investor protection.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-oswald text-xl font-bold mb-2">Legal Verification</h5>
              <p className="text-sm">Complete due diligence on all property titles and legal documentation.</p>
            </div>
            <div>
              <h5 className="font-oswald text-xl font-bold mb-2">Escrow Services</h5>
              <p className="text-sm">Third-party escrow ensures secure handling of all investment funds.</p>
            </div>
            <div>
              <h5 className="font-oswald text-xl font-bold mb-2">Insurance Coverage</h5>
              <p className="text-sm">Comprehensive insurance protection for underlying real estate assets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
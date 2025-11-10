import React from 'react';
import { BuildingIcon, LayersIcon, ShieldCheckIcon } from './Icons';

const Stats: React.FC = () => {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-zinc-700">
        <div className="p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <BuildingIcon className="w-12 h-12 text-zinc-700 dark:text-zinc-300 mb-4 hover:text-[#B9A470] transition-colors duration-300" />
          <h3 className="font-oswald text-2xl font-bold text-zinc-800 dark:text-zinc-100">The Asset Pipeline</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm font-oswald tracking-wide">(Development Expertise)</p>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm">
            Our dedicated in-house division manages the complete asset lifecycle, providing core services from planning and design to engineering and construction, ensuring quality, sustainability, and long-term value.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <LayersIcon className="w-12 h-12 text-zinc-700 dark:text-zinc-300 mb-4 hover:text-[#B9A470] transition-colors duration-300" />
          <h3 className="font-oswald text-2xl font-bold text-zinc-800 dark:text-zinc-100">The Access Platform</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm font-oswald tracking-wide">(Tokenization Innovation)</p>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm">
            Our proprietary platform enables secure, fractional ownership of premium real estate, empowering investors with transparency, liquidity, and security, breaking traditional investment barriers.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300">
          <ShieldCheckIcon className="w-12 h-12 text-zinc-700 dark:text-zinc-300 mb-4 hover:text-[#B9A470] transition-colors duration-300" />
          <h3 className="font-oswald text-2xl font-bold text-zinc-800 dark:text-zinc-100">Our Corporate Foundation</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 text-sm font-oswald tracking-wide">(Built on Trust & Integrity)</p>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm">
            We operate with complete honesty and clarity (<strong className="font-semibold text-zinc-700 dark:text-zinc-200">Transparency</strong>) and believe real estate wealth should be within everyone's reach, not just for the privileged few (<strong className="font-semibold text-zinc-700 dark:text-zinc-200">Accessibility</strong>).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
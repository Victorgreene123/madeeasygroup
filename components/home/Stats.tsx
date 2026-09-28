import React from 'react';
import { SITE_CONFIG } from '@/data/site';

export function Stats() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {SITE_CONFIG.stats.slice(0, 4).map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E6F3B] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm sm:text-base font-bold text-slate-900">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="mt-0.5 text-xs text-slate-500">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

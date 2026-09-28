'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ESTATES_DATA } from '@/data/estates';
import { EstateCard } from '@/components/estates/EstateCard';
import { ArrowRight, Compass } from '@/components/ui/Icons';

export function FeaturedEstates() {
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const regions = ['All', 'Magboro', 'Epe', 'Ikorodu', 'Atan / Ota'];

  const filteredEstates =
    activeRegion === 'All'
      ? ESTATES_DATA.slice(0, 6)
      : ESTATES_DATA.filter((e) => e.region === activeRegion);

  return (
    <section className="py-20 lg:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]">
              <Compass size={13} />
              <span>Estate Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Find a Place That Fits Your Plans
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our estates across strategic locations and discover a property option that works for you.
            </p>
          </div>

          <Link
            href="/estates"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0E6F3B] hover:text-[#0b582f] shrink-0 group transition-colors"
          >
            <span>View All 10 Estates</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Region Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeRegion === region
                  ? 'bg-[#0E6F3B] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid of Estate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEstates.map((estate) => (
            <EstateCard key={estate.id} estate={estate} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/estates"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:border-[#0E6F3B] hover:text-[#0E6F3B] shadow-sm hover:shadow transition-all"
          >
            <span>Browse Complete Portfolio of 10 Estates</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

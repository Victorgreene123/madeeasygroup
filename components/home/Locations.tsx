import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Compass } from '@/components/ui/Icons';

export function Locations() {
  const locations = [
    {
      region: 'Magboro Axis',
      highlight: 'Between Berger and Prayer City',
      estatesCount: '1 Estate',
      estates: ['City of Joy Estate'],
      note: 'Rapid capital growth corridor with direct 12-minute transit into Berger, Lagos.',
    },
    {
      region: 'Epe Growth Zone',
      highlight: 'Itokin, Epe Corridor',
      estatesCount: '1 Estate',
      estates: ['Canaan Garden Estate Lagos'],
      note: 'Connected to the Lekki Free Trade Zone, Epe Resort, and prime industrial hubs.',
    },
    {
      region: 'Agbowa / Ikorodu',
      highlight: 'Ikorodu Suburban Expansion',
      estatesCount: '2 Estates',
      estates: ['Fountain of Glory (Phase 1)', 'Fountain of Glory (Phase 2)'],
      note: 'Adjacent to state housing schemes, Caleb University, and accessible road networks.',
    },
    {
      region: 'Atan / Iju Hub',
      highlight: 'Iju & Atan Towns',
      estatesCount: '2 Estates',
      estates: ['Goshen Estate', 'Divine Estate'],
      note: 'Proven serene suburban community with active developments and commercial access.',
    },
    {
      region: 'Atan / Obere',
      highlight: 'Obere District',
      estatesCount: '1 Estate',
      estates: ['Beulah Estate'],
      note: 'Peaceful topography ideal for residential living and land banking value.',
    },
    {
      region: 'Akoore & Akinde Town',
      highlight: 'Atan-Ota Corridor',
      estatesCount: '3 Estates',
      estates: ['City of David (Phase 1 & 2)', 'Grace Land Estate'],
      note: 'Fast-developing residential belts with strong developer presence and genuine titles.',
    },
  ];

  return (
    <section id="locations" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-4">
            <Compass size={13} />
            <span>Regional Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Strategically Located Across Lagos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our estates are positioned in high-velocity suburban growth nodes, maximizing lifestyle convenience and investment yield.
          </p>
        </div>

        {/* Visual Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((loc) => (
            <div
              key={loc.region}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-[#e8f5ed]/30 hover:border-[#0E6F3B]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0E6F3B] uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {loc.estatesCount}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0E6F3B]/10 flex items-center justify-center text-[#0E6F3B]">
                    <MapPin size={16} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {loc.region}
                </h3>
                <div className="text-xs font-semibold text-slate-500">
                  {loc.highlight}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {loc.note}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/70">
                <div className="text-xs font-medium text-slate-700">Estates:</div>
                <div className="text-xs font-semibold text-slate-900 mt-1">
                  {loc.estates.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link */}
        <div className="mt-12 text-center">
          <Link
            href="/estates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E6F3B] hover:underline"
          >
            <span>Explore all properties in these locations</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

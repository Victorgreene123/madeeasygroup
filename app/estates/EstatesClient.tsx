'use client';

import React, { useState, useMemo } from 'react';
import { ESTATES_DATA } from '@/data/estates';
import { EstateCard } from '@/components/estates/EstateCard';
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Building2,
  X,
  Calendar,
} from '@/components/ui/Icons';
import Link from 'next/link';

export function EstatesClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedPlotType, setSelectedPlotType] = useState('All');
  const [selectedPlan, setSelectedPlan] = useState('All');
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const regions = [
    { label: 'All Locations', value: 'All' },
    { label: 'Magboro', value: 'Magboro' },
    { label: 'Epe', value: 'Epe' },
    { label: 'Ikorodu', value: 'Ikorodu' },
    { label: 'Atan / Ota', value: 'Atan / Ota' },
  ];

  const plotOptions = [
    { label: 'All Sizes', value: 'All' },
    { label: 'Full Plot (600sqm)', value: 'Full Plot' },
    { label: 'Half Plot (300sqm)', value: 'Half Plot' },
  ];

  const planOptions = [
    { label: 'All Plans', value: 'All' },
    { label: 'Outright', value: 'Outright' },
    { label: '12 Months', value: '12 Months' },
    { label: '24 Months', value: '24 Months' },
  ];

  const filteredEstates = useMemo(() => {
    return ESTATES_DATA.filter((estate) => {
      // Search matching (name, location, description, landmarks)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        estate.name.toLowerCase().includes(q) ||
        estate.location.toLowerCase().includes(q) ||
        estate.region.toLowerCase().includes(q) ||
        estate.shortDescription.toLowerCase().includes(q) ||
        estate.landmarks.some((l) => l.toLowerCase().includes(q));

      // Region matching
      const matchesRegion =
        selectedRegion === 'All' || estate.region === selectedRegion;

      // Plot Type matching
      const matchesPlot =
        selectedPlotType === 'All' ||
        estate.plotTypes.some((p) => p.includes(selectedPlotType));

      // Plan matching
      const matchesPlan =
        selectedPlan === 'All' ||
        estate.paymentPlans.some((p) => p.includes(selectedPlan));

      return matchesSearch && matchesRegion && matchesPlot && matchesPlan;
    });
  }, [searchQuery, selectedRegion, selectedPlotType, selectedPlan]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedRegion !== 'All' ||
    selectedPlotType !== 'All' ||
    selectedPlan !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedPlotType('All');
    setSelectedPlan('All');
  };

  // Region count lookup
  const getRegionCount = (regionValue: string) => {
    if (regionValue === 'All') return ESTATES_DATA.length;
    return ESTATES_DATA.filter((e) => e.region === regionValue).length;
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Hero Header */}
      <div className="bg-[#164E48] text-white py-8 sm:py-12 border-b border-[#1F7A72]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123e39] via-[#164e48] to-[#1F7A72]/80 opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15 backdrop-blur-md">
            <Building2 size={13} />
            <span>Verified Portfolio • 10+ Strategic Locations</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Find Your Ideal Estate
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            All estates are gated and fenced with approved documentation, 100% dry terrain, and flexible 12 to 24-month installment schedules.
          </p>
        </div>
      </div>

      {/* Custom, Clean Search & Filter Control Station */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-6 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/90 p-4 sm:p-6 space-y-4">
          {/* Main Search Row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search estates by name, landmark, or town (e.g. Magboro, Epe, Atan, Ikorodu)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 rounded-xl sm:rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                  aria-label="Clear search query"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => setShowMoreFilters(!showMoreFilters)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold border transition-all shrink-0 ${
                showMoreFilters || selectedPlotType !== 'All' || selectedPlan !== 'All'
                  ? 'bg-[#e8f5ed] border-[#0E6F3B] text-[#0E6F3B] shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <SlidersHorizontal size={16} />
              <span>{showMoreFilters ? 'Hide Filters' : 'More Filters'}</span>
              {(selectedPlotType !== 'All' || selectedPlan !== 'All') && (
                <span className="w-2 h-2 rounded-full bg-[#0E6F3B]" />
              )}
            </button>
          </div>

          {/* Region Quick Tap Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
            {regions.map((reg) => {
              const count = getRegionCount(reg.value);
              const isSelected = selectedRegion === reg.value;
              return (
                <button
                  key={reg.value}
                  type="button"
                  onClick={() => setSelectedRegion(reg.value)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all active:scale-95 shrink-0 ${
                    isSelected
                      ? 'bg-[#0E6F3B] text-white shadow-md shadow-[#0E6F3B]/20 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <span>{reg.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expandable Secondary Filter Section */}
          {showMoreFilters && (
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Plot Size Filter */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Plot Dimension
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {plotOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedPlotType(opt.value)}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all ${
                        selectedPlotType === opt.value
                          ? 'bg-[#164E48] text-white shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Plan Filter */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Payment Flexibility
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {planOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedPlan(opt.value)}
                      className={`p-2 rounded-xl text-xs font-semibold text-center transition-all truncate ${
                        selectedPlan === opt.value
                          ? 'bg-[#164E48] text-white shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Filter Tags & Count Result Bar */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">
                Showing{' '}
                <strong className="text-slate-900 font-bold">{filteredEstates.length}</strong>{' '}
                of <strong className="text-slate-900">{ESTATES_DATA.length}</strong> gated estates
              </span>
              {selectedRegion !== 'All' && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e8f5ed] text-[#0E6F3B] font-semibold text-[11px]">
                  <span>{selectedRegion}</span>
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 font-bold text-[#0E6F3B] hover:text-[#0b582f] transition-colors"
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Estates Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        {filteredEstates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEstates.map((estate) => (
              <EstateCard key={estate.id} estate={estate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 bg-white rounded-3xl border border-slate-200/90 p-8 space-y-4 shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Building2 size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">No matching estates found</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                We couldn&apos;t find any estates matching your search. Try changing your keywords or resetting filters.
              </p>
            </div>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#0E6F3B] text-white text-xs font-bold hover:bg-[#0b582f] transition-all shadow-sm active:scale-95"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Free Inspection Footer Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#164E48] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1F7A72]/40">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Need on-site verification?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Inspect Any of Our Estates for Free
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
              Free guided inspection buses depart every Thursday and Saturday by 10:00 AM from our Egbeda Head Office.
            </p>
          </div>

          <Link
            href="/book-inspection"
            className="px-6 py-3.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2 shrink-0"
          >
            <Calendar size={16} />
            <span>Book Free Inspection</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

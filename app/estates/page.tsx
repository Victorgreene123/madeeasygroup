'use client';

import React, { useState, useMemo } from 'react';
import { ESTATES_DATA } from '@/data/estates';
import { EstateCard } from '@/components/estates/EstateCard';
import { Search, Filter, SlidersHorizontal, RotateCcw, Building2, MapPin } from '@/components/ui/Icons';

export default function EstatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedPlotType, setSelectedPlotType] = useState('All');
  const [selectedPlan, setSelectedPlan] = useState('All');

  const regions = ['All', 'Magboro', 'Epe', 'Ikorodu', 'Atan / Ota'];

  const filteredEstates = useMemo(() => {
    return ESTATES_DATA.filter((estate) => {
      // Search matching
      const matchesSearch =
        searchQuery === '' ||
        estate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        estate.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        estate.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

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

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Hero Header */}
      <div className="bg-[#164E48] text-white py-16 sm:py-20 border-b border-[#1F7A72]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123e39] via-[#164e48] to-[#1F7A72]/80 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15">
            <Building2 size={13} />
            <span>Verified Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Find Your Next Property
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
            Explore Made Easy estates across strategic locations. Every estate features perimeter fencing, motorable access roads, and structured 12 to 24-month payment plans.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 space-y-4">
          {/* Top Search Input */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by estate name, location (e.g. Magboro, Epe, Atan, Ikorodu)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Dropdowns & Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {/* Region */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Location Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#0E6F3B] focus:outline-none"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg === 'All' ? 'All Regions' : reg}
                  </option>
                ))}
              </select>
            </div>

            {/* Plot Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Plot Dimension
              </label>
              <select
                value={selectedPlotType}
                onChange={(e) => setSelectedPlotType(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#0E6F3B] focus:outline-none"
              >
                <option value="All">All Plot Types</option>
                <option value="Full Plot">Full Plot (600 sqm)</option>
                <option value="Half Plot">Half Plot (300 sqm)</option>
              </select>
            </div>

            {/* Payment Schedule */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Payment Option
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#0E6F3B] focus:outline-none"
              >
                <option value="All">All Payment Options</option>
                <option value="Outright">Outright Payment</option>
                <option value="12 Months">12 Months Installment</option>
                <option value="24 Months">24 Months Installment</option>
              </select>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {hasActiveFilters && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Found <span className="font-bold text-slate-900">{filteredEstates.length}</span> matching estates
              </span>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 font-semibold text-[#0E6F3B] hover:text-[#0b582f]"
              >
                <RotateCcw size={12} />
                <span>Reset all filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Estates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredEstates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEstates.map((estate) => (
              <EstateCard key={estate.id} estate={estate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Building2 size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No estates match your filters</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Try adjusting your search keywords or clearing location filters to view our full collection of estates.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-lg bg-[#0E6F3B] text-white text-xs font-semibold hover:bg-[#0b582f] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

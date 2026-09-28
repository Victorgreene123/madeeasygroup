'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ChevronRight, X, Eye, ArrowRight, ShieldCheck, MapPin } from '@/components/ui/Icons';
import { useInspection } from '@/components/ui/InspectionProvider';

interface MediaItem {
  id: string;
  category: 'Estate Development' | 'Site Visits' | 'Property Allocation' | 'Estate Layouts' | 'Customer Events';
  title: string;
  description: string;
  location: string;
  image: string;
  tag: string;
}

const GALLERY_COLLECTION: MediaItem[] = [
  {
    id: 'g1',
    category: 'Estate Development',
    title: 'Perimeter Demarcation & Solid Fencing',
    description: 'Ongoing gated perimeter wall construction and security gatehouse setup ensuring complete boundary safety.',
    location: 'City of Joy Estate, Magboro',
    tag: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g2',
    category: 'Site Visits',
    title: 'Weekend Prospective Buyers Inspection',
    description: 'Clients boarding our scheduled site tour vehicle departing from our Egbeda Head Office on Saturday morning.',
    location: 'Canaan Garden Estate, Epe',
    tag: 'Inspection Tour',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g3',
    category: 'Property Allocation',
    title: 'Physical Plot Demarcation & Beacon Handover',
    description: 'Landowners inspecting their allocated 600sqm corner-piece plot beacons alongside certified surveying staff.',
    location: 'Fountain of Glory Phase 1, Ikorodu',
    tag: 'Physical Allocation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g4',
    category: 'Estate Layouts',
    title: 'Masterplan Topography & Access Road Grading',
    description: 'Motorable estate central boulevard grading connecting plots seamlessly to the regional expressway.',
    location: 'Goshen Estate, Iju-Atan',
    tag: 'Road Network',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g5',
    category: 'Customer Events',
    title: 'Official Title Deeds Presentation Exercise',
    description: 'Satisfied plot subscribers receiving their stamped Deed of Assignment and official Registered Survey plans.',
    location: 'Egbeda Head Office, Lagos',
    tag: 'Client Milestone',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g6',
    category: 'Estate Development',
    title: 'Internal Access Road Network & Drainage',
    description: 'Engineered drainage channels preventing flooding and ensuring immediate construction viability for all plots.',
    location: 'City of David Phase 1, Atan',
    tag: 'Drainage & Engineering',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g7',
    category: 'Site Visits',
    title: 'Diaspora Family Delegation On-Site Review',
    description: 'Family representatives conducting on-ground topographical inspection and verifying beacon coordinates.',
    location: 'Beulah Estate, Atan / Obere',
    tag: 'Diaspora Services',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g8',
    category: 'Estate Layouts',
    title: 'Dry Table-Land Residential Zoning',
    description: '100% dry virgin terrain requiring zero sandfilling or raft foundations, significantly reducing client building costs.',
    location: 'Grace Land Estate, Akinde Town',
    tag: 'Dry Topography',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g9',
    category: 'Customer Events',
    title: 'Investor Breakfast & Allocation Handover',
    description: 'Annual subscriber briefing celebrating new homeowners commencing foundation work across Lagos estates.',
    location: 'Made Easy Corporate Center',
    tag: 'Community',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
  },
];

export function GalleryClient() {
  const { openInspection } = useInspection();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const categories = [
    'All',
    'Estate Development',
    'Site Visits',
    'Property Allocation',
    'Estate Layouts',
    'Customer Events',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_COLLECTION
      : GALLERY_COLLECTION.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0E6F3B] font-semibold">Photo Gallery</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#164E48] text-white py-14 sm:py-20 relative overflow-hidden border-b border-[#1F7A72]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113a35] via-[#164E48] to-[#1F7A72]/80 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15">
            <Sparkles size={13} />
            <span>Visual Evidence of Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Life at Made Easy
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
            Take a visual tour through our gated estate developments, weekly client inspection excursions, and plot allocation celebrations.
          </p>
        </div>
      </div>

      {/* Filter and Count Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0E6F3B] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Showing {filteredItems.length} curated moments
          </div>
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={16} />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-[#0E6F3B] uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#0E6F3B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 truncate max-w-[80%]">
                    <MapPin size={13} className="text-[#0E6F3B] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <span className="text-[#0E6F3B] font-bold text-[11px] group-hover:translate-x-0.5 transition-transform">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Inspection Invitation Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-slate-900 text-sm flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck size={16} className="text-[#0E6F3B]" />
              <span>Representative Demonstration Content & Live Visits</span>
            </h4>
            <p className="text-xs text-slate-500 max-w-xl">
              Photographs show ongoing estate infrastructure progress and client allocation moments across Lagos corridors. We invite you to join our next inspection to view the physical land in person.
            </p>
          </div>
          <button
            onClick={() => openInspection()}
            className="px-6 py-3 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-xs shadow-md transition-all active:scale-[0.98] flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar size={15} />
            <span>Join Thursday / Saturday Inspection</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#0E6F3B] text-white shadow">
                  {selectedItem.tag}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0E6F3B] uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={14} className="text-[#0E6F3B]" />
                  <span>{selectedItem.location}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/estates"
                  className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Browse Estates in this Region</span>
                  <ArrowRight size={13} />
                </Link>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    openInspection();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <Calendar size={14} />
                  <span>Book Site Inspection</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

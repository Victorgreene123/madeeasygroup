'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, CheckCircle2 } from '@/components/ui/Icons';

export function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Estate Development',
    'Site Visits',
    'Property Allocation',
    'Estate Layouts',
  ];

  const galleryItems = [
    {
      category: 'Estate Development',
      title: 'Perimeter Demarcation & Fencing',
      tag: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Site Visits',
      title: 'Client Inspection Tour',
      tag: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Property Allocation',
      title: 'Physical Plot Allocation Exercise',
      tag: 'Documentation & Handover',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Estate Layouts',
      title: 'Topographic Survey & Masterplan Zoning',
      tag: 'Planning & Survey',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Estate Development',
      title: 'Access Road Grading & Security Gate',
      tag: 'Engineering',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'Site Visits',
      title: 'Weekend Group Inspection Departure',
      tag: 'Guided Visits',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-4">
            <Sparkles size={13} />
            <span>Community & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Life at Made Easy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Visual moments across our estate development sites, client weekend inspection tours, and official plot allocation ceremonies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#0E6F3B] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs text-emerald-300 font-medium">{item.category}</div>
                <h3 className="text-base font-bold text-white mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimers & Action */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            * Gallery illustrates representative community site developments & allocation moments. Join our weekly visits to experience live estate progress in person.
          </p>
          <Link
            href="/book-inspection"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-xs transition-colors shrink-0"
          >
            <Calendar size={14} />
            <span>Join Next Inspection Tour</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

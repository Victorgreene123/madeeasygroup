'use client';

import React from 'react';
import Link from 'next/link';
import { Estate } from '@/data/estates';
import { MapPin, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { useInspection } from '@/components/ui/InspectionProvider';

interface EstateCardProps {
  estate: Estate;
  featured?: boolean;
}

export function EstateCard({ estate, featured = false }: EstateCardProps) {
  const { openInspection } = useInspection();

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300">
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={estate.images[0]}
          alt={estate.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {estate.region}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#164E48]/90 backdrop-blur-md text-emerald-200 border border-[#1F7A72]/40 shadow-sm">
            <ShieldCheck size={12} />
            <span>Gated & Fenced</span>
          </span>
        </div>

        {/* Bottom Tag on Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
          <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md font-medium">
            12 - 24 Months Plans
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <MapPin size={14} className="text-[#0E6F3B] shrink-0" />
            <span className="truncate">{estate.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0E6F3B] transition-colors line-clamp-1">
            <Link href={`/estates/${estate.slug}`}>
              {estate.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {estate.shortDescription}
          </p>

          {/* Key Features pills */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {estate.features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full"
              >
                <CheckCircle2 size={11} className="text-[#0E6F3B]" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing notice & Actions */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Pricing:
            </span>
            <span className="text-xs font-bold text-[#0E6F3B] bg-[#e8f5ed] px-2.5 py-1 rounded-md">
              {estate.priceNotice}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href={`/estates/${estate.slug}`}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              <span>View Details</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href={`/book-inspection?estate=${estate.slug}`}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#0E6F3B] text-white text-xs font-semibold hover:bg-[#0b582f] transition-colors shadow-sm"
            >
              <Calendar size={13} />
              <span>Inspect</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

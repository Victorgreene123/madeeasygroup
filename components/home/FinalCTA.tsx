'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Phone } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/data/site';
import { useInspection } from '@/components/ui/InspectionProvider';

export function FinalCTA() {
  const { openInspection } = useInspection();

  return (
    <section className="relative overflow-hidden bg-[#164E48] text-white py-20 lg:py-28">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22C55E_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1F7A72]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#0E6F3B]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/20">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Your Property Journey Starts Here.
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Explore our estates, find a payment plan that works for you, and take the next step toward secure property ownership.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/estates"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-base shadow-xl shadow-black/20 hover:shadow-2xl transition-all active:scale-[0.98]"
          >
            <span>Explore Estates</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/book-inspection"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[#164E48] hover:bg-slate-100 font-bold text-base shadow-lg transition-all active:scale-[0.98]"
          >
            <Calendar size={18} className="text-[#0E6F3B]" />
            <span>Book an Inspection</span>
          </Link>
        </div>

        <div className="pt-6 text-xs text-emerald-200/80 flex items-center justify-center gap-6">
          <span>Direct Hotline: <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="underline font-semibold text-white">{SITE_CONFIG.primaryPhone}</a></span>
          <span>•</span>
          <span>Free site tours every Thursday & Saturday</span>
        </div>
      </div>
    </section>
  );
}

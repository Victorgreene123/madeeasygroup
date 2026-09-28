'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { ShieldCheck, Calendar, ArrowRight, Calculator, CheckCircle2, ChevronRight } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#164E48] text-white min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-116px)] flex items-center">
      {/* Background imagery with layered editorial gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Made Easy Homes and Estates"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123e39] via-[#164e48]/90 to-[#1F7A72]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-emerald-200 border border-white/15 shadow-sm">
            <ShieldCheck size={14} className="text-emerald-300" />
            <span>Over 10 Years of Reliable Land & Property Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Own Property.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
              Build Your Future.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
            {SITE_CONFIG.subheadline}
          </p>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-300 shrink-0" />
              <span>Gated & Fenced Estates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-300 shrink-0" />
              <span>12 to 24 Months Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-300 shrink-0" />
              <span>Approved Documentation</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/estates"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#0E6F3B]/30 hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <span>Explore Estates</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base backdrop-blur-sm border border-white/20 transition-all"
            >
              <Calculator size={16} className="text-emerald-300" />
              <span>Calculate Your Plan</span>
            </a>

            <Link
              href="/book-inspection"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-emerald-200 hover:text-white font-medium text-xs sm:text-sm transition-colors"
            >
              <Calendar size={15} />
              <span>Book Inspection</span>
              <ChevronRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


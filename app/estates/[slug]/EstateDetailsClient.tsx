'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Estate, ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';
import {
  MapPin,
  ShieldCheck,
  Calendar,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Info,
  Clock,
  Compass,
  Building2,
  ChevronRight,
  ExternalLink,
} from '@/components/ui/Icons';
import { useInspection } from '@/components/ui/InspectionProvider';
import { PaymentCalculator } from '@/components/home/PaymentCalculator';

export function EstateDetailsClient({ estate }: { estate: Estate }) {
  const { openInspection } = useInspection();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What title documentation comes with this estate?',
      a: `${estate.documentation}. Every plot is formally surveyed, beaconed, and assigned with clean developer execution and zero third-party encumbrances.`,
    },
    {
      q: 'When are physical site inspections held?',
      a: 'Free site inspections are scheduled every Thursday and Saturday by 10:00 AM departing from our Egbeda Head Office. Special weekday private inspections can also be arranged upon request.',
    },
    {
      q: 'How does the 12 and 24-month installment plan work?',
      a: 'After an initial deposit, the remaining balance is divided equally across your chosen tenure with zero compound interest. You receive documented receipts and allocation schedules immediately upon commencement.',
    },
    {
      q: 'When is physical plot allocation carried out?',
      a: 'Physical allocation is executed once your documentation criteria or agreed payment threshold is fulfilled. You receive your physical beacons, site plan, and Deed of Assignment.',
    },
    {
      q: 'Can I start building immediately after allocation?',
      a: 'Yes! The estate is planned as a gated community with motorable access roads. Once allocation and building plan approvals are verified, construction can proceed without community harassment (no omo-onile issues).',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/estates" className="hover:text-slate-900 transition-colors">
            Estates
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0E6F3B] font-semibold">{estate.name}</span>
        </div>
      </div>

      {/* Main Estate Hero & Gallery Section */}
      <div className="bg-white border-b border-slate-200 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]">
                  {estate.region}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#164E48] text-white">
                  <ShieldCheck size={13} />
                  <span>Gated & Fenced</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {estate.name}
              </h1>
              <div className="flex items-center gap-2 text-slate-600 text-sm sm:text-base">
                <MapPin size={18} className="text-[#0E6F3B] shrink-0" />
                <span>{estate.location}</span>
              </div>
            </div>

            {/* Quick CTA Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openInspection(estate.slug)}
                className="px-6 py-3.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
              >
                <Calendar size={18} />
                <span>Book Free Inspection</span>
              </button>
              <a
                href={`tel:${SITE_CONFIG.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Phone size={18} className="text-[#0E6F3B]" />
                <span>Talk to Agent</span>
              </a>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
              <img
                src={estate.images[activeImageIndex] || estate.images[0]}
                alt={estate.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-medium">
                Photo {activeImageIndex + 1} of {estate.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {estate.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {estate.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-[#0E6F3B] ring-2 ring-[#0E6F3B]/30'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${estate.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Details Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* About this Estate */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                About {estate.name}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {estate.fullDescription}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#0E6F3B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Documentation & Title: </span>
                  <span>{estate.documentation}</span>
                </div>
              </div>
            </div>

            {/* Estate Features & Amenities */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Estate Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {estate.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-800"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#e8f5ed] flex items-center justify-center text-[#0E6F3B] shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plot Options & Payment Plans */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Available Plot Types & Payment Plans
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {estate.plotTypes.map((plot, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200 space-y-3"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E6F3B]">
                      Plot Allocation
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{plot}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Zoned for immediate building feasibility or medium-to-long term capital growth.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-slate-700">
                      Available on: Outright, 12 & 24 Months Installments
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#e8f5ed]/60 border border-[#c3e7d1] text-xs sm:text-sm text-[#0E6F3B] flex items-center justify-between">
                <span className="font-semibold">Official Pricing: {estate.priceNotice}</span>
                <button
                  onClick={() => openInspection(estate.slug)}
                  className="font-bold underline hover:text-[#0b582f]"
                >
                  Request Official Price List
                </button>
              </div>
            </div>

            {/* Strategic Landmarks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Strategic Landmarks & Proximity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {estate.landmarks.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 text-sm text-slate-700"
                  >
                    <Compass size={16} className="text-[#0E6F3B] shrink-0" />
                    <span>{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estate FAQ */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-800 hover:bg-slate-50"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180 text-[#0E6F3B]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Inspection Card */}
              <div className="bg-[#164E48] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Complimentary Tour
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Book Site Inspection
                  </h3>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Personal inspection is the best way to verify land topography and proximity to road networks.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-emerald-100">
                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-emerald-300 shrink-0" />
                    <span>Every Thursday & Saturday (10:00 AM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-emerald-300 shrink-0" />
                    <span>Pickup: Yemosa Plaza, Egbeda</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openInspection(estate.slug)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] text-center"
                >
                  Reserve Your Seat
                </button>

                <div className="pt-3 border-t border-[#1F7A72]/40 text-center">
                  <div className="text-[11px] text-emerald-200">Or speak directly with an advisor:</div>
                  <a
                    href={`tel:${SITE_CONFIG.primaryPhone}`}
                    className="mt-1 text-sm font-bold text-white hover:underline block"
                  >
                    {SITE_CONFIG.primaryPhone}
                  </a>
                </div>
              </div>

              {/* Quick Summary Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Estate At A Glance
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-semibold text-slate-800 text-right">{estate.location}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Region:</span>
                    <span className="font-semibold text-slate-800">{estate.region}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Security:</span>
                    <span className="font-semibold text-slate-800">Gated & Fenced</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Topography:</span>
                    <span className="font-semibold text-slate-800">100% Dry Land</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Payment Plans:</span>
                    <span className="font-semibold text-slate-800">12 & 24 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Payment Calculator preselected with this estate */}
      <PaymentCalculator initialEstateSlug={estate.slug} />
    </div>
  );
}

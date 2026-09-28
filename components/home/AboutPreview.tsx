import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2 } from '@/components/ui/Icons';

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Made Easy Development Team on Site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164E48]/80 via-transparent to-transparent" />

              {/* Floating Stat card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#e8f5ed] flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} className="text-[#0E6F3B]" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">10+ Years</div>
                  <div className="text-xs text-slate-600">Documented Property Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]">
              <Building2 size={13} />
              <span>About Made Easy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              Making Property Ownership Easier
            </h2>

            <blockquote className="border-l-4 border-[#0E6F3B] pl-4 italic text-base sm:text-lg text-slate-700 font-medium">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </blockquote>

            <p className="text-base text-slate-600 leading-relaxed">
              {SITE_CONFIG.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#0E6F3B] shrink-0" />
                <span>100% Client Satisfaction Focus</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#0E6F3B] shrink-0" />
                <span>Gated & Fenced Layouts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#0E6F3B] shrink-0" />
                <span>1,000+ Landowners Allocated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#0E6F3B] shrink-0" />
                <span>Transparent Documentation</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-sm transition-all shadow-md shadow-[#0E6F3B]/20"
              >
                <span>Learn About Made Easy</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

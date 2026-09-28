'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/site';
import { FOOTER_LINKS } from '@/data/navigation';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Building2, CheckCircle2 } from '@/components/ui/Icons';
import { useInspection } from '@/components/ui/InspectionProvider';

export function Footer() {
  const { openInspection } = useInspection();

  return (
    <footer className="bg-[#164E48] text-slate-200 border-t border-[#1F7A72]/40">
      {/* Top CTA Strip inside Footer */}
      <div className="border-b border-[#1F7A72]/40 bg-[#123e39]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to verify our estates in person?
            </h3>
            <p className="text-sm text-emerald-100/80">
              Join our free, guided site inspection this Thursday or Saturday.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openInspection()}
              className="px-6 py-3 rounded-lg bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              Book Inspection Now
            </button>
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/20 flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{SITE_CONFIG.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand info column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md shrink-0 p-0.5 border border-white/20 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Made Easy Homes & Properties Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                    MADE EASY
                  </span>
                  <span className="text-[10px] font-bold text-emerald-200 bg-white/10 px-1.5 py-0.5 rounded border border-white/15">
                    RC: 931470
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                  Homes & Properties
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm">
              Specializing in gated and fenced estates across strategic Lagos growth corridors, backed by 10+ years of reliable real estate stewardship.
            </p>

            {/* Quick credentials */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-emerald-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>10+ Years Exp</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>1,000+ Happy Clients</span>
              </span>
            </div>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stated Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.title} className="text-slate-300">
                  <span>{svc.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Offices (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact & Offices
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white text-xs uppercase tracking-wider mb-0.5">
                    Head Office
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {SITE_CONFIG.headOffice.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <div className="text-xs space-y-0.5">
                  <div className="text-slate-200">
                    <a href="tel:08086188318" className="hover:text-white">08086188318</a> •{' '}
                    <a href="tel:08060441161" className="hover:text-white">08060441161</a>
                  </div>
                  <div className="text-slate-300">
                    <a href="tel:09042943116" className="hover:text-white">09042943116</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xs text-slate-200 hover:text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Branch Locations */}
            <div className="pt-2 border-t border-[#1F7A72]/40">
              <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1.5">
                Branch Service Desks:
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Egbeda Market (Olujubede Plaza) • Igando Multi-purpose Market • Ayobo Road (Meboruko Plaza)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F7A72]/40 bg-[#0d3430]/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Made Easy Homes & Properties. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About Made Easy
            </Link>
            <Link href="/estates" className="hover:text-slate-200 transition-colors">
              Estates Catalog
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact & Offices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

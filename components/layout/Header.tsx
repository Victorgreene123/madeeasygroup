'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_LINKS } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { Phone, Mail, Calendar, Menu, X, ArrowRight, ShieldCheck } from '@/components/ui/Icons';
import { useInspection } from '@/components/ui/InspectionProvider';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openInspection } = useInspection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top micro-bar */}
      <div className="bg-[#164E48] text-emerald-100 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1F7A72]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-emerald-300" />
              <span>Free Site Inspections: Every Thursday & Saturday</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={13} className="text-emerald-300" />
              <span>Gated & Fenced Estates with Approved Documentation</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-emerald-300" />
              <span>{SITE_CONFIG.primaryPhone}</span>
            </a>
            <span className="text-emerald-600">|</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-emerald-300" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`w-full bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200/80' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md shadow-[#0E6F3B]/15 group-hover:scale-105 transition-transform bg-white shrink-0 p-0.5 border border-slate-100">
              <Image
                src="/logo.png"
                alt="Made Easy Homes & Properties Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  MADE EASY
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  RC: 931470
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0E6F3B] uppercase">
                Homes & Properties
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#0E6F3B] bg-[#e8f5ed] font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-[#0E6F3B] hover:border-[#0E6F3B] transition-colors"
              title="Call Us"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => openInspection()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E6F3B] text-white text-sm font-semibold hover:bg-[#0b582f] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar size={16} />
              <span>Book Inspection</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openInspection()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#0E6F3B] text-white text-xs font-semibold"
            >
              Book Inspection
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[113px] bottom-0 bg-slate-900/40 backdrop-blur-sm z-50">
          <div className="bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto p-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {MAIN_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#0E6F3B] bg-[#e8f5ed] font-semibold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openInspection();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0E6F3B] text-white font-semibold shadow-sm"
              >
                <Calendar size={18} />
                <span>Book Free Inspection</span>
              </button>
              <a
                href={`tel:${SITE_CONFIG.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50"
              >
                <Phone size={18} className="text-[#0E6F3B]" />
                <span>Call {SITE_CONFIG.primaryPhone}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 text-center space-y-1">
              <p>Suite 1621, 1st Floor Yemosa Plaza, Egbeda, Lagos</p>
              <p>Email: {SITE_CONFIG.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

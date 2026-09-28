'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MAIN_NAV_LINKS } from '@/data/navigation';
import { SITE_CONFIG } from '@/data/site';
import { ESTATES_DATA } from '@/data/estates';
import {
  Phone,
  Mail,
  Calendar,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calculator,
  Sparkles,
  MapPin,
  Users,
  ChevronRight,
  MessageCircle,
  Clock,
} from '@/components/ui/Icons';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItemIcons: Record<string, React.ReactNode> = {
    '/': <Building2 size={18} className="text-[#0E6F3B]" />,
    '/estates': <Building2 size={18} className="text-[#0E6F3B]" />,
    '/#why-made-easy': <ShieldCheck size={18} className="text-[#0E6F3B]" />,
    '/about': <Users size={18} className="text-[#0E6F3B]" />,
    '/gallery': <Sparkles size={18} className="text-[#0E6F3B]" />,
    '/book-inspection': <Calendar size={18} className="text-[#0E6F3B]" />,
    '/contact': <MapPin size={18} className="text-[#0E6F3B]" />,
  };

  const navItemSubtitles: Record<string, string> = {
    '/': 'Home & Overview',
    '/estates': '10+ Gated & Fenced Estates',
    '/#why-made-easy': '10+ Years of Verified Stewardship',
    '/about': 'Mission, Vision & Core Values',
    '/gallery': 'Inspection & Allocation Photos',
    '/book-inspection': 'Free Guided Tours (Thu & Sat)',
    '/contact': 'Egbeda HQ & Lagos Desks',
  };

  const navItemBadges: Record<string, string> = {
    '/estates': '10+ Locations',
    '/book-inspection': 'FREE TOUR',
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top micro-bar for desktop */}
      <div className="bg-[#164E48] text-emerald-100 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1F7A72]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-emerald-300" />
              <span>Free Site Inspections: Every Thursday & Saturday (10:00 AM)</span>
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
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200/90' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shadow-[#0E6F3B]/15 group-hover:scale-105 transition-transform bg-white shrink-0 p-0.5 border border-slate-100">
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

          {/* Desktop Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-[#0E6F3B] hover:border-[#0E6F3B] transition-colors"
              title="Call Us"
            >
              <Phone size={18} />
            </a>
            <Link
              href="/book-inspection"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E6F3B] text-white text-sm font-semibold hover:bg-[#0b582f] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar size={16} />
              <span>Book Inspection</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-inspection"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E6F3B] text-white text-xs font-bold shadow-sm active:scale-95 transition-all"
            >
              <Calendar size={13} />
              <span>Inspect</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-[#0E6F3B] hover:bg-slate-100 transition-colors border border-slate-200/80 active:scale-95"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Ultra-Modern Full-Height Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Glassmorphic Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Off-Canvas Panel */}
          <div className="relative w-[88%] max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300">
            {/* Drawer Top Branding Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm bg-white shrink-0 p-0.5 border border-slate-200">
                  <Image
                    src="/logo.png"
                    alt="Made Easy Homes Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-extrabold text-slate-900 leading-tight">
                      MADE EASY
                    </span>
                    <span className="text-[9px] font-bold text-slate-600 bg-slate-200/80 px-1 py-0.2 rounded">
                      RC: 931470
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0E6F3B] uppercase tracking-wider">
                    Homes & Properties
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 scrollbar-thin">
              {/* Highlight Inspection Alert Banner */}
              <Link
                href="/book-inspection"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3.5 rounded-2xl bg-gradient-to-br from-[#164E48] to-[#0E6F3B] text-white shadow-md group hover:opacity-95 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-200 mb-1">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={13} className="text-emerald-300" />
                    <span>Next Free Inspection</span>
                  </span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold text-white">
                    Thu & Sat
                  </span>
                </div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>Reserve Free Bus Seat</span>
                  <ChevronRight size={16} className="text-emerald-200 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-emerald-100/80 mt-0.5">
                  Departs 10:00 AM from Egbeda Head Office
                </p>
              </Link>

              {/* Main Navigation Link Cards */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-1">
                  Explore Pages
                </span>

                {MAIN_NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  const icon = navItemIcons[link.href] || <Building2 size={18} className="text-[#0E6F3B]" />;
                  const subtitle = navItemSubtitles[link.href];
                  const badge = navItemBadges[link.href];

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-[#e8f5ed] text-[#0E6F3B] font-bold shadow-sm border border-[#c3e7d1]'
                          : 'text-slate-800 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive ? 'bg-[#0E6F3B] text-white' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                            className: isActive ? 'text-white' : 'text-[#0E6F3B]',
                          })}
                        </div>
                        <div>
                          <div className="text-sm font-bold leading-tight">{link.label}</div>
                          {subtitle && (
                            <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                              {subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#0E6F3B] text-white">
                            {badge}
                          </span>
                        )}
                        <ChevronRight
                          size={16}
                          className={`shrink-0 ${
                            isActive ? 'text-[#0E6F3B]' : 'text-slate-400'
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}

                {/* Direct Calculator Shortcut */}
                <Link
                  href="/#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl text-slate-800 hover:bg-slate-50 transition-all border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Calculator size={18} className="text-[#0E6F3B]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">Payment Calculator</div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                        12 & 24 Months Installment Estimator
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 shrink-0" />
                </Link>
              </div>

              {/* Featured Estates Quick Tap Section */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 block">
                  Popular Estates
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {ESTATES_DATA.slice(0, 4).map((est) => (
                    <Link
                      key={est.id}
                      href={`/estates/${est.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all text-left group"
                    >
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#0E6F3B] truncate">
                        {est.name}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        {est.region} • {est.priceNotice}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Office Location Snippet */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                  <MapPin size={13} className="text-[#0E6F3B]" />
                  <span>Head Office</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Suite 1621, 1st Floor Yemosa Plaza, Egbeda, Lagos
                </p>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200 flex items-center gap-1">
                  <Clock size={11} className="text-[#0E6F3B]" />
                  <span>Mon–Fri: 8:30 AM – 5:00 PM | Sat: 9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Bottom Fixed Action Dock */}
            <div className="p-4 border-t border-slate-200 bg-white space-y-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
              <Link
                href="/book-inspection"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.99]"
              >
                <Calendar size={18} />
                <span>Book Free Site Inspection</span>
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SITE_CONFIG.primaryPhone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  <Phone size={14} className="text-[#0E6F3B]" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Made Easy Homes, I would like to inquire about your estates and schedule an inspection.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs shadow-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


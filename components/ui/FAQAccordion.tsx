'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus, Minus, HelpCircle, MessageCircle, Phone, ArrowRight } from '@/components/ui/Icons';
import { SITE_CONFIG } from '@/data/site';

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
  showContactStrip?: boolean;
  variant?: 'card' | 'bordered' | 'minimal';
  className?: string;
}

export function FAQAccordion({
  items,
  title,
  subtitle,
  badge = 'Help & Clarity',
  allowMultiple = false,
  defaultOpenIndex = 0,
  showContactStrip = true,
  variant = 'card',
  className = '',
}: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null && defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Optional Title Header */}
      {(title || subtitle) && (
        <div className="space-y-2 text-center md:text-left">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]">
              <HelpCircle size={13} />
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Accordion Item Cards */}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          const indexNum = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                isOpen
                  ? 'bg-white border-[#0E6F3B]/40 shadow-md ring-1 ring-[#0E6F3B]/10'
                  : 'bg-white hover:bg-slate-50/70 border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 group transition-colors select-none"
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 mt-0.5 transition-colors ${
                      isOpen
                        ? 'bg-[#0E6F3B] text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-[#e8f5ed] group-hover:text-[#0E6F3B]'
                    }`}
                  >
                    {indexNum}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                      isOpen
                        ? 'text-[#0E6F3B]'
                        : 'text-slate-900 group-hover:text-[#0E6F3B]'
                    }`}
                  >
                    {item.q}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#e8f5ed] text-[#0E6F3B] rotate-180'
                      : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700'
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#fbfdfc] animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="pl-8 sm:pl-10 text-slate-700 font-normal">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Help Action Strip */}
      {showContactStrip && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-[#e8f5ed]/50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <HelpCircle size={18} className="text-[#0E6F3B] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">
                Have a specific question not covered here?
              </span>
              <span className="text-slate-500">
                Our property desk is available Mon – Sat to answer all documentation & inspection queries.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Made Easy Homes, I have a quick question regarding your estates and payment terms.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs transition-colors"
            >
              <span>Contact Page</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

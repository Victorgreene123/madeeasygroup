'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Phone } from './Icons';
import { ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEstateSlug?: string;
}

export function InspectionModal({
  isOpen,
  onClose,
  defaultEstateSlug,
}: InspectionModalProps) {
  const [selectedEstate, setSelectedEstate] = useState<string>(
    defaultEstateSlug || ESTATES_DATA[0].slug
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultEstateSlug) {
      setSelectedEstate(defaultEstateSlug);
    }
  }, [defaultEstateSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const estateObj = ESTATES_DATA.find((e) => e.slug === selectedEstate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#164E48] text-white p-6 sm:p-7">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 mb-2">
            <Calendar size={13} />
            <span>Guided Site Inspection</span>
          </div>
          <h3 className="text-2xl font-bold">Schedule an Estate Visit</h3>
          <p className="mt-1 text-sm text-emerald-100/90 leading-relaxed">
            Free site inspections every Thursday & Saturday. We coordinate transport and dedicated property guide.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-[#e8f5ed] text-[#0E6F3B] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inspection Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our inspection desk has logged your visit to{' '}
                <span className="font-semibold text-slate-900">{estateObj?.name}</span>. A property coordinator will call you shortly on{' '}
                <span className="font-semibold text-slate-900">{phone}</span> to confirm departure location and logistics.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800">Direct Desk Helpline:</div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone size={14} className="text-[#0E6F3B]" />
                  <span>{SITE_CONFIG.primaryPhone} (Calls & WhatsApp)</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full mt-4 py-3 px-5 rounded-lg bg-[#0E6F3B] text-white font-medium hover:bg-[#0b582f] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Estate of Interest *
                </label>
                <div className="relative">
                  <select
                    value={selectedEstate}
                    onChange={(e) => setSelectedEstate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                  >
                    {ESTATES_DATA.map((estate) => (
                      <option key={estate.id} value={estate.slug}>
                        {estate.name} ({estate.location})
                      </option>
                    ))}
                  </select>
                </div>
                {estateObj && (
                  <p className="mt-1.5 text-xs text-slate-500 flex items-center gap-1">
                    <MapPin size={13} className="text-[#0E6F3B]" />
                    {estateObj.location}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adebayo Babatunde"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. adebayo@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Day *
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                  >
                    <option value="">Select inspection day</option>
                    <option value="Upcoming Thursday">Upcoming Thursday (10:00 AM)</option>
                    <option value="Upcoming Saturday">Upcoming Saturday (10:00 AM)</option>
                    <option value="Special Private Weekday">Custom Weekday Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700">
                    <Clock size={16} className="text-[#0E6F3B]" />
                    <span>{preferredTime} Departure</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-lg bg-[#0E6F3B] text-white font-semibold hover:bg-[#0b582f] active:scale-[0.99] transition-all shadow-md shadow-[#0E6F3B]/20"
                >
                  Confirm Free Inspection Booking
                </button>
                <p className="mt-2 text-center text-xs text-slate-500">
                  No fees required. Free transport departs from our Egbeda Head Office.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

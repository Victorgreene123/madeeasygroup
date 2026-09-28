'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Info,
  Building2,
  Users,
  Compass,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from '@/components/ui/Icons';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export function BookInspectionClient() {
  const searchParams = useSearchParams();
  const estateParam = searchParams.get('estate');

  const [selectedEstateSlug, setSelectedEstateSlug] = useState<string>(
    estateParam || ESTATES_DATA[0].slug
  );

  useEffect(() => {
    if (estateParam && ESTATES_DATA.some((e) => e.slug === estateParam)) {
      setSelectedEstateSlug(estateParam);
    }
  }, [estateParam]);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDay, setPreferredDay] = useState('Upcoming Saturday');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [attendees, setAttendees] = useState('1 person');
  const [pickupPoint, setPickupPoint] = useState('Egbeda Head Office (Yemosa Plaza)');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedEstate =
    ESTATES_DATA.find((e) => e.slug === selectedEstateSlug) || ESTATES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setPreferredDay('Upcoming Saturday');
    setPreferredTime('10:00 AM');
    setAttendees('1 person');
    setPickupPoint('Egbeda Head Office (Yemosa Plaza)');
    setNotes('');
    setSubmitted(false);
  };

  const inspectionFaqs = [
    {
      q: 'Are site inspections 100% free?',
      a: 'Yes, absolutely. We do not charge any inspection fees. We organize dedicated, air-conditioned transportation departing from our Egbeda Head Office to the estate and back at zero cost.',
    },
    {
      q: 'Which days of the week are inspections held?',
      a: 'Our standard scheduled group inspections run every Thursday and Saturday at 10:00 AM. If your schedule requires a private or weekday visit, select "Custom Weekday Request" and our team will arrange a tailored schedule.',
    },
    {
      q: 'Can I bring my family, business partner, or independent surveyor?',
      a: 'Yes! We encourage clients to come with trusted decision-makers, family members, or certified surveyors to verify coordinates and survey beacons in real-time.',
    },
    {
      q: 'What should I bring along on inspection day?',
      a: 'We recommend wearing comfortable footwear suitable for walking across terrain, bringing a valid ID, and having any specific questions or dimension requirements you would like our surveyor to explain on-site.',
    },
    {
      q: 'Am I obligated to buy land during the inspection?',
      a: 'Never. Our inspections are zero-pressure and strictly educational. Our goal is to let you assess the neighborhood development, road connectivity, topography, and title legitimacy firsthand.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/estates" className="hover:text-slate-900 transition-colors">
            Estates
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0E6F3B] font-semibold">Book Inspection</span>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="bg-[#164E48] text-white py-8 sm:py-12 relative overflow-hidden border-b border-[#1F7A72]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113a35] via-[#164E48] to-[#1F7A72]/80 opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15 backdrop-blur-md">
            <Calendar size={13} />
            <span>100% Free Guided Site Visits</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Schedule Your Free Site Inspection
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            Experience our gated communities in person. We provide comfortable transportation and dedicated property guides every <strong>Thursday & Saturday</strong> departing from our Egbeda Head Office.
          </p>

          {/* Value Highlights Pill Bar */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-emerald-100">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-300 shrink-0" />
              <span>Free Transport from Egbeda</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-300 shrink-0" />
              <span>Physical Beacon Verification</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={14} className="text-emerald-300 shrink-0" />
              <span>1-on-1 Property Advisor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Booking Form (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10">
              {submitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-[#e8f5ed] text-[#0E6F3B] rounded-full flex items-center justify-center mx-auto border-2 border-[#c3e7d1] shadow-inner">
                    <CheckCircle2 size={44} />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B]">
                      Inspection Request Confirmed
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      We Look Forward to Hosting You, {fullName}!
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your seat reservation for the tour to <strong className="text-slate-900">{selectedEstate.name}</strong> has been logged. Our inspection coordinator will call you shortly on <strong className="text-slate-900">{phone}</strong> to confirm departure logistics.
                    </p>
                  </div>

                  {/* Summary Details Card */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs space-y-3 max-w-lg mx-auto">
                    <div className="font-bold text-slate-800 text-sm border-b border-slate-200 pb-2 flex items-center justify-between">
                      <span>Inspection Reservation Summary</span>
                      <span className="text-[#0E6F3B] bg-[#e8f5ed] px-2 py-0.5 rounded text-[11px]">
                        FREE
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                      <div>
                        <span className="text-slate-500 block text-[11px]">Selected Estate:</span>
                        <strong className="text-slate-900">{selectedEstate.name}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Inspection Day:</span>
                        <strong className="text-slate-900">{preferredDay} ({preferredTime})</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Departure Point:</span>
                        <strong className="text-slate-900">{pickupPoint}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Party Size:</span>
                        <strong className="text-slate-900">{attendees}</strong>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-slate-600 text-[11px]">
                      <MapPin size={14} className="text-[#0E6F3B] shrink-0" />
                      <span>HQ Meeting Point: Suite 1621, 1st Floor Yemosa Plaza, Egbeda, Lagos</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Made Easy Homes, I just scheduled a site inspection to ${selectedEstate.name} on ${preferredDay}. My name is ${fullName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-all active:scale-[0.98] flex items-center gap-2"
                    >
                      <MessageCircle size={16} />
                      <span>Chat With Inspection Desk</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Book Another Visit
                    </button>

                    <Link
                      href="/estates"
                      className="px-5 py-3 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-xs transition-colors"
                    >
                      Browse Estates Catalog
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Reserve Your Inspection Seat
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fill out the details below. We coordinate safe, guided travel and an assigned surveyor for your chosen estate.
                    </p>
                  </div>

                  {/* STEP 1: Select Estate */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      1. Select Estate to Inspect *
                    </label>
                    <select
                      value={selectedEstateSlug}
                      onChange={(e) => setSelectedEstateSlug(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                    >
                      {ESTATES_DATA.map((estate) => (
                        <option key={estate.id} value={estate.slug}>
                          {estate.name} — {estate.location} ({estate.region})
                        </option>
                      ))}
                    </select>

                    {/* Live Estate Preview Card */}
                    {selectedEstate && (
                      <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all">
                        <img
                          src={selectedEstate.images[0]}
                          alt={selectedEstate.name}
                          className="w-full sm:w-28 h-20 object-cover rounded-xl shrink-0"
                        />
                        <div className="space-y-1 text-xs flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 text-sm">
                              {selectedEstate.name}
                            </span>
                            <span className="font-bold text-[#0E6F3B] bg-[#e8f5ed] px-2 py-0.5 rounded text-[11px]">
                              {selectedEstate.priceNotice}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin size={13} className="text-[#0E6F3B]" />
                            <span>{selectedEstate.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600">
                            <ShieldCheck size={13} className="text-[#0E6F3B]" />
                            <span>{selectedEstate.documentation}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* STEP 2: Preferred Schedule & Pickup */}
                  <div className="pt-2 border-t border-slate-100 space-y-4">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      2. Preferred Schedule & Pickup Point
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Inspection Day *
                        </label>
                        <select
                          value={preferredDay}
                          onChange={(e) => setPreferredDay(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                        >
                          <option value="Upcoming Thursday">Upcoming Thursday (10:00 AM)</option>
                          <option value="Upcoming Saturday">Upcoming Saturday (10:00 AM)</option>
                          <option value="Next Week Thursday">Next Week Thursday (10:00 AM)</option>
                          <option value="Next Week Saturday">Next Week Saturday (10:00 AM)</option>
                          <option value="Custom Weekday Request">Custom Weekday Request (Private Tour)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Departure Time
                        </label>
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700">
                          <Clock size={16} className="text-[#0E6F3B]" />
                          <span>10:00 AM Departure (Prompt)</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Pickup Location Preference *
                        </label>
                        <select
                          value={pickupPoint}
                          onChange={(e) => setPickupPoint(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                        >
                          <option value="Egbeda Head Office (Yemosa Plaza)">
                            Egbeda Head Office (Yemosa Plaza)
                          </option>
                          <option value="Direct On-Site Meeting">
                            Direct On-Site Meeting (I will drive myself)
                          </option>
                          <option value="Igando Multi-purpose Market Branch">
                            Igando Branch Service Desk
                          </option>
                          <option value="Ayobo Meboruko Plaza Branch">
                            Ayobo Road Branch Service Desk
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Number of Attendees
                        </label>
                        <select
                          value={attendees}
                          onChange={(e) => setAttendees(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                        >
                          <option value="1 person">Just myself (1 seat)</option>
                          <option value="2 people">2 people (Self + Spouse / Partner)</option>
                          <option value="3 people">3 people (Family / Surveyor)</option>
                          <option value="4+ people">4+ people (Cooperative / Group)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* STEP 3: Contact Details */}
                  <div className="pt-2 border-t border-slate-100 space-y-4">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      3. Your Contact Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Adebayo Babatunde"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Phone Number (Calls & WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 08012345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. adebayo@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Special Requests or Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Looking for a commercial corner-piece plot, bringing independent surveyor, or need payment plan breakdown on-site..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white resize-y"
                      />
                    </div>
                  </div>

                  {/* Submission */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-base shadow-lg shadow-[#0E6F3B]/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Processing Seat Reservation...</span>
                      ) : (
                        <>
                          <Calendar size={18} />
                          <span>Confirm Free Inspection Booking</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                      <ShieldCheck size={15} className="text-[#0E6F3B]" />
                      <span>Zero inspection fee • No hidden costs • 100% verified developer allocation</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Experience Guide & Logistics (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* What to Expect Card */}
            <div className="bg-[#164E48] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Site Tour Blueprint
                </span>
                <h3 className="text-xl font-bold">What to Expect on Inspection Day</h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  We make property inspection straightforward, comfortable, and completely transparent.
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-emerald-50">
                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white block">10:00 AM Prompt Departure</strong>
                    <span className="text-emerald-100/80">
                      Board our vehicle at our Egbeda Head Office (Yemosa Plaza).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white block">Guided Corridor Drive</strong>
                    <span className="text-emerald-100/80">
                      Learn about surrounding growth infrastructure, upcoming expressways, and government zoning.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white block">Physical Beacon Inspection</strong>
                    <span className="text-emerald-100/80">
                      Walk the dry terrain, inspect perimeter gatehouses, and cross-check registered survey beacons.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <strong className="text-white block">Advisory & Zero Pressure Q&A</strong>
                    <span className="text-emerald-100/80">
                      Discuss flexible 12 to 24-month installment options with dedicated property managers.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Desk Line */}
              <div className="pt-3 border-t border-[#1F7A72]/40 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold block">
                  Direct Inspection Desk Helpline:
                </span>
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Phone size={16} className="text-emerald-400" />
                  <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="hover:underline">
                    {SITE_CONFIG.primaryPhone}
                  </a>
                  <span className="text-emerald-400">•</span>
                  <a href="tel:08060441161" className="hover:underline">
                    08060441161
                  </a>
                </div>
              </div>
            </div>

            {/* Departure Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Departure & Meeting Point
              </h4>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Building2 size={18} className="text-[#0E6F3B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm">
                      Made Easy Homes & Properties (Head Office)
                    </strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {SITE_CONFIG.headOffice.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100 text-slate-600">
                  <Clock size={16} className="text-[#0E6F3B] shrink-0" />
                  <span>Departure Days: Thursdays & Saturdays at 10:00 AM prompt</span>
                </div>
              </div>
            </div>

            {/* Inspection FAQs Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <FAQAccordion
                badge="Tour FAQs"
                title="Inspection Day FAQs"
                items={inspectionFaqs}
                showContactStrip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

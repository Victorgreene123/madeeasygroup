'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { ESTATES_DATA } from '@/data/estates';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  MessageCircle,
  Building2,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
} from '@/components/ui/Icons';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export function ContactClient() {
  const [selectedOfficeIndex, setSelectedOfficeIndex] = useState(0);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Estate Inquiry');
  const [selectedEstate, setSelectedEstate] = useState(ESTATES_DATA[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const allOffices = [SITE_CONFIG.headOffice, ...SITE_CONFIG.branchOffices];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous graceful submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setSubject('Estate Inquiry');
    setSelectedEstate(ESTATES_DATA[0].name);
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0E6F3B] font-semibold">Contact & Offices</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#164E48] text-white py-8 sm:py-12 relative overflow-hidden border-b border-[#1F7A72]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113a35] via-[#164E48] to-[#1F7A72]/80 opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15 backdrop-blur-md">
            <Building2 size={13} />
            <span>Customer Advisory & Offices</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl">
            Get in Touch With Our Property Advisors
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            Have questions about an estate, payment plan, or site inspection? Reach out to our dedicated team or visit any of our Lagos branch locations.
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Cards + Interactive Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Action & Office Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Phone size={20} className="text-[#0E6F3B]" />
                <span>Direct Contact Channels</span>
              </h2>

              {/* Phone Numbers */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Call Our Support Lines
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {SITE_CONFIG.phones.map((phoneNum) => (
                    <a
                      key={phoneNum}
                      href={`tel:${phoneNum}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#e8f5ed] border border-slate-200 hover:border-[#0E6F3B]/30 text-slate-800 hover:text-[#0E6F3B] font-semibold text-sm transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone size={16} className="text-slate-400 group-hover:text-[#0E6F3B]" />
                        <span>{phoneNum}</span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-[#0E6F3B] font-medium">
                        Call Now
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Made Easy Homes & Properties, I would like to make an inquiry about your estates and flexible payment plans.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle size={18} />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

              {/* Email */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Official Email Address
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#0E6F3B] hover:underline"
                >
                  <Mail size={16} />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>

              {/* Inspection Routine Note */}
              <div className="p-4 rounded-xl bg-[#e8f5ed] border border-[#c3e7d1] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0E6F3B] uppercase tracking-wider">
                  <Calendar size={15} />
                  <span>Weekly Guided Inspections</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Join our free inspection vehicles every <strong>Thursday & Saturday by 10:00 AM</strong> departing from our Egbeda Head Office.
                </p>
                <Link
                  href="/book-inspection"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6F3B] hover:text-[#0b582f] underline pt-1"
                >
                  <span>Book Free Inspection Seat</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>

            {/* Office Locations Interactive Selector */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin size={18} className="text-[#0E6F3B]" />
                <span>Our Lagos Office Branches</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Click any location below to view the address and operating hours:
              </p>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {allOffices.map((office, idx) => (
                  <button
                    key={office.title}
                    type="button"
                    onClick={() => setSelectedOfficeIndex(idx)}
                    className={`p-2.5 text-left rounded-xl border text-xs font-bold transition-all ${
                      selectedOfficeIndex === idx
                        ? 'bg-[#164E48] text-white border-[#164E48] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="truncate">{office.title}</div>
                    <div
                      className={`text-[10px] font-normal mt-0.5 ${
                        selectedOfficeIndex === idx ? 'text-emerald-200' : 'text-slate-400'
                      }`}
                    >
                      {office.isHeadOffice ? 'Principal Office' : 'Branch Office'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Office Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 mt-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    {allOffices[selectedOfficeIndex].title}
                  </span>
                  {allOffices[selectedOfficeIndex].isHeadOffice && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0E6F3B] text-white">
                      HQ
                    </span>
                  )}
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <MapPin size={16} className="text-[#0E6F3B] shrink-0 mt-0.5" />
                  <span>{allOffices[selectedOfficeIndex].address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 border-t border-slate-200">
                  <Clock size={14} className="text-slate-400" />
                  <span>Monday – Friday: 8:30 AM – 5:00 PM | Sat: 9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="h-16 w-16 bg-[#e8f5ed] text-[#0E6F3B] rounded-full flex items-center justify-center mx-auto border border-[#c3e7d1]">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you for contacting Made Easy Homes & Properties. One of our dedicated property advisors will get back to you within 24 hours at <strong>{phone || email}</strong>.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Send Another Message
                    </button>
                    <Link
                      href="/estates"
                      className="px-5 py-2.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-xs transition-colors"
                    >
                      Browse Estates Catalog
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      Send Us an Inquiry
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fill out the form below to receive detailed estate documentation, pricing structures, or arrange an on-site visit.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Babatunde Adeleke"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 08012345678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Inquiry Purpose
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                      >
                        <option value="Estate Inquiry">Inquire About an Estate</option>
                        <option value="Site Inspection">Schedule Physical Site Inspection</option>
                        <option value="Payment Plan">12/24-Month Installment Plans</option>
                        <option value="Bulk Purchase">Bulk Land / Cooperative Purchase</option>
                        <option value="General Question">General Real Estate Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Estate Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estate of Interest (Optional)
                    </label>
                    <select
                      value={selectedEstate}
                      onChange={(e) => setSelectedEstate(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                    >
                      <option value="General Inquiry">Not sure yet / General recommendation</option>
                      {ESTATES_DATA.map((e) => (
                        <option key={e.id} value={e.name}>
                          {e.name} — {e.location}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Message or Specific Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know your preferred location, plot size, budget expectation, or any questions regarding title documents..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  {/* Submission note */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={16} className="text-[#0E6F3B] shrink-0" />
                    <span>Your privacy is protected. We will never share your contact details.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions on Contact */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <FAQAccordion
          badge="Advisory & Visiting FAQs"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about visiting our offices, documentation pickup, and physical inspections."
          items={[
            {
              q: 'Do I need an appointment to visit your Head Office?',
              a: 'Walk-ins are welcomed Monday through Friday between 8:30 AM and 5:00 PM at Suite 1621, 1st Floor Yemosa Plaza, Egbeda. If you would like a private consultation with a senior property executive, scheduling in advance ensures dedicated attention.',
            },
            {
              q: 'Is there a fee for joining the Thursday or Saturday site inspections?',
              a: 'No! All scheduled site inspections are 100% free of charge. We provide comfortable transportation departing from our Egbeda Head Office to the respective estate locations.',
            },
            {
              q: 'Can I send a representative or surveyor to inspect on my behalf?',
              a: 'Yes, absolutely. Many of our clients in the diaspora or with busy corporate schedules send trusted representatives, family members, or independent certified surveyors to inspect and verify beacon marks.',
            },
            {
              q: 'What official documentation do I receive upon payment commencement?',
              a: 'You receive an official Made Easy Payment Receipt, Contract of Sale, and an Allocation Schedule. Once payment is completed, you receive your physical beacons, site plan, and Deed of Assignment.',
            },
            {
              q: 'How can Nigerians in the diaspora verify land purchases securely?',
              a: 'We offer end-to-end video tour inspections, certified survey coordinate verification, direct bank invoicing to our registered corporate accounts, and courier/digital delivery of all stamped title documents.',
            },
          ]}
          showContactStrip={true}
        />
      </div>
    </div>
  );
}

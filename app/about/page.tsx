import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  Building2,
  Calendar,
  ArrowRight,
  Target,
  Eye,
  Handshake,
  MapPin,
  ChevronRight,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: `About Us | ${SITE_CONFIG.name}`,
  description:
    'Learn about Made Easy Homes & Properties: over 10 years of trusted land and property solutions in Lagos State, specializing in gated and fenced estates with flexible payment plans.',
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description:
      'Learn about Made Easy Homes & Properties: over 10 years of trusted land and property solutions in Lagos State.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#0E6F3B] font-semibold">About Us</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#164E48] text-white py-10 sm:py-14 relative overflow-hidden border-b border-[#1F7A72]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#113a35] via-[#164E48] to-[#1F7A72]/80 opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/15 backdrop-blur-md">
            <Award size={13} />
            <span>Over A Decade of Excellence</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            Making Property Ownership Easier Across Lagos
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
            {SITE_CONFIG.tagline} We are dedicated to providing secured, gated, and documented estates with stress-free installment plans.
          </p>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? 'pt-4 md:pt-0' : ''}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0E6F3B] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Narrative Section: Who We Are */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1]">
              <Building2 size={13} />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Decade of Secured Land & Property Solutions
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>Made Easy Homes & Properties</strong> is the premier real-estate arm of Made Easy Group. Established with a distinct mandate to eliminate the bottlenecks, opacity, and anxieties associated with land acquisition in Lagos, we provide verified, dispute-free landed properties for individuals, cooperatives, and commercial developers.
              </p>
              <p>
                Over the past 10+ years, our operations have anchored on creating <strong>gated and fenced residential communities</strong> situated in strategically positioned growth corridors — spanning Magboro along the Lagos-Ibadan expressway, Epe, Agbowa-Ikorodu, and the bustling Atan-Ota borders.
              </p>
              <p>
                We believe that every working citizen deserves a straightforward, transparent path to genuine property ownership. Through our tailored 12 and 24-month payment structures, we empower buyers to comfortably secure plots while safeguarding their hard-earned capital.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <div className="p-2 rounded-lg bg-[#e8f5ed] text-[#0E6F3B] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Gated & Documented</h3>
                  <p className="text-xs text-slate-600 mt-1">Perimeter fencing, official surveys, and clear Deeds of Assignment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <div className="p-2 rounded-lg bg-[#e8f5ed] text-[#0E6F3B] shrink-0">
                  <Handshake size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Flexible Payments</h3>
                  <p className="text-xs text-slate-600 mt-1">Structured 12 & 24 month installments with zero hidden fees.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
                alt="Made Easy property consultation and advisory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0E6F3B] flex items-center justify-center text-white font-bold">
                    10+
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Years of Proven Delivery</h4>
                    <p className="text-xs text-slate-600">Over 1,000 satisfied land owners allocated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#164E48] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-[#1F7A72]/40 flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 opacity-10 text-white pointer-events-none">
              <Target size={220} />
            </div>
            <div>
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 border border-white/20 mb-6">
                <Target size={26} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Our Mission
              </h3>
              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                To simplify the property ownership journey for everyday Nigerians by delivering verified, secure, gated, and perimeter-fenced estates through transparent processes, accessible pricing, and adaptable payment terms.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-2 text-xs font-semibold text-emerald-200 uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>Accessible • Secure • Documented</span>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md border border-slate-200 flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 opacity-5 text-slate-900 pointer-events-none">
              <Eye size={220} />
            </div>
            <div>
              <div className="h-12 w-12 rounded-2xl bg-[#e8f5ed] flex items-center justify-center text-[#0E6F3B] border border-[#c3e7d1] mb-6">
                <Eye size={26} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                To stand as the most dependable and customer-first land and property development enterprise across Lagos and key South-West emerging cities, empowering families to build generational wealth with total peace of mind.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0E6F3B] uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>Trust • Long-Term Value • Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div id="values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-3">
            <ShieldCheck size={13} />
            <span>Pillars of Conduct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Four guiding principles that shape how we acquire land, document titles, treat our clients, and deliver estates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.coreValues.map((value, idx) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0E6F3B]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-black text-slate-200 group-hover:text-[#0E6F3B]/30 transition-colors mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0E6F3B] transition-colors mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0E6F3B] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Verified Standard</span>
                <CheckCircle2 size={13} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Services We Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-3">
              <Building2 size={13} />
              <span>Full Real Estate Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Beyond land sales, Made Easy Homes & Properties provides end-to-end solutions for property investors and prospective home builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.services.map((svc) => (
              <div
                key={svc.title}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[#0E6F3B]/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="h-11 w-11 rounded-xl bg-[#e8f5ed] text-[#0E6F3B] flex items-center justify-center font-bold">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Made Easy Summary Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-3">
            <Award size={13} />
            <span>The Made Easy Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Investors Choose Made Easy
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Six pillars that safeguard your capital and ensure seamless handover of every acquired plot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.whyChooseUs.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-[#e8f5ed] text-[#0E6F3B] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        <div className="bg-[#164E48] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-xl border border-[#1F7A72]/40">
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-200 border border-white/20">
              <Calendar size={13} />
              <span>Free Guided Site Visits Every Week</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Ready to Inspect Our Gated Estates?
            </h2>
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              Experience the strategic locations, dry topography, and perimeter fencing firsthand. Free guided inspections depart every Thursday and Saturday.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/estates"
                className="px-6 py-3.5 rounded-xl bg-white text-[#164E48] font-bold text-sm shadow-md hover:bg-emerald-50 transition-all flex items-center gap-2"
              >
                <span>Explore Estates</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book an Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

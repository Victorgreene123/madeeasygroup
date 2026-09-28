import React from 'react';
import { SITE_CONFIG } from '@/data/site';
import { ShieldCheck, Calendar, MapPin, Award, Users, Handshake, CheckCircle2 } from '@/components/ui/Icons';

export function WhyMadeEasy() {
  const iconMap: Record<number, React.ReactNode> = {
    0: <ShieldCheck size={24} className="text-[#0E6F3B]" />,
    1: <Calendar size={24} className="text-[#0E6F3B]" />,
    2: <MapPin size={24} className="text-[#0E6F3B]" />,
    3: <Award size={24} className="text-[#0E6F3B]" />,
    4: <Users size={24} className="text-[#0E6F3B]" />,
    5: <Handshake size={24} className="text-[#0E6F3B]" />,
  };

  return (
    <section id="why-made-easy" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-4">
            <ShieldCheck size={13} />
            <span>The Made Easy Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Why Made Easy?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our commitment is simple: eliminate real-estate uncertainty with verified titles, gated boundaries, and realistic payment structures.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.whyChooseUs.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e8f5ed] flex items-center justify-center mb-5">
                  {iconMap[idx]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#0E6F3B]">
                <CheckCircle2 size={13} />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

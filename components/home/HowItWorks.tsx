import React from 'react';
import { SITE_CONFIG } from '@/data/site';
import { ArrowRight, CheckCircle2 } from '@/components/ui/Icons';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-4">
            <span>Seamless Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A clear, four-step journey from initial discovery to holding your verified property deed.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {SITE_CONFIG.processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-3xl font-extrabold text-[#0E6F3B]/30 block mb-2 font-mono">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0E6F3B] flex items-center gap-1">
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

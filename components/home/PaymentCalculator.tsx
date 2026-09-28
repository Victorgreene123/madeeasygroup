'use client';

import React, { useState, useId } from 'react';
import { ESTATES_DATA } from '@/data/estates';
import { Calculator, ArrowRight, Info, CheckCircle2, RotateCcw, Calendar } from '@/components/ui/Icons';
import { useInspection } from '@/components/ui/InspectionProvider';

export function PaymentCalculator({ initialEstateSlug }: { initialEstateSlug?: string }) {
  const { openInspection } = useInspection();
  const defaultEstate =
    ESTATES_DATA.find((e) => e.slug === initialEstateSlug) || ESTATES_DATA[0];

  const [selectedEstateSlug, setSelectedEstateSlug] = useState(defaultEstate.slug);
  const [plotType, setPlotType] = useState<'full' | 'half'>('full');
  const [planMonths, setPlanMonths] = useState<number>(12); // 0 = Outright, 12 = 12 mos, 24 = 24 mos
  const [customDownPayment, setCustomDownPayment] = useState<number | ''>('');

  const currentEstate =
    ESTATES_DATA.find((e) => e.slug === selectedEstateSlug) || ESTATES_DATA[0];

  // Demo base valuation (separated and documented)
  const basePrice =
    plotType === 'full'
      ? currentEstate.demoBasePrice.fullPlot
      : currentEstate.demoBasePrice.halfPlot;

  // Minimum recommended down payment (20%)
  const minDownPayment = Math.round(basePrice * 0.2);

  const effectiveDownPayment =
    typeof customDownPayment === 'number' && customDownPayment > 0
      ? customDownPayment
      : minDownPayment;

  const estimatedBalance = Math.max(0, basePrice - effectiveDownPayment);

  const estimatedMonthly =
    planMonths > 0 ? Math.round(estimatedBalance / planMonths) : 0;

  const formatNaira = (val: number) => {
    return '₦' + val.toLocaleString('en-NG');
  };

  const handleReset = () => {
    setSelectedEstateSlug(ESTATES_DATA[0].slug);
    setPlotType('full');
    setPlanMonths(12);
    setCustomDownPayment('');
  };

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e8f5ed] text-[#0E6F3B] border border-[#c3e7d1] mb-4">
            <Calculator size={13} />
            <span>Interactive Ownership Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Find a Payment Plan That Works for You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Estimate your monthly commitments across our 12 and 24-month installment schedules before your site inspection.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              {/* Estate Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Choose Estate
                </label>
                <select
                  value={selectedEstateSlug}
                  onChange={(e) => {
                    setSelectedEstateSlug(e.target.value);
                    setCustomDownPayment('');
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                >
                  {ESTATES_DATA.map((e) => (
                    <option key={e.id} value={e.slug}>
                      {e.name} — {e.location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plot Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Select Plot Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPlotType('full');
                      setCustomDownPayment('');
                    }}
                    className={`py-3 px-4 rounded-xl text-left border text-sm font-medium transition-all ${
                      plotType === 'full'
                        ? 'border-[#0E6F3B] bg-[#e8f5ed] text-[#0E6F3B] ring-1 ring-[#0E6F3B]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">Full Plot</div>
                    <div className="text-xs text-slate-500 mt-0.5">600 sqm (Residential)</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPlotType('half');
                      setCustomDownPayment('');
                    }}
                    className={`py-3 px-4 rounded-xl text-left border text-sm font-medium transition-all ${
                      plotType === 'half'
                        ? 'border-[#0E6F3B] bg-[#e8f5ed] text-[#0E6F3B] ring-1 ring-[#0E6F3B]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold">Half Plot</div>
                    <div className="text-xs text-slate-500 mt-0.5">300 sqm (Compact)</div>
                  </button>
                </div>
              </div>

              {/* Payment Plan */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Select Payment Duration
                </label>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { label: 'Outright', months: 0, desc: 'Instant allocation' },
                    { label: '12 Months', months: 12, desc: 'Standard plan' },
                    { label: '24 Months', months: 24, desc: 'Maximum flexibility' },
                  ].map((plan) => (
                    <button
                      key={plan.label}
                      type="button"
                      onClick={() => setPlanMonths(plan.months)}
                      className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                        planMonths === plan.months
                          ? 'border-[#0E6F3B] bg-[#e8f5ed] text-[#0E6F3B] ring-1 ring-[#0E6F3B]'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">{plan.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 hidden sm:block">
                        {plan.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Initial Down Payment */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    4. Down Payment (₦)
                  </label>
                  <span className="text-xs text-slate-500">
                    Rec. min (20%): {formatNaira(minDownPayment)}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min={0}
                    max={basePrice}
                    step={50000}
                    placeholder={minDownPayment.toString()}
                    value={customDownPayment}
                    onChange={(e) => {
                      const val = e.target.value === '' ? '' : Number(e.target.value);
                      setCustomDownPayment(val);
                    }}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E6F3B] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Reset button */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset Form</span>
                </button>
              </div>
            </div>

            {/* Calculation Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#164E48] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1F7A72]/40">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 mb-2">
                    Estimation Summary
                  </span>
                  <h3 className="text-xl font-bold">{currentEstate.name}</h3>
                  <p className="text-xs text-emerald-100/80 mt-1">
                    {plotType === 'full' ? 'Full Plot (600sqm)' : 'Half Plot (300sqm)'} •{' '}
                    {planMonths === 0 ? 'Outright' : `${planMonths} Months Installment`}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                      Estimated Balance
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {formatNaira(estimatedBalance)}
                    </div>
                    <div className="text-[11px] text-emerald-100/70 mt-1">
                      After initial deposit of {formatNaira(effectiveDownPayment)}
                    </div>
                  </div>

                  {planMonths > 0 ? (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
                      <div className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                        Estimated Monthly Payment
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 mt-1">
                        {formatNaira(estimatedMonthly)}
                      </div>
                      <div className="text-[11px] text-emerald-100/90 mt-1">
                        Payable monthly across {planMonths} equal installments
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40">
                      <div className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                        Outright Allocation Benefit
                      </div>
                      <div className="text-lg font-bold text-emerald-200 mt-1">
                        Instant Physical Plot Allocation
                      </div>
                      <div className="text-[11px] text-emerald-100/90 mt-1">
                        Zero interest and immediate survey deed processing
                      </div>
                    </div>
                  )}
                </div>

                {/* Clear disclaimer matching content rules */}
                <div className="flex items-start gap-2 text-[11px] text-emerald-100/70 bg-black/20 p-3 rounded-lg leading-relaxed">
                  <Info size={14} className="shrink-0 text-emerald-300 mt-0.5" />
                  <span>
                    Note: Values shown represent structured demo estimates for installment planning. Actual estate prices and discounts are confirmed during site inspection.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={() => openInspection(currentEstate.slug)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#0E6F3B] hover:bg-[#0b582f] text-white font-semibold text-sm transition-all shadow-md active:scale-[0.98]"
                >
                  <Calendar size={16} />
                  <span>Inspect Estate with this Plan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

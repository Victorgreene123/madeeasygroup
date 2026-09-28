'use client';

import React from 'react';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

const HOME_FAQS = [
  {
    q: 'How do I know the land purchased from Made Easy is genuine and dispute-free?',
    a: 'Every estate developed and allocated by Made Easy Homes & Properties is backed by formal registered survey beacons, clean developer acquisition, and verified state title documentation. We guarantee 100% zero third-party encumbrances and zero community harassment (no omo-onile issues).',
  },
  {
    q: 'How does the 12 and 24-month flexible installment plan work?',
    a: 'You can start your property ownership journey with an initial deposit (typically 20%). The remaining balance is divided into equal, interest-free monthly payments over your chosen 12 or 24-month tenure. You receive official payment receipts and allocation milestones with every installment.',
  },
  {
    q: 'When do I get my physical plot allocation and beacons?',
    a: 'Physical allocation is conducted once your documentation criteria or agreed payment threshold is fulfilled. You are invited on-site alongside licensed surveyors to pick your plot, inspect your physical corner-piece beacons, and receive your survey plan.',
  },
  {
    q: 'Can I start construction immediately after allocation?',
    a: 'Yes! Our estates are planned with motorable access roads, solid perimeter demarcation, and dry table topography requiring zero sand-filling. Once your allocation is confirmed and building approval processed, you can commence foundation work immediately.',
  },
  {
    q: 'Are your site inspections truly 100% free of charge?',
    a: 'Yes, completely free. We organize guided inspection excursions every Thursday and Saturday by 10:00 AM departing from our Egbeda Head Office (Yemosa Plaza). We provide free, comfortable transportation to the estate and back with zero obligation to buy.',
  },
  {
    q: 'Can Nigerians living abroad (Diaspora) purchase safely without traveling?',
    a: 'Absolutely. Over 35% of our subscribers reside in the UK, US, Canada, and Europe. We provide video walkthroughs, digital coordinate verification, corporate account invoicing, and direct courier dispatch of stamped title documents to your overseas or local representative address.',
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about buying land, payment plans, physical plot allocations, and legal documentation."
          items={HOME_FAQS}
          showContactStrip={true}
        />
      </div>
    </section>
  );
}

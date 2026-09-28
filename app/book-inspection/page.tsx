import { Metadata } from 'next';
import { Suspense } from 'react';
import { BookInspectionClient } from './BookInspectionClient';
import { SITE_CONFIG } from '@/data/site';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Book a Free Site Inspection | Made Easy Homes & Properties',
  description:
    'Schedule your free, guided estate inspection every Thursday and Saturday. Inspect land topography, verify beacon marks, and consult directly with our property advisors.',
  keywords: [
    'Book land inspection Lagos',
    'Free site inspection Made Easy',
    'Estate visit Magboro Epe Ikorodu Atan',
    'Verified land inspection Lagos',
    'Guided real estate tours Nigeria',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/book-inspection`,
  },
  openGraph: {
    title: 'Schedule a Free Estate Site Inspection | Made Easy Homes & Properties',
    description:
      'Join our guided site tours every Thursday & Saturday. Free transportation departing from our Egbeda Head Office.',
    url: `${SITE_CONFIG.url}/book-inspection`,
    siteName: SITE_CONFIG.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Free Land Inspection | Made Easy Homes',
    description:
      'Inspect genuine estates across Lagos & boundary corridors every Thursday & Saturday.',
  },
};

export default function BookInspectionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Book Inspection', url: '/book-inspection' },
        ]}
      />
      <Suspense
        fallback={
          <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 border-4 border-[#0E6F3B] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-600">Loading inspection planner...</p>
            </div>
          </div>
        }
      >
        <BookInspectionClient />
      </Suspense>
    </>
  );
}

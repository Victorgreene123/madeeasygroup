import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { EstatesClient } from './EstatesClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Gated & Fenced Estates in Lagos | Magboro, Epe, Ikorodu & Atan',
  description:
    'Explore prime landed properties and gated estates across Lagos and Ogun State corridors. 100% dry land with verified surveys, perimeter fencing, and flexible 12 to 24-month installment plans.',
  keywords: [
    'Estates for sale in Lagos',
    'Land in Magboro Lagos',
    'Land for sale in Epe',
    'Gated estates Ikorodu',
    'Land in Atan Ota',
    'Dry land with flexible payment plan',
    'Made Easy Homes & Properties catalog',
    'Commercial and residential plots Lagos',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/estates`,
  },
  openGraph: {
    title: 'Verified Gated Estates Portfolio | Made Easy Homes & Properties',
    description:
      'Browse secure plots in Magboro, Epe, Ikorodu, and Atan-Ota with transparent titles and 12-24 month payment options.',
    url: `${SITE_CONFIG.url}/estates`,
    siteName: SITE_CONFIG.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Gated Estates in Lagos | Made Easy Homes',
    description:
      'Dry land plots in Magboro, Epe, Ikorodu, and Atan-Ota with flexible payment plans.',
  },
};

export default function EstatesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Estates Portfolio', url: '/estates' },
        ]}
      />
      <EstatesClient />
    </>
  );
}

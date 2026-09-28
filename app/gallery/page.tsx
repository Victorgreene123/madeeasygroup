import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { GalleryClient } from './GalleryClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: `Life at Made Easy | Photo Gallery & Estate Development`,
  description: `Explore photo records of Made Easy Homes & Properties estate developments, perimeter fencing, access roads, client inspection tours, and physical plot allocations across Lagos State.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: `Photo Gallery & Estate Milestones | ${SITE_CONFIG.name}`,
    description: `See our verified estate progress, customer handovers, and weekly site inspection tours.`,
    url: `${SITE_CONFIG.url}/gallery`,
    siteName: SITE_CONFIG.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Photo Gallery | Made Easy Homes & Properties`,
    description: `See our verified estate progress, customer handovers, and site inspections.`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery' },
        ]}
      />
      <GalleryClient />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { ContactClient } from './ContactClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: `Contact Us & Office Locations | ${SITE_CONFIG.name}`,
  description: `Get in touch with Made Easy Homes & Properties. Call ${SITE_CONFIG.phones.join(', ')} or visit our Head Office at Yemosa Plaza, Egbeda, Lagos. Book free Thursday & Saturday site inspections.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: `Contact & Office Locations | ${SITE_CONFIG.name}`,
    description: `Connect with Made Easy Homes & Properties. Head office in Egbeda, Lagos with branches in Igando and Ayobo.`,
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Made Easy Homes & Properties`,
    description: `Head Office in Egbeda, Lagos. Call ${SITE_CONFIG.primaryPhone} for real estate inquiries and free site inspection bookings.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact & Office Locations', url: '/contact' },
        ]}
      />
      <ContactClient />
    </>
  );
}

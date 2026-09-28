import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: `Contact Us & Office Locations | ${SITE_CONFIG.name}`,
  description: `Get in touch with Made Easy Homes & Properties. Call ${SITE_CONFIG.phones.join(', ')} or visit our Head Office at Yemosa Plaza, Egbeda, Lagos. Book free Thursday & Saturday site inspections.`,
  openGraph: {
    title: `Contact & Office Locations | ${SITE_CONFIG.name}`,
    description: `Connect with Made Easy Homes & Properties. Head office in Egbeda, Lagos with branches in Igando and Ayobo.`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { GalleryClient } from './GalleryClient';

export const metadata: Metadata = {
  title: `Life at Made Easy | Photo Gallery & Estate Development`,
  description: `Explore photo records of Made Easy Homes & Properties estate developments, perimeter fencing, access roads, client inspection tours, and physical plot allocations across Lagos State.`,
  openGraph: {
    title: `Photo Gallery & Estate Milestones | ${SITE_CONFIG.name}`,
    description: `See our verified estate progress, customer handovers, and weekly site inspection tours.`,
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';
import { EstateDetailsClient } from './EstateDetailsClient';
import {
  BreadcrumbJsonLd,
  RealEstateListingJsonLd,
} from '@/components/seo/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ESTATES_DATA.map((estate) => ({
    slug: estate.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const estate = ESTATES_DATA.find((e) => e.slug === slug);

  if (!estate) {
    return {
      title: 'Estate Not Found | Made Easy Homes & Properties',
    };
  }

  const pageUrl = `${SITE_CONFIG.url}/estates/${estate.slug}`;

  return {
    title: `${estate.name} | Gated Estate in ${estate.location}`,
    description: `${estate.shortDescription} Located at ${estate.location}. Flexible 12 to 24-month payment plans, perimeter fencing, and verified documentation.`,
    keywords: [
      estate.name,
      `Land for sale in ${estate.region}`,
      `Estate in ${estate.location}`,
      'Gated land Lagos',
      'Flexible installment land Lagos',
      'Made Easy estates',
      ...estate.landmarks,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${estate.name} | ${estate.location}`,
      description: estate.shortDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      locale: 'en_NG',
      type: 'article',
      images: estate.images.map((img) => ({
        url: img,
        alt: `${estate.name} Layout and Inspection View`,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${estate.name} | ${estate.location}`,
      description: estate.shortDescription,
      images: estate.images.slice(0, 1),
    },
  };
}

export default async function EstateDetailsPage({ params }: Props) {
  const { slug } = await params;
  const estate = ESTATES_DATA.find((e) => e.slug === slug);

  if (!estate) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Estates', url: '/estates' },
          { name: estate.name, url: `/estates/${estate.slug}` },
        ]}
      />
      <RealEstateListingJsonLd estate={estate} />
      <EstateDetailsClient estate={estate} />
    </>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ESTATES_DATA } from '@/data/estates';
import { SITE_CONFIG } from '@/data/site';
import { EstateDetailsClient } from './EstateDetailsClient';

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

  return {
    title: `${estate.name} | Gated Estate in ${estate.location} | Made Easy`,
    description: `${estate.shortDescription} Located at ${estate.location}. Flexible 12-24 month payment options, perimeter fencing, approved survey deeds.`,
    openGraph: {
      title: `${estate.name} — ${estate.location}`,
      description: estate.shortDescription,
      images: estate.images[0] ? [{ url: estate.images[0] }] : undefined,
    },
  };
}

export default async function EstateDetailsPage({ params }: Props) {
  const { slug } = await params;
  const estate = ESTATES_DATA.find((e) => e.slug === slug);

  if (!estate) {
    notFound();
  }

  return <EstateDetailsClient estate={estate} />;
}

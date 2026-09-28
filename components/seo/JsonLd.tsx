import React from 'react';
import { SITE_CONFIG } from '@/data/site';
import { Estate } from '@/data/estates';

/**
 * Organization / RealEstateAgent Structured Data
 */
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'Organization'],
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: 'Made Easy Homes & Properties Limited',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: `+234${SITE_CONFIG.whatsappNumber.slice(3)}`,
    email: SITE_CONFIG.email,
    priceRange: '₦₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.headOffice.address,
      addressLocality: 'Egbeda, Alimosho',
      addressRegion: 'Lagos State',
      postalCode: '100276',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.6018,
      longitude: 3.2921,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:30',
        closes: '17:30',
      },
    ],
    department: SITE_CONFIG.branchOffices.map((branch) => ({
      '@type': 'LocalBusiness',
      name: `${SITE_CONFIG.name} - ${branch.title}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: branch.address,
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        addressCountry: 'NG',
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Structured Data with Search Action
 */
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.subheadline,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/estates?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Structured Data
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Structured Data
 */
export interface FaqItem {
  q: string;
  a: string;
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * RealEstateListing / SingleFamilyResidence / Place Structured Data
 */
export function RealEstateListingJsonLd({ estate }: { estate: Estate }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Place', 'RealEstateListing'],
    name: estate.name,
    description: estate.fullDescription,
    url: `${SITE_CONFIG.url}/estates/${estate.slug}`,
    image: estate.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: estate.location,
      addressLocality: estate.region,
      addressRegion: 'Lagos / Ogun Corridor',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: estate.region === 'Epe' ? 6.5841 : estate.region === 'Magboro' ? 6.6908 : 6.6194,
      longitude: estate.region === 'Epe' ? 3.9835 : estate.region === 'Magboro' ? 3.4474 : 3.5105,
    },
    amenityFeature: estate.features.map((feature) => ({
      '@type': 'LocationFeatureSpecification',
      name: feature,
      value: true,
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'NGN',
      lowPrice: estate.demoBasePrice.halfPlot,
      highPrice: estate.demoBasePrice.fullPlot,
      offerCount: estate.plotTypes.length,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

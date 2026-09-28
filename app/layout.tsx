import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InspectionProvider } from '@/components/ui/InspectionProvider';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SITE_CONFIG } from '@/data/site';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: '#164E48',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Gated & Fenced Estates in Lagos`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.tagline} ${SITE_CONFIG.subheadline}`,
  keywords: [
    'Land for sale in Lagos',
    'Gated estates in Lagos',
    'Land with flexible payment plans',
    'Estates in Magboro',
    'Estates in Atan Ota',
    'Land in Epe Lagos',
    'Commercial land Ikorodu',
    'Made Easy Homes & Properties',
    'Affordable land in Lagos Nigeria',
    'Deed of Assignment land Lagos',
    'Free site inspection Lagos land',
    'Buy verified land in Nigeria diaspora',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Affordable & Secured Property Ownership`,
    description: SITE_CONFIG.subheadline,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: `${SITE_CONFIG.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Gated Estates Across Lagos`,
    description: SITE_CONFIG.subheadline,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full scroll-smooth`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-[#111827] antialiased selection:bg-[#0E6F3B] selection:text-white">
        <InspectionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </InspectionProvider>
      </body>
    </html>
  );
}

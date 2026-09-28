import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InspectionProvider } from '@/components/ui/InspectionProvider';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SITE_CONFIG } from '@/data/site';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Gated & Fenced Estates in Lagos`,
  description: `${SITE_CONFIG.tagline} ${SITE_CONFIG.subheadline}`,
  keywords: [
    'Land for sale in Lagos',
    'Gated estates in Lagos',
    'Land with flexible payment plans',
    'Estates in Magboro',
    'Estates in Atan',
    'Land in Epe',
    'Made Easy Homes & Properties',
    'Affordable land in Lagos',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Affordable & Secured Property Ownership`,
    description: SITE_CONFIG.subheadline,
    type: 'website',
    locale: 'en_NG',
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

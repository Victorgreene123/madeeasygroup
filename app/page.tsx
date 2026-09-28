import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { FeaturedEstates } from '@/components/home/FeaturedEstates';
import { WhyMadeEasy } from '@/components/home/WhyMadeEasy';
import { PaymentCalculator } from '@/components/home/PaymentCalculator';
import { HowItWorks } from '@/components/home/HowItWorks';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Locations } from '@/components/home/Locations';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FaqJsonLd } from '@/components/seo/JsonLd';

const HOME_FAQS_SCHEMA = [
  {
    q: 'How do I know the land purchased from Made Easy is genuine and dispute-free?',
    a: 'Every estate developed and allocated by Made Easy Homes & Properties is backed by formal registered survey beacons, clean developer acquisition, and verified state title documentation. We guarantee 100% zero third-party encumbrances and zero community harassment.',
  },
  {
    q: 'How does the 12 and 24-month flexible installment plan work?',
    a: 'You can start your property ownership journey with an initial deposit (typically 20%). The remaining balance is divided into equal monthly payments over your chosen 12 or 24-month tenure with complete transparency.',
  },
  {
    q: 'When do I get my physical plot allocation and beacons?',
    a: 'Physical allocation is conducted once your documentation criteria or agreed payment threshold is fulfilled. You are invited on-site alongside licensed surveyors to pick your plot, inspect your physical corner-piece beacons, and receive your survey plan.',
  },
  {
    q: 'Can I start construction immediately after allocation?',
    a: 'Yes! Our estates are planned with motorable access roads, solid perimeter demarcation, and dry table topography requiring zero sand-filling.',
  },
  {
    q: 'Are your site inspections truly 100% free of charge?',
    a: 'Yes, completely free. We organize guided inspection excursions every Thursday and Saturday by 10:00 AM departing from our Egbeda Head Office (Yemosa Plaza).',
  },
  {
    q: 'Can Nigerians living abroad (Diaspora) purchase safely without traveling?',
    a: 'Absolutely. Over 35% of our subscribers reside in the UK, US, Canada, and Europe. We provide video walkthroughs, digital coordinate verification, corporate account invoicing, and direct courier dispatch of stamped title documents.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FaqJsonLd faqs={HOME_FAQS_SCHEMA} />
      <Hero />
      <Stats />
      <FeaturedEstates />
      <WhyMadeEasy />
      <PaymentCalculator />
      <HowItWorks />
      <AboutPreview />
      <Locations />
      <GalleryPreview />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

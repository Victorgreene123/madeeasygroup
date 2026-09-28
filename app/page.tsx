import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { FeaturedEstates } from '@/components/home/FeaturedEstates';
import { WhyMadeEasy } from '@/components/home/WhyMadeEasy';
import { PaymentCalculator } from '@/components/home/PaymentCalculator';
import { HowItWorks } from '@/components/home/HowItWorks';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Locations } from '@/components/home/Locations';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <FeaturedEstates />
      <WhyMadeEasy />
      <PaymentCalculator />
      <HowItWorks />
      <AboutPreview />
      <Locations />
      <GalleryPreview />
      <FinalCTA />
    </div>
  );
}

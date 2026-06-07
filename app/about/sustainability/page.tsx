import { Metadata } from 'next';
import SustainabilityHero from '@/components/SustainabilityHero';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sustainability | Contemporary Group Limited',
  description: 'Our commitment to business sustainability. At Contemporary Group we are committed to sustainable practices in support of business sustainability, from eco-friendly materials to energy efficiency.',
};

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <SustainabilityHero />
      <CTA />
      <Footer />
    </main>
  );
}

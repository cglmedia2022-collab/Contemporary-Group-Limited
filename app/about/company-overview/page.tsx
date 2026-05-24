import { Metadata } from 'next';
import AboutHero from '@/components/AboutHero';
import Sectors from '@/components/Sectors';
import CoreOperations from '@/components/CoreOperations';
import Awards from '@/components/Awards';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Company Overview | Contemporary Group Limited',
  description: 'Contemporary Group Limited is a dynamic leader in the construction industry, shaping the future of the built environment since 1990.',
};

export default function CompanyOverviewPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHero />
      <Sectors />
      <CoreOperations />
      <Awards />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

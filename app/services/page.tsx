import { Metadata } from 'next';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Our Services | Contemporary Group Limited',
  description: 'We offer a comprehensive range of services within the construction value chain, providing clients with a single point of responsibility for quality and performance.',
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <Blog/>
      <CTA />
      <Footer />
    </main>
  );
}

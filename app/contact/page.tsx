import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Contact Us | Contemporary Group Limited',
  description: 'Get in touch with Contemporary Group Limited. Send us a message and we will get back to you within 24 hours.',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactForm />
      <CTA/>
      <Footer />
    </main>
  );
}

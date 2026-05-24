import { Metadata } from "next";
import TechnicalPartnersHero from "@/components/TechnicalPartnersHero";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technical Partners | Contemporary Group Limited",
  description:
    "Explore the leading technical partners collaborating with Contemporary Group Limited to deliver comprehensive engineering solutions.",
};

export default function TechnicalPartnersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <TechnicalPartnersHero />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

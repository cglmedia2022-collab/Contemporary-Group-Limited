import { Metadata } from "next";
import MembersHero from "@/components/MembersHero";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Members of Group | Contemporary Group Limited",
  description:
    "Explore the five specialized subsidiaries of Contemporary Group Limited — from architectural consultancy and property development to international trade and offshore investment.",
};

export default function MembersOfGroupPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MembersHero />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

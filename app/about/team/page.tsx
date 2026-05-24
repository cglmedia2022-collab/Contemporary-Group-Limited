import { Metadata } from "next";
import TeamHero from "@/components/TeamHero";
import GeneralStaff from "@/components/GeneralStaff";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team Management & Staff | Contemporary Group Limited",
  description:
    "Meet the key management staff driving project excellence and operational efficiency at Contemporary Group Limited — a team built on expertise, integrity, and decades of combined experience.",
};

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <TeamHero />
      <GeneralStaff />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

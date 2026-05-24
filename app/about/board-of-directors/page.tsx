import { Metadata } from "next";
import BoardHero from "@/components/BoardHero";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Board of Directors | Contemporary Group Limited",
  description:
    "Meet the nine-member Board of Directors of Contemporary Group Limited — the leadership team behind our vision, mission, and three decades of architectural excellence in West Africa.",
};

export default function BoardOfDirectorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BoardHero />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

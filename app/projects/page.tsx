import { Metadata } from "next";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsFilter from "@/components/ProjectsFilter";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects Portfolio | Contemporary Group Limited",
  description:
    "Explore the extensive portfolio of Contemporary Group Limited, featuring landmarks of excellence across aviation, healthcare, hospitality, education, commercial, industrial, and public sectors.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProjectsHero />
      <ProjectsFilter />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

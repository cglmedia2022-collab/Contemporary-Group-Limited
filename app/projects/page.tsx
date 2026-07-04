import { Metadata } from "next";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsFilter from "@/components/ProjectsFilter";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/fetchData";

export const metadata: Metadata = {
  title: "Projects Portfolio | Contemporary Group Limited",
  description:
    "Explore the extensive portfolio of Contemporary Group Limited, featuring landmarks of excellence across aviation, healthcare, hospitality, education, commercial, industrial, and public sectors.",
};

export default async function ProjectsPage() {
  const dbProjects = await getProjects();
  const allProjects = [...dbProjects];

  return (
    <main className="flex flex-col min-h-screen">
      <ProjectsHero />
      <ProjectsFilter allProjects={allProjects} />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}

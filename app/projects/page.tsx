import { Metadata } from "next";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsFilter from "@/components/ProjectsFilter";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/fetchData";

const staticProjects = [
  { title: "Asaba International Airport", client: "Delta State Government", category: "Aviation", image: "/HeroCarousel/asabaAirport.webp" },
  { title: "Advanced Diagnostics Medical Centre", client: "Owa Alero, Delta State", category: "Healthcare", image: "/project-villa.png" },
  { title: "Hilton Garden Inn", client: "Lagos", category: "Hospitality & Leisure", image: "/HeroCarousel/Orchid-Hotels.jpg" },
  { title: "Orchid Hotel", client: "Asaba & Lagos", category: "Hospitality & Leisure", image: "/HeroCarousel/sheraton.jpg" },
  { title: "Leisure Park & Film Village", client: "Asaba, Delta State", category: "Hospitality & Leisure", image: "/HeroCarousel/v1-Copy-2.png" },
  { title: "State Pavilions and Shop Arcade", client: "Delta State", category: "Public Spaces", image: "/HeroCarousel/ICC-1.png" },
  { title: "University of Agriculture Abeokuta", client: "Federal Government", category: "Education", image: "/pillars-structure.png" },
  { title: "Dennis Osadebe University Master Plan", client: "Delta State", category: "Education", image: "/pillars-structure.png" },
  { title: "Nigerian Law School", client: "Enugu, Yenagoa, Bwari", category: "Education", image: "/pillars-structure.png" },
  { title: "Zenith Bank Branches Nationwide", client: "Zenith Bank PLC", category: "Commercial", image: "/service-architecture.png" },
  { title: "Gloworld Buildings", client: "Globacom", category: "Commercial", image: "/service-interior.png" },
  { title: "Ebeano Mall", client: "Lekki", category: "Commercial", image: "/service-architecture.png" },
  { title: "Port Harcourt Refinery Branch", client: "Equitorial Bank PLC", category: "Industrial", image: "/HeroCarousel/oil and gas.jpg" },
  { title: "Industrial Park", client: "Asaba, Delta State", category: "Industrial", image: "/HeroCarousel/oil and gas.jpg" },
  { title: "Factory complex for Leventis Group", client: "Leventis Group", category: "Industrial", image: "/HeroCarousel/oil and gas.jpg" },
  { title: "Luxury Flats at Queens Drive", client: "Ikoyi, Lagos", category: "Residential", image: "/project-villa.png" },
  { title: "100 Housing Units", client: "Delta State Government", category: "Residential", image: "/project-villa.png" },
  { title: "Delta State Central Secretariat", client: "Prof. Chike Edozien", category: "Public Buildings", image: "/State-secretariat-4.png" },
  { title: "State Traditional Rulers Council", client: "Asaba, Delta State", category: "Public Buildings", image: "/State-secretariat.png" },
  { title: "Governor's Office Complex", client: "Gombe State", category: "Public Buildings", image: "/pillars-structure.png" },
];

export const metadata: Metadata = {
  title: "Projects Portfolio | Contemporary Group Limited",
  description:
    "Explore the extensive portfolio of Contemporary Group Limited, featuring landmarks of excellence across aviation, healthcare, hospitality, education, commercial, industrial, and public sectors.",
};

export default async function ProjectsPage() {
  const dbProjects = await getProjects();
  const mappedStaticProjects = staticProjects.map((p, i) => ({
    ...p,
    id: `static-${i}`,
    slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  }));
  const allProjects = [...dbProjects, ...mappedStaticProjects];

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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Aviation",
  "Healthcare",
  "Hospitality & Leisure",
  "Public Spaces",
  "Education",
  "Commercial",
  "Industrial",
  "Residential",
  "Public Buildings"
];

// Curated list of projects mapped from the brochure to the requested categories
const projects = [
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

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-gotham text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-brand-primary text-white border-brand-primary"
                  : "bg-transparent text-foreground/60 border-neutral-200 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Card */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge overlay on hover */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full font-gotham text-[10px] uppercase tracking-widest text-brand-primary font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Text Info */}
                <div className="px-2">
                  <h3 className="font-gotham text-lg font-bold text-foreground leading-snug group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/50 mt-1">
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

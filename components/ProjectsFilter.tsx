"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { pastProjectsList } from "@/lib/pastProjects";

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

interface ProjectData {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  image: string;
}

export default function ProjectsFilter({ allProjects }: { allProjects: ProjectData[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPastProjects, setShowPastProjects] = useState(false);

  const filteredProjects = allProjects.filter(
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
                key={project.id || project.title}
                className="group flex flex-col"
              >
                <Link href={`/projects/${project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")}`} className="cursor-pointer block h-full">
                  {/* Image Card */}
                  <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 mb-5">
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowPastProjects(!showPastProjects)}
            className="px-8 py-3 rounded-full font-gotham text-xs uppercase tracking-widest border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
          >
            {showPastProjects ? "Hide More Projects" : "Load More Projects"}
          </button>
        </div>

        {/* Past Projects List */}
        <AnimatePresence>
          {showPastProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-16 border-t border-neutral-200 pt-16">
                <div className="flex flex-col items-center mb-12">
                  <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight text-center text-foreground">
                    Other Notable Projects
                  </h2>
                  <p className="font-sans text-foreground/60 text-center max-w-2xl mt-4">
                    A selection of our extensive portfolio of projects delivered over the years across various sectors.
                  </p>
                </div>
                
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-8">
                  {pastProjectsList.map((categoryGroup) => (
                    <div key={categoryGroup.category} className="mb-12 inline-block w-full break-inside-avoid">
                      <h3 className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-bold border-b border-brand-primary/20 pb-3 mb-4">
                        {categoryGroup.category}
                      </h3>
                      <ul className="space-y-3">
                        {categoryGroup.items.map((item, idx) => (
                          <li key={idx} className="font-sans text-sm text-foreground/80 leading-relaxed flex items-start gap-2">
                            <span className="text-brand-primary mt-1 text-[10px]">■</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "Aviation",
    description: "Designing state-of-the-art terminal buildings and aviation infrastructure for seamless travel experiences.",
    image: "/Herocarousel/asabaAirport.webp"
  },
  {
    title: "Commercial",
    description: "Creating innovative workspaces and retail environments that drive business growth and employee well-being.",
    image: "/Herocarousel/v1-Copy-2.png"
  },
  {
    title: "Education",
    description: "Building inspiring learning environments that foster creativity, focus, and academic excellence.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare",
    description: "Developing advanced medical facilities focused on patient care, safety, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hospitality",
    description: "Designing luxurious hotels and resorts that offer unforgettable experiences and world-class comfort.",
    image: "/Herocarousel/Orchid-Hotels.jpg"
  },
  {
    title: "Industrial",
    description: "Engineering robust industrial complexes, warehouses, and manufacturing plants for maximum productivity.",
    image: "/Herocarousel/oil and gas.jpg"
  },
  {
    title: "Public Buildings",
    description: "Creating monumental civic structures that serve communities and stand as architectural landmarks.",
    image: "/Herocarousel/ICC-1.png"
  },
  {
    title: "Residential",
    description: "Crafting beautiful, sustainable living spaces ranging from luxury apartments to comprehensive housing estates.",
    image: "/Herocarousel/image-46.png"
  }
];

export default function Sectors() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold">
              SECTORS
            </span>
            <h2 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Industries We Serve
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
              Delivering world-class architectural solutions, construction excellence, and sustainable developments across West Africa.
            </p>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={sector.image} 
                alt={sector.title}
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Centered Title */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="font-gotham text-xl md:text-2xl font-bold text-white text-center transition-transform duration-500 group-hover:-translate-y-6">
                  {sector.title}
                </h3>
              </div>
              
              {/* Hover Description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

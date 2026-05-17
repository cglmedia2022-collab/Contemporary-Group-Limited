"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Arch Design",
      desc: "From initial concept development, visual scripting, and schematic layout plans.",
      img: "/service-architecture.png"
    },
    {
      num: "02",
      title: "Interior Design",
      desc: "Creating bespoke, cohesive interior spaces with meticulous attention to detail.",
      img: "/service-interior.png"
    },
    {
      num: "03",
      title: "Urban Planning",
      desc: "Designing the fluid spaces between outdoor landscape elements and modern structures.",
      img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      title: "Project Manage",
      desc: "Overseeing, auditing, and executing technical precision across all construction phases.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="w-full flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              Our Capabilities
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
              Services We Provide
            </h2>
          </div>
          
          {/* Navigation Arrows (Custom SVGs) */}
          <div className="flex gap-4 items-center">
            <button className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white dark:hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer space-y-4"
            >
              {/* Image Container with zoom hover */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Number Overlay */}
                <div className="absolute top-6 left-6 font-gotham text-sm font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 select-none">
                  {service.num}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1.5 px-2">
                <h3 className="font-gotham text-base font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-foreground/60 leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

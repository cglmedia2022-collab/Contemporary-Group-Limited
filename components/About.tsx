"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "30+", label: "Years of Collaborative Excellence" },
    { number: "250+", label: "Landmark Developments Completed" },
    { number: "5", label: "Strategic Business Units" },
    { number: "2", label: "Global Operations (Nigeria & Canada)" }
  ];

  const pillars = [
    {
      title: "Highest Quality Standards",
      desc: "We adhere to rigorous international benchmarks in every design and construction phase.",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Exceptional Safety Specifications",
      desc: "Safety is not just a protocol; it is the foundation of our operational philosophy.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Modern Technical Expertise",
      desc: "Leveraging cutting-edge technology and sustainable practices to build for the future.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const subsidiaries = [
    {
      name: "Contemporary Design Associates",
      desc: "Premier architectural consultancy, visual scripting, and schematic layout plans.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Contemporary Properties Limited",
      desc: "Luxury residential developments, property management, and premium real estate solutions.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Conwave Ventures Limited",
      desc: "Bespoke engineering solutions, technology integration, and concrete structures.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Contemporary Ventures & Resources",
      desc: "Global investments, project resource management, and international operations.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* SECTION 1: Header & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Left: About Intro */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              About the Group
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              A Legacy of Innovation <br />
              <span className="text-brand-primary">&amp; Integrity.</span>
            </h2>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed text-justify max-w-2xl">
              Contemporary Group Limited (CGL) stands as a distinguished force within Nigeria’s construction landscape, orchestrating end-to-end solutions across the industry value chain. For over three decades, the Group has woven its legacy through more than 250 completed projects—each a testament to precision, resilience, and visionary craftsmanship.
            </p>
            <p className="font-sans text-xs text-foreground/50 leading-relaxed text-justify max-w-2xl italic border-l-2 border-brand-primary pl-4">
              "Dedicated to creating the best building solutions for enduring value and industry-leading performance."
            </p>
          </div>

          {/* Right: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-1"
              >
                <span className="font-gotham text-4xl md:text-5xl font-black text-brand-primary tracking-tight">
                  {stat.number}
                </span>
                <p className="font-sans text-[11px] uppercase tracking-wider text-foreground/60 leading-snug font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Core Pillars (Pasted Image Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 pt-20 border-t border-neutral-200/50 dark:border-neutral-800/50">
          
          {/* Left Column: Heading, description, and large transparent wireframe */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full gap-12">
            <div className="space-y-6">
              <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
                Our Foundation
              </span>
              <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
                Building for Enduring <br />
                <span className="text-brand-primary">Value &amp; Performance</span>
              </h2>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed text-justify max-w-xl">
                Through its strategic pillars, CGL delivers an integrated suite of services that harmonize design excellence, sustainable development, and operational efficiency. We champioin innovation while honoring the timeless principles that define exceptional construction.
              </p>
            </div>

            {/* Wireframe timber/roof frame structure cutout exactly like the inspiration! */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full aspect-[2/1] max-w-lg dark:brightness-100 brightness-90 hover:scale-102 transition-transform duration-500 select-none pointer-events-none"
            >
              <Image
                src="/pillars-structure.png"
                alt="Architectural timber truss structure cutout"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </motion.div>
          </div>

          {/* Right Column: Stacked horizontal dark pill cards exactly like inspiration */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex items-center gap-6 p-4 rounded-3xl bg-neutral-950 text-white border border-white/10 hover:border-brand-primary transition-all duration-300 shadow-xl group cursor-default"
              >
                {/* Left: Cropped B&W Image */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-white/10">
                  <Image
                    src={pillar.img}
                    alt={pillar.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="80px"
                  />
                </div>
                
                {/* Right: Text Content */}
                <div className="space-y-1 pr-2">
                  <h4 className="font-gotham text-xs uppercase tracking-wider text-brand-primary font-bold">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-[11px] text-white/70 leading-relaxed text-justify">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* SECTION 3: Strategic Subsidiaries (Redesigned with Photos) */}
        <div className="pt-20 border-t border-neutral-200/50 dark:border-neutral-800/50 space-y-16">
          <div className="space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              Corporate ecosystem
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
              Strategic Subsidiaries
            </h2>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed max-w-2xl">
              CGL shape skylines and redefine standards across our integrated corporate ecosystem. Our subsidiaries collaborate seamlessly to deliver end-to-end architectural, engineering, and resource solutions.
            </p>
          </div>

          {/* Subsidiaries Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subsidiaries.map((sub, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group cursor-pointer relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex flex-col justify-end p-6 border border-neutral-200/20 dark:border-neutral-800/20"
              >
                {/* Background Image with hover scale */}
                <Image
                  src={sub.img}
                  alt={sub.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent group-hover:via-neutral-950/60 transition-all duration-300" />
                
                {/* Info Content */}
                <div className="relative z-10 space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-gotham text-sm font-bold text-white leading-tight">
                    {sub.name}
                  </h3>
                  <p className="font-sans text-[10px] text-white/60 leading-relaxed text-justify opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-100">
                    {sub.desc}
                  </p>
                  
                  {/* Arrow Indicator */}
                  <div className="flex justify-end pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-150">
                    <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

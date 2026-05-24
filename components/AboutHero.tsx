"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  const stats = [
    { value: "30+", label: "Years of Industry Leadership" },
    { value: "200+", label: "Landmark Projects Delivered" },
    { value: "5", label: "Strategic Subsidiary Companies" },
    { value: "100%", label: "Commitment to Quality & Safety" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Text Section (About Us section) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12 md:mb-16">
          {/* Left Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-4"
          >
            <span className="font-gotham text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-2">
              Company Overview
            </span>
            <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Shaping the Future of the Built Environment Since 1990.
            </h1>
          </motion.div>
          
          {/* Right Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 pb-2"
          >
            <p className="font-sans text-sm md:text-base text-foreground/75 leading-relaxed">
              Contemporary Group Limited is a dynamic leader in the construction industry, dedicated to creating the best building solutions for enduring value. Our journey began with a vision to provide unique solutions for exceptional projects, and today, we lead the industry in innovation and sustainability.
            </p>
          </motion.div>
        </div>

        {/* Large Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[400px] md:h-[600px] lg:h-[500px] w-full rounded-4xl md:rounded-[3rem] overflow-hidden shadow-xl mb-16 md:mb-24"
        >
          <Image
            src="/Herocarousel/v1-Copy-2.png"
            alt="Contemporary Group Limited - Shaping the Built Environment"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Statistics Section (Moved directly under the About Us top section/image) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-32">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h3 className="font-gotham text-4xl md:text-5xl font-medium text-foreground tracking-tight">
                {stat.value}
              </h3>
              <p className="font-sans text-xs md:text-sm text-foreground/50 max-w-[160px] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission and Vision Section (Side-by-side images with overlaid white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[550px] w-full rounded-4xl overflow-hidden shadow-lg group bg-neutral-100"
          >
            <Image
              src="/Herocarousel/ICC-1.png"
              alt="Our Mission"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            
            {/* White Text Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white rounded-3xl p-2 md:p-4 shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <h3 className="font-gotham text-sm md:text-base font-bold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="font-sans text-xs md:text-sm text-foreground/70 leading-relaxed">
                To deliver world-class architectural and construction services that exceed client expectations while fostering sustainable development in Africa.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] md:h-[550px] w-full rounded-4xl overflow-hidden shadow-lg group bg-neutral-100"
          >
            <Image
              src="/Herocarousel/Orchid-Hotels.jpg"
              alt="Our Vision"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />

            {/* White Text Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white rounded-3xl p-2 md:p-4 shadow-xl transition-transform duration-500 hover:-translate-y-2">
              <h3 className="font-gotham text-sm md:text-base font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="font-sans text-xs md:text-sm text-foreground/70 leading-relaxed">
                To be the most trusted and innovative architectural consultancy and property development group in the West African sub-region.
              </p>
            </div>
          
          
      </motion.div>

        </div>

      </div>
    </section>
  );
}

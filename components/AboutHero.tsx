"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

export default function AboutHero() {
  const stats = [
    { value: "30+", label: "Years of Industry Leadership" },
    { value: "250+", label: "Landmark Projects Delivered" },
    { value: "5", label: "Strategic Subsidiary Companies" },
    { value: "100%", label: "Commitment to Quality & Safety" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Hero Section (Side-by-side Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left Column: Headline and Paragraph */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="font-gotham text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-3">
                Company Overview
              </span>
              <h1 className="font-gotham text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Shaping the Future of the Built Environment Since 1990.
              </h1>
            </div>
            
            <p className="font-sans text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl pt-2">
              Contemporary Group Limited is a dynamic leader in the construction industry, dedicated to creating the best building solutions for enduring value. Our journey began with a vision to provide unique solutions for exceptional projects, and today, we lead the industry in innovation and sustainability.
            </p>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative h-96 sm:h-112.5 md:h-125 lg:h-137.5 w-full rounded-xl md:rounded-2xl overflow-hidden"
          >
            <Image
              src="/WildCardPictures/CGL-Building-cropped.jpg"
              alt="Contemporary Group Limited - Shaping the Built Environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

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
                <Counter target={stat.value} />
              </h3>
              <p className="font-sans text-xs md:text-sm text-foreground/50 max-w-40 leading-relaxed">
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
            className="relative h-112.5 md:h-137.5 w-full rounded-4xl overflow-hidden shadow-lg group bg-neutral-100"
          >
            <Image
              src="/HeroCarousel/ICC-1.png"
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
            className="relative h-112.5 md:h-137.5 w-full rounded-4xl overflow-hidden shadow-lg group bg-neutral-100"
          >
            <Image
              src="/HeroCarousel/Aerial View of Leisure park.jpeg"
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

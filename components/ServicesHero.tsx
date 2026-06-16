"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12 md:mb-16">
          {/* Left Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-4"
          >
            <span className="font-gotham text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-2">
              Our Expertise
            </span>
            <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Our Services
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
              We offer a comprehensive range of services within the construction value chain, providing clients with a single point of responsibility for quality and performance.
            </p>
          </motion.div>
        </div>

        {/* Large Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[400px] md:h-[600px] lg:h-[500px] w-full rounded-4xl md:rounded-[3rem] overflow-hidden shadow-xl"
        >
          <Image
            src="/WildCardPictures/State-Sec.jpeg"
            alt="Contemporary Group Services"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

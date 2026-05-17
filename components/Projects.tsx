"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMN 1: Header + New York Office */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12">
            <div className="space-y-4">
              <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
                Our Showcase
              </span>
              <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Our Portfolio of <br />
                Pioneering Design
              </h2>
              <p className="font-sans text-xs text-foreground/60 leading-relaxed text-justify max-w-sm">
                Explore our selected works that demonstrate our commitment to design excellence, innovation, and client satisfaction.
              </p>
            </div>

            {/* New York Office Project */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="New York Office"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Office</span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">New York Office</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: Stacked landscape projects */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Commercial Restaurant Project */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer relative aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Restaurant"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Hospitality</span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">Commercial Restaurant</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Hotel Rooms Project */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group cursor-pointer relative aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Rooms"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Residential</span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">Hotel Rooms</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 3: Private House (Tall) + CTA Button */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-8">
            {/* Private House Project */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group cursor-pointer relative grow min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Image
                src="/project-villa.png"
                alt="Private House"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Luxury Villa</span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">Private House</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* See More Projects button */}
            <div className="w-full">
              <button className="w-full py-4 rounded-full border border-neutral-300 dark:border-neutral-700 font-sans text-xs uppercase tracking-widest text-foreground font-bold hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-colors duration-300 select-none">
                See More Projects
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

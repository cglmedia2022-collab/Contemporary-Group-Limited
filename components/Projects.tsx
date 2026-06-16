"use client";

import Image from "next/image";
import Link from "next/link";
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
                Explore our selected works that demonstrate our commitment to
                design excellence, innovation, and client satisfaction.
              </p>
            </div>

            {/* Project 1: Asaba Airport */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group cursor-pointer relative grow min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Link href="/projects/asaba-airport" className="absolute inset-0 z-20" aria-label="View Asaba Airport" />
              <Image
                src="/HeroCarousel/asabaAirport.webp"
                alt="Asaba Airport"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">
                    Aviation
                  </span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">
                    Asaba Airport
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: Stacked landscape projects */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Project 2: Secretariat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer relative aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Link href="/projects/delta-state-secretariat" className="absolute inset-0 z-20" aria-label="View Delta State Central Secretariat" />
              <Image
                src="/HeroCarousel/Aerial View of Secteriat.jpeg"
                alt="Delta State Central Secretariat"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">
                    Government
                  </span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">
                    Delta State Central Secretariat
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Leisure Park */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group cursor-pointer relative grow min-h-[300px] lg:min-h-0 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Link href="/projects/leisure-park" className="absolute inset-0 z-20" aria-label="View Leisure Park & Film Village" />
              <Image
                src="/HeroCarousel/Aerial View of Leisure park.jpeg"
                alt="Leisure Park & Film Village"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">
                    Recreation
                  </span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">
                    Leisure Park & Film Village
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 3: Projects + CTA Button */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Project 4: ICC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group cursor-pointer relative aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Link href="/projects/international-conference-centre" className="absolute inset-0 z-20" aria-label="View International Conference Centre" />
              <Image
                src="/HeroCarousel/ICC-1.png"
                alt="International Conference Centre"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">
                    Civic
                  </span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">
                    International Conference Centre
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Project 5: Law School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group cursor-pointer relative aspect-4/3 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
            >
              <Link href="/projects/nigerian-law-school-yenagoa" className="absolute inset-0 z-20" aria-label="View Nigerian Law School Yenagoa" />
              <Image
                src="/Industry/Education.jpeg"
                alt="Nigerian Law School Yenagoa Campus"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">
                    Education
                  </span>
                  <h3 className="font-gotham text-base font-bold text-white mt-1">
                    Nigerian Law School Yenagoa
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* See More Projects button */}
            <div className="w-full mt-auto">
              <Link href="/projects" className="block text-center w-full py-4 rounded-full border border-neutral-300 dark:border-neutral-700 font-sans text-xs uppercase tracking-widest text-foreground font-bold hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-colors duration-300 select-none">
                See More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

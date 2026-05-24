"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="font-gotham text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-2">
              Our Portfolio
            </span>
            <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Landmarks of<br />Excellence.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 font-sans text-base text-foreground/70 leading-relaxed"
          >
            With an extensive portfolio across various sectors and locations, Contemporary Group Limited has delivered over 200 high-profile projects. From aviation to healthcare, we build spaces that define the future.
          </motion.p>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            src="/VideoForProjectPage.mp4"
          />
          {/* Subtle overlay to match the premium aesthetic */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}

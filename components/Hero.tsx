"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import bg from "../public/State-secretariat-4.png";
import bg_fg from "../public/State-secretariat-4-fg.png";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: "italic", 
  weight: ["400", "600"] 
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900 selection:bg-brand-primary selection:text-white text-white">
      
      {/* LAYER 0: Background Image */}
      <motion.div 
        initial={{ y: "15vh", opacity: 0 }}
        animate={{ y: 0, opacity: .7 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={bg}
          alt="Delta State Secretariat Complex Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle vignette / dark gradient focusing on the bottom for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/10 to-transparent" />
      </motion.div>

      {/* LAYER 1: Massive Typography (Behind the building) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ y: "-20vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative w-full text-center mt-[-45vh]"
        >
          <h1 className="text-[14vw] leading-none font-gotham font-bold text-[#ede7e1] uppercase tracking-tighter mix-blend-overlay opacity-90">
            Secretariat
          </h1>
        </motion.div>
      </div>

      {/* LAYER 2: Foreground Image (Building Cutout overlapping text) */}
      <motion.div 
        initial={{ y: "15vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <Image
          src={bg_fg}
          alt="Delta State Secretariat Complex Foreground"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* LAYER 2.5: Cursive Text overlapping everything */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className={`absolute top-[35%] left-[70%] text-[7vw] text-white font-light drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] ${playfair.className}`}
        >
          complex
        </motion.div>
      </div>

      {/* LAYER 3: UI Elements */}
      <div className="relative z-30 h-full w-full flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-24">
        
        <div className="w-full flex flex-col lg:flex-row justify-between items-end gap-12">
          
          {/* Left: Glassmorphic Info Box with Connecting Lines */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative line mimicking inspiration */}
            <div className="absolute -top-12 left-8 w-px h-12 bg-white/40 hidden lg:block" />
            <div className="absolute -top-12 left-8 w-1.5 h-1.5 rounded-full bg-white hidden lg:block translate-x-[-2px]" />

            <div className="p-6 rounded-2xl bg-neutral-950/30 backdrop-blur-md border border-white/10 text-white/90 min-w-[320px]">
              <div className="space-y-2 text-xs">
                <p className="flex justify-start gap-4">
                  <span className="font-gotham opacity-50 w-24">Client:</span> 
                  <span className="font-medium">Delta State Government</span>
                </p>
                <p className="flex justify-start gap-4">
                  <span className="font-gotham opacity-50 w-24">Location:</span> 
                  <span className="font-medium">Asaba, Delta State</span>
                </p>
                <p className="flex justify-start gap-4">
                  <span className="font-gotham opacity-50 w-24">Year:</span> 
                  <span className="font-medium">2017 &mdash; 2021</span>
                </p>
                <p className="flex justify-start gap-4">
                  <span className="font-gotham opacity-50 w-24">Role:</span> 
                  <span className="font-medium">Consultants / PM</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Description Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
            className="w-full lg:max-w-md text-white/70"
          >
            <p className="text-xs leading-relaxed font-light text-justify hover:text-white/90 transition-colors duration-300">
              The Secretariat Complex is conceived around a time-honoured courtyard tradition, where offices are strategically organized in clusters around five adjacent courtyards. This enables abundant natural lighting and cross-ventilation, reinforcing transparency essential to effective governance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

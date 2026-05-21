"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: "italic", 
  weight: ["400", "600"] 
});

const slides = [
  {
    id: 1,
    image: "/HeroCarousel/asabaAirport.webp",
    heading: "Bespoke Architectural Services.",
    subtext: "Crafting spaces where breathtaking beauty meets practical brilliance."
  },
  {
    id: 2,
    image: "/HeroCarousel/sheraton.jpg",
    heading: "Innovative Excellence to Architecture.",
    subtext: "Seamlessly blending stunning aesthetics with unparalleled functional excellence."
  },
  {
    id: 3,
    image: "/HeroCarousel/image-46.png",
    heading: "Superior Design Services.",
    subtext: "Experience the fusion of art and utility through inspiring architectural masterpieces."
  },
  {
    id: 4,
    image: "/HeroCarousel/v1-Copy-2.png",
    heading: "Comprehensive Engineering Solutions.",
    subtext: "Top-tier civil, structural, and MEP engineering ensuring absolute project integrity."
  },
  {
    id: 5,
    image: "/HeroCarousel/Orchid-Hotels.jpg",
    heading: "Expert Project Management Resources.",
    subtext: "Guaranteed effective project delivery, seamlessly guiding you from inception to completion."
  },
  {
    id: 6,
    image: "/HeroCarousel/oil and gas.jpg",
    heading: "Reliable Oil and Gas Support Services.",
    subtext: "Utilizing advanced technology and elite expertise to ensure total operational safety and efficiency."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950 selection:bg-brand-primary selection:text-white text-white">
      
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].heading}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark overlay focusing on the left and bottom for text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-neutral-950/90 to-transparent" />
          </div>

          {/* Main Text Content */}
          <div className="relative z-20 h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mt-16 md:mt-24">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-gotham font-semibold text-white mb-6 leading-[1.1] tracking-tight"
              >
                {slides[currentSlide].heading}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="text-base md:text-lg lg:text-xl text-white/80 font-sans font-light max-w-2xl leading-relaxed"
              >
                {slides[currentSlide].subtext}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom UI Layer */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-24 pb-8 md:pb-12 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          
          {/* Left: Mini Play Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-4 max-w-sm pointer-events-auto"
          >
            {/* Thumbnail */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-lg group cursor-pointer">
              <Image 
                src={slides[currentSlide].image} 
                alt="Video Thumbnail" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-neutral-900">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Small text */}
            <p className="text-[10px] md:text-xs font-sans text-white/70 leading-relaxed">
              We prioritize quality and attention to detail. Our commitment ensures that every space we create not only meets but exceeds expectations.
            </p>
          </motion.div>

          {/* Right: Navigation Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-4 pointer-events-auto"
          >
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white hover:text-neutral-900 transition-colors duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white hover:text-neutral-900 transition-colors duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

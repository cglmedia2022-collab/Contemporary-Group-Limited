"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Contemporary Group Limited completely transformed our corporate headquarters. The spatial dynamics now foster collaboration, and the sustainable design is a major selling point for our brand!",
      author: "Engr. David O.",
      role: "Managing Director, TechSpace NG",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The visionary masterplan for our luxury residential estate exceeded all expectations. We've seen incredible ROI and immense satisfaction from our premium residents.",
      author: "Sarah Jenkins",
      role: "Operations Director, Pinnacle Estates",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Their technical precision and unwavering commitment to safety made them the perfect partners for our complex high-rise development in the heart of the city.",
      author: "Arc. Mohammed T.",
      role: "Chief Developer, Skyline Horizons",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#f5f3f0] text-neutral-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-3">
            <span className="font-gotham text-xs uppercase tracking-widest text-neutral-500 font-semibold">
              Testimonials
            </span>
            <h2 className="font-gotham text-3xl md:text-5xl font-extrabold tracking-tight">
              What our Clients Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 items-center">
            <button 
              onClick={scrollLeft}
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-neutral-300 bg-transparent hover:border-brand-primary hover:text-brand-primary transition-all duration-300 font-sans font-medium text-sm text-neutral-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Previous
            </button>
            <button 
              onClick={scrollRight}
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-neutral-300 bg-white hover:border-brand-primary hover:text-brand-primary shadow-sm transition-all duration-300 font-sans font-bold text-sm text-neutral-900"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}} />

          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="snap-start flex-shrink-0 w-[90vw] md:w-[65vw] lg:w-[48vw] bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[350px] relative"
            >
              {/* Left Side: Text */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-between z-10 bg-white">
                <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed max-w-sm mb-12">
                  {testi.quote}
                </p>
                <div>
                  <h4 className="font-gotham font-bold text-lg text-neutral-900 mb-1 tracking-tight">
                    {testi.author}
                  </h4>
                  <p className="font-sans text-xs text-neutral-400">
                    {testi.role}
                  </p>
                </div>
              </div>

              {/* Right Side: Image with Slanted Cut */}
              <div 
                className="w-full md:w-[60%] h-[300px] md:h-auto absolute right-0 top-0 bottom-0 overflow-hidden"
                style={{ 
                  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
                  WebkitClipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' 
                }}
              >
                <div className="absolute inset-0 w-full h-full bg-neutral-200">
                  <Image 
                    src={testi.img}
                    alt={testi.author}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                </div>
              </div>

              {/* Mobile Fallback: If on mobile, the slant image overlaps text, so we hide absolute image and show standard image below text instead */}
              <div className="block md:hidden w-full h-[250px] relative overflow-hidden mt-auto">
                <Image 
                  src={testi.img}
                  alt={testi.author}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

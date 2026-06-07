"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-gray-500 font-bold">
              Get in touch
            </span>
            <h1 className="font-gotham text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Contact Us
            </h1>
          </div>
          <p className="font-sans text-base text-foreground/60 leading-relaxed max-w-sm md:text-right">
            Send us a message and we&apos;ll get back to you within 24 hours. We&apos;d love to hear from you.
          </p>
        </div>

        {/* Banner Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-21/9 md:aspect-3/1 rounded-4xl overflow-hidden mb-24 bg-neutral-100 dark:bg-neutral-800"
        >
          <Image
            src="/WildCardPictures/CGL Banner.jpeg"
            alt="Contemporary Group Limited Banner"
            fill
            className="object-cover rotate-1"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </motion.div>

        {/* Form and Side Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-24">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full bg-neutral-50 border border-brand-primary rounded-2xl px-6 py-4 font-sans text-sm outline-none focus:border-brand-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full bg-neutral-50 border border-brand-primary rounded-2xl px-6 py-4 font-sans text-sm outline-none focus:border-brand-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+234 800 000 0000"
                    className="w-full bg-neutral-50 border border-brand-primary rounded-2xl px-6 py-4 font-sans text-sm outline-none focus:border-brand-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Choose a subject..."
                    className="w-full bg-neutral-50 border border-brand-primary rounded-2xl px-6 py-4 font-sans text-sm outline-none focus:border-brand-primary transition-all text-foreground placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50 mb-3">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full bg-neutral-50 border border-brand-primary rounded-3xl px-6 py-5 font-sans text-sm outline-none focus:border-brand-primary transition-all text-foreground placeholder:text-foreground/30 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 bg-foreground text-background hover:bg-brand-primary hover:text-white px-10 py-5 rounded-full font-sans text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 select-none"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-auto w-full rounded-3xl overflow-hidden lg:col-span-3"
          >
            <Image
              src="/WildCardPictures/CGL Building.jpg"
              alt="CGL Building"
              fill
              className="object-cover scale-[1.35]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full shadow-lg">
              <span className="font-gotham text-xs font-bold text-black tracking-wide">
                CGL Headquarters
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

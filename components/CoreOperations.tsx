"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const operations = [
  {
    number: "01",
    title: "Architectural Design & Project Management",
    description: "From initial concept to final execution, we deliver visionary designs and provide rigorous management to ensure every detail is perfectly realized."
  },
  {
    number: "02",
    title: "Project Consultancy",
    description: "Expert guidance across all phases of construction. We offer strategic insights, feasibility studies, and technical advice to maximize project value."
  },
  {
    number: "03",
    title: "Property Development",
    description: "Creating sustainable, high-value real estate assets. We manage the entire lifecycle, turning prime locations into landmark residential and commercial properties."
  }
];

export default function CoreOperations() {
  return (
    <section className="py-24 bg-neutral-50/30 border-y border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl space-y-4">
            <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold">
              OUR EXPERTISE
            </span>
            <h2 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Core Areas of <span className="text-brand-primary">Operation</span>
            </h2>
          </div>
          <Link 
            href="#" 
            className="group flex items-center gap-2 font-sans text-sm md:text-base font-semibold text-foreground hover:text-brand-primary transition-colors pb-2"
          >
            Browse all projects 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {operations.map((op, idx) => (
            <motion.div 
              key={op.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col space-y-5 md:border-l border-neutral-200 md:pl-8 lg:pl-10"
            >
              {/* Number */}
              <div className="font-gotham text-2xl md:text-3xl font-medium text-brand-primary mb-2">
                {op.number}
              </div>
              
              {/* Title */}
              <h3 className="font-gotham text-xl md:text-2xl font-bold text-foreground leading-snug">
                {op.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
                {op.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

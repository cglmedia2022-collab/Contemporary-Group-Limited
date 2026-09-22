"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MediaHighlight() {
  return (
    <section className="py-24 bg-background" id="media-highlight">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div className="max-w-xl space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold block">
              Media
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              University of Delta Inspection &amp; Commissioning
            </h2>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed">
              Governor Sheriff Oborevwori of Delta State officially commissions
              and inspects Contemporary Group Limited&apos;s delivered projects at the
              University of Delta.
            </p>
          </div>

          <Link
            href="/media"
            className="px-8 py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-gotham text-[10px] uppercase tracking-widest font-bold shadow-md transition-all duration-300 select-none shrink-0"
          >
            View All Media
          </Link>
        </div>

        {/* Main Feature Image -- full-width, rounded corners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-16/7 rounded-3xl overflow-hidden mb-8 shadow-xl"
        >
          <Image
            src="/MediaGallery/LIP_46.jpg"
            alt="University of Delta Commissioning by Governor Sheriff Oborevwori"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Gradient overlay for caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block mb-3 px-3.5 py-1 bg-brand-primary text-white font-gotham font-bold text-[10px] uppercase tracking-widest rounded-full">
              Commissioning &amp; Inspection
            </span>
            <h3 className="font-gotham text-xl md:text-3xl font-extrabold text-white leading-snug max-w-3xl">
              University of Delta Inspection &amp; Commissioning by Governor Sheriff Oborevwori
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f3f0]/50 text-neutral-800 border-t border-neutral-200/60 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10 flex flex-col justify-between min-h-[50vh]">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Tagline */}
          <div className="max-w-xs">
            <h3 className="font-gotham text-xl md:text-2xl font-bold tracking-tight text-foreground select-none">
              Experience Liftoff
            </h3>
            <p className="font-sans text-xs text-foreground/50 mt-2 leading-relaxed">
              Pioneering iconic structures and contemporary spaces that stand the test of time.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <span className="font-gotham text-[10px] uppercase tracking-widest text-foreground/40 font-semibold mb-2">
                Our Group
              </span>
              <Link href="/about/company-overview" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Company Overview
              </Link>
              <Link href="/about/members" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Group Members
              </Link>
              <Link href="/about/board-of-directors" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Board of Directors
              </Link>
              <Link href="/about/team" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Team Management
              </Link>
              <Link href="/about/technical-partners" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Technical Partners
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <span className="font-gotham text-[10px] uppercase tracking-widest text-foreground/40 font-semibold mb-2">
                Explore
              </span>
              <Link href="/services" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Our Services
              </Link>
              <Link href="/projects" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Featured Projects
              </Link>
              <Link href="/careers" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Careers
              </Link>
              <Link href="/media" className="text-xs text-foreground/60 hover:text-brand-primary transition-colors">
                Media & Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section - Giant Typography */}
        <div className="w-full text-center overflow-hidden mb-12 select-none pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[9.5vw] font-gotham font-extrabold text-neutral uppercase tracking-tighter leading-none"
          >
            CONTEMPORARY
          </motion.h2>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-neutral-200/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo Name */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-left">
              <span className="font-gotham font-bold text-sm tracking-wide text-foreground">
                Contemporary
              </span>
              <span className="font-sans text-[8px] tracking-[0.2em] text-foreground/40 uppercase mt-0.5">
                Group Limited
              </span>
            </div>
          </div>

          {/* Legal / Secondary Links */}
          <div className="flex items-center gap-8 text-[10px] font-sans text-foreground/50">
            <Link href="/privacy" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-primary transition-colors">
              Terms & Conditions
            </Link>
            <span>&copy; {new Date().getFullYear()} CGL. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

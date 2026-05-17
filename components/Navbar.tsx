"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const ABOUT_US_LINKS = [
  { name: "Company Overview", href: "/about/company-overview" },
  { name: "Members of the Group", href: "/about/members" },
  { name: "Board of Directors", href: "/about/board-of-directors" },
  { name: "Team Management and Staff", href: "/about/team" },
  { name: "Technical Partners", href: "/about/technical-partners" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-6 flex items-center justify-between ${
        isScrolled
          ? "bg-neutral-950/40 backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Left Navigation (Pills) */}
      <nav className="hidden lg:flex items-center gap-3">
        <Link
          href="/"
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 ${
            pathname === "/"
              ? "bg-white text-black font-semibold"
              : "border border-white/30 text-white hover:bg-white/10"
          }`}
        >
          Home
        </Link>

        {/* About Us (Dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          <button
            className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              pathname.startsWith("/about") || isAboutHovered
                ? "border border-white/80 text-white bg-white/10"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            About Us
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                isAboutHovered ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isAboutHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 mt-2 w-64 bg-black/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="py-2">
                  {ABOUT_US_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-3 text-xs font-sans text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsAboutHovered(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href="/projects"
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 ${
            pathname.startsWith("/projects")
              ? "border border-white/80 text-white bg-white/10"
              : "border border-white/30 text-white hover:bg-white/10"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 ${
            pathname.startsWith("/services")
              ? "border border-white/80 text-white bg-white/10"
              : "border border-white/30 text-white hover:bg-white/10"
          }`}
        >
          Services
        </Link>
      </nav>

      {/* Center Logo */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 group">
        <div className="flex flex-col text-left">
          <span className="font-gotham font-bold text-lg md:text-xl leading-none text-white tracking-wider group-hover:text-brand-primary transition-colors">
            Contemporary
          </span>
          <span className="font-sans text-[10px] tracking-[0.3em] text-white/50 uppercase mt-1 group-hover:text-white/80 transition-colors">
            Group Limited
          </span>
        </div>
      </Link>

      {/* Right Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link
          href="/careers"
          className="text-[10px] font-gotham uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          Careers
        </Link>
        <Link
          href="/media"
          className="text-[10px] font-gotham uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          Media
        </Link>
        <Link
          href="/contact"
          className="text-[10px] font-gotham uppercase tracking-widest text-white hover:text-brand-primary transition-colors flex items-center gap-2 group"
        >
          Contact Us
          <span className="w-6 h-[1px] bg-white group-hover:bg-brand-primary group-hover:w-8 transition-all duration-300 relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transform translate-x-px"></span>
          </span>
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden relative z-50 p-2 text-white focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-1" : ""}`} />
          <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu logic ... omitted for brevity as the focus is desktop right now, but keeping the state to avoid errors */}
    </header>
  );
}

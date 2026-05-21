"use client";

import { useState, useEffect } from "react";
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

  // Adaptive styles based on scroll state
  const buttonBorderClass = isScrolled
    ? "border-foreground/20 text-foreground hover:bg-foreground/5"
    : "border-white/30 text-white hover:bg-white/10";

  const buttonActiveBorderClass = isScrolled
    ? "border-foreground/80 bg-foreground/5 text-foreground"
    : "border-white/80 bg-white/10 text-white";

  const linkClass = isScrolled
    ? "text-foreground/80 hover:text-foreground"
    : "text-white/80 hover:text-white";

  const logoTextClass = isScrolled ? "text-foreground" : "text-white";
  const logoSubTextClass = isScrolled ? "text-foreground/50" : "text-white/50";

  const arrowLineClass = isScrolled ? "bg-foreground" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-6 flex items-center justify-between ${
        isScrolled
          ? "bg-[#fbfaf9]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Left Navigation (Pills) */}
      <nav className="hidden lg:flex items-center gap-3">
        <Link
          href="/"
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 ${
            pathname === "/"
              ? isScrolled
                ? "bg-neutral-900 text-white font-semibold shadow-sm"
                : "bg-white text-black font-semibold"
              : buttonBorderClass
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
            className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 flex items-center gap-2 border ${
              pathname.startsWith("/about") || isAboutHovered
                ? buttonActiveBorderClass
                : buttonBorderClass
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
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200/50 shadow-2xl rounded-2xl overflow-hidden"
              >
                <div className="py-2">
                  {ABOUT_US_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-3 text-xs font-sans text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/50 transition-colors"
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
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 border ${
            pathname.startsWith("/projects")
              ? buttonActiveBorderClass
              : buttonBorderClass
          }`}
        >
          Projects
        </Link>
        <Link
          href="/services"
          className={`px-6 py-2 rounded-full text-[10px] font-gotham uppercase tracking-widest transition-all duration-300 border ${
            pathname.startsWith("/services")
              ? buttonActiveBorderClass
              : buttonBorderClass
          }`}
        >
          Services
        </Link>
      </nav>

      {/* Center Logo */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 group">
        <div className="flex flex-col text-left">
          <span className={`font-gotham font-bold text-lg md:text-xl leading-none tracking-wider group-hover:text-brand-primary transition-colors ${logoTextClass}`}>
            Contemporary
          </span>
          <span className={`font-sans text-center text-[10px] tracking-[0.3em] uppercase mt-1 group-hover:text-brand-primary transition-colors ${logoSubTextClass}`}>
            Group Limited
          </span>
        </div>
      </Link>

      {/* Right Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link
          href="/careers"
          className={`text-[10px] font-gotham uppercase tracking-widest transition-colors ${linkClass}`}
        >
          Careers
        </Link>
        <Link
          href="/media"
          className={`text-[10px] font-gotham uppercase tracking-widest transition-colors ${linkClass}`}
        >
          Media
        </Link>
        <Link
          href="/contact"
          className={`text-[10px] font-gotham uppercase tracking-widest transition-colors flex items-center gap-2 group ${
            isScrolled ? "text-foreground hover:text-brand-primary" : "text-white hover:text-brand-primary"
          }`}
        >
          Contact Us
          <span className={`w-6 h-px group-hover:bg-brand-primary group-hover:w-8 transition-all duration-300 relative ${arrowLineClass}`}>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transform translate-x-px"></span>
          </span>
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className={`lg:hidden relative z-50 p-2 focus:outline-none ${isScrolled ? "text-foreground" : "text-white"}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-1" : ""}`} />
          <span className={`block h-full w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""}`} />
        </div>
      </button>
    </header>
  );
}

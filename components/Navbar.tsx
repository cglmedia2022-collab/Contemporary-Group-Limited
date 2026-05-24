"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const ABOUT_US_LINKS = [
  { name: "Company Overview", href: "/about/company-overview" },
  { name: "Members of the Group", href: "/about/members-of-group" },
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

  // Adaptive styles based on scroll state and current route
  const isDarkHero = pathname === "/";
  const useDarkText = isScrolled || !isDarkHero;

  const buttonBorderClass = useDarkText
    ? "border-foreground/20 text-foreground hover:bg-foreground/5"
    : "border-white/30 text-white hover:bg-white/10";

  const buttonActiveBorderClass = useDarkText
    ? "border-foreground/80 bg-foreground/5 text-foreground"
    : "border-white/80 bg-white/10 text-white";

  const linkClass = useDarkText
    ? "text-foreground/80 hover:text-foreground"
    : "text-white/80 hover:text-white";

  const logoTextClass = useDarkText ? "text-foreground" : "text-white";
  const logoSubTextClass = useDarkText ? "text-foreground/50" : "text-white/50";

  const arrowLineClass = useDarkText ? "bg-foreground" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-6 flex items-center justify-between ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Mobile Menu Toggle (Moved to Left) */}
      <button
        className={`lg:hidden relative z-50 p-2 focus:outline-none mr-auto ${useDarkText ? "text-foreground" : "text-white"}`}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-current" />
          <span className="block h-0.5 w-full bg-current" />
          <span className="block h-0.5 w-full bg-current" />
        </div>
      </button>

      {/* Left Navigation (Pills) - Desktop Only */}
      <nav className="hidden lg:flex items-center gap-3 flex-1">
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
      <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
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
            useDarkText ? "text-foreground hover:text-brand-primary" : "text-white hover:text-brand-primary"
          }`}
        >
          Contact Us
          <span className={`w-6 h-px group-hover:bg-brand-primary group-hover:w-8 transition-all duration-300 relative ${arrowLineClass}`}>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 transform translate-x-px"></span>
          </span>
        </Link>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop (Click to close) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Side Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm bg-white shadow-2xl flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Close Button Header (Aligned Left) */}
              <div className="px-6 py-8 flex justify-start">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 text-foreground bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                  aria-label="Close Menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-8 font-gotham text-2xl font-bold text-neutral-900 px-8 pb-12">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                
                <div className="flex flex-col gap-4">
                  <span className="text-brand-primary text-xs tracking-[0.2em] uppercase font-bold">About Us</span>
                  <div className="flex flex-col gap-4 pl-4 font-sans text-base font-medium text-neutral-600">
                    {ABOUT_US_LINKS.map(link => (
                      <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary transition-colors">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                <Link href="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

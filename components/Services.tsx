"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by roughly the width of one item + gap (assuming ~300px per item)
      // We'll just scroll by half the container width for a smooth multi-item jump
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const services = [
    {
      num: "01",
      title: "Architectural Design & Space Planning",
      desc: "From initial concept development, visual scripting, and schematic layout plans.",
      img: "/State-secretariat.png",
    },
    {
      num: "02",
      title: "Contractor Finance Structuring",
      desc: "Strategic financial planning and funding solutions to ensure seamless project execution.",
      img: "/HeroCarousel/v1-Copy-2.png",
    },
    {
      num: "03",
      title: "Interior Design & Fit-Out Solutions",
      desc: "Creating bespoke, cohesive interior spaces with meticulous attention to detail.",
      img: "/MorePictures/Interior Design 2.jpeg",
    },
    {
      num: "04",
      title: "Procurement & Logistics Management",
      desc: "Efficient sourcing, supply chain management, and timely delivery of premium materials.",
      img: "/HeroCarousel/Consturction Site.jpeg",
    },
    {
      num: "05",
      title: "Project & Construction Management",
      desc: "Overseeing, auditing, and executing technical precision across all construction phases.",
      img: "/MorePictures/Warri City Stadium 11.jpeg",
    },
    {
      num: "06",
      title: "Turnkey Design–Build Solutions",
      desc: "End-to-end unified delivery from initial design sketch to the final handed-over keys.",
      img: "/WildCardPictures/State-secretariat-2.png",
    },
    {
      num: "07",
      title: "Project Management",
      desc: "Comprehensive lifecycle planning, risk mitigation, and stakeholder coordination.",
      img: "/HeroCarousel/Aerial View of Leisure park.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="w-full flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              Our Capabilities
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
              Architectural &amp; Design Capabilities
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 items-center md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors duration-300 hover:border-brand-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services#service-${i}`}
              className="shrink-0 snap-start w-[85vw] sm:w-[320px] lg:w-[calc(25%-1.5rem)] block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.15 }}
                className="group cursor-pointer space-y-4 h-full"
              >
                {/* Image Container with zoom hover */}
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Number Overlay */}
                  <div className="absolute top-6 left-6 font-gotham text-sm font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 select-none">
                    {service.num}
                  </div>
                </div>

                {/* Text Info */}
                <div className="space-y-1.5 px-2">
                  <h3 className="font-gotham text-base font-bold text-foreground group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-foreground/60 leading-relaxed text-start pr-4">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex gap-4 items-center justify-center mt-4 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-brand-primary transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

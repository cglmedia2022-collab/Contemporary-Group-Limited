"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Construction", "Award", "Sustainability", "Architecture"];

const galleryImages = [
  "/WildCardPictures/Pearle Suites.jpg",
  "/WildCardPictures/interior.png",
  "/WildCardPictures/State-Sec.jpeg",
  "/WildCardPictures/design drawing.jpeg",
  "/WildCardPictures/Allied Towers.png",
  "/WildCardPictures/Administrative Building.jpg",
  "/WildCardPictures/CGL pic.png",
  "/WildCardPictures/CareersPic.jpeg",
  "/WildCardPictures/Picture2.jpg"
];

export default function MediaContent({ allPosts }: { allPosts: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredPosts = allPosts.filter((post) =>
    activeCategory === "All" ? true : post.category === activeCategory
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const featuredPost = visiblePosts[0];
  const remainingPosts = visiblePosts.slice(1);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <main className="flex-1 pt-32 pb-24">
      <section className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h1 
          className="font-gotham text-5xl md:text-6xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog & articles
        </motion.h1>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(8); // Reset pagination on filter change
              }}
              className={`px-6 py-2.5 rounded-full text-[10px] font-gotham uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-primary text-white shadow-md"
                  : "bg-transparent border border-neutral-300 dark:border-neutral-700 text-foreground/60 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-24">
                <Link href={`/blog/${featuredPost.slug}`} className="group flex flex-col lg:flex-row gap-12 items-center cursor-pointer">
                  <div className="w-full lg:w-3/5">
                    <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-neutral-100">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 space-y-6">
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-[10px] uppercase tracking-widest font-bold text-foreground/60 rounded-full">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="font-sans text-sm text-foreground/60 leading-relaxed text-justify">
                      {featuredPost.excerpt}
                    </p>
                    <div className="pt-4">
                      <span className="inline-block px-8 py-3 bg-brand-dark text-white rounded-full font-gotham text-[10px] uppercase tracking-widest font-bold group-hover:bg-brand-primary transition-colors duration-300">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Latest Insights and Trends */}
            {remainingPosts.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                  <h3 className="font-gotham text-2xl md:text-3xl font-extrabold tracking-tight">
                    Latest insights and trends
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {remainingPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id || post.slug} className="group flex flex-col space-y-6 cursor-pointer">
                      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-neutral-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="space-y-3 flex-1">
                        <span className="inline-block px-3 py-1 bg-neutral-100 text-[10px] uppercase tracking-widest font-bold text-foreground/60 rounded-full">
                          {post.category}
                        </span>
                        <h4 className="font-gotham text-lg font-bold tracking-tight group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                          {post.title}
                        </h4>
                        <p className="font-sans text-xs text-foreground/60 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-foreground/50 font-sans">No articles found for this category.</p>
              </div>
            )}

            {/* Load More Button */}
            {visibleCount < filteredPosts.length && (
              <div className="flex justify-center mt-16 mb-32">
                <button 
                  onClick={handleLoadMore}
                  className="px-10 py-4 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-gotham text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-32 mt-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Text Area */}
            <div className="lg:col-span-4 sticky top-32">
              <h3 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
                At Contemporary Group, we are passionate about creating exceptional interior and designs that elevate lifestyles and enrich experiences.
              </h3>
              <div className="w-16 h-1 bg-brand-primary rounded-full" />
            </div>

            {/* Masonry / Irregular Grid Area */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[200px]">
                {galleryImages.map((src, index) => {
                  let classes = "relative rounded-3xl overflow-hidden group";
                  if (index === 0) classes += " col-span-2 row-span-2";
                  else if (index === 1) classes += " col-span-1 row-span-2";
                  else if (index === 2) classes += " col-span-1 row-span-1";
                  else if (index === 3) classes += " col-span-1 row-span-1";
                  else if (index === 4) classes += " col-span-2 row-span-1";
                  else if (index === 5) classes += " col-span-1 row-span-2";
                  else if (index === 6) classes += " col-span-1 row-span-1";
                  else if (index === 7) classes += " col-span-1 row-span-1";
                  else classes += " col-span-1 row-span-1";

                  return (
                    <div key={index} className={classes}>
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost } from "@/lib/blogData";

const categories = ["All", "Construction", "Award", "Sustainability", "Architecture"];
const mediaCategories = ["All", "Commissioning", "Inspections", "Awards", "Infrastructure"];

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

const mediaItems = [
  {
    id: 1,
    src: "/MediaGallery/media-1.jpg",
    title: "Film Village Studio Inspection",
    category: "Inspections",
    description: "Inspection of the Film Village Studio by former Vice President of the Federal Republic of Nigeria, His Excellency Alhaji Atiku Abubakar and the Governor of Delta State, His Excellency Dr. Ifeanyi Okowa on the day of commissioning."
  },
  {
    id: 2,
    src: "/MediaGallery/media-2.jpg",
    title: "FRSC Training Centre Commissioning",
    category: "Commissioning",
    description: "Commissioning of the Administrative building of the Federal Road Safety Training Centre, Owa Alero, Delta State by the former Vice President of the Federal Republic of Nigeria, His Excellency Prof. Yemi Osinbajo."
  },
  {
    id: 3,
    src: "/MediaGallery/media-3.jpg",
    title: "Prof. Chike Edozien Secretariat Surroundings",
    category: "Inspections",
    description: "Inspection of the surroundings of the Prof. Chike Edozien Secretariat Asaba, Delta State by the former Vice President of the Federal Republic of Nigeria, His Excellency Prof. Yemi Osinbajo alongside Governor Dr. Ifeanyi Okowa and Project Consultant, Arc. Kester Ifeadi on the day of commissioning."
  },
  {
    id: 4,
    src: "/MediaGallery/media-4.jpg",
    title: "Prof. Chike Edozien Secretariat Commissioning",
    category: "Commissioning",
    description: "Commissioning of the Prof. Chike Edozien Secretariat Asaba, Delta State by the former Vice President of the Federal Republic of Nigeria, His Excellency Prof. Yemi Osinbajo alongside the Governor of Delta State, His Excellency Dr. Ifeanyi Okowa."
  },
  {
    id: 5,
    src: "/MediaGallery/media-5.jpg",
    title: "Secretariat Interior Inspection",
    category: "Inspections",
    description: "Inspection of the interior facilities of the Prof. Chike Edozien Secretariat Asaba, Delta State by the former Vice President of the Federal Republic of Nigeria, His Excellency Prof. Yemi Osinbajo alongside Governor Dr. Ifeanyi Okowa on the day of commissioning."
  },
  {
    id: 6,
    src: "/MediaGallery/media-6.jpg",
    title: "Asaba International Airport Lounge",
    category: "Infrastructure",
    description: "Passengers comfortably seated and awaiting the arrival of their flight within the modern departure lobby at the Asaba International Airport, Delta State."
  },
  {
    id: 7,
    src: "/MediaGallery/media-7.jpg",
    title: "Secretariat Exterior Grounds Tour",
    category: "Inspections",
    description: "Inspection of the landscaped exterior perimeter and architectural infrastructure at the Prof. Chike Edozien Secretariat Asaba by former Vice President Prof. Yemi Osinbajo and Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 8,
    src: "/MediaGallery/media-8.jpg",
    title: "FRSC Training Centre Project Tour",
    category: "Inspections",
    description: "Inspection of the educational and administrative facilities at the Federal Road Safety Training Centre project in Owa Alero, Delta State by former Vice President Prof. Yemi Osinbajo and Governor Dr. Ifeanyi Okowa on the day of commissioning."
  },
  {
    id: 9,
    src: "/MediaGallery/media-9.jpg",
    title: "Unveiling of Commemorative Plaque",
    category: "Commissioning",
    description: "Unveiling of the project commemorative plaque by former Vice President of the Federal Republic of Nigeria, His Excellency Prof. Yemi Osinbajo during the formal commissioning of the Federal Road Safety Training Centre project, Owa Alero, Delta State."
  },
  {
    id: 10,
    src: "/MediaGallery/media-10.jpg",
    title: "Advanced Diagnostics Medical Centre Inspection",
    category: "Inspections",
    description: "Inspection of ongoing construction milestones at the Advanced Diagnostics Medical Centre in Owa Alero, Delta State by Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 11,
    src: "/MediaGallery/media-11.jpg",
    title: "Mother & Child Specialist Hospital Inspection",
    category: "Inspections",
    description: "Site inspection and architectural progress evaluation of the Mother And Child Specialist Hospital, Owa Alero, Delta State during construction by Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 12,
    src: "/MediaGallery/media-12.jpg",
    title: "Secretariat Clinical Section Tour",
    category: "Inspections",
    description: "Inspection of the healthcare and clinical wing of the Prof. Chike Edozien Secretariat Asaba, Delta State by former Vice President Prof. Yemi Osinbajo along with Governor Dr. Ifeanyi Okowa on the day of commissioning."
  },
  {
    id: 13,
    src: "/MediaGallery/media-13.jpg",
    title: "FRSC Training Centre Inauguration",
    category: "Commissioning",
    description: "Formal inauguration and dedication of the Federal Road Safety Training Centre in Owa Alero, Delta State by Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 14,
    src: "/MediaGallery/media-14.jpg",
    title: "Maryam Babangida Leisure Park Commissioning",
    category: "Commissioning",
    description: "Commissioning of the expansive Maryam Babangida Leisure Park and Film Village in Asaba, Delta State by former Vice President Alhaji Atiku Abubakar and Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 15,
    src: "/MediaGallery/media-15.jpg",
    title: "Children's Ward Facility Tour",
    category: "Inspections",
    description: "Inspection of the specialized pediatric wards and healthcare facilities at the Mother And Child Specialist Hospital, Owa Alero, Delta State by former Vice President Alhaji Atiku Abubakar and Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 16,
    src: "/MediaGallery/media-16.jpg",
    title: "Mother & Child Hospital Commissioning",
    category: "Commissioning",
    description: "Formal commissioning of the state-of-the-art Mother And Child Specialist Hospital in Owa Alero, Delta State by former Vice President Alhaji Atiku Abubakar and Governor Dr. Ifeanyi Okowa."
  },
  {
    id: 17,
    src: "/MediaGallery/media-17.jpg",
    title: "Hospital Landmark Dedication Ceremony",
    category: "Commissioning",
    description: "Celebratory dedication gathering before the modern structural facade during the commissioning of the Mother And Child Specialist Hospital, Owa Alero, Delta State."
  },
  {
    id: 18,
    src: "/MediaGallery/media-18.png",
    title: "2024 Archibuilt Exposition Presentation",
    category: "Awards",
    description: "The award was presented by the Nigerian Institute of Architects (NIA) President, Arc. Mrs. Mobolaji Adeniyi at the 2024 Archibuilt Exposition in Abuja on Thursday, September 12, 2024. The event's theme was 'Innovations in Sustainable Construction'."
  },
  {
    id: 19,
    src: "/MediaGallery/media-19.jpg",
    title: "Most Iconic Corporate Design Award 2024",
    category: "Awards",
    description: "Our Managing Director Arc. Kester Ifeadi (FNIA) with the 'Most Iconic Corporate Design' award from the Nigerian Institute of Architects during the ARCHIBUILT EXPO 2024. This honor celebrates our unwavering commitment to design excellence, innovation, and shaping the built environment. A true milestone that inspires us to keep building beyond boundaries. 🏆✨"
  }
];

export interface MediaItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function MediaContent({ allPosts }: { allPosts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  
  // Media Gallery state
  const [activeMediaCat, setActiveMediaCat] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [visibleMediaCount, setVisibleMediaCount] = useState(9);

  const filteredPosts = allPosts.filter((post) =>
    activeCategory === "All" ? true : post.category === activeCategory
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const featuredPost = visiblePosts[0];
  const remainingPosts = visiblePosts.slice(1);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  // Filtered Media Gallery items
  const filteredMedia = mediaItems.filter((item) =>
    activeMediaCat === "All" ? true : item.category === activeMediaCat
  );

  const displayedMedia = filteredMedia.slice(0, visibleMediaCount);

  return (
    <main className="flex-1 pt-32 pb-24">
      {/* 1. BLOG & ARTICLES SECTION */}
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
                    <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
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
                    <span className="inline-block px-3.5 py-1 bg-brand-primary/15 border border-brand-primary/30 text-[10px] uppercase tracking-widest font-gotham font-bold text-brand-dark rounded-full">
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
                      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="space-y-3 flex-1">
                        <span className="inline-block px-3.5 py-1 bg-brand-primary/15 border border-brand-primary/30 text-[10px] uppercase tracking-widest font-gotham font-bold text-brand-dark rounded-full">
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
              <div className="flex justify-center mt-16 mb-16">
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

      {/* 2. MIGRATED MEDIA & GALLERY SECTION (UNDER BLOGS AND ARTICLES) */}
      <section id="media-gallery" className="pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Gallery Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <div className="space-y-4 max-w-2xl">
              <span className="font-gotham text-xs uppercase tracking-[0.25em] text-brand-primary font-bold block">
                Our Corporate Media & Gallery
              </span>
              <h2 className="font-gotham text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Visualizing Excellence & Historical Milestones
              </h2>
            </div>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed lg:w-5/12 text-justify">
              Explore our historic gallery documenting landmark project inaugurations, executive inspection tours, award ceremonies, and significant achievements across Nigeria’s built environment.
            </p>
          </div>

          {/* Media Category Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {mediaCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveMediaCat(cat);
                  setVisibleMediaCount(9);
                }}
                className={`px-6 py-2.5 rounded-full text-[10px] font-gotham uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeMediaCat === cat
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-transparent border border-neutral-300 dark:border-neutral-700 text-foreground/60 hover:border-brand-primary hover:text-brand-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Media Cards Grid - Styled cleanly like existing site cards (no dark box background) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {displayedMedia.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedMedia(item)}
                  className="group flex flex-col space-y-6 cursor-pointer"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden bg-neutral-100 shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-brand-primary/10">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-white text-foreground text-[10px] uppercase font-gotham font-bold tracking-wider rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Caption Content */}
                  <div className="space-y-3 flex-1">
                    <span className="inline-block px-3.5 py-1 bg-brand-primary/15 border border-brand-primary/30 text-[10px] uppercase tracking-widest font-gotham font-bold text-brand-dark rounded-full">
                      {item.category}
                    </span>
                    <h3 className="font-gotham text-xl font-bold tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-foreground/70 leading-relaxed line-clamp-3 text-start">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50 font-sans">No gallery items found in this category.</p>
            </div>
          )}

          {/* Load More Media Button */}
          {visibleMediaCount < filteredMedia.length && (
            <div className="flex justify-center mt-16">
              <button 
                onClick={() => setVisibleMediaCount((prev) => prev + 9)}
                className="px-10 py-4 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-gotham text-[10px] uppercase tracking-widest font-bold transition-all duration-300 shadow-sm"
              >
                Load More Media
              </button>
            </div>
          )}
        </div>
      </section>

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

      {/* LIGHTBOX MODAL FOR HIGHLIGHTING SELECTED MEDIA */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white text-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors duration-300 shadow-md border border-white/10"
                aria-label="Close viewer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Photo Area */}
              <div className="relative md:w-3/5 aspect-4/3 md:aspect-auto min-h-[300px] md:min-h-[500px] bg-neutral-950 flex items-center justify-center">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Details & Caption Area */}
              <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6 bg-white text-neutral-900">
                <div className="space-y-4">
                  <span className="inline-block px-3.5 py-1.5 bg-brand-primary/15 text-brand-primary font-gotham font-bold text-[10px] uppercase tracking-wider rounded-full">
                    {selectedMedia.category}
                  </span>
                  <h3 className="font-gotham text-2xl font-extrabold text-neutral-900 leading-snug">
                    {selectedMedia.title}
                  </h3>
                  <div className="w-12 h-1 bg-brand-primary rounded-full" />
                  <p className="font-sans text-sm text-neutral-700 leading-relaxed text-justify whitespace-pre-line">
                    {selectedMedia.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex justify-end">
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="px-8 py-3 rounded-full bg-neutral-100 hover:bg-brand-primary hover:text-white font-gotham text-[10px] uppercase font-bold tracking-widest text-neutral-900 transition-all duration-300"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

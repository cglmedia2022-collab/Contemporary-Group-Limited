"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Integrating Biophilic Design Principles into Modern Workspaces",
      author: "James Miller",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      tag: "Interior",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "The Evolution of Concrete: Greenery, Structural Integrity & Resilience",
      author: "Amelia Clark",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      tag: "Engineering",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Top Architectural Trends Shaping the African Skyline in 2026",
      author: "Matthew Bennett",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      tag: "Trends",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              Insights &amp; Updates
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Recent Blog Entries
            </h2>
            <p className="font-sans text-xs text-foreground/60 leading-relaxed">
              The latest trends and cutting-edge technologies to practical tips and inspiring success stories, our blog is designed to inform.
            </p>
          </div>
          
          {/* View All Button */}
          <Link 
            href="/media" 
            className="px-8 py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-gotham text-[10px] uppercase tracking-widest font-bold shadow-md transition-all duration-300 select-none shrink-0"
          >
            View All
          </Link>
        </div>

        {/* Blog Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Featured Large Post */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 group cursor-pointer space-y-6"
          >
            {/* Featured Image */}
            <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Featured Architectural Article"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            
            {/* Title & Info */}
            <div className="space-y-4">
              <h3 className="font-gotham text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                Unveiling the Future of Sustainable Cities and High-Rise Architecture
              </h3>
              <p className="font-sans text-xs text-foreground/60 leading-relaxed text-justify max-w-2xl">
                Explore the cutting-edge innovations in green building materials, smart energy systems, and modern structural frameworks defining the next generation of Nigerian developments.
              </p>
              
              {/* Bottom Row info */}
              <div className="flex justify-between items-center pt-2 border-t border-neutral-200/50">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200">
                    <Image
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80"
                      alt="Steven Nice"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <span className="font-sans text-xs text-foreground/80 font-medium">
                    By Steven Nice
                  </span>
                </div>
                
                {/* Category tag */}
                <span className="font-sans text-[10px] uppercase tracking-wider text-foreground/40 font-bold">
                  Marketing
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Smaller Stacked Posts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer flex gap-6 pb-6 border-b border-neutral-200/60 last:border-0 last:pb-0"
              >
                {/* Small Image */}
                <div className="relative aspect-4/3 w-28 md:w-36 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 120px, 200px"
                  />
                </div>
                
                {/* Post details */}
                <div className="flex flex-col justify-between py-1 grow">
                  <h4 className="font-gotham text-xs md:text-sm font-bold tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h4>
                  
                  {/* Footer Row */}
                  <div className="flex justify-between items-center text-[10px] font-sans text-foreground/50 mt-4">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-neutral-200">
                        <Image
                          src={post.avatar}
                          alt={post.author}
                          fill
                          className="object-cover"
                          sizes="20px"
                        />
                      </div>
                      <span className="font-medium text-foreground/75">{post.author}</span>
                    </div>
                    
                    {/* Tag */}
                    <span className="uppercase tracking-wider font-bold text-foreground/40">{post.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

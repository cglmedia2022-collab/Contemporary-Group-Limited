"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Architectural Design & Space Planning",
    desc: "Delivering innovative and functional design concepts that optimize spatial efficiency while maintaining stunning aesthetic appeal.",
    img: "/WildCardPictures/design drawing.jpeg"
  },
  {
    title: "Contractor Finance Structuring",
    desc: "Providing flexible, robust financial structuring and modeling to ensure seamless project funding and uninterrupted execution.",
    img: "/HeroCarousel/ProjectManagement.jpeg"
  },
  {
    title: "Interior Design & Fit-Out Solutions",
    desc: "Crafting bespoke interior environments that reflect the identity of the occupants through meticulous material selection and execution.",
    img: "/WildCardPictures/interior.png"
  },
  {
    title: "Procurement & Logistics Management",
    desc: "Streamlining the supply chain to ensure the timely and cost-effective delivery of high-quality materials and construction resources.",
    img: "/HeroCarousel/Consturction Site.jpeg"
  },
  {
    title: "Project & Construction Management",
    desc: "Overseeing every phase of development from inception to completion, guaranteeing adherence to timeline, budget, and strict quality standards.",
    img: "/HeroCarousel/Aerial View of Leisure park.jpeg"
  },
  {
    title: "Turnkey Design–Build Solutions",
    desc: "Offering a unified workflow where design and construction are handled under a single contract, accelerating delivery and minimizing client risk.",
    img: "/HeroCarousel/ICC-1.png"
  },
  {
    title: "Project Management",
    desc: "Comprehensive lifecycle planning, risk mitigation, and stakeholder coordination ensuring successful project delivery.",
    img: "/HeroCarousel/Aerial View of Leisure park.jpeg"
  }
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-white text-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={`service-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col scroll-mt-32"
            >
              <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-8 bg-neutral-100 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-brand-primary/10">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-brand-primary font-gotham text-sm font-bold opacity-80">
                    0{index + 1}
                  </span>
                  <div className="h-px bg-neutral-200 flex-1" />
                </div>
                <h3 className="font-gotham text-2xl font-extrabold mb-4 text-foreground group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-base text-foreground/70 leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

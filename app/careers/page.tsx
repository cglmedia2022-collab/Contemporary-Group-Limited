import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getCareers } from "@/lib/fetchData";

const openRoles = [
  {
    id: "r1",
    location: "Asaba / On-site",
    title: "Senior Architect",
    description: "Lead design projects from conception to completion. Strong proficiency in modern architectural software and a portfolio of completed commercial projects is required."
  },
  {
    id: "r2",
    location: "Lagos / Hybrid",
    title: "Project Manager - Construction",
    description: "Manage timelines, budgets, and site teams to deliver high-quality construction projects across multiple locations. Minimum 5 years experience."
  },
  {
    id: "r3",
    location: "Abuja / On-site",
    title: "Civil Engineer",
    description: "Conduct structural analysis, oversee site safety, and ensure all building codes and engineering standards are strictly followed."
  }
];

export default async function CareersPage() {
  const dbCareers = await getCareers();
  const allRoles = [...dbCareers, ...openRoles];

  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <main className="flex-1 pt-32 pb-24">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <h1 className="font-gotham text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-12">
            Careers at Contemporary Group
          </h1>
          
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden mb-12 bg-neutral-100">
            <Image 
              src="/project-villa.png" 
              alt="Contemporary Group Projects" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex justify-end">
            <p className="max-w-2xl font-sans text-sm md:text-base leading-relaxed text-neutral-700 font-medium">
              At Contemporary Group, we believe that building a sustainable future starts with passionate people. As a company rooted in innovation, design excellence, and smart solutions, we're looking for dedicated individuals who are ready to make a real impact on the built environment and their careers.
            </p>
          </div>
        </section>

        {/* WHY JOIN SECTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24 mb-32">
          <h2 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
            Why Join Contemporary Group?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100">
              <Image 
                src="/WildCardPictures/interior.png" 
                alt="Working at Contemporary Group" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Right List */}
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "Mission-Driven Work",
                  desc: "Every role at Contemporary Group contributes to a smarter, more sustainable built environment. Be part of something bigger than just a job."
                },
                {
                  num: "02",
                  title: "Innovation at the Core",
                  desc: "Collaborate with experts in architecture, sustainable engineering, and advanced construction technologies."
                },
                {
                  num: "03",
                  title: "Career Growth",
                  desc: "We support continuous learning, upskilling, and internal mobility to help you reach your full professional potential."
                },
                {
                  num: "04",
                  title: "Flexible Work Environment",
                  desc: "Work on-site, hybrid, or remotely—what matters most is your contribution, creativity, and dedication."
                }
              ].map((item) => (
                <div key={item.num} className="flex flex-col">
                  <span className="font-gotham text-xl text-brand-primary font-medium mb-3">{item.num}</span>
                  <h3 className="font-gotham text-lg font-bold mb-2 text-neutral-900">{item.title}</h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN ROLES SECTION */}
        <section className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight text-center">
              Join Our Growing Team
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {allRoles.map((role) => (
              <div key={role.id} className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 border-b border-neutral-200 last:border-0 hover:bg-neutral-50 transition-colors duration-300 rounded-2xl px-6 md:px-8 -mx-6 md:-mx-8">
                
                {/* Left Col (Meta) */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="text-[10px] font-gotham uppercase tracking-widest text-brand-primary font-bold">
                    Open Positions
                  </span>
                  <div className="flex items-center gap-2 text-xs font-sans text-neutral-500 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {role.location} {role.workModel ? `(${role.workModel})` : ""}
                  </div>
                </div>
                
                {/* Right Col (Content) */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <h3 className="font-gotham text-xl font-bold tracking-tight text-neutral-900 group-hover:text-brand-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-2xl">
                      {role.description}
                    </p>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="shrink-0 pt-2 lg:pt-0">
                    <Link 
                      href={`mailto:hr@contemporarygroupltd.com?subject=Application for ${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-neutral-900 hover:bg-brand-primary text-white font-gotham text-[10px] uppercase tracking-widest font-bold transition-colors duration-300"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </section>

      </main>

      <CTA />
      <Footer />
    </div>
  );
}

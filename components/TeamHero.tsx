"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const staff = [
  {
    name: "Olusola Adekunle",
    title: "Project Manager",
    photo: "/Key Staff/Olusola Adekunle.jpeg",
    bio: "A graduate of Quantity Surveying from Obafemi Awolowo University. Olusola joined CGL in 2005 and has since risen to lead the project management function, ensuring every project is delivered on time and to the highest standard.",
  },
  {
    name: "Anita Ifeadi",
    title: "Project Coordinator — CG Inc. Canada",
    photo: "/Key Staff/Anita Ifeadi.jpeg",
    bio: "Holds an Honors B.A in Architectural Design and Urban Studies and a postgraduate certificate in Project Management. With experience in institutional, high-rise residential, and mixed-use architectural design, she previously worked with the City of Toronto's Housing Secretariat Division.",
  },
  {
    name: "Enahoro Okhae",
    title: "Consultant, Human Resources",
    photo: "/Key Staff/Enahoro Okhae.jpeg",
    bio: "Managing Director of Pause Factory — West African Partner to the 6 Seconds Emotional Intelligence Network, USA. Co-Founder of Global Certs and Strategy, and Founder of Simeon's Pivot Resources, with a focus on performance improvement and organizational development.",
  },
  {
    name: "Janet Folarin",
    title: "Lead Quantity Surveyor",
    photo: "/Key Staff/Janet Folarin.jpeg",
    bio: "Graduated from Kaduna Polytechnic in 1999. Janet joined CGL in 2007 and currently heads the Quantity Survey Department, bringing precision and financial rigour to every project at every stage of delivery.",
  },
  {
    name: "Adebanjo Olatundosun",
    title: "Asst. Project Manager",
    photo: "/Key Staff/Adebanjo Olatundosun.jpeg",
    bio: "Holds a B.Sc in Quantity Surveying and an M.Sc in Construction Management from the University of Lagos. Adebanjo joined CGL in 2012 and supports the delivery of complex construction projects across multiple sites.",
  },
  {
    name: "Emeka Atukpor",
    title: "Asst. Project Manager",
    photo: "/Key Staff/Emeka Atukpor.jpeg",
    bio: "Holds an HND in Building Technology and Quantity Surveying. Emeka joined CGL in April 2006 and has been instrumental in the successful on-site execution and management of numerous construction projects.",
  },
  {
    name: "Arc. Emmanuel Afolabi",
    title: "Lead Architect",
    photo: null,
    bio: "Attended Covenant University from 2004 to 2010, where he obtained both his Bachelor's and Master's degrees in Architecture. He has played a significant role in the design and supervision of projects across Abuja, Asaba, and Lagos. Currently Head of the Architectural Department and a registered member of the NIA and ARCON.",
  },
];

function StaffCard({ member }: { member: (typeof staff)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-3/4"
    >
      {/* Photo */}
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-neutral-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
      )}

      {/* Static bottom bar — always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4 flex items-center justify-between">
        <div>
          <p className="font-gotham text-sm font-bold text-foreground leading-tight">
            {member.name}
          </p>
          <p className="font-sans text-xs text-foreground/50 mt-0.5">
            {member.title}
          </p>
        </div>
        {/* Up caret — opens the bio */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Read bio"
          className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 hover:bg-neutral-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/60"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

      {/* Bio overlay — slides up to 50% of card height */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.72, 0.72, 0.72, 0.72] }}
            className="absolute bottom-0 left-0 right-0 h-[40%] bg-white/96 backdrop-blur-sm flex flex-col justify-between p-5"
          >
            {/* Content */}
            <div className="overflow-hidden">
              <div className="flex justify-between items-center">
                <p className="font-gotham text-sm font-bold text-foreground mb-0.5">
                  {member.name}
                </p>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close bio"
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground/60"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
              </div>
              <p className="font-sans text-[10px] text-brand-primary font-semibold uppercase tracking-wider mb-3">
                {member.title}
              </p>
              <p className="font-sans text-xs text-foreground/75 leading-relaxed line-clamp-4">
                {member.bio}
              </p>
            </div>

            {/* Down caret — closes the bio */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TeamHero() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="font-gotham text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-2">
                Management & Staff
              </span>
              <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                The Team Behind
                <br />
                Every Project.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-5/12 font-sans text-base text-foreground/70 leading-relaxed"
            >
              Our management team ensures project excellence and operational
              efficiency across every engagement — from initial brief to final
              handover. Each member brings deep expertise and a shared
              commitment to delivering work of lasting quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

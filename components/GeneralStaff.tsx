"use client";

import { motion } from "framer-motion";

const generalStaff = [
  {
    name: "Olusoji Adefila",
    title: "SNR.STRUCTURAL ENGINEER",
    degree1: "BSc. Civil Engineering",
    degree2: null,
    dateJoined: "March 2018",
  },
  {
    name: "Chidi Vitus Esielem",
    title: "ENGINEER",
    degree1: "BSc. Civil Engineering",
    degree2: "MSc. Civil Engineering",
    dateJoined: "March 2018",
  },
  {
    name: "Wisdom Akomeziem",
    title: "ARCHITECT",
    degree1: "BSc. Architecture",
    degree2: "MSc. Architecture",
    dateJoined: "March 2022",
  },
  {
    name: "Nafisat Ozenua",
    title: "Quantity Surveyor",
    degree1: "HND Quantity Surveying",
    degree2: null,
    dateJoined: "May 2025",
  },
  {
    name: "Adeoye Oluwaseyi",
    title: "ARCHITECT",
    degree1: "BSc. Architecture",
    degree2: "MSc. Architecture",
    dateJoined: "April 2025",
  },
  {
    name: "Paul Monday Felix",
    title: "ENGINEER",
    degree1: "BSc. Electrical Engineering",
    degree2: null,
    dateJoined: "April 2025",
  },
  {
    name: "Fortune Imoudu",
    title: "ENGINEER (MNSE MNICE)",
    degree1: "BSc. Civil Engineering",
    degree2: "MSc. Civil Engineering",
    dateJoined: "August 2021",
  },
  {
    name: "Ojetayo Imoleayo",
    title: "Quantity Surveyor",
    degree1: "Bsc. Quantity Surveyor",
    degree2: null,
    dateJoined: "July 2021",
  },
];

export default function GeneralStaff() {
  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="border-t border-neutral-100 mb-20" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-gotham text-xs uppercase tracking-[0.2em] text-foreground/40 font-semibold mb-14"
        >
          Member Staff
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {generalStaff.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-brand-primary/10 p-8 rounded-2xl flex flex-col justify-between h-full min-h-[260px] border border-brand-primary/20 hover:bg-brand-primary/20 transition-colors"
            >
              <div>
                <h3 className="font-gotham text-lg font-bold text-foreground mb-4">
                  {member.name}
                </h3>
                <p className="font-sans text-xs text-brand-primary font-bold uppercase tracking-widest mb-4">
                  {member.title}
                </p>
                <p className="font-sans text-sm text-foreground/75 mb-1">
                  {member.degree1}
                </p>
                {member.degree2 && (
                  <p className="font-sans text-sm text-foreground/75">
                    {member.degree2}
                  </p>
                )}
              </div>
              <div className="mt-8">
                <p className="font-sans text-xs text-foreground/90 font-medium">
                  <span className="font-bold">Date Joined:</span> {member.dateJoined}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

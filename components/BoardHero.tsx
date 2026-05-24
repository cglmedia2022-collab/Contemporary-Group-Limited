"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chairman = {
  name: "Arc. Kester C. Ifeadi",
  title: "Managing Director & Chief Executive Officer",
  photo: "/Board of Directors/Arc. Kester Ifeadi.jpeg",
  bio: "An accomplished architect with over 30 years of experience, Arc. Kester C. Ifeadi holds both a B.Sc and M.Sc in Architecture from the University of Ife, and is a distinguished Member of the Nigerian Institute of Architects (MNIA). He founded Contemporary Design Associates in 1990 and incorporated Contemporary Properties Ltd in 1992 — establishing a legacy that has shaped the built environment across Nigeria for over three decades.",
};

const directors = [
  {
    name: "Adetokunboh Longe",
    title: "Managing Director, CVR",
    photo: "/Board of Directors/Adetokunboh Longe.jpeg",
    bio: "Holds a B.A in Political Science and LLB in Law. With over 30 years of experience as a consultant in construction, healthcare, aviation, and real estate, he facilitates medium to large-scale Turnkey real estate development projects.",
  },
  {
    name: "Arc. Olusola Ibitoye",
    title: "Executive Director",
    photo: "/Board of Directors/Arc. Olusola Ibitoye.jpeg",
    bio: "Holds B.Sc and M.Sc in Architecture from the University of Ife. With over 25 years of experience in design and construction, he is a registered member of the Nigerian Institute of Architects, having joined Contemporary Properties in 2001.",
  },
  {
    name: "Victor Ikechukwu Ifeadi",
    title: "Group Head, Business Development",
    photo: "/Board of Directors/Victor Ikechukwu Ifeadi.jpeg",
    bio: "Graduated with a bachelor's degree in Accounting and Finance. Previously worked with Shell Petroleum and Technology Partners International. Rose to Country Manager of Bellview Côte d'Ivoire before joining Conwave Ventures Limited.",
  },
  {
    name: "Paul Okomayin",
    title: "Associate Director",
    photo: "/Board of Directors/Paul Okomayin.jpeg",
    bio: "A graduate of Accountancy holding an MBA. Pioneer MD/CEO of STB Building Society and former Regional Director at Prudent Bank Plc. Brings deep real estate and financial expertise to the board.",
  },
];

export default function BoardHero() {
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
                Board of Directors
              </span>
              <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Leadership with<br />Purpose.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-5/12 font-sans text-base text-foreground/70 leading-relaxed"
            >
              At the heart of Contemporary Group Limited&apos;s vision, mission, and values is our Board of Directors — in charge of setting business strategies and structures for our current operations, as well as future developments. Our Board is comprised of nine distinguished members.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chairman — Featured */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* Photo */}
            <div className="relative h-[500px] md:h-[620px] w-full rounded-4xl overflow-hidden">
              <Image
                src={chairman.photo}
                alt={chairman.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle gold gradient at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Bio */}
            <div className="flex flex-col space-y-6">
              <div>
                <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold block mb-4">
                  Founder & CEO
                </span>
                <h2 className="font-gotham text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-snug">
                  {chairman.name}
                </h2>
                <p className="font-sans text-sm text-foreground/50 mt-2 tracking-wide">
                  {chairman.title}
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-brand-primary" />

              <p className="font-sans text-base md:text-lg text-foreground/75 leading-relaxed">
                {chairman.bio}
              </p>

              {/* Credentials */}
              <div className="pt-4 space-y-2">
                {[
                  "B.Sc & M.Sc Architecture, University of Ife",
                  "Member, Nigerian Institute of Architects (MNIA)",
                  "Founder, Contemporary Design Associates — 1990",
                  "30+ Years of Industry Leadership",
                ].map((cred) => (
                  <div key={cred} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    <span className="font-sans text-sm text-foreground/70">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="border-t border-neutral-100" />
      </div>

      {/* Other Directors */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-gotham text-xs uppercase tracking-[0.2em] text-foreground/40 font-semibold mb-14"
          >
            Board Members
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {directors.map((director, idx) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col space-y-5"
              >
                {/* Photo */}
                <div className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={director.photo}
                    alt={director.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h3 className="font-gotham text-lg font-bold text-foreground leading-snug">
                    {director.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-primary font-semibold uppercase tracking-wider">
                    {director.title}
                  </p>
                </div>

                <p className="font-sans text-sm text-foreground/65 leading-relaxed">
                  {director.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
